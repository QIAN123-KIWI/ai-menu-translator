import React, { useState, useEffect, useRef } from 'react';
import {
  Camera,
  ShoppingBag,
  Volume2,
  Trash2,
  Plus,
  Minus,
  UtensilsCrossed,
  Search,
  Zap,
  BookMarked,
  X,
  ImagePlus,
  Loader2,
  ListRestart,
  ChefHat,
  KeyRound,
  AlertTriangle,
  Layers,
  ScanLine,
  Info, 
  CheckCircle2
} from 'lucide-react';

// --- 常量配置 ---
const API_ENDPOINT = "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions";
const MODEL = "qwen-vl-max"; 

// --- 辅助函数 ---
const normalizeCurrency = (currency) => {
  if (!currency) return '¥';
  const upper = currency.toUpperCase().trim();
  if (['YEN', 'JP¥', 'JPY', 'JAPANESE YEN', 'Y', '円'].includes(upper)) return '¥';
  if (['USD', 'US$'].includes(upper)) return '$';
  if (['EUR', 'EURO'].includes(upper)) return '€';
  return currency;
};

const formatPronunciation = (pronunciation) => {
  if (!pronunciation) return null;
  const regex = /(.+?)\s*\((.+?)\)/;
  const match = pronunciation.match(regex);
  if (match && match.length === 3) {
    return { kana: match[1].trim(), formattedRomaji: match[2].trim() };
  }
  return { kana: pronunciation, formattedRomaji: null };
};

const cleanCategoryName = (category) => {
  if (!category) return '其他';
  return category.replace(/\s*\([^)]*\)/g, '').trim() || '其他';
};

// --- 新增：强力去重标准化函数 ---
// 去除所有空格、全角空格、中点(・)、点、逗号等符号，统一转小写
const normalizeString = (str) => {
  if (!str) return '';
  return str.replace(/[\s\u3000\u30fb\.\,\-\_]+/g, '').toLowerCase();
};

export default function AIMenuTranslator() {
  const [apiKey, setApiKey] = useState('sk-27440ee84a644f3f8aceb9f695aaaf03');
  const [menuItems, setMenuItems] = useState(() => {
    try {
      const saved = localStorage.getItem('menuItems');
      return saved ? JSON.parse(saved) : [];
    } catch (e) { return []; }
  });
  
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('cartItems');
      return saved ? JSON.parse(saved) : [];
    } catch (e) { return []; }
  });

  const [isScanning, setIsScanning] = useState(false);
  const [scanStatus, setScanStatus] = useState('idle'); 
  const [foundCount, setFoundCount] = useState(0); 
  const [showCart, setShowCart] = useState(false);
  const [showClearConfirmation, setShowClearConfirmation] = useState(false);
  const [searchModalItem, setSearchModalItem] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);

  const fileInputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('menuItems', JSON.stringify(menuItems));
  }, [menuItems]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const handleSaveKey = (val) => {
    setApiKey(val);
  };

  const groupItemsByCategory = (items) => {
    const grouped = items.reduce((acc, item) => {
      const category = cleanCategoryName(item.category);
      if (!acc[category]) acc[category] = [];
      acc[category].push(item);
      return acc;
    }, {});
    
    return Object.keys(grouped).sort((a, b) => {
        if (a === '其他') return 1;
        if (b === '其他') return -1;
        return a.localeCompare(b);
    }).map(key => ({ category: key, items: grouped[key] }));
  };

  const sliceImage = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const slices = [];
          const width = img.width;
          const height = img.height;
          const MAX_WIDTH = 800;
          
          const scale = width > MAX_WIDTH ? MAX_WIDTH / width : 1;
          const scaledW = width * scale;
          const scaledH = height * scale;

          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = scaledW;

          if (height > width * 1.5) {
             const sliceConfigs = [
               { start: 0, end: 0.5 },
               { start: 0.4, end: 0.9 }, // 保持重叠以防漏字
               { start: 0.7, end: 1.0 }
             ];
             sliceConfigs.forEach(config => {
                const sY = height * config.start;
                const sH = height * (config.end - config.start);
                const dH = scaledH * (config.end - config.start);
                canvas.height = dH;
                ctx.drawImage(img, 0, sY, width, sH, 0, 0, scaledW, dH);
                slices.push(canvas.toDataURL('image/jpeg', 0.6));
             });
          } else {
             canvas.height = scaledH;
             ctx.drawImage(img, 0, 0, width, height, 0, 0, scaledW, scaledH);
             slices.push(canvas.toDataURL('image/jpeg', 0.6));
          }
          resolve(slices);
        };
        img.onerror = reject;
      };
      reader.onerror = reject;
    });
  };

  const analyzeImageStream = async (base64Image, onDishFound) => {
    if (!apiKey) throw new Error("请输入 API Key");
    const base64Data = base64Image.split(',')[1];
    
    // Prompt 保持不变
    const systemPrompt = `你是一个智能菜单翻译助手。
    1. 提取可见区域内菜品。
    2. **自动补全主语**：如果识别到"大份(Large)"、"小份(Small)"、"加肉"等附属选项，必须结合其上方或左侧的主菜名称，将translation字段写为"主菜名-大份"（例如：牛肉咖喱-大份），绝不要只输出"大份"。
    3. **强制中文翻译**：translation字段必须是中文。如果原文是"A la carte"，translation要是"单点"。
    4. 提取描述(desc)，保留核心成分，精简概括(10字内)。
    5. 如果是"单点"、"辣度"、"仅限堂食"等无具体价格备注，price填0。
    6. 严格输出 JSON 数组，尽早输出。
    
    JSON 对象格式：
    {"original":"原文","translation":"中文名(补全主语)","pronunciation":"发音","price":100,"currency":"¥","desc":"描述","category":"分类"}
    `;

    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'X-DashScope-SSE': 'enable'
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: [
              { type: "text", text: "识别菜单：" },
              { type: "image_url", image_url: { url: `data:image/jpeg;base64,${base64Data}` } }
            ] 
          }
        ],
        stream: true,
        temperature: 0.1,
      })
    });

    if (!response.ok) throw new Error(`API Error: ${response.status}`);

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let braceCount = 0;
    let inString = false;
    let escape = false;

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      
      const chunk = decoder.decode(value, { stream: true });
      const lines = chunk.split('\n');
      
      for (const line of lines) {
        if (line.startsWith('data:')) {
          const dataStr = line.slice(5).trim();
          if (dataStr === '[DONE]') continue;
          
          try {
            const json = JSON.parse(dataStr);
            const content = json.choices?.[0]?.delta?.content || "";
            
            for (let i = 0; i < content.length; i++) {
              const char = content[i];
              buffer += char;

              if (!inString && char === '{') braceCount++;
              if (!inString && char === '}') braceCount--;
              if (char === '"' && !escape) inString = !inString;
              if (char === '\\') escape = !escape;
              else escape = false;

              if (braceCount === 0 && char === '}' && buffer.includes('{')) {
                const lastOpen = buffer.lastIndexOf('{');
                const lastClose = buffer.lastIndexOf('}');
                if (lastOpen !== -1 && lastClose > lastOpen) {
                  const potentialJson = buffer.substring(lastOpen, lastClose + 1);
                  try {
                    const dish = JSON.parse(potentialJson);
                    if (dish && (dish.original || dish.translation)) {
                      onDishFound(dish);
                      buffer = buffer.substring(lastClose + 1); 
                    }
                  } catch (e) {}
                }
              }
            }
          } catch (e) {}
        }
      }
    }
  };

  const handleFileSelect = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;
    
    if (!apiKey) {
      setToastMessage("请先设置 API Key");
      setShowApiKeyInput(true);
      return;
    }

    setIsScanning(true);
    setScanStatus('processing');
    setFoundCount(0); 

    const filePromises = files.map(async (file) => {
      try {
        const slices = await sliceImage(file);
        
        const slicePromises = slices.map(async (sliceBase64) => {
           try {
             await analyzeImageStream(sliceBase64, (dish) => {
                setMenuItems(prev => {
                  // --- 强力去重逻辑 ---
                  const newSig = normalizeString(dish.original);
                  const exists = prev.some(p => normalizeString(p.original) === newSig);
                  
                  if (exists) return prev;

                  const newItem = {
                    id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
                    ...dish,
                    price: typeof dish.price === 'string' ? parseFloat(dish.price.replace(/[^0-9.]/g, '')) : (dish.price || 0),
                    currency: normalizeCurrency(dish.currency),
                    timestamp: new Date().toISOString(),
                  };
                  
                  setFoundCount(c => c + 1);
                  return [newItem, ...prev];
                });
             });
           } catch (err) {
             console.error("Stream error", err);
           }
        });

        await Promise.allSettled(slicePromises);
      } catch (err) {
        console.error("File error", err);
      }
    });

    await Promise.allSettled(filePromises);
    
    setIsScanning(false);
    setScanStatus('finished');
    if (fileInputRef.current) fileInputRef.current.value = '';
    
    setTimeout(() => {
        setScanStatus('idle');
    }, 2000);
  };

  const addToCart = (item) => {
    if (!item.price) return;
    
    const existing = cartItems.find(c => c.menuItemId === item.id);
    if (existing) {
      setCartItems(prev => prev.map(c => c.menuItemId === item.id ? { ...c, quantity: c.quantity + 1 } : c));
    } else {
      setCartItems(prev => [...prev, {
        id: Date.now().toString(),
        menuItemId: item.id,
        name: item.translation,
        originalName: item.original,
        price: item.price || 0,
        currency: item.currency,
        quantity: 1
      }]);
    }
    setToastMessage(`已添加: ${item.translation}`);
  };

  const removeFromCart = (cartItemId) => {
    const item = cartItems.find(c => c.id === cartItemId);
    if (item && item.quantity > 1) {
      setCartItems(prev => prev.map(c => c.id === cartItemId ? { ...c, quantity: c.quantity - 1 } : c));
    } else {
      setCartItems(prev => prev.filter(c => c.id !== cartItemId));
    }
  };

  const clearAllItems = () => {
    setMenuItems([]);
    setCartItems([]);
    setFoundCount(0);
    setScanStatus('idle');
    setShowClearConfirmation(false);
    setToastMessage("菜单已清空");
  };

  const playAudio = (text, langCode) => {
    if (!('speechSynthesis' in window) || !text) {
        setToastMessage("浏览器不支持语音播放");
        return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.8;
    utterance.lang = langCode || (/[あ-んア-ン]/.test(text) ? 'ja-JP' : 'en-US');
    if (window.speechSynthesis.speaking) window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const categorizedItems = groupItemsByCategory(menuItems);
  const totalCartItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const currencySymbol = cartItems.length > 0 ? cartItems[0].currency : '¥';
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-stone-100 text-gray-800 font-sans pb-32 relative selection:bg-orange-200 overflow-hidden">
      <input type="file" ref={fileInputRef} onChange={handleFileSelect} accept="image/*" multiple className="hidden" />

      {/* --- Dynamic Island Status Bar --- */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScanning || scanStatus === 'finished' ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className={`mx-auto max-w-md mt-2 rounded-full shadow-lg border border-white/20 backdrop-blur-md px-6 py-3 flex items-center justify-between transition-colors duration-500 ${scanStatus === 'finished' ? 'bg-green-500 text-white' : 'bg-gray-900/90 text-white'}`}>
            <div className="flex items-center gap-3">
                {scanStatus === 'processing' && <Loader2 size={18} className="animate-spin text-orange-400" />}
                {scanStatus === 'finished' && <CheckCircle2 size={18} className="text-white" />}
                <span className="font-bold text-sm">
                    {scanStatus === 'processing' ? 'AI 正在识别...' : '识别完成'}
                </span>
            </div>
            <div className="font-mono font-bold text-sm bg-white/20 px-3 py-1 rounded-full">
                已找到 {foundCount}
            </div>
        </div>
      </div>

      {/* --- Header --- */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg border-b border-stone-200 px-4 py-3 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-tr from-orange-500 to-red-500 p-1.5 rounded-lg shadow-sm">
            <ChefHat size={20} className="text-white" />
          </div>
          <h1 className="text-lg font-black tracking-tight text-gray-900">食神 <span className="text-orange-500">Qirl</span></h1>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowApiKeyInput(!showApiKeyInput)} 
            className={`p-2 rounded-full transition-colors ${!apiKey ? 'bg-red-100 text-red-500 animate-pulse' : 'hover:bg-gray-100 text-gray-500'}`}
          >
            <KeyRound size={18} />
          </button>
          {menuItems.length > 0 && (
            <button onClick={() => setShowClearConfirmation(true)} className="text-sm text-gray-500 hover:text-red-500 px-2 py-1 flex items-center gap-1 transition-colors">
              <ListRestart size={16} />
            </button>
          )}
        </div>
      </div>

      {/* --- API Key Config --- */}
      {showApiKeyInput && (
        <div className="bg-slate-900 text-white p-4 animate-in slide-in-from-top duration-300 relative z-40">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-sm font-bold mb-2 flex items-center gap-2">
              <KeyRound size={14} className="text-yellow-400"/> 配置通义千问 API Key
            </h3>
            <div className="flex gap-2">
              <input 
                type="password" 
                value={apiKey} 
                onChange={(e) => handleSaveKey(e.target.value)}
                placeholder="sk-..."
                className="flex-1 bg-slate-800 border border-slate-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button onClick={() => setShowApiKeyInput(false)} className="px-4 py-2 bg-orange-600 hover:bg-orange-500 rounded text-sm font-bold transition-colors">完成</button>
            </div>
          </div>
        </div>
      )}

      {/* --- Main Content --- */}
      <div className="p-4 max-w-3xl mx-auto min-h-[60vh] relative z-10 pt-6">
        
        {/* Empty State */}
        {menuItems.length === 0 && !isScanning && (
          <div className="flex flex-col items-center justify-center mt-20 text-center space-y-8 animate-in fade-in duration-700">
            <div 
              onClick={() => fileInputRef.current?.click()} 
              className="w-32 h-32 bg-white rounded-[2rem] flex items-center justify-center border-4 border-dashed border-gray-300 shadow-sm cursor-pointer hover:border-orange-400 hover:bg-orange-50 hover:scale-105 transition-all group"
            >
              <ImagePlus size={40} className="text-gray-300 group-hover:text-orange-500 transition-colors" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-gray-800 tracking-tight">上传菜单图片</h3>
              <p className="text-gray-400 mt-2 max-w-xs mx-auto text-sm font-medium">
                AI 实时扫描 · 逐个识别<br/>支持多图并发翻译
              </p>
            </div>
          </div>
        )}

        {/* Menu Grid */}
        <div className="space-y-10 pb-24">
          {categorizedItems.map(group => (
            <div key={group.category} className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-6 w-1.5 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></span>
                <h2 className="text-xl font-black text-gray-800">{group.category}</h2>
                <span className="text-xs font-bold text-gray-400 bg-white border border-gray-200 px-2 py-0.5 rounded-full">{group.items.length}</span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {group.items.map((item) => {
                  const pron = formatPronunciation(item.pronunciation);
                  const isNote = !item.price || item.price === 0;

                  // --- 渲染逻辑：如果是单点/备注，使用极简窄卡片 ---
                  if (isNote) {
                      return (
                        <div key={item.id} className="bg-stone-50 rounded-xl p-3 border border-stone-200 flex items-center justify-between gap-3 animate-in zoom-in-95 slide-in-from-bottom-2 fade-in">
                            <div className="flex items-center gap-3 overflow-hidden">
                                <Info size={16} className="text-stone-400 shrink-0" />
                                <div className="truncate">
                                    <span className="font-bold text-gray-700 text-sm mr-2">{item.translation}</span>
                                    <span className="text-xs text-stone-400">{item.original}</span>
                                </div>
                            </div>
                            <span className="text-xs bg-stone-200 text-stone-600 px-2 py-1 rounded">单点/备注</span>
                        </div>
                      )
                  }

                  // --- 渲染逻辑：正常菜品卡片 ---
                  return (
                    <div key={item.id} className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100 hover:shadow-lg hover:border-orange-100 transition-all duration-300 flex flex-col gap-3 animate-in zoom-in-95 slide-in-from-bottom-4 fade-in fill-mode-backwards">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 leading-tight">{item.translation}</h3>
                          <div className="text-gray-500 text-sm mt-1 font-medium">{item.original}</div>
                          {pron.kana && <div className="text-xs text-orange-600/80 mt-0.5 font-medium">{pron.kana}</div>}
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-xl font-black text-gray-900 block">{item.currency}{item.price}</span>
                        </div>
                      </div>

                      {item.desc && (
                        <div className="text-xs text-stone-600 bg-stone-50 p-2.5 rounded-xl leading-relaxed border border-stone-100">
                          {item.desc}
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-2 mt-auto">
                        <div className="flex gap-2">
                           <button onClick={() => playAudio(item.original, item.lang_code)} className="w-10 h-10 rounded-full bg-stone-50 text-stone-600 flex items-center justify-center hover:bg-orange-100 hover:text-orange-600 transition-colors">
                            <Volume2 size={18} />
                          </button>
                          <button onClick={() => setSearchModalItem(item)} className="w-10 h-10 rounded-full bg-stone-50 text-blue-600 flex items-center justify-center hover:bg-blue-50 transition-colors">
                            <Search size={18} />
                          </button>
                        </div>
                        <button 
                          onClick={() => addToCart(item)} 
                          className="px-5 py-2.5 bg-gray-900 text-white text-sm font-bold rounded-xl flex items-center gap-2 hover:bg-gray-800 active:scale-95 transition-all shadow-lg shadow-gray-200"
                        >
                          <Plus size={16} /> 加入
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Floating Action Button (Camera) --- */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center z-40 pointer-events-none">
        <button 
          onClick={() => fileInputRef.current?.click()} 
          disabled={isScanning} 
          className="pointer-events-auto group relative w-18 h-18 bg-gray-900 text-white rounded-[2rem] shadow-2xl shadow-gray-400 flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-0 disabled:scale-50 p-5"
        >
          <Camera size={32} className="group-hover:text-orange-400 transition-colors" />
        </button>
      </div>

      {/* --- Cart Floating Button --- */}
      {totalCartItems > 0 && (
        <button 
          onClick={() => setShowCart(true)} 
          className="fixed bottom-10 right-6 z-40 bg-white text-gray-900 px-5 py-3 rounded-2xl shadow-xl shadow-orange-900/10 flex items-center gap-3 border border-gray-100 hover:-translate-y-1 transition-transform"
        >
          <div className="relative">
            <ShoppingBag size={22} />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold ring-2 ring-white">{totalCartItems}</span>
          </div>
          <span className="font-black font-mono text-lg">{currencySymbol}{totalPrice}</span>
        </button>
      )}

      {/* --- Cart Modal --- */}
      {showCart && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4">
          <div className="absolute inset-0 bg-gray-900/20 backdrop-blur-sm transition-opacity" onClick={() => setShowCart(false)} />
          <div className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl p-6 relative z-50 max-h-[90vh] flex flex-col shadow-2xl animate-in slide-in-from-bottom duration-300">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2"><UtensilsCrossed size={20} className="text-orange-500" /> 当前订单</h2>
              <button onClick={() => setShowCart(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><X size={20} /></button>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-4 pr-1 custom-scrollbar">
              {cartItems.length === 0 ? (
                <div className="text-center py-12 text-gray-400 flex flex-col items-center">
                  <ShoppingBag size={48} className="text-gray-200 mb-4" />
                  <p>还没有点菜哦</p>
                </div>
              ) : cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center group">
                  <div>
                    <div className="font-bold text-gray-800">{item.originalName}</div>
                    <div className="text-xs text-gray-500">{item.name}</div>
                    <div className="text-orange-600 font-bold mt-1">{item.currency}{item.price * item.quantity}</div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-1.5 border border-gray-100">
                    <button onClick={() => removeFromCart(item.id)} className="w-7 h-7 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-red-500 active:scale-95 transition-all">
                      {item.quantity === 1 ? <Trash2 size={14} /> : <Minus size={14} />}
                    </button>
                    <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                    <button onClick={() => { const m = menuItems.find(x => x.id === item.menuItemId); if(m) addToCart(m); }} className="w-7 h-7 rounded-lg bg-gray-900 text-white shadow-sm flex items-center justify-center hover:bg-gray-700 active:scale-95 transition-all">
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="flex justify-between mb-4 items-baseline">
                <span className="text-gray-500 font-medium">预计总额</span>
                <span className="text-3xl font-black text-gray-900">{currencySymbol}{totalPrice}</span>
              </div>
              <button 
                className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-lg active:scale-[0.98] transition-all" 
                onClick={() => { setShowCart(false); setToastMessage("订单已提交给后厨！"); }}
              >
                确认下单
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- Clear Confirmation Modal --- */}
      {showClearConfirmation && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setShowClearConfirmation(false)} />
          <div className="bg-white rounded-3xl p-6 relative z-50 max-w-sm w-full text-center shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500">
              <Trash2 size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">清空菜单？</h3>
            <p className="text-gray-500 text-sm mb-6">此操作将移除所有识别结果和当前订单，无法撤销。</p>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => setShowClearConfirmation(false)} className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-colors">取消</button>
              <button onClick={clearAllItems} className="px-4 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl transition-colors">确认清空</button>
            </div>
          </div>
        </div>
      )}

      {/* --- Search Modal (Bing Image) --- */}
      {searchModalItem && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSearchModalItem(null)} />
          <div className="bg-white rounded-2xl overflow-hidden relative z-50 max-w-2xl w-full flex flex-col h-[80vh] shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            <div className="flex justify-between items-center p-4 bg-gray-50 border-b border-gray-200">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{searchModalItem.original}</h3>
                <p className="text-sm text-gray-500">{searchModalItem.translation}</p>
              </div>
              <button onClick={() => setSearchModalItem(null)} className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-100"><X size={20} /></button>
            </div>
            <div className="flex-1 bg-gray-100 relative">
               <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                 <Loader2 className="animate-spin" />
               </div>
              <iframe 
                src={"https://www.bing.com/images/search?q=" + encodeURIComponent(searchModalItem.original)} 
                title="Search" 
                className="w-full h-full border-0 relative z-10" 
              />
            </div>
          </div>
        </div>
      )}

      {/* --- Toast --- */}
      {toastMessage && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[70] animate-in slide-in-from-top-4 fade-in duration-300">
          <div className="bg-gray-900/90 backdrop-blur text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-3">
            <Zap size={18} className="text-yellow-400 fill-yellow-400" />
            <p className="text-sm font-medium pr-1">{toastMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
}