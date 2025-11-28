import React, { useState, useRef } from 'react';
import { 
    Camera, ShoppingBag, Volume2, Trash2, Plus, Minus, 
    UtensilsCrossed, Search, Zap, BookMarked, X, ImagePlus, 
    Loader2, ListRestart, ChefHat
} from 'lucide-react';

// --- ✅ API Key 已配置 ---
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

const formatPronunciation = (pronunciation) => {
    if (!pronunciation) return null;
    const regex = /(.*?)\s*\((.*?)\)/;
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

const cleanCategoryName = (category) => {
    if (!category) return '';
    return category.replace(/\s*\([^)]*\)/g, '').trim();
};

export default function AIMenuTranslator() {
    // 移除 Firebase 相关状态，改为本地状态
    const [menuItems, setMenuItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [isScanning, setIsScanning] = useState(false);
    const [scanStep, setScanStep] = useState(''); 
    const [showCart, setShowCart] = useState(false);
    const fileInputRef = useRef(null);
    const [showClearConfirmation, setShowClearConfirmation] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    // Toast 自动消失
    React.useEffect(() => {
        if (toastMessage) {
            const timer = setTimeout(() => setToastMessage(''), 5000);
            return () => clearTimeout(timer);
        }
    }, [toastMessage]);

    // --- 数据分组 ---
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
            return a.localeCompare(b);
        });
        
        return sortedKeys.map(key => ({ category: key, items: grouped[key] }));
    };

    // --- 图像处理与 AI ---
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
    
    const analyzeImageWithGemini = async (base64Image) => {
        const base64Data = base64Image.split(',')[1];
        const prompt = `
            You are an expert menu translator and food critic. Your task is to analyze the menu image and extract dish details.
            Identify ALL distinct dishes. For each dish, return a JSON object with:
            - "original": Original name
            - "translation": Appetizing Chinese translation
            - "pronunciation": Pronunciation guide (Kana + Romaji for Japanese)
            - "lang_code": ISO 639-1 code (e.g., 'ja-JP')
            - "price": Numeric price
            - "currency": Currency symbol (e.g. ¥)
            - "desc": Short appetizing description in Chinese
            - "calories": Estimated calories (numeric)
            - "category": General category (e.g., 主菜, 饮品) in Chinese

            Return ONLY a raw JSON array.
        `;

        try {
            // 使用 Gemini 2.0 Flash 模型，速度更快
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
            const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
            
            let cleanedText = text.replace(/^```json\s*|```\s*$/g, '').trim();
            const firstBracket = cleanedText.indexOf('[');
            const lastBracket = cleanedText.lastIndexOf(']');
            if (firstBracket !== -1 && lastBracket !== -1) {
                cleanedText = cleanedText.substring(firstBracket, lastBracket + 1);
            }
            
            return JSON.parse(cleanedText).filter(dish => dish.translation);

        } catch (error) {
            console.error("AI Error:", error);
            throw error;
        }
    };

    const handleFileSelect = async (e) => {
        const files = Array.from(e.target.files);
        if (files.length === 0) return;
        
        setIsScanning(true);
        setScanStep(`准备处理 ${files.length} 张图片...`);

        try {
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                setScanStep(`[${i + 1}/${files.length}] 正在压缩...`);
                const compressedBase64 = await compressImage(file);
                
                setScanStep(`[${i + 1}/${files.length}] AI 正在识别...`);
                const aiResults = await analyzeImageWithGemini(compressedBase64); 
                
                // 本地添加数据
                const newItems = aiResults.map(dish => ({
                    id: Date.now() + Math.random().toString(36).substr(2, 9),
                    ...dish,
                    currency: normalizeCurrency(dish.currency),
                    timestamp: Date.now(),
                    category: dish.category || '未分类',
                    calories: parseInt(dish.calories) || 0
                }));

                setMenuItems(prev => [...prev, ...newItems]);
                setToastMessage(`成功识别 ${newItems.length} 道菜品！`);
            }
        } catch (error) {
            console.error("Scan failed", error);
            setToastMessage(`识别失败: ${error.message}`);
        } finally {
            setIsScanning(false);
            setScanStep('');
            if (fileInputRef.current) fileInputRef.current.value = '';
        }
    };

    const triggerFileInput = () => fileInputRef.current?.click();

    // --- 购物车逻辑 (本地) ---
    const addToCart = (item) => {
        setCartItems(prev => {
            const existing = prev.find(i => i.menuItemId === item.id);
            if (existing) {
                return prev.map(i => i.menuItemId === item.id ? { ...i, quantity: i.quantity + 1 } : i);
            }
            return [...prev, {
                id: Date.now() + Math.random(),
                menuItemId: item.id,
                name: item.translation,
                originalName: item.original,
                pronunciation: item.pronunciation,
                price: item.price,
                currency: item.currency,
                quantity: 1
            }];
        });
        setToastMessage("已加入订单");
    };

    const clearAllItems = () => {
        setMenuItems([]);
        setCartItems([]);
        setShowClearConfirmation(false);
        setToastMessage("已清空");
    };

    const playAudio = (text, langCode) => {
        if (!('speechSynthesis' in window)) return;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.8;
        utterance.lang = langCode || 'ja-JP';
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
    };

    // --- 渲染 ---
    const categorizedItems = groupItemsByCategory(menuItems);
    const totalCartItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const currencySymbol = cartItems.length > 0 ? cartItems[0].currency : '¥';
    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0); 

    return (
        <div className="min-h-screen bg-amber-50 text-gray-800 font-sans pb-28 relative overflow-hidden">
            <input type="file" ref={fileInputRef} onChange={handleFileSelect} accept="image/*" multiple className="hidden" />
            
            {/* Header */}
            <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b-2 border-gray-900 px-4 py-3 flex justify-between items-center shadow-lg">
                <div className="flex items-center gap-2">
                    <div className="bg-gradient-to-tr from-rose-500 to-orange-500 p-2 rounded-lg border-2 border-gray-900 shadow-[2px_2px_0_0_#444]">
                        <ChefHat size={20} className="text-white" />
                    </div>
                    <h1 className="text-xl font-extrabold text-gray-900 tracking-wider">食神 Qirl</h1>
                </div>
                <div className="flex items-center gap-3">
                    {menuItems.length > 0 && (
                        <button onClick={() => setShowClearConfirmation(true)} className="text-xs text-gray-700 hover:text-red-600 px-2 py-1 flex items-center gap-1 border-2 border-gray-900 rounded-lg shadow-[2px_2px_0_0_#444]">
                            <ListRestart size={14} /> 清空
                        </button>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-4 max-w-3xl mx-auto min-h-[60vh]">
                {menuItems.length === 0 && !isScanning && (
                    <div className="flex flex-col items-center justify-center mt-24 text-center space-y-6 animate-fade-in">
                        <div onClick={triggerFileInput} className="w-24 h-24 bg-white rounded-xl flex items-center justify-center border-2 border-gray-900 shadow-[6px_6px_0_0_#A1A1AA] cursor-pointer hover:shadow-[8px_8px_0_0_#71717A] transition-all group">
                            <ImagePlus size={32} className="text-gray-600 group-hover:text-orange-500" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">拍摄或上传菜单</h3>
                            <p className="text-sm text-gray-600 mt-2">点击上方按钮，小 Qirl 为您翻译。</p>
                        </div>
                    </div>
                )}

                <div className="space-y-10 pb-4">
                    {categorizedItems.map(group => (
                        <div key={group.category} className='animate-fade-in'>
                            <div className="mb-6 pb-3 border-b-4 border-red-500/80">
                                <h2 className="text-3xl font-black text-gray-900 tracking-tight flex items-center gap-2">
                                    <ChefHat size={28} className="text-red-500"/> {cleanCategoryName(group.category)}
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {group.items.map((item) => (
                                    <div key={item.id} className="group relative bg-white border-2 border-gray-900 rounded-xl overflow-hidden shadow-[8px_8px_0_0_#A1A1AA]">
                                        <div className="bg-gradient-to-br from-amber-100 to-yellow-100 p-4 border-b-2 border-gray-900">
                                            <h3 className="text-xl font-extrabold text-gray-900 mb-1">{item.translation}</h3>
                                            <div className="text-sm text-gray-500 italic">{item.original}</div>
                                            {item.pronunciation && <div className="text-xs text-indigo-600 font-bold mt-1 bg-white px-2 py-0.5 rounded-full inline-block border border-indigo-200">{item.pronunciation}</div>}
                                        </div>
                                        <div className="p-4 space-y-3 bg-amber-50/70">
                                            <p className="text-xs text-gray-700 line-clamp-3 border-l-2 border-orange-400 pl-2">{item.desc}</p>
                                            <div className="flex justify-between items-center pt-2 border-t border-dashed border-gray-300">
                                                <span className="text-2xl font-mono font-bold text-red-600">{item.currency}{item.price}</span>
                                                <div className="flex gap-2">
                                                    <button onClick={() => playAudio(item.original, item.lang_code)} className="w-8 h-8 rounded-lg bg-gray-100 border-2 border-gray-900 flex items-center justify-center"><Volume2 size={16}/></button>
                                                    <button onClick={() => addToCart(item)} className="w-8 h-8 rounded-lg bg-orange-500 text-white border-2 border-gray-900 flex items-center justify-center"><Plus size={16}/></button>
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
                <div className="fixed inset-0 z-50 bg-amber-50/95 flex flex-col items-center justify-center animate-fade-in">
                    <Loader2 size={48} className="text-orange-500 animate-spin mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900">{scanStep}</h2>
                </div>
            )}

            {/* Cart Button */}
            {totalCartItems > 0 && (
                <button onClick={() => setShowCart(true)} className="fixed bottom-10 right-6 z-40 bg-white px-4 py-3 rounded-xl border-2 border-gray-900 shadow-[4px_4px_0_0_#444] flex items-center gap-3">
                    <div className="relative">
                        <ShoppingBag size={22} />
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-[18px] h-[18px] flex items-center justify-center rounded-full border border-white">{totalCartItems}</span>
                    </div>
                    <span className="font-black text-lg">{currencySymbol}{totalPrice}</span>
                </button>
            )}

            {/* Toast */}
            {toastMessage && (
                <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[60] p-4 bg-white rounded-xl border-2 border-gray-900 shadow-[4px_4px_0_0_#444] animate-slide-down">
                    <div className="flex items-center gap-2">
                        <Zap size={20} className="text-orange-500" />
                        <span className="font-bold">{toastMessage}</span>
                    </div>
                </div>
            )}
        </div>
    );
}