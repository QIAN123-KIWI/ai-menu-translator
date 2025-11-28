import React, { useState, useRef, useEffect } from 'react';
import { 
    ShoppingBag, Volume2, Plus, Minus, 
    ListRestart, ChefHat, ImagePlus, Loader2, Search, X, Zap
} from 'lucide-react';

// --- ✅ API Key ---
const apiKey = "AIzaSyBmEZeUw9iafS9sWwrf8l8gM4xgf43VFiM"; 

// --- 辅助函数 ---
const normalizeCurrency = (currency) => {
    if (!currency) return '¥';
    const upper = currency.toUpperCase().trim();
    if (['YEN', 'JP¥', 'JPY', 'JAPANESE YEN', 'Y'].includes(upper)) return '¥';
    if (['USD', 'US$'].includes(upper)) return '$';
    if (['EUR', 'EURO'].includes(upper)) return '€';
    return currency;
};

const cleanCategoryName = (category) => {
    if (!category) return '';
    return category.replace(/\s*\([^)]*\)/g, '').trim();
};

export default function AIMenuTranslator() {
    // --- 状态管理 ---
    const [menuItems, setMenuItems] = useState(() => {
        try {
            const saved = localStorage.getItem('qirl_menu_items');
            return saved ? JSON.parse(saved) : [];
        } catch (e) { return []; }
    });
    const [cartItems, setCartItems] = useState(() => {
        try {
            const saved = localStorage.getItem('qirl_cart_items');
            return saved ? JSON.parse(saved) : [];
        } catch (e) { return []; }
    });

    const [isScanning, setIsScanning] = useState(false);
    const [scanStep, setScanStep] = useState(''); 
    const [showCart, setShowCart] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    
    const fileInputRef = useRef(null);

    // --- 持久化存储 ---
    useEffect(() => {
        localStorage.setItem('qirl_menu_items', JSON.stringify(menuItems));
    }, [menuItems]);

    useEffect(() => {
        localStorage.setItem('qirl_cart_items', JSON.stringify(cartItems));
    }, [cartItems]);

    // Toast 自动消失
    useEffect(() => {
        if (toastMessage) {
            const timer = setTimeout(() => setToastMessage(''), 2000);
            return () => clearTimeout(timer);
        }
    }, [toastMessage]);

    // --- 核心功能 ---

    // 1. 清空：使用系统原生弹窗
    const handleClearAll = () => {
        if (window.confirm("确定要清空所有菜单吗？")) {
            setMenuItems([]);
            setCartItems([]);
            localStorage.removeItem('qirl_menu_items');
            localStorage.removeItem('qirl_cart_items');
            setToastMessage("已清空");
        }
    };

    // 2. 查看详情：跳转搜索
    const handleSearchDish = (item) => {
        const query = `${item.original} ${item.translation} food`;
        window.open(`https://www.bing.com/images/search?q=${encodeURIComponent(query)}`, '_blank');
    };

    // 3. AI 识别 (Gemini 1.5 Flash - 极速且稳定)
    const compressImage = (file) => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                const img = new Image();
                img.src = event.target.result;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const MAX_WIDTH = 800; 
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
    
    const analyzeImageWithGemini = async (base64Image) => {
        const base64Data = base64Image.split(',')[1];
        
        // ⚡️ 1.5 Flash 专用提示词
        const prompt = `
            You are a professional menu translator. Analyze the menu image.
            Extract ALL dishes. Return a JSON array.
            
            Rules:
            1. Target Language: Simplified Chinese (简体中文).
            2. Do NOT translate literally. Use appetizing names.
            3. If currency is missing, assume Japanese Yen (¥).

            Return JSON array:
            [
              {
                "original": "Dish Name",
                "translation": "Chinese Name",
                "pronunciation": "Pronunciation",
                "price": 100,
                "currency": "¥",
                "desc": "Short description",
                "category": "Category (e.g. 主菜)",
                "lang_code": "ja-JP"
              }
            ]
            Return ONLY raw JSON.
        `;

        try {
            // ✅ 改用 gemini-1.5-flash，这是最稳的版本，不会出现 404
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{
                            parts: [
                                { text: prompt },
                                { inlineData: { mimeType: "image/jpeg", data: base64Data } }
                            ]
                        }]
                    })
                }
            );

            if (!response.ok) throw new Error(`API Error: ${response.status}`);
            const data = await response.json();
            let text = data.candidates?.[0]?.content?.parts?.[0]?.text || "[]";
            
            text = text.replace(/^```json\s*|```\s*$/g, '').trim();
            const first = text.indexOf('[');
            const last = text.lastIndexOf(']');
            if (first !== -1 && last !== -1) text = text.substring(first, last + 1);
            
            return JSON.parse(text).filter(d => d.translation);

        } catch (error) {
            console.error("AI Error:", error);
            throw error;
        }
    };

    const handleFileSelect = async (e) => {
        const files = Array.from(e.target.files);
        if (files.length === 0) return;
        setIsScanning(true);
        setScanStep(`正在极速识别...`); 
        try {
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                setScanStep(`处理第 ${i + 1} 张...`);
                const compressed = await compressImage(file);
                const results = await analyzeImageWithGemini(compressed); 
                const newItems = results.map(dish => ({
                    id: Date.now() + Math.random().toString(36).substr(2, 9),
                    ...dish,
                    currency: normalizeCurrency(dish.currency),
                    category: dish.category || '未分类'
                }));
                setMenuItems(prev => [...prev, ...newItems]);
            }
            setToastMessage("识别成功！");
        } catch (error) {
            alert("识别失败: " + error.message);
        } finally {
            setIsScanning(false);
            if (fileInputRef.current) fileInputRef.current.value = '';
        }
    };

    // --- 购物车逻辑 ---
    const addToCart = (item) => {
        if (navigator.vibrate) navigator.vibrate(50);
        setCartItems(prev => {
            const existing = prev.find(i => i.menuItemId === item.id);
            if (existing) {
                return prev.map(i => i.menuItemId === item.id ? { ...i, quantity: i.quantity + 1 } : i);
            }
            return [...prev, { ...item, menuItemId: item.id, quantity: 1 }];
        });
        setToastMessage("已加入订单");
    };

    const removeFromCart = (itemId) => {
        setCartItems(prev => prev.reduce((acc, item) => {
            if (item.menuItemId === itemId) {
                if (item.quantity > 1) acc.push({ ...item, quantity: item.quantity - 1 });
            } else {
                acc.push(item);
            }
            return acc;
        }, []));
    };

    const playAudio = (text, lang) => {
        if (!window.speechSynthesis) return;
        const u = new SpeechSynthesisUtterance(text);
        u.lang = lang || 'ja-JP';
        window.speechSynthesis.speak(u);
    };

    // --- 渲染准备 ---
    const grouped = menuItems.reduce((acc, item) => {
        const cat = item.category || '未分类';
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(item);
        return acc;
    }, {});
    
    const totalQty = cartItems.reduce((a, c) => a + c.quantity, 0);
    const totalPrice = cartItems.reduce((a, c) => a + (c.price * c.quantity), 0);

    return (
        <div className="min-h-screen bg-amber-50 text-gray-800 font-sans pb-32">
            <input type="file" ref={fileInputRef} onChange={handleFileSelect} accept="image/*" multiple className="hidden" />
            
            {/* Header */}
            <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b-2 border-gray-900 px-4 py-3 flex justify-between items-center shadow-lg">
                <div className="flex items-center gap-2">
                    <div className="bg-gradient-to-tr from-rose-500 to-orange-500 p-2 rounded-lg border-2 border-gray-900 shadow-[2px_2px_0_0_#444]">
                        <ChefHat size={20} className="text-white" />
                    </div>
                    <h1 className="text-xl font-extrabold text-gray-900 tracking-wider">食神 Qirl</h1>
                </div>
                {menuItems.length > 0 && (
                    <button 
                        onClick={handleClearAll}
                        className="text-xs font-bold text-gray-700 bg-white border-2 border-gray-900 px-3 py-1.5 rounded-lg shadow-[2px_2px_0_0_#444] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all flex items-center gap-1"
                    >
                        <ListRestart size={14}/> 清空
                    </button>
                )}
            </div>

            {/* Content */}
            <div className="p-4 max-w-3xl mx-auto min-h-[60vh]">
                {menuItems.length === 0 && !isScanning && (
                    <div className="flex flex-col items-center justify-center mt-24 text-center space-y-6 animate-fade-in">
                        <div onClick={() => fileInputRef.current?.click()} className="w-24 h-24 bg-white rounded-xl flex items-center justify-center border-2 border-gray-900 shadow-[6px_6px_0_0_#A1A1AA] cursor-pointer hover:shadow-[8px_8px_0_0_#71717A] transition-all group">
                            <ImagePlus size={32} className="text-gray-600 group-hover:text-orange-500" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">拍摄或上传菜单</h3>
                            <p className="text-sm text-gray-600 mt-2">点击上方按钮，小 Qirl 为您翻译。</p>
                        </div>
                    </div>
                )}

                <div className="space-y-10 pb-4">
                    {Object.entries(grouped).map(([category, items]) => (
                        <div key={category} className="animate-fade-in">
                            <div className="mb-6 pb-2 border-b-4 border-red-500/80">
                                <h2 className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
                                    <ChefHat size={24} className="text-red-500"/> {cleanCategoryName(category)}
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {items.map((item) => (
                                    <div key={item.id} className="group relative bg-white border-2 border-gray-900 rounded-xl overflow-hidden shadow-[6px_6px_0_0_#A1A1AA]">
                                        <div className="bg-gradient-to-br from-amber-100 to-yellow-100 p-4 border-b-2 border-gray-900">
                                            <h3 className="text-lg font-extrabold text-gray-900 mb-1 leading-tight">{item.translation}</h3>
                                            <div className="text-sm text-gray-500 italic">{item.original}</div>
                                            {item.pronunciation && <div className="text-xs text-indigo-600 font-bold mt-1 bg-white px-2 py-0.5 rounded-full inline-block border border-indigo-200">{item.pronunciation}</div>}
                                        </div>
                                        <div className="p-4 space-y-3 bg-amber-50/70">
                                            <p className="text-xs text-gray-700 line-clamp-3 border-l-2 border-orange-400 pl-2">{item.desc}</p>
                                            <div className="flex justify-between items-center pt-2 border-t border-dashed border-gray-300">
                                                <span className="text-xl font-mono font-bold text-red-600">{item.currency}{item.price}</span>
                                                <div className="flex gap-2">
                                                    <button onClick={() => playAudio(item.original, item.lang_code)} className="w-8 h-8 rounded-lg bg-gray-100 border-2 border-gray-900 flex items-center justify-center active:translate-y-0.5 active:shadow-none shadow-[2px_2px_0_0_#ccc]"><Volume2 size={16}/></button>
                                                    <button onClick={() => handleSearchDish(item)} className="w-8 h-8 rounded-lg bg-blue-100 border-2 border-gray-900 flex items-center justify-center active:translate-y-0.5 active:shadow-none shadow-[2px_2px_0_0_#ccc]"><Search size={16} className="text-blue-600"/></button>
                                                    <button onClick={() => addToCart(item)} className="w-8 h-8 rounded-lg bg-orange-500 text-white border-2 border-gray-900 flex items-center justify-center active:translate-y-0.5 active:shadow-none shadow-[2px_2px_0_0_#cc4400]"><Plus size={16}/></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scanning Overlay */}
            {isScanning && (
                <div className="fixed inset-0 z-[100] bg-amber-50/95 flex flex-col items-center justify-center animate-fade-in">
                    <Loader2 size={48} className="text-orange-500 animate-spin mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900">{scanStep}</h2>
                </div>
            )}

            {/* 购物车按钮 (独立浮动 + 漂亮样式) */}
            {totalQty > 0 && !showCart && (
                <div className="fixed bottom-8 right-4 left-4 z-[90]">
                    <button 
                        onClick={() => setShowCart(true)} 
                        className="w-full bg-white px-4 py-3 rounded-xl border-2 border-gray-900 shadow-[4px_4px_0_0_#444] flex items-center gap-3 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                    >
                        <div className="relative">
                            <ShoppingBag size={24} className="text-gray-800"/>
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-[18px] h-[18px] flex items-center justify-center rounded-full border border-white font-bold">{totalQty}</span>
                        </div>
                        <span className="font-black text-lg flex-1 text-left ml-2">去结算</span>
                        <span className="font-black text-xl text-gray-900">{cartItems[0]?.currency}{totalPrice}</span>
                    </button>
                </div>
            )}

            {/* 购物车弹窗 (全屏遮罩 + 底部弹出) */}
            {showCart && (
                <div className="fixed inset-0 z-[100] flex items-end justify-center">
                    <div 
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
                        onClick={() => setShowCart(false)}
                    />
                    <div className="relative w-full max-w-lg bg-white rounded-t-2xl shadow-2xl border-t-2 border-gray-900 animate-slide-up flex flex-col max-h-[70vh]">
                        <div className="p-4 bg-amber-50 border-b-2 border-gray-900 flex justify-between items-center shrink-0">
                            <h3 className="font-black text-lg text-gray-900 flex items-center gap-2">
                                <ShoppingBag size={20}/> 当前订单
                            </h3>
                            <button onClick={() => setShowCart(false)} className="p-1 hover:bg-gray-200 rounded-full"><X size={20}/></button>
                        </div>
                        <div className="p-4 overflow-y-auto flex-1 space-y-3">
                            {cartItems.map(item => (
                                <div key={item.menuItemId} className="flex justify-between items-center border-b border-dashed border-gray-300 pb-3">
                                    <div className="flex-1 pr-4">
                                        <div className="font-bold text-gray-900">{item.translation}</div>
                                        <div className="text-sm text-gray-500">{item.currency}{item.price}</div>
                                    </div>
                                    <div className="flex items-center gap-3 bg-white border-2 border-gray-900 rounded-lg p-1 shadow-[2px_2px_0_0_#ccc]">
                                        <button onClick={() => removeFromCart(item.menuItemId)} className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded hover:bg-gray-200"><Minus size={14}/></button>
                                        <span className="font-mono font-bold w-6 text-center">{item.quantity}</span>