import { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  MapPin, 
  Image as ImageIcon, 
  Navigation, 
  Compass, 
  Newspaper, 
  Maximize2, 
  Minimize2,
  AlertTriangle, 
  Languages, 
  Check, 
  CheckCheck,
  Copy,
  Loader2,
  ExternalLink,
  ChevronRight,
  Route,
  RotateCcw,
  Expand,
  Shrink,
  Fullscreen,
  Columns2,
  ShieldCheck,
  ArrowUpRight,
  Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getGeminiResponse, type InChatMapData, type InChatImage } from '../services/geminiService';
import type { TripItinerary } from '../services/copilotService';
import { chatMemory, type StoredChatMessage } from '../services/chatMemoryService';
import { 
  startVoiceRecognition, 
  speakMessage, 
  stopSpeaking, 
  isSpeechRecognitionSupported, 
  isSpeechSynthesisSupported 
} from '../services/speechService';
import { UP_NEWS_UPDATES, type UPNewsEvent } from '../services/uttarPradeshService';
import { type DistrictCrowdStatus, type ScrapedNewsItem } from '../services/newsScraperService';

interface ChatPanelProps {
  theme: 'morning' | 'evening';
  language: 'en' | 'hi';
  onLanguageChange: (lang: 'en' | 'hi') => void;
  onFocusMapLocation?: (coords: [number, number], routeWaypoints?: [number, number][]) => void;
  layoutMode?: 'split' | 'fullchat' | 'fullmap' | 'news';
  onSwitchToMap?: () => void;
  onToggleFullScreen?: () => void;
  isWindowFullScreen?: boolean;
  onToggleWindowFullScreen?: () => void;
  externalPrompt?: string | null;
  onClearExternalPrompt?: () => void;
  activeItinerary?: TripItinerary | null;
  onUpdateItinerary?: (itinerary: TripItinerary) => void;
  onToggleCopilotDrawer?: () => void;
}

interface Message {
  id: number;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  images?: InChatImage[];
  mapData?: InChatMapData;
  copilotItinerary?: TripItinerary;
  newsItems?: UPNewsEvent[];
  districtCrowdStatus?: DistrictCrowdStatus;
  scrapedNews?: ScrapedNewsItem[];
  isSpeaking?: boolean;
}

export function ChatPanel({
  theme,
  language,
  onLanguageChange,
  onFocusMapLocation,
  layoutMode = 'split',
  onSwitchToMap,
  onToggleFullScreen,
  isWindowFullScreen,
  onToggleWindowFullScreen,
  externalPrompt,
  onClearExternalPrompt,
  activeItinerary,
  onUpdateItinerary,
  onToggleCopilotDrawer
}: ChatPanelProps) {
  const [sessionId, setSessionId] = useState<string>(() => chatMemory.getOrCreateActiveSessionId());
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [speechRecognitionInstance, setSpeechRecognitionInstance] = useState<any>(null);
  const [speakingMessageId, setSpeakingMessageId] = useState<number | null>(null);
  const [activeImageLightbox, setActiveImageLightbox] = useState<InChatImage | null>(null);
  const [showNewsBanner, setShowNewsBanner] = useState(false);
  const [copiedMessageId, setCopiedMessageId] = useState<number | null>(null);
  const [isBrowserFullScreen, setIsBrowserFullScreen] = useState(false);

  useEffect(() => {
    const handler = () => {
      setIsBrowserFullScreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  const toggleBrowserFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  const handleCopyMessage = (msg: Message) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(msg.content);
      setCopiedMessageId(msg.id);
      setTimeout(() => setCopiedMessageId(null), 2000);
    }
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messageIdCounter = useRef(2);

  // Restore messages from persistent session memory or initialize greeting
  useEffect(() => {
    const saved = chatMemory.loadSession(sessionId);
    if (saved && saved.messages && saved.messages.length > 0) {
      setMessages(saved.messages.map(m => ({
        ...m,
        timestamp: new Date(m.timestamp)
      })));
      const maxId = saved.messages.reduce((max, m) => Math.max(max, m.id), 1);
      messageIdCounter.current = maxId + 1;
    } else {
      const greeting = language === 'hi'
        ? `🙏 **नमस्ते! घूमो इंडिया (Ghumo India) में आपका स्वागत है!**

मैं **घूमो AI (Ghumo AI)** हूँ, आपकी बुद्धिमान यात्रा और धरोहर साथी — **टीम सृजन (Team Srajan)** द्वारा **AI Synergy Hackathon Problem 4 (Tourism Track)** के लिए विकसित।

मैं आपको मध्य प्रदेश के अनदेखे पुरातात्विक चमत्कारों (बटेश्वर 200 मंदिर, मितावली चौसठ योगिनी, गढ़ी पढ़ावली, ककनमठ सुहानिया), ऐतिहासिक किलों (ग्वालियर किला, ओरछा पैलेस) एवं देश के प्रमुख तीर्थों व धरोहरों के प्रमाणित स्रोत, समयबद्ध यात्रा योजना, फोटोग्राफी और सड़क मार्ग की पूरी जानकारी प्रदान करती हूँ।

_आप मुझसे किसी भी धरोहर का इतिहास, रूट मैप, टाइमलाइन अथवा यात्रा सलाह पूछ सकते हैं या बोलकर संवाद कर सकते हैं!_`
        : `🙏 **Namaste & Welcome to Ghumo India!**

I am **Ghumo AI**, your intelligent travel & heritage companion built by **Team Srajan** for **AI Synergy Hackathon Problem 4 Track Tourism (Beyond the Fort)**.

I guide you through Madhya Pradesh's hidden archaeological wonders (Bateshwar 200 Temples, Mitawali Chausath Yogini, Garhi Padhavali, Kakanmath), royal corridors (Gwalior Fort, Orchha, Chanderi), and India's heritage circuits with grounded sources, time-aware itineraries, and verified travel feasibility.

_Ask me anything in English or Hindi, request routes & heritage photos, or use the microphone to speak!_`;

      const initialMsg: Message = {
        id: 1,
        type: 'ai',
        content: greeting,
        timestamp: new Date(),
      };
      setMessages([initialMsg]);
      chatMemory.appendMessage(sessionId, {
        id: initialMsg.id,
        type: initialMsg.type,
        content: initialMsg.content,
        timestamp: initialMsg.timestamp.toISOString()
      }, activeItinerary);
    }
  }, [sessionId]);

  // If user changes language and hasn't started a dialogue yet, update greeting
  useEffect(() => {
    if (messages.length === 1 && messages[0].type === 'ai') {
      const greeting = language === 'hi'
        ? `🙏 **नमस्ते! घूमो इंडिया (Ghumo India) में आपका स्वागत है!**

मैं **घूमो AI (Ghumo AI)** हूँ, आपकी बुद्धिमान यात्रा और धरोहर साथी — **टीम सृजन (Team Srajan)** द्वारा **AI Synergy Hackathon Problem 4 (Tourism Track)** के लिए विकसित।

मैं आपको मध्य प्रदेश के अनदेखे पुरातात्विक चमत्कारों (बटेश्वर 200 मंदिर, मितावली चौसठ योगिनी, गढ़ी पढ़ावली, ककनमठ सुहानिया), ऐतिहासिक किलों (ग्वालियर किला, ओरछा पैलेस) एवं देश के प्रमुख तीर्थों व धरोहरों के प्रमाणित स्रोत, समयबद्ध यात्रा योजना, फोटोग्राफी और सड़क मार्ग की पूरी जानकारी प्रदान करती हूँ।

_आप मुझसे किसी भी धरोहर का इतिहास, रूट मैप, टाइमलाइन अथवा यात्रा सलाह पूछ सकते हैं या बोलकर संवाद कर सकते हैं!_`
        : `🙏 **Namaste & Welcome to Ghumo India!**

I am **Ghumo AI**, your intelligent travel & heritage companion built by **Team Srajan** for **AI Synergy Hackathon Problem 4 Track Tourism (Beyond the Fort)**.

I guide you through Madhya Pradesh's hidden archaeological wonders (Bateshwar 200 Temples, Mitawali Chausath Yogini, Garhi Padhavali, Kakanmath), royal corridors (Gwalior Fort, Orchha, Chanderi), and India's heritage circuits with grounded sources, time-aware itineraries, and verified travel feasibility.

_Ask me anything in English or Hindi, request routes & heritage photos, or use the microphone to speak!_`;

      const initialMsg: Message = {
        id: 1,
        type: 'ai',
        content: greeting,
        timestamp: new Date(),
      };
      setMessages([initialMsg]);
      chatMemory.appendMessage(sessionId, {
        id: initialMsg.id,
        type: initialMsg.type,
        content: initialMsg.content,
        timestamp: initialMsg.timestamp.toISOString()
      }, activeItinerary);
    }
  }, [language]);

  // Handle external prompt dispatched from map popup
  useEffect(() => {
    if (externalPrompt && externalPrompt.trim()) {
      handleUserSendMessage(externalPrompt);
      onClearExternalPrompt?.();
    }
  }, [externalPrompt]);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Quick Action Chips in active language
  const quickActions = language === 'hi' ? [
    { id: 1, label: '🏛️ बटेश्वर व मितावली 4 घंटे हेरिटेज रूट', query: 'ग्वालियर से बटेश्वर और मितावली चौसठ योगिनी मंदिर का 4 घंटे का हेरिटेज रूट और इतिहास बताएं।' },
    { id: 2, label: '⏱️ 20 मिनट लेट हूँ, रीप्लान करें', query: 'मैं 20 मिनट लेट चल रहा हूँ, कृपया मेरी यात्रा का समय रीशेड्यूल करें और वापसी का ध्यान रखें।' },
    { id: 3, label: '🏰 ग्वालियर किला व पढ़ावली नक्काशी ट्रेल', query: 'ग्वालियर किला और गढ़ी पढ़ावली के मध्ययुगीन स्थापत्य व नक्काशी का विस्तृत रूट व टाइमलाइन प्लान बनाएं।' },
    { id: 4, label: '🛕 ककनमठ शिव मंदिर (मुरैना) की वास्तुकला', query: 'ककनमठ शिव मंदिर सुहानिया (मुरैना) की बिना गारे की वास्तुकला, पहुंचने का मार्ग और सुरक्षा सलाह बताएं।' },
    { id: 5, label: '👑 ओरछा राजमहल व राम राजा मंदिर यात्रा', query: 'ओरछा के राजमहल, जहाँगीर महल और राम राजा मंदिर का एक दिवसीय संपूर्ण यात्रा प्लान बनाएं।' },
    { id: 6, label: '🌿 म.प्र. की अनदेखी धरोहरें (कोषकमहल चंदेरी)', query: 'मध्य प्रदेश की अनदेखी ऐतिहासिक धरोहरें जैसे कोषकमहल (चंदेरी), दुबकुंड और बटेश्वर की सूची व विवरण दें।' }
  ] : [
    { id: 1, label: '🏛️ 4h Bateshwar & Mitawali Circuit', query: 'Plan a 4-hour heritage circuit from Gwalior covering Bateshwar (200 temples) and Mitawali Chausath Yogini.' },
    { id: 2, label: '⏱️ Running 20m Late, Replan', query: 'I am running 20 minutes late, please replan my itinerary to protect my return deadline.' },
    { id: 3, label: '🏰 Gwalior Fort & Padhavali Trail', query: 'Create a curated trail from Gwalior Fort to Garhi Padhavali covering medieval architecture and friezes.' },
    { id: 4, label: '🛕 Kakanmath (Morena) Mortarless Shiva Temple', query: 'Tell me about Kakanmath Shiva Temple in Morena, its mortarless dry masonry, route access, and timings.' },
    { id: 5, label: '👑 Orchha Palaces & Ram Raja Temple', query: 'Plan a day itinerary for Orchha covering Orchha Palace Complex, Chaturbhuj Temple, and Ram Raja Temple.' },
    { id: 6, label: '🌿 Lesser-Known MP Heritage (Chanderi & Bateshwar)', query: 'Show me lesser-known heritage wonders of Madhya Pradesh including Koshak Mahal Chanderi and Bateshwar.' }
  ];

  const getNextId = () => {
    const id = messageIdCounter.current;
    messageIdCounter.current += 1;
    return id;
  };

  // Send Message Handler
  const handleUserSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    // Add user message
    const userMsg: Message = {
      id: getNextId(),
      type: 'user',
      content: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Save user message to persistent session memory
    chatMemory.appendMessage(sessionId, {
      id: userMsg.id,
      type: userMsg.type,
      content: userMsg.content,
      timestamp: userMsg.timestamp.toISOString()
    }, activeItinerary);

    // Prepare history
    const history = messages.slice(-6).map(m => ({
      role: m.type === 'user' ? 'user' : 'model',
      content: m.content
    }));

    try {
      const aiResponse = await getGeminiResponse(text, history, language);

      const assistantMsg: Message = {
        id: getNextId(),
        type: 'ai',
        content: aiResponse.text,
        timestamp: new Date(),
        images: aiResponse.images,
        mapData: aiResponse.mapData,
        copilotItinerary: aiResponse.copilotItinerary,
        newsItems: aiResponse.newsItems,
        districtCrowdStatus: aiResponse.districtCrowdStatus,
        scrapedNews: aiResponse.scrapedNews
      };

      setMessages(prev => [...prev, assistantMsg]);

      // Save assistant message to persistent session memory
      chatMemory.appendMessage(sessionId, {
        id: assistantMsg.id,
        type: assistantMsg.type,
        content: assistantMsg.content,
        timestamp: assistantMsg.timestamp.toISOString(),
        images: assistantMsg.images,
        mapData: assistantMsg.mapData,
        copilotItinerary: assistantMsg.copilotItinerary,
        newsItems: assistantMsg.newsItems,
        districtCrowdStatus: assistantMsg.districtCrowdStatus,
        scrapedNews: assistantMsg.scrapedNews
      }, aiResponse.copilotItinerary || activeItinerary);

      // If response includes Copilot itinerary, notify parent and update active itinerary
      if (aiResponse.copilotItinerary && onUpdateItinerary) {
        onUpdateItinerary(aiResponse.copilotItinerary);
      }

      // If response includes map data, auto notify main map
      if (aiResponse.mapData && onFocusMapLocation) {
        onFocusMapLocation(aiResponse.mapData.center, aiResponse.mapData.routePath);
      }

    } catch (err) {
      console.error('AI chat response error:', err);
      const errorMsg: Message = {
        id: getNextId(),
        type: 'ai',
        content: language === 'hi'
          ? 'क्षमा करें, नेटवर्क में कुछ विलंब हो रहा है। कृपया पुनः प्रयास करें। मैं मध्य प्रदेश के सभी ऐतिहासिक धरोहरों एवं पर्यटन स्थलों की जानकारी हेतु उपलब्ध हूँ।'
          : 'I apologize for the brief connectivity delay. Please try asking again. I am ready to guide you across all destinations in Madhya Pradesh.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleStartNewChat = () => {
    const newSessionId = chatMemory.createNewSessionId();
    setSessionId(newSessionId);
  };

  // Voice Input (Speech to Text)
  const toggleVoiceInput = () => {
    if (isRecording) {
      if (speechRecognitionInstance) {
        speechRecognitionInstance.stop();
      }
      setIsRecording(false);
      return;
    }

    const rec = startVoiceRecognition({
      language,
      onResult: (transcript) => {
        setInputValue(transcript);
      },
      onError: (err) => {
        console.warn('Voice recognition error:', err);
        setIsRecording(false);
      },
      onEnd: () => {
        setIsRecording(false);
      }
    });

    if (rec) {
      setSpeechRecognitionInstance(rec);
      setIsRecording(true);
    }
  };

  // Text-to-Speech (Voice Playback)
  const handleToggleSpeakMessage = (msg: Message) => {
    if (speakingMessageId === msg.id) {
      stopSpeaking();
      setSpeakingMessageId(null);
      return;
    }

    stopSpeaking();
    setSpeakingMessageId(msg.id);

    speakMessage({
      text: msg.content,
      language,
      onStart: () => {
        setSpeakingMessageId(msg.id);
      },
      onEnd: () => {
        setSpeakingMessageId(null);
      },
      onError: () => {
        setSpeakingMessageId(null);
      }
    });
  };

  // Format markdown helper
  const renderFormattedMarkdown = (text: string) => {
    // Basic rich parser for clean formatting
    return text
      .split('\n')
      .map((line, idx) => {
        if (line.startsWith('### ')) {
          return <h3 key={idx} className="text-base font-bold text-orange-900 dark:text-orange-200 mt-3 mb-1.5 flex items-center gap-1.5">{line.replace('### ', '')}</h3>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={idx} className="text-lg font-extrabold text-[var(--text-primary)] mt-3 mb-2">{line.replace('## ', '')}</h2>;
        }
        if (line.startsWith('• ') || line.startsWith('- ') || line.startsWith('* ')) {
          const content = line.substring(2);
          return (
            <li key={idx} className="ml-4 list-disc text-sm text-[var(--text-primary)] leading-relaxed my-0.5">
              <span dangerouslySetInnerHTML={{ __html: formatInline(content) }} />
            </li>
          );
        }
        if (line.trim() === '') {
          return <div key={idx} className="h-1.5" />;
        }
        return (
          <p key={idx} className="text-sm text-[var(--text-primary)] leading-relaxed my-1" dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
        );
      });
  };

  const formatInline = (str: string) => {
    return str
      .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-[var(--text-primary)]">$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em class="italic text-[var(--text-primary)] opacity-90">$1</em>')
      .replace(/`([^`]+)`/g, '<code class="bg-black/10 dark:bg-white/10 text-orange-900 dark:text-orange-200 px-1 py-0.5 rounded text-xs font-mono">$1</code>');
  };

  return (
    <div className="h-full w-full flex flex-col relative bg-transparent overflow-hidden">
      {/* Top Language & Quick Info Header */}
      <div className="px-3.5 py-2.5 border-b border-[var(--glass-border)] glass flex items-center justify-between gap-3 backdrop-blur-md z-10 flex-shrink-0 min-w-0">
        {/* Left Side: Avatar & Identity */}
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          <div className="w-8 h-8 rounded-xl bg-[var(--color-primary)] flex items-center justify-center text-[var(--color-primary-foreground)] shadow-xs flex-shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 min-w-0">
              <h2 className="text-xs sm:text-sm font-bold text-[var(--text-primary)] font-editorial truncate">
                {language === 'hi' ? 'घूमो AI' : 'Ghumo AI'}
              </h2>
              <span className="flex-shrink-0 inline-flex items-center gap-1.5 text-[10px] px-2 py-0.5 rounded-md bg-[var(--color-surface-secondary)] text-[var(--color-text-primary)] border border-[var(--color-border)] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#183D32] dark:bg-[#34D399]" />
                <span>Online</span>
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-[var(--text-secondary)] truncate">
              {language === 'hi' ? 'पर्यटन एवं धरोहर एआई मार्गदर्शक' : 'AI Travel & Heritage Concierge'}
            </p>
          </div>
        </div>

        {/* Right Side: Essential Actions (No Overflow, Perfectly Spaced) */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {/* New Chat Button */}
          <button
            onClick={handleStartNewChat}
            className="px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all border cursor-pointer glass text-[var(--text-primary)] border-[var(--glass-border)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] shadow-2xs"
            title={language === 'hi' ? 'नई बातचीत शुरू करें' : 'Start fresh conversation'}
          >
            <RotateCcw className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            <span className="text-[11px] font-medium">{language === 'hi' ? 'नई चैट' : 'New Chat'}</span>
          </button>

          {/* Layout Mode Toggle Button (Split / Expand Panel) */}
          {onToggleFullScreen && (
            <button
              onClick={onToggleFullScreen}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all border cursor-pointer shadow-2xs ${
                layoutMode === 'fullchat'
                  ? 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] border-[var(--color-primary)]'
                  : 'glass text-[var(--text-primary)] border-[var(--glass-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
              }`}
              title={layoutMode === 'fullchat' ? (language === 'hi' ? 'द्वैत दृश्य में बदलें' : 'Switch to Split View') : (language === 'hi' ? 'चैट पैनल विस्तृत करें' : 'Expand Chat Panel')}
            >
              {layoutMode === 'fullchat' ? (
                <>
                  <Columns2 className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-bold">{language === 'hi' ? 'द्वैत दृश्य' : 'Split'}</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                  <span className="text-[11px] font-bold">{language === 'hi' ? 'विस्तार' : 'Expand'}</span>
                </>
              )}
            </button>
          )}

          {/* Dedicated Window Full Screen Toggle Button */}
          <button
            onClick={onToggleWindowFullScreen || toggleBrowserFullScreen}
            className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all border cursor-pointer shadow-2xs ${
              (isWindowFullScreen ?? isBrowserFullScreen)
                ? 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] border-[var(--color-primary)]'
                : 'glass text-[var(--text-primary)] border-[var(--glass-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
            }`}
            title={(isWindowFullScreen ?? isBrowserFullScreen)
              ? (language === 'hi' ? 'पूर्ण स्क्रीन विंडो से बाहर निकलें (Esc)' : 'Exit Full Screen Window (Esc)')
              : (language === 'hi' ? 'पूर्ण स्क्रीन विंडो (Esc से बाहर निकलें)' : 'Full Screen Window (Press Esc to exit)')
            }
          >
            {(isWindowFullScreen ?? isBrowserFullScreen) ? (
              <>
                <Shrink className="w-3.5 h-3.5" />
                <span className="text-[11px] font-bold">{language === 'hi' ? 'निकास' : 'Exit FS'}</span>
              </>
            ) : (
              <>
                <Fullscreen className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                <span className="text-[11px] font-bold">{language === 'hi' ? 'पूर्ण विंडो' : 'Window FS'}</span>
              </>
            )}
          </button>

          {/* Mobile-only compact Language Switcher (Desktop has it in top header / sidebar) */}
          <div className="lg:hidden glass rounded-full p-0.5 flex items-center border border-[var(--glass-border)] shadow-2xs">
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-1.5 py-0.5 rounded-full text-[10px] font-semibold transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('hi')}
              className={`px-1.5 py-0.5 rounded-full text-[10px] font-semibold transition-all cursor-pointer ${
                language === 'hi'
                  ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              हिन्दी
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Latest News Banner */}
      <AnimatePresence>
        {showNewsBanner && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="glass border-b border-[var(--glass-border)] overflow-hidden bg-[var(--color-surface-secondary)]/50 p-3 z-10"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider flex items-center gap-1.5">
                <Newspaper className="w-4 h-4 text-[var(--color-primary)]" />
                {language === 'hi' ? 'मध्य प्रदेश पर्यटन: ताज़ा दिशानिर्देश व धरोहर अपडेट्स' : 'MP Tourism: Heritage Updates & Guidelines'}
              </span>
              <button
                onClick={() => setShowNewsBanner(false)}
                className="text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-48 overflow-y-auto">
              {UP_NEWS_UPDATES.map(item => (
                <div
                  key={item.id}
                  onClick={() => {
                    handleUserSendMessage(language === 'hi' ? `मुझे ${item.title.hi} के बारे में विस्तार से बताएं।` : `Tell me more details about: ${item.title.en}`);
                    setShowNewsBanner(false);
                  }}
                  className="glass p-2.5 rounded-xl cursor-pointer hover:border-[var(--accent-primary)] transition-all border border-[var(--glass-border)]"
                >
                  <div className="flex items-center justify-between text-[10px] text-[var(--accent-primary)] font-semibold mb-1">
                    <span>📍 {item.city}</span>
                    <span>📅 {item.date}</span>
                  </div>
                  <h4 className="text-xs font-bold text-[var(--text-primary)] line-clamp-1">
                    {language === 'hi' ? item.title.hi : item.title.en}
                  </h4>
                  <p className="text-[11px] text-[var(--text-secondary)] line-clamp-2 mt-0.5">
                    {language === 'hi' ? item.summary.hi : item.summary.en}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Messages Scroll Area */}
      <div 
        ref={scrollAreaRef}
        className="flex-1 overflow-y-auto min-h-0 relative scrollbar-thin scrollbar-thumb-[var(--color-border)]"
      >
        <div className={`w-full ${
          layoutMode === 'fullchat' 
            ? 'max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6' 
            : 'p-3 md:p-5 space-y-4'
        } min-h-full flex flex-col justify-start`}>
          {messages.map((msg) => {
            const isAI = msg.type === 'ai';
            return (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex flex-col ${isAI ? 'items-start w-full' : 'items-end'}`}
              >
                <div className={`shadow-lg border backdrop-blur-md transition-all ${
                  isAI 
                    ? (layoutMode === 'fullchat'
                        ? 'w-full rounded-2xl p-5 sm:p-6 glass border-[var(--glass-border)] text-[var(--text-primary)] shadow-sm'
                        : 'max-w-[92%] rounded-2xl p-4 glass border-[var(--glass-border)] text-[var(--text-primary)] rounded-tl-sm')
                    : 'max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 bg-[var(--color-primary)] text-white border border-[var(--color-primary)] rounded-tr-sm shadow-md'
                }`}>
                  {/* Message Header for AI */}
                  {isAI && (
                    <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[var(--glass-border)]">
                      <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-primary)]">
                        <div className="w-5 h-5 rounded-md bg-[var(--color-primary)] text-white flex items-center justify-center shadow-xs">
                          <Sparkles className="w-3 h-3" />
                        </div>
                        <span className="font-editorial text-sm">{language === 'hi' ? 'घूमो AI' : 'Ghumo AI'}</span>
                        <span className="hidden sm:inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-[var(--color-surface-secondary)] text-[var(--color-text-primary)] border border-[var(--color-border)] uppercase tracking-wider">
                          {language === 'hi' ? 'पर्यटन एआई परामर्श' : 'Official Intelligence'}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        {/* Copy Message Text */}
                        <button
                          onClick={() => handleCopyMessage(msg)}
                          className="p-1.5 rounded-full transition-all flex items-center gap-1 text-xs font-medium glass hover:text-[var(--color-primary)] text-[var(--text-secondary)] border border-[var(--glass-border)] cursor-pointer"
                          title={language === 'hi' ? 'संदेश कॉपी करें' : 'Copy Message'}
                        >
                          {copiedMessageId === msg.id ? (
                            <>
                              <CheckCheck className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                              <span className="text-[10px] text-emerald-700 dark:text-emerald-400 hidden sm:inline font-semibold">{language === 'hi' ? 'कॉपी हो गया' : 'Copied'}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span className="text-[10px] hidden sm:inline">{language === 'hi' ? 'कॉपी' : 'Copy'}</span>
                            </>
                          )}
                        </button>

                        {/* Text-to-Speech Play Button */}
                        <button
                          onClick={() => handleToggleSpeakMessage(msg)}
                          className={`p-1.5 rounded-full transition-all flex items-center gap-1 text-xs font-medium border cursor-pointer ${
                            speakingMessageId === msg.id
                              ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] animate-pulse'
                              : 'glass hover:text-[var(--color-primary)] text-[var(--text-secondary)] border-[var(--glass-border)]'
                          }`}
                          title={speakingMessageId === msg.id ? 'Stop Voice' : (language === 'hi' ? 'आवाज़ में सुनें' : 'Listen with AI Voice')}
                        >
                          {speakingMessageId === msg.id ? (
                            <>
                              <VolumeX className="w-3.5 h-3.5" />
                              <span className="text-[10px] hidden sm:inline">{language === 'hi' ? 'रोकें' : 'Stop'}</span>
                            </>
                          ) : (
                            <>
                              <Volume2 className="w-3.5 h-3.5" />
                              <span className="text-[10px] hidden sm:inline">{language === 'hi' ? 'सुनें' : 'Listen'}</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Message Text Content */}
                  <div className="prose prose-sm dark:prose-invert max-w-none text-[13.5px] sm:text-sm leading-relaxed">
                    {renderFormattedMarkdown(msg.content)}
                  </div>

                  {/* In-Chat Image Gallery Component */}
                  {msg.images && msg.images.length > 0 && (
                    <div className="mt-3.5 pt-3.5 border-t border-[var(--glass-border)] space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)]">
                        <ImageIcon className="w-3.5 h-3.5" />
                        <span>{language === 'hi' ? 'दर्शन एवं फोटो गैलरी' : 'Visual Gallery & Highlights'}</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                        {msg.images.map((img, i) => (
                          <div
                            key={i}
                            onClick={() => setActiveImageLightbox(img)}
                            className="group relative h-40 rounded-xl overflow-hidden cursor-pointer shadow-md border border-[var(--glass-border)] hover:scale-[1.02] transition-all"
                          >
                            <img
                              src={img.url}
                              alt={img.title}
                              loading="lazy"
                              referrerPolicy="no-referrer"
                              onError={(e) => {
                                const target = e.currentTarget;
                                if (!target.src.includes('photo-1609342122563')) {
                                  target.src = 'https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?w=800&q=80';
                                }
                              }}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute bottom-0 inset-x-0 bg-stone-900/85 p-2 flex flex-col justify-end">
                              <span className="text-xs font-bold text-white leading-tight">{img.title}</span>
                              {img.caption && (
                                <span className="text-[10px] text-white/80 line-clamp-1 mt-0.5">{img.caption}</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* In-Chat Interactive Map Card Component */}
                  {msg.mapData && (
                    <div className="mt-3.5 pt-3.5 border-t border-[var(--glass-border)]">
                      <div className="glass rounded-xl p-3.5 border border-[var(--color-border)] bg-[var(--color-surface-secondary)]/30 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)]">
                            <MapPin className="w-4 h-4" />
                            <span>{msg.mapData.title}</span>
                          </div>
                          {Boolean(msg.mapData.distanceKm) && (
                            <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-300">
                              🛣️ ~{msg.mapData.distanceKm} km
                            </span>
                          )}
                        </div>

                        {/* Landmarks List in Route */}
                        <div className="space-y-1.5 my-2.5">
                          {msg.mapData.markers.slice(0, 4).map((m, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-[var(--text-primary)]">
                              <span className="w-4 h-4 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 shadow-xs">
                                {idx + 1}
                              </span>
                              <span className="font-semibold">{m.title}</span>
                            </div>
                          ))}
                        </div>

                        {/* View Full Map Action Button */}
                        <button
                          onClick={() => {
                            if (msg.mapData && onFocusMapLocation) {
                              onFocusMapLocation(msg.mapData.center, msg.mapData.routePath);
                            }
                            onSwitchToMap?.();
                          }}
                          className="w-full mt-2 py-2 px-3 rounded-xl text-xs font-bold bg-[#A94327] hover:bg-[#8F361E] text-white shadow-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                        >
                          <Maximize2 className="w-3.5 h-3.5 text-[#D6A85B]" />
                          <span>{language === 'hi' ? 'पूरा मैप देखें एवं नेविगेट करें' : 'Open in Full Screen Interactive Map'}</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* In-Chat Copilot Itinerary Timeline Preview Card */}
                  {msg.copilotItinerary && (
                    <div className="mt-3.5 pt-3.5 border-t border-[var(--glass-border)]">
                      <div className="glass rounded-xl p-4 border border-[var(--color-border)] bg-[var(--color-surface-secondary)]/30 shadow-md">
                        <div className="flex items-center justify-between mb-2.5">
                          <div className="flex items-center gap-2 min-w-0">
                            <div className="w-8 h-8 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-sm shadow-sm flex-shrink-0">
                              🧭
                            </div>
                            <div className="min-w-0">
                              <h4 className="text-sm font-bold text-[var(--text-primary)] truncate">
                                {language === 'hi' ? msg.copilotItinerary.titleHi : msg.copilotItinerary.title}
                              </h4>
                              <span className="text-[11px] text-[var(--text-secondary)]">
                                📍 {language === 'hi' ? msg.copilotItinerary.hindiCity : msg.copilotItinerary.city} • ⏱️ {msg.copilotItinerary.targetHours} {language === 'hi' ? 'घंटे' : 'hours'}
                              </span>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-[var(--color-surface-secondary)] text-[var(--color-text-primary)] border border-[var(--color-border)] flex-shrink-0">
                            {msg.copilotItinerary.stops.length} {language === 'hi' ? 'पड़ाव' : 'Stops'}
                          </span>
                        </div>

                        {/* Safety Buffer and Transit stats */}
                        <div className="flex items-center gap-3 text-[11px] text-[var(--text-secondary)] bg-black/5 dark:bg-white/5 p-2.5 rounded-lg mb-3 flex-wrap">
                          <span>🛡️ <strong>{msg.copilotItinerary.safetyBufferMinutes}m</strong> {language === 'hi' ? 'सुरक्षा बफर' : 'safety buffer'}</span>
                          <span>•</span>
                          <span>🚶 <strong>{msg.copilotItinerary.totalDistanceKm} km</strong> {language === 'hi' ? 'दूरी' : 'distance'}</span>
                          <span>•</span>
                          <span>💰 <strong>{msg.copilotItinerary.totalCostEstimate}</strong></span>
                        </div>

                        {/* Sequential Stops List */}
                        <div className="space-y-2 mb-3">
                          {msg.copilotItinerary.stops.map((stop, idx) => (
                            <div
                              key={stop.id}
                              onClick={() => {
                                if (onFocusMapLocation) {
                                  onFocusMapLocation(stop.coordinates);
                                }
                              }}
                              className="flex items-start gap-2.5 p-2.5 rounded-xl glass hover:border-[var(--color-primary)]/50 transition-all cursor-pointer border border-[var(--glass-border)] group"
                            >
                              <span className="w-5 h-5 rounded-full bg-[var(--color-primary)] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm group-hover:scale-110 transition-transform">
                                {stop.stopNumber || (idx + 1)}
                              </span>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2">
                                  <p className="text-xs font-bold text-[var(--text-primary)] truncate">
                                    {language === 'hi' ? stop.hindiName : stop.name}
                                  </p>
                                  <span className="text-[10px] font-bold text-[var(--color-primary)] flex-shrink-0">
                                    {stop.startTime} - {stop.endTime}
                                  </span>
                                </div>
                                <p className="text-[11px] text-[var(--text-secondary)] line-clamp-1 mt-0.5">
                                  💡 {language === 'hi' ? stop.whyThisPlaceHi : stop.whyThisPlace}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Copilot Action Buttons */}
                        <div className="grid grid-cols-2 gap-2.5">
                          <button
                            onClick={() => {
                              if (msg.copilotItinerary && onUpdateItinerary) {
                                onUpdateItinerary(msg.copilotItinerary);
                              }
                              onToggleCopilotDrawer?.();
                            }}
                            className="py-2 px-3 rounded-xl text-xs font-bold bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer"
                          >
                            <Route className="w-3.5 h-3.5" />
                            <span>{language === 'hi' ? 'इंटरैक्टिव टाइमलाइन' : 'Open Timeline'}</span>
                          </button>
                          <button
                            onClick={() => {
                              if (msg.copilotItinerary && onFocusMapLocation && msg.copilotItinerary.stops.length > 0) {
                                const firstStop = msg.copilotItinerary.stops[0];
                                const waypoints = msg.copilotItinerary.stops.map(s => s.coordinates);
                                onFocusMapLocation(firstStop.coordinates, waypoints);
                              }
                              onSwitchToMap?.();
                            }}
                            className="py-2 px-3 rounded-xl text-xs font-bold glass hover:bg-[var(--color-surface-secondary)] text-[var(--text-primary)] flex items-center justify-center gap-1.5 transition-all border border-[var(--glass-border)] cursor-pointer"
                          >
                            <MapPin className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                            <span>{language === 'hi' ? 'मैप पर देखें' : 'View on Map'}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                {/* Real-time District Crowd Telemetry Card */}
                {msg.districtCrowdStatus && (
                  <div className="mt-3 pt-3 border-t border-[var(--glass-border)]">
                    <div className="glass rounded-xl p-3 border border-[var(--color-border)] bg-[var(--color-surface-secondary)]/30 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)]">
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping flex-shrink-0" />
                          <span>
                            {language === 'hi'
                              ? `लाइव भीड़ टेलीमेट्री: ${msg.districtCrowdStatus.hindiDistrict}`
                              : `Live Crowd Telemetry: ${msg.districtCrowdStatus.district}`}
                          </span>
                        </div>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase ${
                          msg.districtCrowdStatus.crowdLevel === 'extreme' ? 'bg-red-600 text-white' :
                          msg.districtCrowdStatus.crowdLevel === 'high' ? 'bg-orange-700 text-white' :
                          'bg-amber-600 text-white'
                        }`}>
                          {msg.districtCrowdStatus.crowdLevel}
                        </span>
                      </div>

                      <div className="text-xs font-bold text-[var(--text-primary)] mb-1">
                        ⏱️ {language === 'hi' ? msg.districtCrowdStatus.waitTimeFormatted.hi : msg.districtCrowdStatus.waitTimeFormatted.en}
                      </div>
                      <p className="text-[11px] text-[var(--text-secondary)] mb-2">
                        {language === 'hi' ? msg.districtCrowdStatus.feasibilityVerdict.hi : msg.districtCrowdStatus.feasibilityVerdict.en}
                      </p>

                      {/* Key temple spot queue chips */}
                      <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                        {msg.districtCrowdStatus.keySpots.slice(0, 4).map((spot, sIdx) => (
                          <div key={sIdx} className="glass p-1.5 rounded-md border border-[var(--glass-border)] flex items-center justify-between">
                            <span className="font-semibold text-[var(--text-primary)] truncate max-w-[90px]">
                              {language === 'hi' ? spot.hindiName : spot.name}
                            </span>
                            <span className="font-bold text-[var(--color-primary)]">
                              {spot.waitMinutes > 0 ? `~${spot.waitMinutes}m` : 'Fast'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Related Scraped News Cards */}
                {msg.scrapedNews && msg.scrapedNews.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-[var(--glass-border)]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-primary)] mb-1.5 block">
                      📰 {language === 'hi' ? 'संबंधित लाइव जिले के समाचार:' : 'Live District Bulletins:'}
                    </span>
                    <div className="space-y-1.5">
                      {msg.scrapedNews.map((news) => (
                        <div key={news.id} className="glass p-2 rounded-lg border border-[var(--glass-border)] text-xs">
                          <div className="font-bold text-[var(--text-primary)] text-[11px] line-clamp-1">
                            {language === 'hi' ? news.title.hi : news.title.en}
                          </div>
                          <div className="flex items-center justify-between text-[10px] text-[var(--text-secondary)] mt-1">
                            <span>📍 {news.district} • {news.publishedAt}</span>
                            {news.sourceUrl && (
                              <a
                                href={news.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--color-primary)] font-semibold hover:underline flex items-center gap-0.5"
                              >
                                <span>{news.source}</span>
                                <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Timestamp */}
              <span className="text-[10px] text-[var(--text-secondary)] mt-1 px-1">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </motion.div>
          );
        })}

        {/* Typing Indicator */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-xs text-[var(--text-secondary)] glass rounded-full px-4 py-2 w-max shadow-sm"
          >
            <Loader2 className="w-4 h-4 animate-spin text-[var(--color-primary)]" />
            <span>{language === 'hi' ? 'घूमो AI जानकारी जुटा रही है...' : 'Ghumo AI is exploring heritage knowledge...'}</span>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Horizontal Quick Action Chips (shown in split/compact mode; in fullchat they live in the Left Sidebar) */}
      {layoutMode !== 'fullchat' && (
        <div className="w-full border-t border-[var(--glass-border)] glass py-2 flex-shrink-0">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide px-3">
            {quickActions.map(action => (
              <motion.button
                key={action.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleUserSendMessage(action.query)}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium glass hover:bg-[var(--color-surface-secondary)] hover:border-[var(--color-primary)] text-[var(--text-primary)] transition-all whitespace-nowrap border border-[var(--glass-border)] shadow-xs flex items-center gap-1.5 cursor-pointer flex-shrink-0"
              >
                {action.label}
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Message Input Bar */}
      <div className="w-full glass border-t border-[var(--glass-border)] backdrop-blur-xl flex-shrink-0 py-3 pb-20 lg:pb-3">
        <div className={`w-full ${layoutMode === 'fullchat' ? 'max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-6 md:px-8' : 'px-3'}`}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUserSendMessage();
            }}
            className="flex items-center gap-2 p-1.5 rounded-full glass border border-[var(--glass-border)] shadow-xl focus-within:border-[var(--color-primary)] focus-within:ring-2 focus-within:ring-[var(--color-primary)]/20 transition-all bg-white dark:bg-[#132A23]"
          >
            {/* Voice Input Microphone Button */}
            {isSpeechRecognitionSupported() && (
              <button
                type="button"
                onClick={toggleVoiceInput}
                className={`p-2.5 rounded-full transition-all flex items-center justify-center cursor-pointer ${
                  isRecording
                    ? 'bg-red-500 text-white animate-ping ring-4 ring-red-300'
                    : 'text-[var(--color-primary)] hover:bg-[var(--color-surface-secondary)]'
                }`}
                title={isRecording ? 'Stop Recording' : (language === 'hi' ? 'बोलकर प्रश्न पूछें' : 'Speak to AI')}
              >
                {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </button>
            )}

            {/* Text Input Box */}
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={
                isRecording 
                  ? (language === 'hi' ? 'सुन रहा हूँ... बोलिए' : 'Listening... Speak now') 
                  : (language === 'hi' ? 'मध्य प्रदेश के किसी भी धरोहर, बटेश्वर, मितावली, रूट या इतिहास के बारे में पूछें...' : 'Ask about MP heritage sites, Bateshwar, Mitawali, routes, history...')
              }
              className="flex-1 bg-transparent px-3 py-1.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] outline-none"
            />

            {/* Clear Input Button */}
            {inputValue.trim() && (
              <button
                type="button"
                onClick={() => setInputValue('')}
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] p-1 text-xs cursor-pointer rounded-full hover:bg-black/5 dark:hover:bg-white/5"
                title="Clear"
              >
                ✕
              </button>
            )}

            {/* Send Button */}
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              aria-label={language === 'hi' ? 'संदेश भेजें' : 'Send message'}
              className={`p-2.5 rounded-full transition-all flex items-center justify-center cursor-pointer ${
                inputValue.trim() && !isTyping
                  ? 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] shadow-md'
                  : 'opacity-40 cursor-not-allowed text-[var(--text-secondary)] bg-black/5 dark:bg-white/5'
              }`}
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Official Verification Subtitle in Fullscreen Mode */}
          {layoutMode === 'fullchat' && (
            <div className="flex items-center justify-between text-[11px] text-[var(--text-secondary)] mt-2 px-3">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                {language === 'hi' ? 'घूमो इंडिया • टीम सृजन (प्रॉब्लम 4 - पर्यटन)' : 'Ghumo India • Team Srajan (Problem 4 - Tourism Track)'}
              </span>
              <span className="hidden sm:inline font-medium text-[var(--color-text-secondary)]">
                {language === 'hi' ? 'बियॉन्ड द फोर्ट • मध्य प्रदेश अनदेखी धरोहर एवं पर्यटन पोर्टल' : 'Beyond The Fort • MP Lesser-Known Heritage Discovery'}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal for Photos */}
      <AnimatePresence>
        {activeImageLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImageLightbox(null)}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <div className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden glass border border-white/20">
              <img
                src={activeImageLightbox.url}
                alt={activeImageLightbox.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('photo-1609342122563')) {
                    target.src = 'https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?w=800&q=80';
                  }
                }}
                className="w-full h-full object-contain max-h-[80vh]"
              />
              <div className="absolute bottom-0 inset-x-0 bg-black/70 backdrop-blur-md p-4 text-white">
                <h3 className="text-base font-bold">{activeImageLightbox.title}</h3>
                {activeImageLightbox.caption && (
                  <p className="text-xs text-white/80 mt-1">{activeImageLightbox.caption}</p>
                )}
              </div>
              <button
                onClick={() => setActiveImageLightbox(null)}
                className="absolute top-3 right-3 glass text-white p-2 rounded-full hover:bg-white/20"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}