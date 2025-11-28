import React, { useState, useRef, useEffect } from 'react';
import { 
    ShoppingBag, Volume2, Plus, Minus, 
    ListRestart, ChefHat, ImagePlus, Loader2, Search, X
} from 'lucide-react';

// --- ✅ API Key (保持不变) ---
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
    const [confirmClear, setConfirmClear] = useState(false);
    
    const fileInputRef = useRef(null);

    // --- 持久化存储 ---
    useEffect(() => {
        localStorage.setItem('qirl_menu_items', JSON.stringify(menuItems));
    }, [menuItems]);

    useEffect(() => {
        localStorage.setItem('qirl_cart_items', JSON.stringify(cartItems));
    }, [cartItems]);

    // --- 核心功能 ---

    // 1. 改良版清空
    const handleClearClick = () => {
        if (confirmClear) {
            setMenuItems([]);
            setCartItems([]);
            localStorage.removeItem('qirl_menu_items');
            localStorage.removeItem('qirl_cart_items');
            setConfirmClear(false);
        } else {
            setConfirmClear(true);
            setTimeout(() => setConfirmClear(false), 3000);
        }
    };

    // 2. 查看详情
    const handleSearchDish = (item) => {
        const query = `${item.original} ${item.translation} food`;
        const url = `https://www.bing.com/images/search?q=${encodeURIComponent(query)}`;
        window.open(url, '_blank');
    };

    // 3. AI 识别
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
                    resolve(canvas.toDataURL('image/jpeg', 0.6));
                };
            };
        });
    };
    
    const analyzeImageWithGemini = async (base64Image) => {
        const base64Data = base64Image.split(',')[1];
        const prompt = `
            Identify dishes from the menu image. Return a JSON array with objects:
            {
                "original": "Dish Name",
                "translation": "Chinese Name",
                "pronunciation": "Pronunciation",
                "price": 100,
                "currency": "¥",
                "desc": "Short description in Chinese",
                "category": "Category in Chinese",
                "lang_code": "ja-JP"
            }
            Return ONLY raw JSON.
        `;

        try {
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
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
        setScanStep(`准备处理...`);
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
        } catch (error) {
            alert("识别失败，请重试");
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
        <div className="min-h-screen bg-stone-50 text-gray-800 font-sans pb-32">
            <input type="file" ref={fileInputRef} onChange={handleFileSelect} accept="image/*" multiple className="hidden" />
            
            {/* 顶部导航 */}
            <div className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-200 px-4 py-3 flex justify-between items-center shadow-sm">
                <div className="flex items-center gap-2 font-black text-xl text-gray-900">
                    <div className="bg-orange-500 text-white p-1.5 rounded-lg"><ChefHat size={20}/></div>
                    食神 Qirl
                </div>
                {menuItems.length > 0 && (
                    <button 
                        onClick={handleClearClick}
                        className={`text-sm font-bold px-4 py-2 rounded-full transition-all active:scale-95 border-2 ${
                            confirmClear 
                            ? 'bg-red-500 text-white border-red-600 shadow-md animate-pulse' 
                            : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                        }`}
                    >
                        {confirmClear ? "确定删除?" : "清空"}
                    </button>
                )}
            </div>

            {/* 主内容 */}
            <div className="p-4 max-w-lg mx-auto">
                {menuItems.length === 0 && !isScanning && (
                    <div className="mt-20 text-center space-y-6">
                        <div onClick={() => fileInputRef.current?.click()} className="w-24 h-24 mx-auto bg-white rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center active:bg-gray-50 transition-colors">
                            <ImagePlus size={40} className="text-gray-400" />
                        </div>
                        <p className="text-gray-500 font-medium">点击上方图标，开始拍照翻译</p>
                    </div>
                )}

                <div className="space-y-8">
                    {Object.entries(grouped).map(([category, items]) => (
                        <div key={category} className="animate-fade-in">
                            <h3 className="text-lg font-black text-gray-900 mb-3 border-l-4 border-orange-500 pl-3">{cleanCategoryName(category)}</h3>
                            <div className="grid gap-4">
                                {items.map(item => (
                                    <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-2">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="font-bold text-lg text-gray-900">{item.translation}</h4>
                                                <p className="text-xs text-gray-400 font-mono mt-0.5">{item.original}</p>
                                            </div>
                                            <button onClick={() => handleSearchDish(item)} className="p-2 text-blue-500 bg-blue-50 rounded-full active:bg-blue-100">
                                                <Search size={18} />
                                            </button>
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-2 rounded-lg">{item.desc}</p>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-xl font-bold text-orange-600">{item.currency}{item.price}</span>
                                            <div className="flex gap-3">
                                                <button onClick={() => playAudio(item.original, item.lang_code)} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center active:bg-gray-200"><Volume2 size={20} className="text-gray-600"/></button>
                                                <button onClick={() => addToCart(item)} className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-200 active:scale-90 transition-transform"><Plus size={24}/></button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 扫描加载中 */}
            {isScanning && (
                <div className="fixed inset-0 z-50 bg-black/50 flex flex-col items-center justify-center text-white backdrop-blur-sm">
                    <Loader2 size={48} className="animate-spin mb-4" />
                    <p className="font-bold text-lg">{scanStep}</p>
                </div>
            )}

            {/* 购物车按钮 (独立浮动) */}
            {totalQty > 0 && !showCart && (
                <div className="fixed bottom-8 right-4 left-4 z-40 animate-slide-up">
                    <button 
                        onClick={() => setShowCart(true)} 
                        className="w-full bg-gray-900 text-white p-4 rounded-2xl shadow-2xl flex justify-between items-center active:scale-95 transition-transform border border-gray-700"
                    >
                        <div className="flex items-center gap-3">
                            <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md ring-2 ring-gray-900">{totalQty}</div>
                            <span className="font-bold text-lg">去结算</span>
                        </div>
                        <span className="font-mono text-xl">{cartItems[0]?.currency}{totalPrice}</span>
                    </button>
                </div>
            )}

            {/* 购物车弹窗 (全屏遮罩 + 底部弹出) */}
            {showCart && (
                <div className="fixed inset-0 z-50 flex items-end justify-center">
                    {/* 背景遮罩 */}
                    <div 
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
                        onClick={() => setShowCart(false)}
                    />
                    
                    {/* 弹窗内容 */}
                    <div className="relative w-full max-w-lg bg-white rounded-t-3xl shadow-2xl animate-slide-up overflow-hidden flex flex-col max-h-[80vh]">
                        {/* 标题栏 */}
                        <div className="p-4 bg-gray-50 border-b flex justify-between items-center shrink-0">
                            <h3 className="font-bold text-lg text-gray-800">当前订单</h3>
                            <button 
                                onClick={() => setShowCart(false)}
                                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                            >
                                <X size={20} className="text-gray-600"/>
                            </button>
                        </div>

                        {/* 列表区 (可滚动) */}
                        <div className="p-4 overflow-y-auto flex-1 space-y-4">
                            {cartItems.map(item => (
                                <div key={item.menuItemId} className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0">
                                    <div className="flex-1 pr-4">
                                        <div className="font-bold text-gray-900">{item.translation}</div>
                                        <div className="text-sm text-gray-500 mt-1">{item.currency}{item.price}</div>
                                    </div>
                                    <div className="flex items-center gap-3 bg-gray-50 p-1 rounded-lg">
                                        <button onClick={() => removeFromCart(item.menuItemId)} className="w-8 h-8 bg-white border border-gray-200 rounded-md flex items-center justify-center shadow-sm active:scale-90 transition-transform"><Minus size={16}/></button>
                                        <span className="font-mono font-bold w-6 text-center text-lg">{item.quantity}</span>
                                        <button onClick={() => addToCart(item)} className="w-8 h-8 bg-orange-500 text-white rounded-md flex items-center justify-center shadow-sm active:scale-90 transition-transform"><Plus size={16}/></button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* 底部结算按钮 */}
                        <div className="p-4 border-t bg-white shrink-0 safe-area-bottom">
                            <button 
                                onClick={() => {setShowCart(false); alert("下单成功！服务员很快就到！");}} 
                                className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-4 rounded-xl shadow-lg active:scale-95 transition-transform text-lg"
                            >
                                确认下单 · {cartItems[0]?.currency}{totalPrice}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}