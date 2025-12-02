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
} from 'lucide-react';

// --- API Configuration (Siliconflow Qwen API) ---
// ⚠️ 注意：API密钥会暴露在前端代码中
const apiKey = "sk-dyjwptqdinqigbhkinwhlofflvoidtvidcuhmidgobxnaqvd";
const SILICONFLOW_ENDPOINT = "https://api.siliconflow.cn/v1/chat/completions";
const QWEN_MODEL = "Qwen/Qwen3-VL-32B-Instruct";

// --- Currency Normalization Helper ---
const normalizeCurrency = (currency) => {
  if (!currency) return '¥';
  const upper = currency.toUpperCase().trim();
  if (['YEN', 'JP¥', 'JPY', 'JAPANESE YEN', 'Y'].includes(upper)) return '¥';
  if (['USD', 'US$'].includes(upper)) return '$';
  if (['EUR', 'EURO'].includes(upper)) return '€';
  return currency;
};

// --- Pronunciation Formatting Helper ---
const formatPronunciation = (pronunciation) => {
  if (!pronunciation) return null;
  const regex = /(.+?)\s*\((.+?)\)/;
  const match = pronunciation.match(regex);
  let kana = pronunciation;
  let romaji = null;
  if (match && match.length === 3) {
    kana = match[1].trim();
    romaji = match[2].trim();
  }
  let formattedRomaji = null;
  if (romaji) {
    const parts = romaji.split(/\s+/).filter(p => p.length > 0);
    formattedRomaji = parts.join(' ');
  }
  return { kana, formattedRomaji };
};

// --- Category Name Cleaner Helper ---
const cleanCategoryName = (category) => {
  if (!category) return '';
  return category.replace(/\s*\([^)]*\)/g, '').trim();
};

export default function AIMenuTranslator() {
  // ✅ 使用 localStorage 初始化状态
  const [menuItems, setMenuItems] = useState(() => {
    const saved = localStorage.getItem('menuItems');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cartItems');
    return saved ? JSON.parse(saved) : [];
  });

  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState('');
  const [showCart, setShowCart] = useState(false);
  const fileInputRef = useRef(null);
  const [showClearConfirmation, setShowClearConfirmation] = useState(false);
  const [searchModalItem, setSearchModalItem] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [showHistoryModal, setShowHistoryModal] = useState(false);

  // ✅ 自动保存到 localStorage
  useEffect(() => {
    localStorage.setItem('menuItems', JSON.stringify(menuItems));
  }, [menuItems]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Toast 自动清除
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  // --- Data Grouping Helper: Group by Category ---
  const groupItemsByCategory = (items) => {
    const grouped = items.reduce((acc, item) => {
      const category = item.category && item.category.trim() !== '' ? item.category : '未分类';
      if (!acc[category]) acc[category] = [];
      acc[category].push(item);
      return acc;
    }, {});

    const sortedKeys = Object.keys(grouped).sort((a, b) => {
      const aIsMain = a.includes('主菜') || a.includes('烧鸟') || a.includes('寿司');
      const bIsMain = b.includes('主菜') || b.includes('烧鸟') || b.includes('寿司');
      if (aIsMain && !bIsMain) return -1;
      if (!aIsMain && bIsMain) return 1;
      if (a.includes('甜品') && !b.includes('甜品')) return 1;
      if (!a.includes('甜品') && b.includes('甜品')) return -1;
      return a.localeCompare(b);
    });

    return sortedKeys.map(key => ({ category: key, items: grouped[key] }));
  };

  // --- Data Grouping Helper: Group by Scan Session ---
  const groupItemsBySession = (items) => {
    if (!items || items.length === 0) return [];
    const sortedItems = [...items].sort((a, b) => 
      new Date(b.timestamp) - new Date(a.timestamp)
    );
    const sessions = [];
    const sessionTimeout = 5 * 60 * 1000;
    const processedItemIds = new Set();

    sortedItems.forEach(item => {
      if (processedItemIds.has(item.id)) return;
      const itemTime = new Date(item.timestamp).getTime();
      if (!itemTime) return;

      const newSession = {
        id: item.id,
        name: new Date(itemTime).toLocaleString('zh-CN', {
          month: 'short', day: 'numeric',
          hour: '2-digit', minute: '2-digit'
        }),
        timestamp: itemTime,
        items: [],
        count: 0
      };

      newSession.items.push(item);
      newSession.count++;
      processedItemIds.add(item.id);

      for (const otherItem of sortedItems) {
        if (processedItemIds.has(otherItem.id)) continue;
        const otherItemTime = new Date(otherItem.timestamp).getTime();
        if (otherItemTime && Math.abs(itemTime - otherItemTime) < sessionTimeout) {
          newSession.items.push(otherItem);
          newSession.count++;
          processedItemIds.add(otherItem.id);
        }
      }
      sessions.push(newSession);
    });

    return sessions.sort((a, b) => b.timestamp - a.timestamp);
  };

  // --- Image Processing ---
  const compressImage = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 1024;
          let width = img.width;
          let height = img.height;
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL('image/jpeg', 0.7));
        };
      };
    });
  };

  // --- AI Analysis ---
  const analyzeImageWithQwen = async (base64Image) => {
    const base64Data = base64Image.split(',')[1];
    const prompt = `You are an expert menu translator and food critic. Analyze the menu image and extract dish details.
    
    For each dish, return a JSON object with:
    - "original": Original name (e.g. Japanese, French)
    - "translation": Chinese translation
    - "pronunciation": Pronunciation guide with Romaji in parentheses
    - "lang_code": ISO 639-1 language code (e.g., 'ja-JP')
    - "price": Numeric price only
    - "currency": Currency symbol (¥, $, €)
    - "desc": Short Chinese description (max 25 words)
    - "calories": Estimated calories (numeric)
    - "category": Category in Chinese (主菜, 烧鸟, 甜品, 寿司, 饮品)
    
    IMPORTANT: Do NOT include menu section headers as dishes.
    Return ONLY a raw JSON array. No other text.`;

    const maxRetries = 3;
    let lastError = null;

    for (let attempt = 0; attempt < maxRetries; attempt++) {
      if (attempt > 0) {
        const delay = Math.pow(2, attempt) * 1000;
        await new Promise(resolve => setTimeout(resolve, delay));
      }

      try {
        const response = await fetch(SILICONFLOW_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: QWEN_MODEL,
            messages: [{
              role: "user",
              content: [
                { type: "text", text: prompt },
                { type: "image_url", image_url: { url: `data:image/jpeg;base64,${base64Data}` } }
              ]
            }],
            temperature: 0.2,
            max_tokens: 2048
          })
        });

        if (!response.ok) {
          const errorData = await response.json();
          lastError = new Error(`AI API Error: ${response.status}`);
          if (response.status === 429 || response.status >= 500) continue;
          throw lastError;
        }

        const data = await response.json();
        const text = data.choices?.[0]?.message?.content;

        let jsonParsed;
        try {
          jsonParsed = JSON.parse(text);
        } catch (e) {
          let cleanedText = text.trim().replace(/^```json\s*|\s*```$/g, '').trim();
          const firstBracket = cleanedText.indexOf('[');
          if (firstBracket === -1) throw new Error("No valid JSON array found.");
          
          let jsonString = cleanedText.substring(firstBracket);
          let lastBracket = jsonString.lastIndexOf(']');
          
          if (lastBracket === -1) {
            let repairString = jsonString.trim();
            if (repairString.endsWith(',')) {
              repairString = repairString.substring(0, repairString.length - 1);
            }
            jsonString = repairString + ']';
          } else {
            jsonString = cleanedText.substring(firstBracket, lastBracket + 1);
          }
          
          jsonParsed = JSON.parse(jsonString);
        }

        return jsonParsed.filter(dish => dish.price > 0 && dish.translation);

      } catch (error) {
        lastError = error;
        if (attempt === maxRetries - 1) throw error;
      }
    }
    throw lastError || new Error("Maximum retries reached.");
  };

  // --- File Handler ---
  const handleFileSelect = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setIsScanning(true);
    setScanStep(`准备处理 ${files.length} 张图片...`);

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        if (file.size > 10 * 1024 * 1024) {
          setToastMessage(`文件太大，请选择小于 10MB 的图片。`);
          continue;
        }

        setScanStep(`[${i + 1}/${files.length}] 正在压缩图片...`);
        const compressedBase64 = await compressImage(file);

        setScanStep(`[${i + 1}/${files.length}] 小 Qirl 正在识别和翻译...`);
        const aiResults = await analyzeImageWithQwen(compressedBase64);

        setScanStep(`[${i + 1}/${files.length}] 找到 ${aiResults.length} 道菜品，正在存储...`);

        // ✅ 直接添加到 state（会自动保存到 localStorage）
        const newItems = aiResults.map(dish => ({
          id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
          ...dish,
          currency: normalizeCurrency(dish.currency),
          timestamp: new Date().toISOString(),
          calories: typeof dish.calories === 'number' ? dish.calories : (parseInt(dish.calories) || ''),
        }));

        setMenuItems(prev => [...newItems, ...prev]);
        setToastMessage(`[${i + 1}/${files.length}] 处理完毕！`);
      }

      setScanStep(`所有 ${files.length} 张图片处理完毕。`);

    } catch (error) {
      console.error("Scan failed", error);
      setToastMessage(`识别失败: ${error.message || "请检查网络或密钥"}`);
    } finally {
      setIsScanning(false);
      setScanStep('');
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const triggerFileInput = () => fileInputRef.current?.click();

  // --- Cart Actions (纯本地) ---
  const addToCart = (item) => {
    const existingItem = cartItems.find(c => c.menuItemId === item.id);
    
    if (existingItem) {
      setCartItems(prev => prev.map(c => 
        c.menuItemId === item.id ? { ...c, quantity: c.quantity + 1 } : c
      ));
    } else {
      setCartItems(prev => [...prev, {
        id: Date.now().toString(),
        menuItemId: item.id,
        name: item.translation,
        originalName: item.original,
        pronunciation: item.pronunciation,
        price: item.price,
        currency: item.currency,
        quantity: 1
      }]);
    }
  };

  const removeFromCart = (cartItemId) => {
    const currentItem = cartItems.find(c => c.id === cartItemId);
    if (currentItem && currentItem.quantity > 1) {
      setCartItems(prev => prev.map(c => 
        c.id === cartItemId ? { ...c, quantity: c.quantity - 1 } : c
      ));
    } else {
      setCartItems(prev => prev.filter(c => c.id !== cartItemId));
    }
  };

  const clearAllItems = () => {
    setMenuItems([]);
    setCartItems([]);
    setShowClearConfirmation(false);
    setToastMessage("菜单和订单已全部清空。");
  };

  // --- TTS Function ---
  const playAudio = (text, langCode) => {
    if (!('speechSynthesis' in window)) {
      setToastMessage("您的浏览器不支持语音合成。");
      return;
    }
    if (!text || text.trim().length < 2) {
      setToastMessage("发音内容为空。");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.7;

    let finalLang = 'en-US';
    if (langCode?.toLowerCase().includes('ja')) finalLang = 'ja-JP';
    else if (langCode?.toLowerCase().includes('ko')) finalLang = 'ko-KR';
    else if (langCode?.toLowerCase().includes('fr')) finalLang = 'fr-FR';
    utterance.lang = finalLang;

    const voices = window.speechSynthesis.getVoices();
    const selectedVoice = voices.find(voice => voice.lang === utterance.lang);
    if (selectedVoice) utterance.voice = selectedVoice;

    if (window.speechSynthesis.speaking) window.speechSynthesis.cancel();

    try {
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      setToastMessage("发音失败。");
    }
  };

  // --- Render ---
  const validMenuItems = menuItems.filter(item => {
    const blacklist = ['单点菜单', '菜单目录', 'Menu', 'A la carte', 'アラカルト'];
    if (blacklist.some(b => item.translation?.includes(b))) return false;
    if (blacklist.some(b => item.original?.trim().toLowerCase().includes(b.toLowerCase()))) return false;
    return true;
  });

  const categorizedItems = groupItemsByCategory(validMenuItems);
  const scanSessions = groupItemsBySession(validMenuItems);
  const totalCartItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const currencySymbol = cartItems.length > 0 ? cartItems[0].currency : '¥';
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-amber-50 text-gray-800 font-sans pb-28 relative overflow-hidden">
      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        accept="image/*"
        multiple
        className="hidden"
      />

      {/* Decorative Background */}
      <div className="fixed top-[-10%] right-[-10%] w-64 h-64 bg-red-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[-10%] w-80 h-80 bg-orange-200/50 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b-2 border-gray-900 px-4 py-3 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-tr from-rose-500 to-orange-500 p-2 rounded-lg shadow-md border-2 border-gray-900 shadow-[2px_2px_0_0#444]">
            <ChefHat size={20} className="text-white" />
          </div>
          <h1 className="text-xl font-extrabold text-gray-900 tracking-wider">食神 Qirl</h1>
        </div>
        <div className="flex items-center gap-3">
          {menuItems.length > 0 && (
            <button
              onClick={() => setShowHistoryModal(true)}
              className="text-xs text-gray-700 hover:text-blue-600 transition-colors px-2 py-1 flex items-center gap-1 border-2 border-gray-900 rounded-lg shadow-[2px_2px_0_0#444] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
            >
              <BookMarked size={14} /> 历史
            </button>
          )}
          {menuItems.length > 0 && (
            <button
              onClick={() => setShowClearConfirmation(true)}
              className="text-xs text-gray-700 hover:text-red-600 transition-colors px-2 py-1 flex items-center gap-1 border-2 border-gray-900 rounded-lg shadow-[2px_2px_0_0#444] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
            >
              <ListRestart size={14} /> 清空
            </button>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 max-w-3xl mx-auto min-h-[60vh]">
        {/* Empty State */}
        {menuItems.length === 0 && !isScanning && (
          <div className="flex flex-col items-center justify-center mt-24 text-center space-y-6 opacity-90">
            <div
              onClick={triggerFileInput}
              className="w-24 h-24 bg-white rounded-xl flex items-center justify-center border-2 border-gray-900 shadow-[6px_6px_0_0#A1A1AA] cursor-pointer hover:shadow-[8px_8px_0_0#71717A] transition-all group"
            >
              <ImagePlus size={32} className="text-gray-600 group-hover:text-orange-500 transition-colors" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">拍摄或上传菜单</h3>
              <p className="text-sm text-gray-600 mt-2 max-w-[250px] mx-auto leading-relaxed">
                点击上方按钮或下方相机按钮，小 Qirl 为您翻译。
              </p>
            </div>
          </div>
        )}

        {/* Search Bar */}
        {menuItems.length > 0 && !isScanning && (
          <div
            onClick={() => setToastMessage("请点击菜品卡片上的 '查看菜品' 按钮进行搜索")}
            className="mb-8 p-3 bg-white rounded-xl border-2 border-gray-900 shadow-[3px_3px_0_0#444] flex items-center gap-2 cursor-pointer hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
          >
            <Search size={18} className='text-gray-500'/>
            <span className='text-gray-500 text-sm'>搜索已翻译的菜品...</span>
          </div>
        )}

        {/* Menu Grid */}
        <div className="space-y-10 pb-4">
          {categorizedItems.map(group => (
            <div key={group.category}>
              <div className="mb-6 pb-3 border-b-4 border-red-500/80">
                <h2 className="text-3xl font-black text-gray-900 tracking-tight flex items-center gap-2">
                  <ChefHat size={28} className="text-red-500"/>
                  {cleanCategoryName(group.category)}
                </h2>
                <p className='text-sm text-gray-500 mt-1'>共 {group.items.length} 道菜品</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {group.items.map((item) => {
                  const pronunciationParts = formatPronunciation(item.pronunciation);
                  return (
                    <div key={item.id} className="group relative bg-white border-2 border-gray-900 rounded-xl overflow-hidden transition-all duration-100 shadow-[8px_8px_0_0#A1A1AA] hover:shadow-[10px_10px_0_0#71717A]">
                      <div className="bg-gradient-to-br from-amber-100 to-yellow-100 p-4 border-b-2 border-gray-900">
                        <h3 className="text-xl font-extrabold text-gray-900 leading-tight mb-1">{item.translation}</h3>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mt-1">
                          <span className="italic font-medium text-gray-700">{item.original}</span>
                          {pronunciationParts && (
                            <div className="flex flex-wrap items-center gap-1.5 text-sm font-semibold uppercase tracking-tight bg-white px-2 py-0.5 rounded-full border border-indigo-200 shadow-sm">
                              <span className='text-xs font-medium text-indigo-800'>{pronunciationParts.kana}</span>
                              {pronunciationParts.formattedRomaji && (
                                <span className='text-[11px] font-semibold text-indigo-600'>
                                  ({pronunciationParts.formattedRomaji})
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="p-4 pt-3 space-y-3 bg-amber-50/70">
                        <p className="text-xs text-gray-700 line-clamp-3 leading-relaxed border-l-2 border-orange-400 pl-2">
                          {item.desc}
                        </p>

                        <div className="flex justify-between items-center font-mono font-bold pt-2 border-t border-dashed border-gray-300">
                          <div className='flex flex-col items-start'>
                            <span className="text-2xl tracking-tight text-red-600">
                              {item.currency}{item.price}
                            </span>
                            {item.calories && (
                              <span className="text-xs text-gray-600 mt-1 flex items-center gap-1">
                                <Zap size={12} className='text-yellow-600 fill-yellow-600' />
                                约 {item.calories} 千卡
                              </span>
                            )}
                          </div>

                          <button
                            onClick={() => setSearchModalItem(item)}
                            className="px-3 py-2 text-sm font-medium rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all flex items-center gap-1 border-2 border-gray-900 shadow-[3px_3px_0_0_#444] leading-none"
                          >
                            <Search size={16} />
                            查看菜品
                          </button>
                        </div>

                        <div className="flex items-center justify-between pt-3 mt-1 border-t border-gray-200">
                          <button
                            onClick={() => playAudio(item.original, item.lang_code)}
                            className="w-10 h-10 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200 transition-all flex items-center justify-center text-xs font-medium border-2 border-gray-900 shadow-[2px_2px_0_0_#444]"
                          >
                            <Volume2 size={18} />
                          </button>

                          <button
                            onClick={() => addToCart(item)}
                            className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-sm transition-all border-2 border-gray-900 shadow-[3px_3px_0_0_#444] flex items-center gap-2 leading-none"
                          >
                            <Plus size={16} className="stroke-[3px]" />
                            加入订单
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scanning Overlay */}
      {isScanning && (
        <div className="fixed inset-0 z-50 bg-amber-50/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-6">
          <div className="relative w-40 h-40 mb-8 flex items-center justify-center">
            <div className="absolute w-full h-full bg-red-200 rounded-full blur-2xl opacity-60 animate-pulse" />
            <div className="relative w-32 h-32 bg-white rounded-full flex items-center justify-center border-4 border-gray-900 shadow-[6px_6px_0_0_#444]">
              <BookMarked size={48} className="text-orange-500 animate-bounce" />
            </div>
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">小 Qirl 正在识别</h2>
          <div className="flex items-center gap-2 text-orange-600 font-mono text-sm bg-orange-100 px-3 py-1 rounded-full border border-orange-300">
            <Loader2 size={14} className="animate-spin" />
            {scanStep}
          </div>
        </div>
      )}

      {/* FAB Camera Button */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center z-40 pointer-events-none">
        <button
          onClick={triggerFileInput}
          disabled={isScanning}
          className="pointer-events-auto group relative flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
          <div className="relative w-20 h-20 bg-gradient-to-tr from-orange-500 to-red-500 text-white rounded-full shadow-[6px_6px_0_0_#444] flex items-center justify-center transform transition-all hover:scale-105 border-4 border-gray-900">
            <Camera size={32} className="drop-shadow-lg" />
          </div>
        </button>
      </div>

      {/* Cart Summary Bubble */}
      {totalCartItems > 0 && (
        <button
          onClick={() => setShowCart(true)}
          className="fixed bottom-10 right-6 z-40 bg-white text-gray-900 px-4 py-3 rounded-xl shadow-[4px_4px_0_0_#444] flex items-center gap-3 hover:bg-gray-100 transition-all border-2 border-gray-900"
        >
          <div className="relative">
            <ShoppingBag size={22} className="text-gray-800" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full font-bold ring-2 ring-white">
              {totalCartItems}
            </span>
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Total</span>
            <span className="font-black text-base">
              <span className="text-lg text-gray-500 font-normal mr-1">~</span>
              {currencySymbol}{totalPrice}
            </span>
          </div>
        </button>
      )}

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowCart(false)} />
          <div className="bg-white w-full max-w-md rounded-xl p-4 sm:p-6 relative z-50 border-2 border-gray-900 shadow-[6px_6px_0_0_#71717A] max-h-[95vh] flex flex-col">
            <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4 sm:mb-6 sm:hidden" />
            <div className="flex justify-between items-center mb-4 pb-3 border-b-2 border-gray-200">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
                <div className="p-1 sm:p-2 bg-orange-500/10 rounded-lg text-orange-500 border-2 border-gray-900 shadow-[1px_1px_0_0_#444]">
                  <UtensilsCrossed size={18} />
                </div>
                当前订单
              </h2>
              <button onClick={() => setShowCart(false)} className="p-1 hover:bg-gray-100 rounded-full text-gray-600 hover:text-gray-900 transition-colors">
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              {cartItems.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <ShoppingBag size={40} className="mx-auto text-gray-300 mb-3" />
                  <p>您的餐盘还在等待美食...</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-start bg-gray-50 p-2 rounded-lg border-2 border-gray-900 shadow-[2px_2px_0_0_#444]">
                    <div className='max-w-[65%] leading-tight'>
                      <div className="font-extrabold text-gray-900 text-base">{item.originalName}</div>
                      <div className="text-sm font-medium text-gray-800">{item.name}</div>
                      {item.pronunciation && (
                        <div className="text-xs text-indigo-600 font-mono leading-tight mt-0.5">
                          {item.pronunciation}
                        </div>
                      )}
                      <div className="text-red-600 font-mono font-bold text-sm mt-0.5">
                        {item.currency}{item.price * item.quantity}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-white rounded-md px-1 py-0.5 border-2 border-gray-900 shadow-[1px_1px_0_0_#444] flex-shrink-0">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-6 h-6 rounded-sm bg-gray-200 hover:bg-red-500/20 text-gray-700 hover:text-red-600 flex items-center justify-center transition-colors border-2 border-gray-900"
                      >
                        {item.quantity === 1 ? <Trash2 size={12} /> : <Minus size={12} />}
                      </button>
                      <span className="text-sm font-bold w-3 text-center">{item.quantity}</span>
                      <button
                        onClick={() => {
                          const menuItem = menuItems.find(m => m.id === item.menuItemId);
                          if (menuItem) addToCart(menuItem);
                        }}
                        className="w-6 h-6 rounded-sm bg-gray-200 hover:bg-green-500/20 text-gray-700 hover:text-green-600 flex items-center justify-center transition-colors border-2 border-gray-900"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="mt-4 pt-3 border-t-2 border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">预计总额</span>
                <span className="text-2xl font-black text-gray-900 tracking-tight">
                  <span className="text-sm text-gray-500 font-normal mr-0.5">~</span>
                  {currencySymbol}{totalPrice}
                </span>
              </div>
              <button
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-bold text-base shadow-[3px_3px_0_0_#444] hover:shadow-[4px_4px_0_0_#444] transition-all border-2 border-gray-900"
                onClick={() => {
                  setShowCart(false);
                  setToastMessage("订单已生成！服务员将很快为您服务。");
                }}
              >
                确认下单
              </button>
            </div>
          </div>
        </div>
      )}

      {/* History Modal */}
      {showHistoryModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowHistoryModal(false)} />
          <div className="bg-white w-full max-w-md rounded-xl p-6 relative z-50 border-2 border-gray-900 shadow-[6px_6px_0_0_#71717A] max-h-[85vh] flex flex-col">
            <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-6 sm:hidden" />
            <div className="flex justify-between items-center mb-6 border-b-2 border-gray-200 pb-4">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                <BookMarked size={20} className='text-blue-500'/>
                扫描历史
              </h2>
              <button onClick={() => setShowHistoryModal(false)} className="p-2 hover:bg-gray-100 rounded-full text-gray-600 hover:text-gray-900 transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-4 pr-2">
              {scanSessions.length > 0 ? (
                scanSessions.map((session, index) => (
                  <div key={index} className='bg-gray-50 p-4 rounded-xl border-2 border-gray-900 shadow-[3px_3px_0_0_#444]'>
                    <h3 className='font-bold text-gray-900 text-lg mb-1'>{session.name}</h3>
                    <p className='text-sm text-gray-600'>共识别 {session.count} 道菜品。</p>
                    <p className='text-xs text-gray-400 mt-2'>
                      预览: {session.items.slice(0, 3).map(i => i.translation).join('、')}
                      {session.items.length > 3 ? '...' : ''}
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 text-gray-500">
                  暂无扫描历史。快去拍摄一张菜单吧！
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Clear Confirmation Modal */}
      {showClearConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowClearConfirmation(false)} />
          <div className="bg-white rounded-xl p-8 relative z-50 border-2 border-gray-900 shadow-[6px_6px_0_0_#71717A] max-w-sm w-full text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">确认清空菜单？</h3>
            <p className="text-gray-600 mb-6">此操作不可撤销。</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowClearConfirmation(false)}
                className="px-6 py-2 border-2 border-gray-900 rounded-lg text-gray-900 bg-gray-200 hover:bg-gray-300 transition-all shadow-[2px_2px_0_0_#444]"
              >
                取消
              </button>
              <button
                onClick={clearAllItems}
                className="px-6 py-2 border-2 border-gray-900 rounded-lg text-white bg-red-500 hover:bg-red-600 transition-all shadow-[2px_2px_0_0_#444]"
              >
                清空全部
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {searchModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setSearchModalItem(null)} />
          <div className="bg-white rounded-xl p-6 relative z-50 border-2 border-gray-900 shadow-[6px_6px_0_0_#71717A] max-w-xl w-full flex flex-col h-[80vh]">
            <div className="flex justify-between items-center border-b-2 border-gray-200 pb-3 mb-4">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Search size={20} className='text-blue-500' />
                查看菜品详情
              </h3>
              <button onClick={() => setSearchModalItem(null)} className="p-2 hover:bg-gray-100 rounded-full text-gray-600 hover:text-gray-900 transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className='flex flex-col mb-4'>
              <p className="text-sm text-gray-500 mb-1">正在搜索:</p>
              <div className="font-extrabold text-xl text-gray-900">{searchModalItem.original} ({searchModalItem.translation})</div>
            </div>
            <div className="flex-1 border-2 border-gray-900 rounded-lg overflow-hidden shadow-inner bg-gray-100">
              <iframe
                src={`https://www.bing.com/images/search?q=${encodeURIComponent(searchModalItem.original)}&FORM=RESTAB`}
                title={`Image Search for ${searchModalItem.original}`}
                className="w-full h-full border-0"
              />
            </div>
            <p className='text-xs text-gray-500 mt-3 text-center'>* 图片搜索结果由外部搜索引擎提供</p>
          </div>
        </div>
      )}

      {/* Toast */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[60] p-4 bg-white rounded-xl shadow-[4px_4px_0_0_#444] border-2 border-gray-900 max-w-xs sm:max-w-sm">
          <div className="flex items-center gap-3">
            <Zap size={20} className="text-orange-500 fill-orange-500" />
            <p className="text-sm font-medium text-gray-800">{toastMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
}