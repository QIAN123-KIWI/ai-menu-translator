import React, { useState, useRef, useEffect } from 'react';
import { 
    ShoppingBag, Volume2, Plus, Minus, 
    ListRestart, ChefHat, ImagePlus, Loader2, Search, X, Zap
} from 'lucide-react';

// --- ✅ API Key ---
const apiKey = "AIzaSyBmEZeUw9iafS9sWwrf8l8gM4xgf43VFiM"; 

export default function AIMenuTranslator() {
    // --- 状态管理 ---
    const [menuItems, setMenuItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [isScanning, setIsScanning] = useState(false);
    const [scanStep, setScanStep] = useState(''); 
    const [showCart, setShowCart] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const fileInputRef = useRef(null);

    // --- 辅助函数 ---
    const normalizeCurrency = (currency) => {
        if (!currency) return '¥';
        const upper = currency.toUpperCase().trim();
        if (['YEN', 'JP¥', 'JPY', 'JAPANESE YEN', 'Y'].includes(upper)) return '¥';
        if (['USD', 'US$'].includes(upper)) return '$';
        return currency;
    };

    const cleanCategoryName = (category) => {
        return category ? category.replace(/\s*\([^)]*\)/g, '').trim() : '';
    };

    // --- 核心功能 ---

    // 1. 修复版清空：使用系统原生弹窗
    const handleClearAll = () => {
        // 使用 window.confirm，手机上绝对能弹出来
        if (window.confirm("确定要清空所有菜单吗？")) {
            setMenuItems([]);
            setCartItems([]);
            setToastMessage("已清空");
        }
    };

    // 2. 查看详情：跳转搜索
    const handleSearchDish = (item) => {
        const query = `${item.original} ${item.translation} food`;
        window.open(`https://www.bing.com/images/search?q=${encodeURIComponent(query)}`, '_blank');
    };

    // 3. AI 识别
    const analyzeImageWithGemini = async (base64Image) => {
        const base64Data = base64Image.split(',')[1];
        const prompt = `
            Identify dishes. Return JSON array:
            [{"original":"Name","translation":"Chinese","price":100,"currency":"¥","desc":"Desc","category":"Main"}]
            Return ONLY raw JSON.
        `;
        try {
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }, { inlineData: { mimeType: "image/jpeg", data: base64Data } }] }] })
                }
            );
            const data = await response.json();
            let text = data.candidates?.[0]?.content?.parts?.[0]?.text || "[]";
            text = text.replace(/^```json\s*|```\s*$/g, '').trim();
            const first = text.indexOf('[');
            const last = text.lastIndexOf(']');
            if (first !== -1 && last !== -1) text = text.substring(first, last + 1);
            return JSON.parse(text);
        } catch (error) {
            console.error(error);
            return [];
        }
    };

    const handleFileSelect = async (e) => {
        const files = Array.from(e.target.files);
        if (files.length === 0) return;
        setIsScanning(true);
        setScanStep('正在识别...');
        
        // 简单的图片压缩
        const compress = (file) => new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (ev) => {
                const img = new Image();
                img.src = ev.target.result;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const scale = 800 / img.width;
                    canvas.width = 800;
                    canvas.height = img.height * scale;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    resolve(canvas.toDataURL('image/jpeg', 0.6));
                }
            }
        });

        try {
            for (let file of files) {
                const base64 = await compress(file);
                const results = await analyzeImageWithGemini(base64);
                const newItems = results.map(dish => ({
                    id: Date.now() + Math.random(),
                    ...dish,
                    currency: normalizeCurrency(dish.currency),
                    category: dish.category || '未分类'
                }));
                setMenuItems(prev => [...prev, ...newItems]);
            }
        } catch (e) {
            alert("识别出错，请重试");
        }
        setIsScanning(false);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    // --- 购物车 ---
    const addToCart = (item) => {
        setCartItems(prev => {
            const exists = prev.find(i => i.id === item.id);
            if (exists) return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
            return [...prev, { ...item, qty: 1 }];
        });
        setToastMessage("已加入 +1");
        setTimeout(() => setToastMessage(''), 2000);
    };

    // --- 渲染 ---
    const grouped = menuItems.reduce((acc, item) => {
        const c = item.category || '其它';
        if (!acc[c]) acc[c] = [];
        acc[c].push(item);
        return acc;
    }, {});

    const totalQty = cartItems.reduce((a, c) => a + c.qty, 0);
    const totalPrice = cartItems.reduce((a, c) => a + (c.price * c.qty), 0);

    return (
        <div className="min-h-screen bg-orange-50 pb-32 font-sans text-gray-800">
            <input type="file" ref={fileInputRef} onChange={handleFileSelect} accept="image/*" multiple className="hidden" />

            {/* 顶部栏 */}
            <div className="sticky top-0 z-50 bg-white border-b px-4 py-3 flex justify-between items-center shadow-sm">
                <div className="font-black text-xl flex items-center gap-2">
                    <ChefHat className="text-orange-500" /> 食神 Qirl
                </div>
                {menuItems.length > 0 && (
                    <button onClick={handleClearAll} className="bg-gray-100 px-3 py-1 rounded-full text-sm font-bold">清空</button>
                )}
            </div>

            {/* 主内容 */}
            <div className="p-4">
                {menuItems.length === 0 && !isScanning && (
                    <div className="mt-20 text-center" onClick={() => fileInputRef.current.click()}>
                        <div className="w-24 h-24 bg-white mx-auto rounded-full flex items-center justify-center border-2 border-dashed border-gray-300 mb-4">
                            <ImagePlus size={32} className="text-gray-400" />
                        </div>
                        <p className="font-bold text-gray-500">点我拍照翻译菜单</p>
                    </div>
                )}

                {Object.entries(grouped).map(([cat, items]) => (
                    <div key={cat} className="mb-8">
                        <h2 className="text-xl font-black mb-4 pl-3 border-l-4 border-orange-500">{cleanCategoryName(cat)}</h2>
                        <div className="grid gap-4">
                            {items.map(item => (
                                <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="flex justify-between">
                                        <h3 className="font-bold text-lg">{item.translation}</h3>
                                        <button onClick={() => handleSearchDish(item)}><Search size={18} className="text-blue-500"/></button>
                                    </div>
                                    <p className="text-xs text-gray-400 mb-2">{item.original}</p>
                                    <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded mb-3">{item.desc}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xl font-bold text-red-500">{item.currency}{item.price}</span>
                                        <button onClick={() => addToCart(item)} className="bg-orange-500 text-white p-2 rounded-lg"><Plus size={20}/></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Loading */}
            {isScanning && (
                <div className="fixed inset-0 z-[60] bg-black/60 flex flex-col items-center justify-center text-white">
                    <Loader2 size={48} className="animate-spin mb-4"/>
                    <p>{scanStep}</p>
                </div>
            )}

            {/* 购物车 (修复版：固定在底部，层级最高) */}
            {totalQty > 0 && (
                <div className="fixed bottom-8 left-4 right-4 z-[9999]">
                    <button 
                        onClick={() => setShowCart(!showCart)}
                        className="w-full bg-gray-900 text-white p-4 rounded-xl shadow-2xl flex justify-between items-center"
                    >
                        <div className="flex items-center gap-3">
                            <div className="bg-orange-500 w-8 h-8 rounded-full flex items-center justify-center font-bold">{totalQty}</div>
                            <span className="font-bold">去结算</span>
                        </div>
                        <span className="font-mono text-xl">{cartItems[0]?.currency}{totalPrice}</span>
                    </button>
                </div>
            )}
            
            {/* 购物车详情弹窗 */}
            {showCart && (
                <div className="fixed inset-0 z-[9990] bg-black/50 flex items-end" onClick={() => setShowCart(false)}>
                    <div className="bg-white w-full rounded-t-2xl p-4 max-h-[60vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between mb-4 border-b pb-2">
                            <h3 className="font-bold">订单详情</h3>
                            <button onClick={() => setShowCart(false)}><X/></button>
                        </div>
                        {cartItems.map((item, idx) => (
                            <div key={idx} className="flex justify-between py-2">
                                <span>{item.translation}</span>
                                <span className="font-bold">x{item.qty}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Toast */}
            {toastMessage && (
                <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 text-white px-6 py-2 rounded-full z-[10000]">
                    {toastMessage}
                </div>
            )}
        </div>
    );
}