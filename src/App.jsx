import React, { useState, useEffect, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { 
	getAuth, 
	signInAnonymously, 
	onAuthStateChanged, 
	signInWithCustomToken 
} from 'firebase/auth';
import { 
	getFirestore, 
	collection, 
	addDoc, 
	deleteDoc, 
	doc, 
	onSnapshot, 
	serverTimestamp, 
	updateDoc,
	increment,
} from 'firebase/firestore';
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

// --- Firebase Config & Init ---
// WARNING: When deploying to GitHub, replace __firebase_config with your actual config object.
// Example: const firebaseConfig = { apiKey: "...", authDomain: "...", projectId: "..." };
const firebaseConfig = JSON.parse(__firebase_config);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// --- API Configuration (Siliconflow Qwen API) ---
// WARNING: Replace this key with your API key from environment variables when deploying to GitHub!
const apiKey = "sk-dyjwptqdinqigbhkinwhlofflvoidtvidcuhmidgobxnaqvd"; 
const SILICONFLOW_ENDPOINT = "https://api.siliconflow.cn/v1/chat/completions";
const QWEN_MODEL = "Qwen/Qwen3-VL-32B-Instruct";

// --- Currency Normalization Helper ---
const normalizeCurrency = (currency) => {
	if (!currency) return '¥'; // Default to Yen if missing
	const upper = currency.toUpperCase().trim();
	if (['YEN', 'JP¥', 'JPY', 'JAPANESE YEN', 'Y'].includes(upper)) return '¥';
	if (['USD', 'US$'].includes(upper)) return '$';
	if (['EUR', 'EURO'].includes(upper)) return '€';
	// If it's already a symbol, or an unknown code, return it as is.
	return currency;
};

// --- Pronunciation Formatting Helper (用于主菜单和购物车) ---
const formatPronunciation = (pronunciation) => {
	if (!pronunciation) return null;

	// 1. 分离日文和平假名/罗马音
	// 寻找模式: 日文 (罗马音)
	const regex = /(.*?)\s*\((.*?)\)/;
	const match = pronunciation.match(regex);
	
	let kana = pronunciation; // 默认是整个字符串
	let romaji = null;
	
	if (match && match.length === 3) {
		kana = match[1].trim();
		romaji = match[2].trim();
	}
	
	// 2. 尝试将罗马音分段（基于空格）
	let formattedRomaji = null;
	if (romaji) {
		// 使用空格分割，并用半角空格连接，以实现分段显示
		const parts = romaji.split(/\s+/).filter(p => p.length > 0);
		// 使用半角空格连接各部分
		formattedRomaji = parts.join(' ');
	}

	return { kana, formattedRomaji };
};

// --- Category Name Cleaner Helper (移除分类标题后面的英文) ---
const cleanCategoryName = (category) => {
    if (!category) return '';
    // Regex to find and remove content inside parentheses, including the parentheses themselves.
    return category.replace(/\s*\([^)]*\)/g, '').trim();
};


export default function AIMenuTranslator() {
	const [user, setUser] = useState(null);
	const [menuItems, setMenuItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [isScanning, setIsScanning] = useState(false);
	const [scanStep, setScanStep] = useState(''); 
	const [showCart, setShowCart] = useState(false);
	const [loading, setLoading] = useState(true);
	const fileInputRef = useRef(null);
	const [showClearConfirmation, setShowClearConfirmation] = useState(false);
	const [searchModalItem, setSearchModalItem] = useState(null); // 查看菜品模态框数据
	const [toastMessage, setToastMessage] = useState(''); // 修复: 新增自定义 Toast 消息
    const [showHistoryModal, setShowHistoryModal] = useState(false); // 历史记录模态框状态
	
	
	// --- Authentication & Data Sync ---
	useEffect(() => {
		const initAuth = async () => {
			if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
				await signInWithCustomToken(auth, __initial_auth_token);
			} else {
				await signInAnonymously(auth);
			}
		};
		initAuth();

		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});
		return () => unsubscribe();
	}, [auth]); // 添加 auth 依赖

	// Effect to auto-clear toast message
	useEffect(() => {
		if (toastMessage) {
			const timer = setTimeout(() => setToastMessage(''), 5000); // Clear after 5 seconds
			return () => clearTimeout(timer);
		}
	}, [toastMessage]);

	// Fetch Menu Items
	useEffect(() => {
		if (!user) return;
		// 路径：/artifacts/{appId}/users/{userId}/menu_items
		const q = collection(db, 'artifacts', appId, 'users', user.uid, 'menu_items');
		const unsubscribe = onSnapshot(q, (snapshot) => {
			const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
			items.sort((a, b) => (b.timestamp?.toMillis() || 0) - (a.timestamp?.toMillis() || 0));
			setMenuItems(items);
		}, (error) => console.error("Menu fetch error:", error));
		return () => unsubscribe();
	}, [user]);

	// Fetch Cart Items
	useEffect(() => {
		if (!user) return;
		const q = collection(db, 'artifacts', appId, 'users', user.uid, 'cart_items');
		const unsubscribe = onSnapshot(q, (snapshot) => {
			setCartItems(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
		}, (error) => console.error("Cart fetch error:", error));
		return () => unsubscribe();
	}, [user]);
    
    // --- Data Grouping Helper: Group by Category (Unified) ---
    const groupItemsByCategory = (items) => {
        // 此函数逻辑是正确的，它会将所有 items 统一按 category 分组
        const grouped = items.reduce((acc, item) => {
            // 使用 category 字段进行分组，如果缺失则归为“未分类”
            const category = item.category && item.category.trim() !== '' ? item.category : '未分类';
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(item);
            return acc;
        }, {});
        
        // 将分组结果转换为数组，并按一定的顺序排列 (可选，但更好看)
        const sortedKeys = Object.keys(grouped).sort((a, b) => {
            // 尝试将主菜、烧鸟等关键类别排在前面
            const aIsMain = a.includes('主菜') || a.includes('烧鸟') || a.includes('寿司');
            const bIsMain = b.includes('主菜') || b.includes('烧鸟') || b.includes('寿司');
            if (aIsMain && !bIsMain) return -1;
            if (!aIsMain && bIsMain) return 1;
            if (a.includes('甜品') && !b.includes('甜品')) return 1;
            if (!a.includes('甜品') && b.includes('甜品')) return -1;
            return a.localeCompare(b); // 其他按字母排序
        });
        
        return sortedKeys.map(key => ({
            category: key,
            items: grouped[key]
        }));
    };

    // --- Data Grouping Helper: Group by Scan Session ---
    const groupItemsBySession = (items) => {
        if (!items || items.length === 0) return [];
        
        // Sort items newest first (important for session grouping logic)
        const sortedItems = [...items].sort((a, b) => 
            (b.timestamp?.toMillis() || 0) - (a.timestamp?.toMillis() || 0)
        );

        const sessions = [];
        const sessionTimeout = 5 * 60 * 1000; // 5 minutes threshold

        // Map to keep track of menu items already added to a session
        const processedItemIds = new Set();
        
        sortedItems.forEach(item => {
            if (processedItemIds.has(item.id)) return; // Skip if already processed

            const itemTime = item.timestamp?.toMillis();
            if (!itemTime) return;

            // Start a new session centered around this item's time
            const newSession = { 
                id: item.id, // Use the newest item's ID as session ID
                name: new Date(itemTime).toLocaleString('zh-CN', { 
                    month: 'short', day: 'numeric', 
                    hour: '2-digit', minute: '2-digit' 
                }), 
                timestamp: itemTime,
                items: [],
                count: 0 
            };
            
            // Group all subsequent (older) items that fall within the timeout
            newSession.items.push(item);
            newSession.count++;
            processedItemIds.add(item.id);

            // Simple iteration to group items scanned within 5 minutes of each other.
            for (const otherItem of sortedItems) {
                if (processedItemIds.has(otherItem.id)) continue;
                const otherItemTime = otherItem.timestamp?.toMillis();
                
                if (otherItemTime && Math.abs(itemTime - otherItemTime) < sessionTimeout) {
                    newSession.items.push(otherItem);
                    newSession.count++;
                    processedItemIds.add(otherItem.id);
                }
            }
            sessions.push(newSession);
        });

        return sessions.sort((a, b) => b.timestamp - a.timestamp); // Ensure sessions are sorted newest first
    };


	// --- Image Processing & AI ---

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
					resolve(canvas.toDataURL('image/jpeg', 0.7)); // 70% quality jpeg
				};
			};
		});
	};
	
    // 重写 API 调用函数，使用 Qwen-VL 模型的 chat completions 接口
	const analyzeImageWithQwen = async (base64Image) => {
		const base64Data = base64Image.split(',')[1];
		
		// Prompt: 保持输出格式不变, 增加 "不要包含章节标题" 的指令
		const prompt = `
			You are an expert menu translator and food critic. Your task is to analyze the menu image and extract dish details, including an estimated calorie count.
			
			Identify ALL distinct dishes and their corresponding details. For each dish, return a JSON object with these fields. 
			If a field is not explicitly present or can't be reliably inferred, use an empty string "" for its value.

            IMPORTANT: Do NOT include menu section headers (like "Appetizers", "Main Course", "A la carte", "单点菜单", "Drink Menu") as distinct dish items unless they are actual purchasable items with a specific price.

			- "original": Original name of the dish (e.g. in Japanese, French, etc.)
			- "translation": High-quality, appetizing Chinese translation for a restaurant setting.
			- "pronunciation": Pronunciation guide. If Japanese, provide both the Hiragana/Katakana reading and the Romaji (Latinized spelling like "kurogewagyu") in parentheses, e.g., "くろげわぎゅう (KUROGEWAGYU)". For other languages, use phonetic spelling or Pinyin.
			- "lang_code": The ISO 639-1 language code for the "original" text (e.g., 'ja-JP', 'fr-FR').
			- "price": Numeric price (extract only the number).
			- "currency": Currency symbol (e.g. ¥, $, €, ₩, ฿) or code (e.g., YEN, USD).
			- "desc": A short, enticing description in Chinese (max 25 words).
			- "calories": An estimated number of calories for a typical serving of this dish (numeric).
            - "category": The dish's general category (e.g., 主菜 (Main Course), 烧鸟 (Yakitori), 甜品 (Dessert), 寿司 (Sushi), 饮品 (Drink)) in Chinese.

			Return ONLY a raw JSON array of dish objects. Do not include any other text or formatting outside the JSON array. Ensure the output is a valid JSON array.
		`;

		const maxRetries = 3;
		let lastError = null;

		for (let attempt = 0; attempt < maxRetries; attempt++) {
			if (attempt > 0) {
				const delay = Math.pow(2, attempt) * 1000; // Exponential backoff: 2s, 4s
				await new Promise(resolve => setTimeout(resolve, delay));
				console.log(`Retrying AI call... Attempt ${attempt + 1}`);
			}
			
			try {
				const response = await fetch(
					SILICONFLOW_ENDPOINT,
					{
						method: 'POST',
						headers: { 
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${apiKey}` // 使用 Authorization header
                        },
						body: JSON.stringify({
                            model: QWEN_MODEL,
                            messages: [
                                {
                                    role: "user",
                                    content: [
                                        { type: "text", text: prompt },
                                        { 
                                            type: "image_url", 
                                            // FIX: Wrap url in an object
                                            image_url: { 
                                                url: `data:image/jpeg;base64,${base64Data}` 
                                            } 
                                        }
                                    ]
                                }
                            ],
							temperature: 0.2, 
                            max_tokens: 2048
						})
					}
				);

				if (!response.ok) {
					const errorData = await response.json();
                    console.error("API Error Data:", errorData);
					lastError = new Error(`AI API Error: ${response.status} - ${errorData.error?.message || response.statusText}`);
					// Check for rate limit or transient errors to retry
					if (response.status === 429 || response.status >= 500) {
						continue; 
					} else {
						throw lastError; // Non-retryable error
					}
				}
				
				const data = await response.json();
				// Qwen API 的响应路径
				const text = data.choices?.[0]?.message?.content;
				
				let jsonParsed;
				try {
					// 尝试 1: 直接解析
					jsonParsed = JSON.parse(text);
				} catch (e) {
					console.warn("Initial JSON parse failed. Attempting robust extraction...", e);
					let cleanedText = text.trim();
					
					// 剥离常见的 Markdown 围栏 (```json)
					cleanedText = cleanedText.replace(/^```json\s*|```\s*$/g, '').trim();

					// 查找数组的起始和结束括号
					const firstBracket = cleanedText.indexOf('[');
					
					if (firstBracket === -1) {
						console.error("Qwen Raw Text (no valid array found):", text);
						throw new Error("Failed to parse AI response: no valid JSON array structure found.");
					}
					
					let jsonString = cleanedText.substring(firstBracket); // 从第一个 [ 开始

					// CRITICAL FIX: 主动修复截断
					let lastBracket = jsonString.lastIndexOf(']');
					if (lastBracket === -1) {
						// 缺少结束括号，尝试修复
						let repairString = jsonString.trim();
						
						// 1. 移除末尾的逗号 (常见的截断点)
						if (repairString.endsWith(',')) {
							repairString = repairString.substring(0, repairString.length - 1);
							console.warn("Repaired JSON: Removed trailing comma.");
						}
						
						// 2. 添加缺失的结束括号
						if (!repairString.endsWith(']')) {
							jsonString = repairString + ']';
							console.warn("Repaired JSON: Added missing closing bracket.");
						} else {
							jsonString = repairString;
						}
						
					} else {
						// 结束括号存在，截取完整数组
						jsonString = cleanedText.substring(firstBracket, lastBracket + 1);
					}
					
					if (jsonString.length < 5) { 
						throw new Error("Extracted JSON string is too short or empty.");
					}
					
					try {
						jsonParsed = JSON.parse(jsonString);
					} catch (e2) {
						lastError = e2;
						console.error("Qwen Raw Text (Final Parse Failed):", jsonString); 
						throw new Error("Failed to parse AI response: extracted content is invalid.");
					}
				}
				
				// 成功解析，返回结果
				return jsonParsed.filter(dish => dish.price > 0 && dish.translation);

			} catch (error) {
				lastError = error;
				// 如果是 SyntaxError 或其他非网络错误, 继续重试
				if (attempt === maxRetries - 1) {
						throw error; // Rethrow on last attempt
				}
				// 继续重试
			}
		}
		
		// 所有重试失败，抛出最后的错误
		throw lastError || new Error("Maximum retries reached without a successful AI response.");
	};

	const handleFileSelect = async (e) => {
		// 获取所有选中的文件
		const files = Array.from(e.target.files);
		if (files.length === 0 || !user) return;
        
		setIsScanning(true);
		setScanStep(`准备处理 ${files.length} 张图片...`);

		try {
			for (let i = 0; i < files.length; i++) {
				const file = files[i];
				setScanStep(`[${i + 1}/${files.length}] 正在压缩图片...`);
				
				// 检查文件大小，避免内存溢出或不必要的处理
				if (file.size > 10 * 1024 * 1024) { // 10MB limit
					setToastMessage(`文件太大 (${(file.size / 1024 / 1024).toFixed(1)}MB)，请选择小于 10MB 的图片。`);
					continue;
				}
				
				const compressedBase64 = await compressImage(file);
				
				setScanStep(`[${i + 1}/${files.length}] 小 Qirl 正在识别和翻译 (Qwen)...`);
				
				const aiResults = await analyzeImageWithQwen(compressedBase64); // 调用 Qwen 函数
				
				setScanStep(`[${i + 1}/${files.length}] 找到 ${aiResults.length} 道菜品，正在存储...`);

				// 为每道菜品存储数据
				const promises = aiResults.map(async (dish) => { 
					
					// Normalize currency symbol before saving
					const finalCurrency = normalizeCurrency(dish.currency);
					
					// 存储到 Firestore
					return addDoc(collection(db, 'artifacts', appId, 'users', user.uid, 'menu_items'), {
						...dish,
						currency: finalCurrency, // Use normalized currency
						timestamp: serverTimestamp(),
						lang_code: dish.lang_code || '',
                        category: dish.category || '', // --- NEW: Store category
						// 确保 calories 是数字或空字符串
						calories: typeof dish.calories === 'number' ? dish.calories : (parseInt(dish.calories) || ''),
					});
				});

				// 等待所有数据库写入完成
				await Promise.all(promises);
				
				// 实时反馈：图片处理完成，新菜单已在后台显示
				setToastMessage(`[${i + 1}/${files.length}] 处理完毕，新菜单已自动更新。`);
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

	const triggerFileInput = () => {
		fileInputRef.current?.click();
	};

	// --- Cart Actions ---
	const addToCart = async (item) => {
		if (!user) return;
		const existingItem = cartItems.find(c => c.menuItemId === item.id);
		
		if (existingItem) {
			const itemRef = doc(db, 'artifacts', appId, 'users', user.uid, 'cart_items', existingItem.id);
			await updateDoc(itemRef, { quantity: increment(1) });
		} else {
			await addDoc(collection(db, 'artifacts', appId, 'users', user.uid, 'cart_items'), {
				menuItemId: item.id,
				name: item.translation,
				originalName: item.original,
				pronunciation: item.pronunciation, // 添加发音到购物车
				price: item.price,
				currency: item.currency,
				quantity: 1
			});
		}
	};

	const removeFromCart = async (cartItemId) => {
		if (!user) return;
		const itemRef = doc(db, 'artifacts', appId, 'users', user.uid, 'cart_items', cartItemId);
		const currentItem = cartItems.find(c => c.id === cartItemId);

		if (currentItem && currentItem.quantity > 1) {
			await updateDoc(itemRef, { quantity: increment(-1) });
		} else {
			await deleteDoc(itemRef);
		}
	};

	const clearAllItems = async () => {
		if (!user) return;
		const menuDeletePromises = menuItems.map(item => 
			deleteDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'menu_items', item.id))
		);
		const cartDeletePromises = cartItems.map(item => 
			deleteDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'cart_items', item.id))
		);
		await Promise.all([...menuDeletePromises, ...cartDeletePromises]);
		setShowClearConfirmation(false);
		setToastMessage("菜单和订单已全部清空。");
	};
    
	// 移除了 Mock Subscription Logic
	
	// --- TTS Function using Web Speech API (即时离线发音) ---
	const playAudio = (text, langCode) => {
		if (!('speechSynthesis' in window)) {
			setToastMessage("您的浏览器不支持 Web Speech API。");
			return;
		}

		if (!text || text.trim().length < 2) {
			setToastMessage("发音内容为空或无法识别。");
			return;
		}

		const utterance = new SpeechSynthesisUtterance(text);
		
		// 1. 朗读速度设置为 0.7 (慢速)
		utterance.rate = 0.7; 

		// 尝试设置语言
		let finalLang = 'en-US'; // 默认英文
		if (langCode && langCode.toLowerCase().includes('ja')) {
			finalLang = 'ja-JP';
		} else if (langCode && langCode.toLowerCase().includes('ko')) {
			finalLang = 'ko-KR';
		} else if (langCode && langCode.toLowerCase().includes('fr')) {
			finalLang = 'fr-FR';
		}

		utterance.lang = finalLang;

		// 尝试选择一个系统提供的语音
		const voices = window.speechSynthesis.getVoices();
		const selectedVoice = voices.find(voice => voice.lang === utterance.lang);
		if (selectedVoice) {
			utterance.voice = selectedVoice;
		} else {
			// 如果没有找到特定语言的语音，尝试使用通用语音
			const generalVoice = voices.find(voice => voice.default);
			if (generalVoice) {
				utterance.voice = generalVoice;
			}
		}


		// 停止任何正在进行的语音
		if (window.speechSynthesis.speaking) {
			window.speechSynthesis.cancel();
		}

		// 播放
		try {
			window.speechSynthesis.speak(utterance);
		} catch (e) {
			console.error("Speech Synthesis Error:", e);
			setToastMessage("发音失败。浏览器可能阻止了自动播放，请点击屏幕后重试。");
		}
	};

	// --- Render ---
    // --- 增加前端过滤：排除 "单点菜单" 等标题 ---
    const validMenuItems = menuItems.filter(item => {
        const blacklist = ['单点菜单', '菜单目录', 'Menu', 'A la carte', 'アラカルト', 'À la carte'];
        
        // 1. 检查翻译名是否包含黑名单词汇
        if (blacklist.some(b => item.translation?.includes(b))) return false;
        // 2. 检查原名是否完全匹配（忽略大小写）
        if (blacklist.some(b => item.original?.trim().toLowerCase().includes(b.toLowerCase()))) return false;
        
        return true;
    });

	const categorizedItems = groupItemsByCategory(validMenuItems); // Grouped and sorted items
    const scanSessions = groupItemsBySession(validMenuItems); // Grouped items by scan time
	const totalCartItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
	// 从购物车中任意一项获取货币单位，默认为 ¥
	const currencySymbol = cartItems.length > 0 ? cartItems[0].currency : '¥';
	const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0); 

	// 背景改为浅米色/奶油白
	if (loading) return <div className="flex items-center justify-center h-screen bg-amber-50 text-gray-800"><Loader2 className="animate-spin mr-2"/> 初始化 食神 Qirl...</div>;

	return (
		// 主背景改为浅米色/奶油白 (bg-amber-50)
		<div className="min-h-screen bg-amber-50 text-gray-800 font-sans pb-28 relative overflow-hidden">
			{/* Hidden File Input (移除 capture="environment" 以确保能选择相册) */}
			<input 
				type="file" 
				ref={fileInputRef} 
				onChange={handleFileSelect} 
				accept="image/*" 
				multiple // 允许选择多张图片
				className="hidden" 
			/>

			{/* Decorative Background: 柔和的圆形装饰 - 颜色回归活力橙/红 */}
			<div className="fixed top-[-10%] right-[-10%] w-64 h-64 bg-red-200/50 rounded-full blur-3xl pointer-events-none" />
			<div className="fixed bottom-[-10%] left-[-10%] w-80 h-80 bg-orange-200/50 rounded-full blur-3xl pointer-events-none" />

			{/* Header (明亮风格, 粗描边) */}
			<div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b-2 border-gray-900 px-4 py-3 flex justify-between items-center shadow-lg">
				<div className="flex items-center gap-2">
					{/* 颜色修改：回归 from-rose-500 to-orange-500 */}
					<div className="bg-gradient-to-tr from-rose-500 to-orange-500 p-2 rounded-lg shadow-md border-2 border-gray-900 shadow-[2px_2px_0_0_#444]">
						<ChefHat size={20} className="text-white" />
					</div>
					<h1 className="text-xl font-extrabold text-gray-900 tracking-wider">
						食神 Qirl
					</h1>
				</div>
				<div className="flex items-center gap-3">
                    {/* 新增: 历史记录按钮 */}
                    {menuItems.length > 0 && (
                        <button
                            onClick={() => setShowHistoryModal(true)}
                            className="text-xs text-gray-700 hover:text-blue-600 transition-colors px-2 py-1 flex items-center gap-1 border-2 border-gray-900 rounded-lg shadow-[2px_2px_0_0_#444] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
                        >
                            <BookMarked size={14} /> 历史
                        </button>
                    )}
					{menuItems.length > 0 && (
						<button 
							onClick={() => setShowClearConfirmation(true)}
							className="text-xs text-gray-700 hover:text-red-600 transition-colors px-2 py-1 flex items-center gap-1 border-2 border-gray-900 rounded-lg shadow-[2px_2px_0_0_#444] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
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
					<div className="flex flex-col items-center justify-center mt-24 text-center space-y-6 opacity-90 animate-fade-in">
						<div 
							onClick={triggerFileInput}
							// 按钮手绘风格
							className="w-24 h-24 bg-white rounded-xl flex items-center justify-center border-2 border-gray-900 shadow-[6px_6px_0_0_#A1A1AA] cursor-pointer hover:shadow-[8px_8px_0_0_#71717A] transition-all group"
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
                
                {/* 新增: Mini Program 风格搜索栏 (Mock) */}
                {menuItems.length > 0 && !isScanning && (
                    <div 
                        onClick={() => setToastMessage("请点击菜品卡片上的 '查看菜品' 按钮进行搜索")}
                        className="mb-8 p-3 bg-white rounded-xl border-2 border-gray-900 shadow-[3px_3px_0_0_#444] flex items-center gap-2 cursor-pointer hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                    >
                        <Search size={18} className='text-gray-500'/>
                        <span className='text-gray-500 text-sm'>搜索已翻译的菜品... (点击菜品卡片查看详情)</span>
                    </div>
                )}


				{/* Menu Grid (Grouped) */}
				<div className="space-y-10 pb-4">
					{categorizedItems.map(group => (
						<div key={group.category} className='animate-fade-in'>
							{/* Category Header */}
							<div className="mb-6 pb-3 border-b-4 border-red-500/80">
								<h2 className="text-3xl font-black text-gray-900 tracking-tight flex items-center gap-2">
									<ChefHat size={28} className="text-red-500"/>
									{cleanCategoryName(group.category)}
								</h2>
								<p className='text-sm text-gray-500 mt-1'>共 {group.items.length} 道菜品</p>
							</div>
							
							{/* Items in this Category */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
								{group.items.map((item) => {
									
									const pronunciationParts = formatPronunciation(item.pronunciation);
									
									return (
										// 深度美化后的手绘卡片
										<div key={item.id} className="group relative bg-white border-2 border-gray-900 rounded-xl overflow-hidden transition-all duration-100 shadow-[8px_8px_0_0_#A1A1AA] hover:shadow-[10px_10px_0_0_#71717A]">
											
											{/* 标题背景层 - 模拟手绘标签 (杏黄色/米黄色) */}
											<div className="bg-gradient-to-br from-amber-100 to-yellow-100 p-4 border-b-2 border-gray-900">
												<h3 className="text-xl font-extrabold text-gray-900 leading-tight mb-1">{item.translation}</h3>
												<div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mt-1">
													<span className="italic font-medium text-gray-700">{item.original}</span>
													
													{/* 平假名/罗马音 - 分段显示 */}
													{pronunciationParts && (
														<div className="flex flex-wrap items-center gap-1.5 text-sm font-semibold uppercase tracking-tight bg-white px-2 py-0.5 rounded-full border border-indigo-200 shadow-sm">
			 		 									{/* 原始文本 (kana): 深靛蓝 */}
			 		 									<span className='text-xs font-medium text-indigo-800'>{pronunciationParts.kana}</span>
			 		 									{pronunciationParts.formattedRomaji && (
			 		 										// 罗马音 (romaji): 浅靛蓝 
			 		 										<span className='text-[11px] font-semibold text-indigo-600'>
			 		 											({pronunciationParts.formattedRomaji})
			 		 										</span>
			 		 									)}
														</div>
													)}
												</div>
											</div>

											{/* 内容区域 - 模拟纸张叠加 */}
											<div className="p-4 pt-3 space-y-3 bg-amber-50/70">
												<p className="text-xs text-gray-700 line-clamp-3 leading-relaxed border-l-2 border-orange-400 pl-2">
													{item.desc}
												</p>

												{/* 价格与卡路里标签 - 模拟手绘印章 */}
												<div className="flex justify-between items-center font-mono font-bold pt-2 border-t border-dashed border-gray-300">
													<div className='flex flex-col items-start'>
														<span className="text-2xl tracking-tight text-red-600">
															{item.currency}{item.price} {/* 确保使用货币符号 */}
														</span>
														{item.calories && (
															<span className="text-xs text-gray-600 mt-1 flex items-center gap-1">
																<Zap size={12} className='text-yellow-600 fill-yellow-600' />
																约 {item.calories} **千卡**
															</span>
														)}
													</div>
													
													{/* '查看菜品' 按钮 (弹出模态框) */}
													<button 
														onClick={() => setSearchModalItem(item)}
														className="px-3 py-2 text-sm font-medium rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all flex items-center gap-1 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none border-2 border-gray-900 shadow-[3px_3px_0_0_#444] leading-none"
													>
														<Search size={16} /> 
														查看菜品
													</button>
												</div>

												{/* Actions */}
												<div className="flex items-center justify-between pt-3 mt-1 border-t border-gray-200">
													{/* 发音按钮 - 修正留白，使用 w-10 h-10 固定尺寸确保对齐 */}
													<button 
														onClick={() => playAudio(item.original, item.lang_code)} // playAudio只需要text和langCode
														className="w-10 h-10 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200 transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none flex items-center justify-center text-xs font-medium border-2 border-gray-900 shadow-[2px_2px_0_0_#444]"
													>
														<Volume2 size={18} />
													</button>

													{/* 按钮颜色修改：回归 from-orange-500 to-red-500 */}
													<button 
														onClick={() => addToCart(item)}
														className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-sm transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none border-2 border-gray-900 shadow-[3px_3px_0_0_#444] flex items-center gap-2 leading-none"
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
            
            {/* 移除了 Premium Upgrade CTA */}


			{/* Scanning Overlay (美化后的手绘风识别界面) */}
			<div className="fixed inset-0 z-50 bg-amber-50/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 animate-fade-in" style={{ display: isScanning ? 'flex' : 'none' }}>
				
					<div className="relative w-40 h-40 mb-8 flex items-center justify-center">
						{/* 外部柔和光环 */}
						<div className="absolute w-full h-full bg-red-200 rounded-full blur-2xl opacity-60 animate-pulse-slow" />
						
						{/* 手绘感厨师帽/思考泡泡 - 3D 立体感强化 */}
						<div className="relative w-32 h-32 bg-white rounded-full flex items-center justify-center border-4 border-gray-900 shadow-[6px_6px_0_0_#444] transform transition-transform animate-breathe">
							<BookMarked size={48} className="text-orange-500 animate-jump-and-spin" />
							{/* 模拟扫描动画 - 移除所有黄色/闪烁光圈 */}
						</div>
					</div>
					
					<h2 className="text-2xl font-extrabold text-gray-900 mb-3">小 Qirl 正在识别</h2>
					{/* 状态信息栏改回橙色调 */}
					<div className="flex items-center gap-2 text-orange-600 font-mono text-sm bg-orange-100 px-3 py-1 rounded-full border border-orange-300">
						<Loader2 size={14} className="animate-spin" />
						{scanStep}
					</div>
				</div>

			{/* FAB (Camera Button) */}
			<div className="fixed bottom-8 left-0 right-0 flex justify-center z-40 pointer-events-none">
				<button
					onClick={triggerFileInput}
					disabled={isScanning}
					className="pointer-events-auto group relative flex items-center justify-center"
				>
					{/* 按钮颜色修改：回归 from-orange-500 to-red-500 */}
					 <div className="absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
					 <div className="relative w-20 h-20 bg-gradient-to-tr from-orange-500 to-red-500 text-white rounded-full shadow-[6px_6px_0_0_#444] flex items-center justify-center transform transition-all hover:scale-105 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none border-4 border-gray-900">
						 <Camera size={32} className="drop-shadow-lg" />
					 </div>
				</button>
			</div>

			{/* Cart Summary Bubble */}
			{totalCartItems > 0 && (
				<button 
					onClick={() => setShowCart(true)}
					className="fixed bottom-10 right-6 z-40 bg-white text-gray-900 px-4 py-3 rounded-xl shadow-[4px_4px_0_0_#444] flex items-center gap-3 hover:bg-gray-100 transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none border-2 border-gray-900"
				>
					<div className="relative">
						<ShoppingBag size={22} className="text-gray-800" />
						{/* 颜色修改：回归 bg-red-600 */}
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

			{/* Cart Modal (已增大 max-h-[95vh] 优化高度) */}
			{showCart && (
				<div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 animate-fade-in">
					<div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowCart(false)} />
					
					{/* 模态框背景改为白色, 优化高度 */}
					<div className="bg-white w-full max-w-md rounded-xl p-4 sm:p-6 relative z-50 border-2 border-gray-900 shadow-[6px_6px_0_0_#71717A] animate-slide-up max-h-[95vh] flex flex-col">
						{/* Handle for mobile drag */}
						<div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4 sm:mb-6 sm:hidden" />
						
						{/* 标题区 */}
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

						{/* 滚动区 - 菜品列表 */}
						<div className="flex-1 overflow-y-auto space-y-3 pr-1">
							{cartItems.length === 0 ? (
								<div className="text-center py-8 text-gray-500">
									<ShoppingBag size={40} className="mx-auto text-gray-300 mb-3" />
									<p>您的餐盘还在等待美食...</p>
								</div>
							) : (
								cartItems.map((item) => (
									// 购物车卡片紧凑化：缩小 padding, 移除 hover 效果
									<div key={item.id} className="flex justify-between items-start bg-gray-50 p-2 rounded-lg border-2 border-gray-900 shadow-[2px_2px_0_0_#444]">
										<div className='max-w-[65%] leading-tight'>
											{/* 原名和中文名缩小 */}
											<div className="font-extrabold text-gray-900 text-base">{item.originalName}</div>
											<div className="text-sm font-medium text-gray-800">{item.name}</div>
											
											{/* --- 重新添加发音信息 (最小字体，确保显示) --- */}
											{item.pronunciation && (
												<div className="text-xs text-indigo-600 font-mono leading-tight mt-0.5">
                                                    {item.pronunciation}
                                                </div>
											)}
											{/* --- 价格保持紧凑 --- */}
											<div className="text-red-600 font-mono font-bold text-sm mt-0.5">
												{item.currency}{item.price * item.quantity}
											</div>
										</div>
										{/* 数量调整按钮紧凑化 */}
										<div className="flex items-center gap-2 bg-white rounded-md px-1 py-0.5 border-2 border-gray-900 shadow-[1px_1px_0_0_#444] flex-shrink-0">
											<button 
												onClick={() => removeFromCart(item.id)}
												className="w-6 h-6 rounded-sm bg-gray-200 hover:bg-red-500/20 text-gray-700 hover:text-red-600 flex items-center justify-center transition-colors border-2 border-gray-900 shadow-[0.5px_0.5px_0_0_#444] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
											>
												{item.quantity === 1 ? <Trash2 size={12} /> : <Minus size={12} />}
											</button>
											<span className="text-sm font-bold w-3 text-center">{item.quantity}</span>
											<button 
												onClick={() => addToCart(menuItems.find(m => m.id === item.menuItemId))} // 找到原始菜单项进行添加
												className="w-6 h-6 rounded-sm bg-gray-200 hover:bg-green-500/20 text-gray-700 hover:text-green-600 flex items-center justify-center transition-colors border-2 border-gray-900 shadow-[0.5px_0.5px_0_0_#444] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
											>
												<Plus size={12} />
											</button>
										</div>
									</div>
								))
							)}
						</div>

						{/* 底部结算区紧凑化 */}
						<div className="mt-4 pt-3 border-t-2 border-gray-200">
							<div className="flex justify-between items-center mb-4">
								<span className="text-sm text-gray-500">预计总额</span>
								{/* 总金额缩小 */}
								<span className="text-2xl font-black text-gray-900 tracking-tight">
									<span className="text-sm text-gray-500 font-normal mr-0.5">~</span>
									{currencySymbol}{totalPrice}
								</span>
							</div>
							<button 
								// 确认下单按钮缩小
								className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-bold text-base shadow-[3px_3px_0_0_#444] hover:shadow-[4px_4px_0_0_#444] transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none border-2 border-gray-900"
								onClick={() => {
									setShowCart(false); // Close cart first
									setToastMessage("订单已生成！服务员将很快为您服务。");
								}}
							>
								确认下单
							</button>
						</div>
					</div>
				</div>
			)}

			{/* History Modal (新添加) */}
            {showHistoryModal && (
				<div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 animate-fade-in">
					<div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowHistoryModal(false)} />
					
					<div className="bg-white w-full max-w-md rounded-xl p-6 relative z-50 border-2 border-gray-900 shadow-[6px_6px_0_0_#71717A] animate-slide-up max-h-[85vh] flex flex-col">
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
                                        <h3 className='font-bold text-gray-900 text-lg mb-1'>
                                            {session.name}
                                        </h3>
                                        <p className='text-sm text-gray-600'>
                                            共识别 {session.count} 道菜品。
                                        </p>
                                        <p className='text-xs text-gray-400 mt-2'>
                                            {/* 显示前三个菜品名称作为预览 */}
                                            预览: {session.items.slice(0, 3).map(i => i.translation).join('、')}
                                            {session.items.length > 3 ? '...' : ''}
                                        </p>
                                        <button 
                                            onClick={() => setToastMessage("点击菜品卡片即可查看或点餐！")}
                                            className='mt-3 text-xs text-blue-500 font-medium hover:text-blue-700'
                                        >
                                            [当前已显示在主菜单]
                                        </button>
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
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
					<div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowClearConfirmation(false)} />
					<div className="bg-white rounded-xl p-8 relative z-50 border-2 border-gray-900 shadow-[6px_6px_0_0_#71717A] max-w-sm w-full text-center">
						<h3 className="text-xl font-bold text-gray-900 mb-4">确认清空菜单？</h3>
						<p className="text-gray-600 mb-6">您确定要删除所有扫描的菜单项和购物车内容吗？此操作不可撤销。</p>
						<div className="flex justify-center gap-4">
							<button
								onClick={() => setShowClearConfirmation(false)}
								className="px-6 py-2 border-2 border-gray-900 rounded-lg text-gray-900 bg-gray-200 hover:bg-gray-300 transition-all shadow-[2px_2px_0_0_#444] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
							>
								取消
							</button>
							<button
								onClick={clearAllItems}
								// 按钮颜色修改：回归 bg-red-500
								className="px-6 py-2 border-2 border-gray-900 rounded-lg text-white bg-red-500 hover:bg-red-600 transition-all shadow-[2px_2px_0_0_#444] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
							>
								清空全部
							</button>
						</div>
					</div>
				</div>
			)}
			
			{/* Search Modal (查看菜品 - 使用 iframe 内嵌图片搜索) */}
			{searchModalItem && (
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
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
								<p className="text-sm text-gray-500 mb-1">正在搜索的关键词:</p>
								<div className="font-extrabold text-xl text-gray-900">{searchModalItem.original} ({searchModalItem.translation})</div>
						</div>

						{/* iframe 内嵌图片搜索结果 */}
						<div className="flex-1 border-2 border-gray-900 rounded-lg overflow-hidden shadow-inner bg-gray-100">
								<iframe 
										// 构造 Bing 图片搜索链接。使用 item.original 作为主要关键词
										src={`https://www.bing.com/images/search?q=${encodeURIComponent(searchModalItem.original)}&FORM=RESTAB`} 
										title={`Image Search for ${searchModalItem.original}`}
										className="w-full h-full border-0"
										// 尝试用 CSS Mask 隐藏顶部导航栏，使其更像原生图片浏览器
										style={{ 
												maskImage: 'linear-gradient(to bottom, transparent 40px, black 60px)',
												WebkitMaskImage: 'linear-gradient(to bottom, transparent 40px, black 60px)'
										}}
								/>
						</div>

						<p className='text-xs text-gray-500 mt-3 text-center'>
								* 图片搜索结果由外部搜索引擎提供，可能存在偏差。
						</p>
					</div>
				</div>
			)}
			
			{/* --- Custom Toast/Message Box --- */}
			{toastMessage && (
				<div className="fixed top-20 left-1/2 -translate-x-1/2 z-[60] p-4 bg-white rounded-xl shadow-[4px_4px_0_0_#444] border-2 border-gray-900 animate-slide-down pointer-events-auto max-w-xs sm:max-w-sm">
					<div className="flex items-center gap-3">
						<Zap size={20} className="text-orange-500 fill-orange-500" />
						<p className="text-sm font-medium text-gray-800">{toastMessage}</p>
					</div>
				</div>
			)}
			
			{/* CSS Animations (Required for Hand-Drawn Style) */}
			<style>{`
				/* 1. Hand-Drawn Shadow/Line Animations */
				@keyframes pulse-slow {
					0%, 100% { opacity: 0.6; transform: scale(1); }
					50% { opacity: 0.9; transform: scale(1.05); }
				}

				/* 2. Chef Hat/BookMarked Icon Animation (跳动和旋转) */
				@keyframes jump-and-spin {
						0%, 100% { 
								transform: translateY(0) scale(1) rotate(0deg); 
						}
						25% { 
								transform: translateY(-5px) scale(1.02) rotate(3deg); /* 更小的跳动 */
						}
						75% { 
								transform: translateY(-2px) scale(0.99) rotate(-3deg); /* 更小的下沉 */
						}
				}
				
				/* 3. Quick Flash Scan Line (用于扫描时的小光线) */
				@keyframes flash-quick {
						0% { transform: translateY(0%) scaleX(0.1); opacity: 0; }
						10% { opacity: 1; }
						50% { transform: translateY(100%) scaleX(0.8); opacity: 0.5; }
						90% { opacity: 1; }
						100% { transform: translateY(0%) scaleX(0.1); opacity: 0; }
				}
				
				/* 4. Breathe Animation (Subtle scale change for 3D effect) */
				@keyframes breathe {
						0%, 100% { transform: scale(1); box-shadow: 6px 6px 0 0 #444; }
						50% { transform: scale(1.02); box-shadow: 8px 8px 0 0 #444; }
				}

				/* 5. Custom Toast Slide Down Animation */
				@keyframes slide-down {
					from { transform: translate(-50%, -100%); opacity: 0; }
					to { transform: translate(-50%, 0); opacity: 1; }
				}

				/* Apply custom animation classes */
				.animate-pulse-slow {
						animation: pulse-slow 5s infinite ease-in-out; /* 调整为 5s，更慢 */
				}
				.animate-jump-and-spin {
						animation: jump-and-spin 2s infinite ease-in-out; /* 调整为 2s，更慢 */
				}
				.animate-flash-quick {
						animation: flash-quick 3s infinite ease-out; /* 调整为 3s，更慢更柔和 */
				}
				.animate-breathe {
						animation: breathe 2s infinite ease-in-out;
				}
				.animate-slide-down {
					animation: slide-down 0.3s ease-out forwards;
				}
				
				/* Transition for active button state (手绘按钮点击效果) */
				.active\\:translate-x-0\\.5:active {
						transform: translate(0.5px, 0.5px);
				}
				.active\\:translate-y-0\\.5:active {
						transform: translate(0.5px, 0.5px);
				}
				.active\\:shadow-none:active {
						box-shadow: none !important;
				}
			`}</style>
		</div>
	);
}