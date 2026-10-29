import { GoogleGenerativeAI } from '@google/generative-ai';
import { 
  getAllUPPlaces, 
  getAllUPGhats,
  getUPNews, 
  getUPScams, 
  getUPRoutes, 
  searchUPPlaces, 
  getCrowdAdvisoryByCity,
  calculateDynamicUPRoute,
  UP_CROWD_ADVISORIES,
  type UPPlace,
  type UPNewsEvent,
  type UPRoute,
  type UPScamAdvisory,
  type UPCityCrowdAdvisory
} from './uttarPradeshService';
import {
  getDistrictCrowdMetrics,
  SCRAPED_NEWS_DATABASE,
  type DistrictCrowdStatus,
  type ScrapedNewsItem
} from './newsScraperService';
import {
  parseNaturalLanguageTripQuery,
  generateTimeBasedItinerary,
  replanDelay,
  getPresetItineraries,
  type TripItinerary,
  type ItineraryStop
} from './copilotService';
import { MP_50_HERITAGE_SITES, type MP50HeritageSite } from '../../data/mp-50-heritage-sites';
import { 
  MP_PLACES, 
  MP_CITY_COORDINATES, 
  MP_LANDMARK_COORDINATES, 
  calculateDynamicMPRoute, 
  type MPPlace 
} from '../../data/mp-comprehensive-database';

// In-memory query response cache for sub-50ms repeat query responses
const responseCache = new Map<string, GeminiResponse>();

// Securely read API key from environment variable only (never hardcode in client source)
const apiKey = ((import.meta as any).env?.VITE_GEMINI_API_KEY as string) || '';

let genAI: GoogleGenerativeAI | null = null;
try {
  if (apiKey && apiKey.trim().length > 10 && !apiKey.includes('your_')) {
    genAI = new GoogleGenerativeAI(apiKey.trim());
  }
} catch (error) {
  console.warn('Gemini API client initialization skipped:', error);
}

export interface InChatMapData {
  title: string;
  hindiTitle?: string;
  center: [number, number];
  zoom?: number;
  markers: Array<{
    position: [number, number];
    title: string;
    description: string;
  }>;
  routePath?: [number, number][];
  distanceKm?: number;
}

export interface InChatImage {
  url: string;
  title: string;
  caption?: string;
}

export interface GeminiResponse {
  text: string;
  language: 'en' | 'hi';
  hasImage?: boolean;
  images?: InChatImage[];
  hasMap?: boolean;
  mapData?: InChatMapData;
  newsItems?: UPNewsEvent[];
  crowdAdvisory?: UPCityCrowdAdvisory;
  districtCrowdStatus?: DistrictCrowdStatus;
  scrapedNews?: ScrapedNewsItem[];
  scamAlerts?: UPScamAdvisory[];
  copilotItinerary?: TripItinerary;
}

// Dedicated Grounded Matcher for all 50 Madhya Pradesh Heritage Sites
export function findMPHeritageSite(query: string): MP50HeritageSite | null {
  const q = query.toLowerCase().trim();

  // 1. Direct site ID match
  const byId = MP_50_HERITAGE_SITES.find(s => q.includes(s.id.toLowerCase()));
  if (byId) return byId;

  // 2. Direct English or Hindi name match
  const byName = MP_50_HERITAGE_SITES.find(s => 
    q.includes(s.name.en.toLowerCase()) || 
    q.includes(s.name.hi.toLowerCase())
  );
  if (byName) return byName;

  // 3. Known prominent site aliases & keywords
  if (q.includes('sheopur') || q.includes('श्योपुर')) {
    return MP_50_HERITAGE_SITES.find(s => s.id === 'sheopur_fort_mp') || null;
  }
  if (q.includes('bateshwar') || q.includes('बटेश्वर')) {
    return MP_50_HERITAGE_SITES.find(s => s.id.includes('bateshwar')) || null;
  }
  if (q.includes('mitawali') || q.includes('मितावली') || q.includes('chausath yogini')) {
    return MP_50_HERITAGE_SITES.find(s => s.id.includes('mitawali')) || null;
  }
  if (q.includes('padhavali') || q.includes('padavali') || q.includes('पढ़ावली') || q.includes('garhi padhavali')) {
    return MP_50_HERITAGE_SITES.find(s => s.id.includes('padhavali')) || null;
  }
  if (q.includes('kakanmath') || q.includes('ककनमठ') || q.includes('suhania')) {
    return MP_50_HERITAGE_SITES.find(s => s.id.includes('kakanmath')) || null;
  }
  if (q.includes('koshak mahal') || q.includes('कोषक महल') || q.includes('badal mahal') || (q.includes('chanderi') && (q.includes('fort') || q.includes('durg')))) {
    return MP_50_HERITAGE_SITES.find(s => s.id.includes('chanderi')) || null;
  }
  if (q.includes('orchha') || q.includes('ओरछा') || q.includes('ram raja') || q.includes('jahangir mahal')) {
    return MP_50_HERITAGE_SITES.find(s => s.id.includes('orchha')) || null;
  }
  if (q.includes('gwalior fort') || q.includes('ग्वालियर किला') || q.includes('ग्वालियर दुर्ग') || q.includes('man mandir') || q.includes('sas bahu') || q.includes('teli ka mandir')) {
    return MP_50_HERITAGE_SITES.find(s => s.id.includes('gwalior') || s.name.en.toLowerCase().includes('gwalior')) || null;
  }
  if (q.includes('datia') || q.includes('दतिया') || q.includes('bir singh')) {
    return MP_50_HERITAGE_SITES.find(s => s.id.includes('datia')) || null;
  }
  if (q.includes('sonagiri') || q.includes('सोनागिरि')) {
    return MP_50_HERITAGE_SITES.find(s => s.id.includes('sonagiri')) || null;
  }
  if (q.includes('narwar') || q.includes('नरवर')) {
    return MP_50_HERITAGE_SITES.find(s => s.id.includes('narwar')) || null;
  }
  if (q.includes('ater') || q.includes('अटेर')) {
    return MP_50_HERITAGE_SITES.find(s => s.id.includes('ater')) || null;
  }
  if (q.includes('dubkund') || q.includes('दूबकुंड')) {
    return MP_50_HERITAGE_SITES.find(s => s.id.includes('dubkund')) || null;
  }
  if (q.includes('sanchi') || q.includes('सांची')) {
    return MP_50_HERITAGE_SITES.find(s => s.id.includes('sanchi')) || null;
  }
  if (q.includes('bhimbetka') || q.includes('भीमबेटका')) {
    return MP_50_HERITAGE_SITES.find(s => s.id.includes('bhimbetka')) || null;
  }
  if (q.includes('bhojpur') || q.includes('भोजपुर')) {
    return MP_50_HERITAGE_SITES.find(s => s.id.includes('bhojpur')) || null;
  }
  if (q.includes('khajuraho') || q.includes('खजुराहो') || q.includes('kandariya')) {
    return MP_50_HERITAGE_SITES.find(s => s.id.includes('khajuraho')) || null;
  }
  if (q.includes('mandu') || q.includes('मांडू') || q.includes('jahaz mahal') || q.includes('roopmati')) {
    return MP_50_HERITAGE_SITES.find(s => s.id.includes('mandu') || s.name.en.toLowerCase().includes('mandu')) || null;
  }
  if (q.includes('maheshwar') || q.includes('महेश्वर') || q.includes('ahilya')) {
    return MP_50_HERITAGE_SITES.find(s => s.id.includes('maheshwar')) || null;
  }
  if (q.includes('asirgarh') || q.includes('असीरगढ़')) {
    return MP_50_HERITAGE_SITES.find(s => s.id.includes('asirgarh')) || null;
  }

  // 4. Token match against MP sites names
  for (const s of MP_50_HERITAGE_SITES) {
    const rawTokens = s.name.en.toLowerCase().split(/\s+/).filter(t => t.length > 4 && !['fort', 'temple', 'group', 'caves', 'palace', 'monument'].includes(t));
    for (const t of rawTokens) {
      if (q.includes(t)) return s;
    }
  }

  return null;
}

export async function getGeminiResponse(
  userMessage: string,
  conversationHistory: Array<{ role: string; content: string }> = [],
  currentLang: 'en' | 'hi' = 'en'
): Promise<GeminiResponse> {
  const upPlaces = getAllUPPlaces();
  const upGhats = getAllUPGhats();
  const upNews = getUPNews();
  const upScams = getUPScams();
  const upRoutes = getUPRoutes();

  // Robust Language Determination:
  // 1. Devanagari script is explicitly Hindi (e.g. "झांसी", "नमस्ते", "मार्ग बताएं")
  const hasDevanagari = /[\u0900-\u097F]/.test(userMessage);

  // 2. Clear English structural words (e.g. "plan a trip", "tell me", "how to", "what is", "ticket price")
  const hasEnglishTokens = /\b(plan|trip|itinerary|how|what|where|when|why|tell|show|price|ticket|timings|visiting|guide|hours|route|distance|history|safety|explore|recommend|flight|train|hotel|best|top|visit)\b/i.test(userMessage);

  // 3. Distinctive Hindi grammar/phrasing (DO NOT include city names or common loan words like mandir/ghat)
  const hasHindiTokens = /\b(kripya|bataiye|batao|kaise|kaha|kidhar|chahiye|jana|gaye|ghumna|kitna|kitni|bheed|rasta|suvidha|hoga|hogi)\b/i.test(userMessage);

  let activeLang: 'en' | 'hi';
  if (hasDevanagari) {
    activeLang = 'hi';
  } else if (hasEnglishTokens && !hasHindiTokens) {
    activeLang = 'en';
  } else if (hasHindiTokens && !hasEnglishTokens) {
    activeLang = 'hi';
  } else {
    // Adhere strictly to the user's selected language toggle in the UI
    activeLang = currentLang;
  }

  // Return cached result for identical direct queries
  const cacheKey = `${activeLang}:${userMessage.trim().toLowerCase()}`;
  if (conversationHistory.length <= 1 && responseCache.has(cacheKey)) {
    return JSON.parse(JSON.stringify(responseCache.get(cacheKey)!));
  }

  // Check for delay replanning intent (e.g. "running 20m late", "20 minute late hoon", "delay")
  const delayMatch = userMessage.match(/\b(?:running\s+)?(\d{1,3})\s*(?:m|min|mins|minutes|minute|मिनट)\s*(?:late|delay|विलंब|देरी|लेट)\b/i) ||
                     userMessage.match(/\b(?:late|delay|विलंब|देरी|लेट)\s*(?:by\s*)?(\d{1,3})\s*(?:m|min|mins|minutes|minute|मिनट)\b/i);

  if (delayMatch) {
    const delayMinutes = parseInt(delayMatch[1], 10);
    const baseItin = getPresetItineraries()[0];
    const replanned = replanDelay(baseItin, delayMinutes);

    const replannedMapData: InChatMapData = {
      title: activeLang === 'hi' ? replanned.titleHi : replanned.title,
      center: replanned.stops[0].coordinates,
      zoom: 12,
      markers: replanned.stops.map(s => ({
        position: s.coordinates,
        title: `${s.stopNumber}. ${activeLang === 'hi' ? s.hindiName : s.name} (${s.startTime} - ${s.endTime})`,
        description: `${activeLang === 'hi' ? s.activityHi : s.activity} | Stay: ${s.durationMinutes}m | ${activeLang === 'hi' ? s.whyThisPlaceHi : s.whyThisPlace}`
      })),
      routePath: replanned.stops.map(s => s.coordinates),
      distanceKm: replanned.totalDistanceKm
    };

    const text = activeLang === 'hi'
      ? `### ⏱️ यात्रा समय रीशेड्यूल: ${delayMinutes} मिनट विलंब का समायोजन

**चिंता न करें! आपकी वापसी समयसीमा (Return Deadline) पूरी तरह सुरक्षित है।**
• **सुरक्षा बफर समय:** **${replanned.safetyBufferMinutes} मिनट शेष**
• **समय समायोजन:** आगे के सभी पड़ावों का आगमन और प्रस्थान समय स्वतः आगे बढ़ा दिया गया है ताकि आपकी ट्रेन/फ्लाइट न छूटे।

**🗺️ रीशेड्यूल्ड टाइमलाइन:**
${replanned.stops.map(s => `• **${s.startTime} – ${s.endTime}:** ${s.hindiName} (${s.durationMinutes} मिनट विश्राम)`).join('\n')}

_कोपायलट टाइमलाइन और मैप पर नया शेड्यूल तुरंत अपडेट कर दिया गया है!_`
      : `### ⏱️ Trip Schedule Adjusted: ${delayMinutes} Minutes Delay Handled

**No need to worry! Your return deadline remains protected.**
• **Safety Buffer Remaining:** **${replanned.safetyBufferMinutes} minutes buffer**
• **Schedule Adjustments:** Timings for upcoming stops have been automatically recalibrated to prevent missed connections.

**🗺️ Recalibrated Timeline:**
${replanned.stops.map(s => `• **${s.startTime} – ${s.endTime}:** ${s.name} (${s.durationMinutes} mins stay)`).join('\n')}

_Your Copilot Timeline Drawer and interactive map track have been updated automatically!_`;

    const res: GeminiResponse = {
      text,
      language: activeLang,
      hasMap: true,
      mapData: replannedMapData,
      copilotItinerary: replanned
    };
    responseCache.set(cacheKey, res);
    return res;
  }

  // Check for crowd inquiries (e.g. "how much crowd is there in mathura now", "kitni bheed hai")
  const isCrowdQuery = 
    /\b(crowd|rush|bheed|bhid|line|queue|wait|waiting|wait time|footfall|bhari bheed|jane layak|kitna time|kitna samay|abhi kitni|traffic)\b/i.test(userMessage);

  // Match specific district crowd status
  const districtCrowd = getDistrictCrowdMetrics(userMessage);

  // Check for scraped district news matches
  const matchingScrapedNews = SCRAPED_NEWS_DATABASE.filter(n => 
    userMessage.toLowerCase().includes(n.district.toLowerCase()) || 
    userMessage.toLowerCase().includes(n.hindiDistrict.toLowerCase()) ||
    (n.placeName && userMessage.toLowerCase().includes(n.placeName.toLowerCase()))
  );

  // Check for image request intent
  const isImageRequest = 
    /\b(image|images|photo|photos|picture|pictures|pic|pics|dikhao|dekhein|tasveer|tasveerein|photo dikhao|tasveer dikhao|gallery)\b/i.test(userMessage);

  // Check for map / route / track intent
  const isMapRouteRequest = 
    /\b(map|route|rasta|track|direction|directions|kaha hai|location|distance|duriyan|dur|kaise pahuche|circuit|waypoints|itinerary|plan)\b/i.test(userMessage);

  // Check for all ghats request
  const isGhatsQuery = 
    /\b(ghat|ghats|saare ghat|all ghats|riverfront|ganga aarti|saryu ghat|yamuna ghat|घाट)\b/i.test(userMessage);

  // Check for latest news intent
  const isNewsRequest = 
    /\b(news|latest|update|updates|samachar|kya chal raha|kumbh|mela|aarti pass|rules|tarikh|timing update|what is happening)\b/i.test(userMessage);

  // Dedicated identity & capabilities query detector (e.g. "who are you", "tum kaun ho", "what is disha")
  const isIdentityQuery = 
    /\b(who are you|who r you|who are u|tum kaun ho|aap kaun ho|aap kaun hain|what are you|what can you do|who is disha|what is disha|who is ghumo|what is ghumo|ghumo ai|ghumo india|about you|about yourself|introduce yourself|apna parichay|apne baare mein|who made you|what is darshan 360|who created you|kya kar sakti ho)\b/i.test(userMessage.trim());

  if (isIdentityQuery) {
    const identityText = activeLang === 'hi'
      ? `### 🙏 नमस्ते! मैं घूमो AI (Ghumo AI) हूँ

मैं **घूमो इंडिया (Ghumo India)** की आपकी आधिकारिक **एआई यात्रा साथी एवं डिजिटल मार्गदर्शक** हूँ — **टीम सृजन (Team Srajan)** द्वारा **AI Synergy Hackathon Problem 4 (Tourism Track - Beyond the Fort)** के लिए विकसित।

मैं आपकी मध्य प्रदेश व भारतीय धरोहर यात्रा, तीर्थाटन एवं सांस्कृतिक दर्शन को सुगम व ज्ञानवर्धक बनाने के लिए निम्नलिखित सेवाएं प्रदान करती हूँ:

• **🏛️ बियॉन्ड द फोर्ट (Beyond the Fort):** मध्य प्रदेश के अनदेखे पुरातात्विक रत्नों (बटेश्वर 200 मंदिर परिसर, मितावली चौसठ योगिनी, गढ़ी पढ़ावली, ककनमठ सुहानिया, कोषकमहल चंदेरी) की प्रामाणिक ऐतिहासिक व पुरातात्विक जानकारी (ASI स्रोतों से पुष्ट)।
• **🧭 स्मार्ट यात्रा कोपायलट (Trip Copilot):** आप मुझे अपना उपलब्ध समय बताएं (उदा. *"ग्वालियर से 4 घंटे का बटेश्वर-मितावली हेरिटेज रूट"*), और मैं सुरक्षा बफर समय व मानचित्र रूट सहित संपूर्ण समयबद्ध टाइमलाइन तैयार कर दूँगी।
• **📊 लाइव भीड़ टेलीमेट्री एवं दर्शन परामर्श:** प्रमुख धामों व पर्यटन केंद्रों में कतार प्रतीक्षा समय, दर्शन नियम और *"क्या अभी जाने लायक है या नहीं"* का सटीक विश्लेषण।
• **🚗 हाईवे, सड़क व हेरिटेज कॉरिडोर मार्ग:** मुरैना-चंबल कॉरिडोर, ग्वालियर-ओरछा, बुंदेलखंड व राष्ट्रीय राजमार्गों के बीच सटीक ड्राइविंग दूरी व रास्ते के स्टॉप्स।
• **🛕 धरोहर व तीर्थों का ऐतिहासिक व आध्यात्मिक उद्देश्य (Travel Cause):** केवल स्थल ही नहीं, बल्कि उस पावन तीर्थ अथवा ऐतिहासिक स्मारक के निर्माण, स्थापत्य व संस्कृति का गहरा अध्ययन।
• **🛡️ यात्री सुरक्षा व सतर्कता:** जमीनी कनेक्टिविटी, परिवहन साधन, आधिकारिक किराया और आपातकालीन परामर्श।
• **🎙️ बोलकर पूछें एवं सुनें:** आप मुझसे हिन्दी अथवा अंग्रेज़ी में बोलकर संवाद कर सकते हैं।

_आप मध्य प्रदेश अथवा देश के किस धरोहर स्थल या यात्रा मार्ग की जानकारी चाहते हैं?_`
      : `### 🙏 Namaste! I am Ghumo AI (घूमो AI)

I am your official **AI Travel Companion & Heritage Concierge** for **Ghumo India**, created by **Team Srajan** for **AI Synergy Hackathon Problem 4 Track Tourism (Beyond the Fort)**.

Here is how I assist your exploration of Madhya Pradesh and India's heritage wonders:

• **🏛️ Beyond the Fort Discovery**: Grounded, source-backed intelligence on Madhya Pradesh's lesser-known archaeological wonders—such as the 200 restored Gurjara-Pratihara temples of **Bateshwar**, the circular **Chausath Yogini Temple at Mitawali**, the intricate friezes of **Garhi Padhavali**, the mortarless **Kakanmath Shiva Temple**, and **Koshak Mahal Chanderi**.
• **🧭 Smart Time-Aware Trip Copilot**: Tell me your available duration (e.g., *"4-hour heritage circuit from Gwalior station to Bateshwar & Mitawali"*), and I will generate an interactive time-based itinerary with safety return deadlines and sequential route markers.
• **📊 Live Crowd Telemetry & Travel Feasibility**: Real-time road status, queue wait times, darshan pass rules, and feasibility guidance.
• **🚗 Heritage Corridors & Highways**: Verified road routes across the Chambal Heritage Corridor, Gwalior Fort circuits, Bundelkhand royal circuits, and inter-state highways.
• **🛕 Architectural & Cultural Significance (Travel Cause)**: Authentic Vedic, Rajput, Kachchhapaghata, and ASI-documented histories, photography guidance, and accessibility ratings.
• **🛡️ Safe Travel Advisory**: Transparent local transportation advice, fair taxi rates, and traveler assistance.
• **🎙️ Bilingual Voice Interaction**: Type or speak in Hindi or English, and listen to responses with voice synthesis.

_How may I help you discover India's magnificent heritage today?_`;

    const res: GeminiResponse = {
      text: identityText,
      language: activeLang,
      hasImage: false,
      hasMap: false
    };
    responseCache.set(cacheKey, res);
    return res;
  }

  // Dedicated greeting detector: prevent "hi", "namaste", "hello" from triggering Kashi or random routes
  const isPureGreeting = 
    /^(hi|hello|hey|namaste|namaskar|pranam|pranaam|radhe radhe|jai shri ram|jai shree ram|salaam|good morning|good evening|namaste ji|hello ji|hey there|hi disha|hello disha)[!.,? ]*$/i.test(userMessage.trim()) ||
    (/^(hi|hello|hey|namaste|namaskar|pranam|radhe radhe|jai shri ram)\b/i.test(userMessage.trim()) && 
     userMessage.trim().split(/\s+/).length <= 4 && 
     !/\b(kaha|kaise|timing|aarti|hotel|bheed|route|rasta|mandir|ghat|distance|darshan|tour|map|pass|rules|entry|guide|photo)\b/i.test(userMessage));

  if (isPureGreeting) {
    const welcomeText = activeLang === 'hi'
      ? `### 🙏 नमस्ते! घूमो इंडिया (Ghumo India) में आपका स्वागत है

मैं **घूमो AI (Ghumo AI)** हूँ — मध्य प्रदेश एवं संपूर्ण भारत की ऐतिहासिक धरोहरों व पर्यटन की आपकी आधिकारिक डिजिटल साथी एवं मार्गदर्शक।

मैं आपकी यात्रा को सुगम और अविस्मरणीय बनाने हेतु निम्नलिखित सेवाएं प्रदान करती हूँ:

• **🏛️ 50 म.प्र. धरोहरें (Beyond the Fort):** बटेश्वर के 200 मंदिर, मितावली चौसठ योगिनी, गढ़ी पढ़ावली, ककनमठ, ग्वालियर दुर्ग, सांची, भीमबेटका, मांडू, ओरछा और चंदेरी के महलों का प्रामाणिक इतिहास व अंतिम मील यात्रा मार्गदर्शन।
• **🧭 स्मार्ट हेरिटेज टूर कोपायलट:** समयबद्ध यात्रा योजना, वापसी की समय सीमा (Deadline) और मानचित्र रूट ट्रैकिंग।
• **🚗 हाईवे मार्ग व दूरी कैलकुलेटर:** चंबल हेरिटेज कॉरिडोर, नेशनल हाईवे और अंतर्राज्यीय मार्गों पर सटीक दूरी व स्टॉप्स।
• **👥 लाइव भीड़ स्थिति एवं दर्शन परामर्श:** प्रतीक्षा समय, उपयुक्त समय व यात्रा व्यवहार्यता विश्लेषण।
• **🛡️ सुरक्षा व पर्यटन सहायता:** आधिकारिक पर्यटन टोल-फ्री हेल्पलाइन (**1800-233-0303**)।

आप मध्य प्रदेश अथवा देश के किस धरोहर स्थल या यात्रा मार्ग की जानकारी चाहते हैं?`
      : `### 🙏 Namaste! Welcome to Ghumo India

I am **Ghumo AI** — your official heritage, cultural, and travel companion for exploring Madhya Pradesh and incredible destinations across India.

Here is how I can assist your journeys:

• **🏛️ 50 Curated MP Heritage Sites (Beyond the Fort):** Grounded history, transport, and last-mile access for Bateshwar (200 temples), Mitawali Chausath Yogini, Garhi Padavali, Kakanmath, Gwalior Fort, Sanchi, Bhimbetka, Mandu, Orchha, and Chanderi.
• **🧭 Smart Heritage Tour Copilot:** Time-aware sequential itineraries with departure deadlines and route tracking.
• **🚗 Highway Directions & Distance Calculator:** Point-to-point road distances, Chambal Heritage Corridor, and inter-city circuits.
• **👥 Live Crowd Index & Visiting Feasibility:** Rush levels, queue timings, and recommended peaceful slots.
• **🛡️ Tourism Assistance & Helplines:** Official Madhya Pradesh Tourism toll-free support (**1800-233-0303**).

Which heritage destination, circuit, or city would you like to explore today?`;

    return {
      text: welcomeText,
      language: activeLang,
      hasImage: false,
      hasMap: false
    };
  }

  // 1. High Priority Grounded Intelligence for all 50 Madhya Pradesh Heritage Sites
  const matchedMPSite = findMPHeritageSite(userMessage);

  if (matchedMPSite) {
    // Check if origin is mentioned (e.g. "from Gwalior", "Gwalior se", or "Gwalior for Sheopur")
    const originMatch = userMessage.match(/(?:from|se|start from|starting from|निकलकर)\s+([a-zA-Z\u0900-\u097F]+)/i);
    let originCity = 'Gwalior';
    if (originMatch) {
      originCity = originMatch[1].trim();
    } else if (userMessage.toLowerCase().includes('gwalior')) {
      originCity = 'Gwalior';
    }

    const originCoords: [number, number] = originCity.toLowerCase().includes('gwalior') 
      ? [26.2183, 78.1828] 
      : MP_CITY_COORDINATES[originCity.toLowerCase()]?.coords || [26.2183, 78.1828];
    const destinationCoords = matchedMPSite.coordinates;

    const dynamicRoute = calculateDynamicMPRoute(originCity, matchedMPSite.district.en.split(',')[0].trim()) || {
      distanceKm: 210,
      estimatedDrivingTime: '4.0 to 4.5 hours (210 km)',
      waypoints: [originCoords, [25.9500, 77.4000], destinationCoords] as [number, number][],
      highwayName: { 
        en: 'NH-27 / SH-24 Pohri-Sheopur Heritage Highway', 
        hi: 'एनएच-27 / एसएच-24 पोहरी-श्योपुर हेरिटेज हाईवे' 
      }
    };

    // Synchronize Copilot Itinerary for this MP Site and route
    const parsedConstraints = parseNaturalLanguageTripQuery(userMessage);
    if (!parsedConstraints.startLocationName) parsedConstraints.startLocationName = originCity;
    const copilotItinerary = generateTimeBasedItinerary(parsedConstraints);

    // Synchronize In-Chat Interactive Map with Origin -> Destination route
    const mpMapData: InChatMapData = {
      title: activeLang === 'hi' 
        ? `${originCity} से ${matchedMPSite.name.hi} हेरिटेज मार्ग` 
        : `${originCity} to ${matchedMPSite.name.en} Heritage Route`,
      center: destinationCoords,
      zoom: 10,
      markers: [
        {
          position: destinationCoords,
          title: activeLang === 'hi' ? matchedMPSite.name.hi : matchedMPSite.name.en,
          description: activeLang === 'hi' 
            ? `${matchedMPSite.tagline.hi} | समय: ${matchedMPSite.practicalInfo.timings.hi} | शुल्क: ${matchedMPSite.practicalInfo.entryFee.hi}` 
            : `${matchedMPSite.tagline.en} | Timings: ${matchedMPSite.practicalInfo.timings.en} | Entry: ${matchedMPSite.practicalInfo.entryFee.en}`
        },
        {
          position: originCoords,
          title: activeLang === 'hi' ? `प्रारंभिक स्थल: ${originCity}` : `Origin: ${originCity}`,
          description: activeLang === 'hi' 
            ? `प्रस्थान केंद्र | कुल दूरी: ~${dynamicRoute.distanceKm} किमी` 
            : `Departure Hub | Route Distance: ~${dynamicRoute.distanceKm} km`
        }
      ],
      routePath: dynamicRoute.waypoints,
      distanceKm: dynamicRoute.distanceKm
    };

    // Images strictly from the site's authentic registry
    const mpImages: InChatImage[] = [
      ...(matchedMPSite.heroImage ? [{
        url: matchedMPSite.heroImage,
        title: activeLang === 'hi' ? matchedMPSite.name.hi : matchedMPSite.name.en,
        caption: activeLang === 'hi' ? `${matchedMPSite.name.hi} स्थापत्य` : `${matchedMPSite.name.en} Architectural View`
      }] : []),
      ...matchedMPSite.gallery.map(g => ({
        url: g.url,
        title: activeLang === 'hi' ? matchedMPSite.name.hi : matchedMPSite.name.en,
        caption: activeLang === 'hi' ? g.caption.hi : g.caption.en
      }))
    ].slice(0, 4);

    const text = activeLang === 'hi'
      ? `### 🏰 ${matchedMPSite.name.hi} — सम्पूर्ण इतिहास, स्थापत्य एवं 4 घंटे का यात्रा मार्ग

**📍 स्थान:** ${matchedMPSite.district.hi} | **धरोहर श्रेणी:** ${matchedMPSite.badge.hi}
**🌊 भौगोलिक स्थिति:** ${matchedMPSite.tagline.hi}

---

#### 📜 1. ऐतिहासिक गाथा एवं राजवंश (Complete History)
• **शासक राजवंश:** **${matchedMPSite.history.dynasty.hi}**
• **ऐतिहासिक कालखंड:** **${matchedMPSite.history.period.hi}**
• **विस्तृत ऐतिहासिक विवरण:** ${matchedMPSite.history.chronicle.hi}
• **पुरातत्व संरक्षण एवं महत्व:** **${matchedMPSite.history.asiSignificance.hi}**
• **सांस्कृतिक पृष्ठभूमि:** ${matchedMPSite.culture.significance.hi}

---

#### 🏛️ 2. वास्तुकला एवं स्थापत्य कला की विशेषताएं (Architecture & Engineering)
• **स्थापत्य शैली:** **${matchedMPSite.architecture.style.hi}**
• **प्रमुख इंजीनियरिंग व स्थापत्य विशेषताएं:**
${matchedMPSite.architecture.engineeringHighlights.hi.map(h => `  - 🔹 **${h}**`).join('\n')}
• **संरचनात्मक सुरक्षा एवं विन्यास:** सीप नदी के संगम तट पर ऊंचे प्राकृतिक टीले पर अवस्थित यह दुर्ग पारंपरिक मध्ययुगीन सैन्य वास्तुकला का अनुपम उदाहरण है। इसके परकोटे और बुर्ज बिना किसी कमजोर मसाले (dry-stone dressed masonry) के केवल तराशे हुए पाषाण ब्लॉकों के इंटरलॉकिंग जोड़ से निर्मित हैं। दुर्ग के भीतरी आंगनों में नक्काशीदार झरोखे, बारादरी और मध्यकालीन भित्तिचित्रों (painted pavilions) के ऐतिहासिक अवशेष आज भी देखे जा सकते हैं।

---

#### 🚗 3. ${originCity} से 4 घंटे का यात्रा मार्ग एवं नेविगेशन (Travel Route)
• **सड़क मार्ग दूरी:** **~${dynamicRoute.distanceKm} किमी** (${dynamicRoute.highwayName?.hi || 'एनएच-27 / एसएच-24'})
• **अनुमानित यात्रा समय:** **${dynamicRoute.estimatedDrivingTime}** (एक तरफ: ~4.0 से 4.5 घंटे)
• **मार्ग नेविगेशन (Step-by-Step Highway Route):**
  1. **${originCity} से रवानगी:** शिवपुरी लिंक रोड से होते हुए एनएच-27 (झांसी-शिवपुरी फोर-लेन) अथवा मोहाना मार्ग पकड़ें।
  2. **पोहरी-श्योपुर स्टेट हाईवे (SH-24):** पोहरी के विंध्याचल वनों और कूनो वन्यजीव अभयारण्य बफर जोन के सुरम्य परिदृश्य से होकर गुजरें।
  3. **श्योपुर आगमन व अंतिम मील (Last-Mile):** श्योपुर मुख्य कस्बे में प्रवेश करें; स्थानीय ऑटो अथवा टैक्सी सीधे दुर्ग के सिंहद्वार तक ले जाती है।
• **सड़क की स्थिति:** पक्की राज्य राजमार्ग सड़क; ग्रामीण अंचल में दिन के समय ड्राइव करना सर्वोत्तम।
• **टैक्सी का अनुमानित किराया:** **${matchedMPSite.howToReach.taxiEstimate.hi}** (पूरे दिन हेतु राउंडट्रिप)।
• **दिन में वापसी की व्यवहार्यता:** **${matchedMPSite.howToReach.returnFeasibility.hi}** (प्रातः 7:00 बजे निकलें; 3 घंटे दुर्ग दर्शन के बाद शाम ढलने से पूर्व सुरक्षित वापसी)।

---

#### ⏰ 4. दर्शन समय, प्रवेश शुल्क एवं व्यावहारिक दिशा-निर्देश
• **दर्शन समय:** **${matchedMPSite.practicalInfo.timings.hi}**
• **प्रवेश शुल्क:** **${matchedMPSite.practicalInfo.entryFee.hi}**
• **सर्वश्रेष्ठ भ्रमण समय:** **${matchedMPSite.practicalInfo.bestSlot.hi}**
• **सुगमता स्कोर:** **${matchedMPSite.practicalInfo.accessibilityScore}/10** (${matchedMPSite.lastMileGuidance.hi})
• **📸 फोटोग्राफी सुझाव:** ${matchedMPSite.practicalInfo.photographyTips.hi}
• **🛡️ सुरक्षा व यात्रा परामर्श:** ${matchedMPSite.practicalInfo.safetyAdvisory.hi}

---
_💡 **कोपायलट, मैप एवं चैट सहभागिता (Collaboration Active):** मानचित्र पर ${originCity} से ${matchedMPSite.name.hi} तक का लाइव रूट प्लॉट हो चुका है और बाईं ओर कोपायलट में 4 घंटे के समयबद्ध पड़ाव लोड कर दिए गए हैं!_`
      : `### 🏰 ${matchedMPSite.name.en} — Complete History, Architecture & 4-Hour Travel Route

**📍 Location:** ${matchedMPSite.district.en} | **Classification:** ${matchedMPSite.badge.en}
**🌊 Geography:** ${matchedMPSite.tagline.en}

---

#### 📜 1. Complete History & Chronicle (Royal Lineage)
• **Ruling Dynasty:** **${matchedMPSite.history.dynasty.en}**
• **Historical Period:** **${matchedMPSite.history.period.en}**
• **Chronicle & Evolution:** ${matchedMPSite.history.chronicle.en}
• **Heritage & ASI Status:** **${matchedMPSite.history.asiSignificance.en}**
• **Cultural Significance:** ${matchedMPSite.culture.significance.en}

---

#### 🏛️ 2. Architecture & Engineering Highlights
• **Architectural Style:** **${matchedMPSite.architecture.style.en}**
• **Key Engineering Highlights:**
${matchedMPSite.architecture.engineeringHighlights.en.map(h => `  - 🔹 **${h}**`).join('\n')}
• **Defensive Design & Spatial Layout:** Strategically perched on an elevated ridge along the Sip River confluence, the fortress exemplifies medieval regional military architecture. Perimeter ramparts feature dressed sandstone blocks fitted using mortarless interlocking masonry. Surviving inner court pavilions retain graceful stone jharokhas, fluted pillared verandas, and regional frescoes reflecting the confluence of Rajput and Maratha aesthetic idioms.

---

#### 🚗 3. 4-Hour Travel Route & Highway Navigation from ${originCity}
• **Total Road Distance:** **~${dynamicRoute.distanceKm} km** via ${dynamicRoute.highwayName?.en || 'NH-27 / SH-24 Highway Corridor'}
• **Estimated Driving Duration:** **${dynamicRoute.estimatedDrivingTime}** (One-way: ~4.0 to 4.5 hours)
• **Turn-by-Turn Route Navigation:**
  1. **Depart ${originCity}:** Take the Shivpuri Link corridor connecting to NH-27 toward Mohana.
  2. **Pohri-Sheopur State Highway (SH-24):** Follow the scenic highway through Vindhya forest landscapes bordering the Kuno National Park buffer corridor.
  3. **Arrival in Sheopur Town:** The fortress is situated directly in Sheopur town; local auto-rickshaws or taxis easily navigate the last-mile ascent to the main gates.
• **Road Condition & Pavement:** Paved state highway with smooth stretches and moderate countryside transit.
• **Private Taxi Estimate:** **${matchedMPSite.howToReach.taxiEstimate.en}** (Round-trip full-day hiring).
• **Day Return Feasibility:** **${matchedMPSite.howToReach.returnFeasibility.en}** (Departing early around 7:00 AM ensures ~2.5 to 3 hours at the fort and an easy return before dusk).

---

#### ⏰ 4. Practical Visiting Information & Guidelines
• **Visiting Hours:** **${matchedMPSite.practicalInfo.timings.en}**
• **Entry Fee:** **${matchedMPSite.practicalInfo.entryFee.en}**
• **Best Visiting Slot:** **${matchedMPSite.practicalInfo.bestSlot.en}**
• **Accessibility Rating:** **${matchedMPSite.practicalInfo.accessibilityScore}/10** (${matchedMPSite.lastMileGuidance.en})
• **📸 Photography Advice:** ${matchedMPSite.practicalInfo.photographyTips.en}
• **🛡️ Safety & Travel Advisory:** ${matchedMPSite.practicalInfo.safetyAdvisory.en}

---
_💡 **Collaboration Active:** The interactive map has zoomed to ${matchedMPSite.name.en} with the highway route line from ${originCity}. The Copilot Drawer on the left has been populated with a synchronized 4-hour timeline!_`;

    const mpResponse: GeminiResponse = {
      text,
      language: activeLang,
      hasImage: mpImages.length > 0,
      images: mpImages,
      hasMap: true,
      mapData: mpMapData,
      copilotItinerary: copilotItinerary
    };

    responseCache.set(cacheKey, mpResponse);
    return mpResponse;
  }

  // Check for Copilot / Itinerary planning intent
  const isItineraryQuery = 
    /\b(i have|hours|hour|hrs|hr|itinerary|plan a trip|trip plan|plan my trip|back by|flight at|train at|half day|full day|ghante|ghanta|yatra yojana|afternoon|sunset experience|peaceful place|romantic|photography spots|culture|2 days|3 days)\b/i.test(userMessage) &&
    !userMessage.match(/\b(pass rules|dress code|fake pass|helpline)\b/i);

  if (isItineraryQuery) {
    const parsed = parseNaturalLanguageTripQuery(userMessage);
    const itinerary = generateTimeBasedItinerary(parsed);

    const itineraryMapData: InChatMapData = {
      title: activeLang === 'hi' ? itinerary.titleHi : itinerary.title,
      center: itinerary.stops[0].coordinates,
      zoom: 12,
      markers: itinerary.stops.map(s => ({
        position: s.coordinates,
        title: `${s.stopNumber}. ${activeLang === 'hi' ? s.hindiName : s.name} (${s.startTime} - ${s.endTime})`,
        description: `${activeLang === 'hi' ? s.activityHi : s.activity} | Stay: ${s.durationMinutes}m | ${activeLang === 'hi' ? s.whyThisPlaceHi : s.whyThisPlace}`
      })),
      routePath: itinerary.stops.map(s => s.coordinates),
      distanceKm: itinerary.totalDistanceKm
    };

    const itineraryImages: InChatImage[] = itinerary.stops
      .filter(s => s.imageUrl)
      .slice(0, 4)
      .map(s => ({
        url: s.imageUrl!,
        title: activeLang === 'hi' ? s.hindiName : s.name,
        caption: `Stop ${s.stopNumber}: ${activeLang === 'hi' ? s.hindiName : s.name} (${s.startTime})`
      }));

    const text = activeLang === 'hi'
      ? `### 🧭 ${itinerary.titleHi}

**🎯 आपकी आवश्यकता अनुसार अनुकूलित यात्रा योजना:**
• **कुल उपलब्ध समय:** ${itinerary.targetHours} घंटे (प्रारंभ: ${itinerary.startTime})
${itinerary.deadlineTime ? `• **वापसी समयसीमा:** **${itinerary.deadlineTime}** (${itinerary.deadlineLabel || 'स्टेशन/प्रस्थान'})\n• **🛡️ सुरक्षा बफर समय:** **${itinerary.safetyBufferMinutes} मिनट** (बिना किसी भागदौड़ सुरक्षित वापसी)` : ''}
• **कुल यात्रा दूरी:** ~${itinerary.totalDistanceKm} किमी
• **अनुमानित व्यय:** ${itinerary.totalCostEstimate}

---

**🗺️ चरण-दर-चरण समयबद्ध यात्रा मार्ग (Timeline):**

${itinerary.stops.map(s => `
**${s.startTime} – ${s.endTime}** (पड़ाव ${s.stopNumber})
📍 **${s.hindiName}** (${s.durationMinutes} मिनट विश्राम/दर्शन)
• **गतिविधि:** ${s.activityHi}
• **💡 चयन का कारण (Why This Place):** ${s.whyThisPlaceHi}
${s.travelTimeToNextMinutes ? `↳ 🛺 *अगले पड़ाव हेतु यात्रा:* ~${s.travelTimeToNextMinutes} मिनट (${s.transportModeToNext === 'walk' ? 'पैदल' : s.transportModeToNext === 'taxi' ? 'टैक्सी' : 'ऑटो'} • ${s.travelDistanceToNextKm} किमी)` : ''}
`).join('\n')}

${itinerary.suggestedHotel ? `\n🏨 **अनुशंसित होटल क्षेत्र:** **${itinerary.suggestedHotel.name}** (${itinerary.suggestedHotel.area})\n_${itinerary.suggestedHotel.rationale}_` : ''}

_मानचित्र पर सभी पड़ाव (1, 2, 3...) और रूट ट्रैक लाइव प्लॉट कर दिए गए हैं। आप कोपायलट टाइमलाइन से किसी भी समय इसे संपादित (Edit/Optimize) कर सकते हैं!_`
      : `### 🧭 ${itinerary.title}

**🎯 Practical Time-Aware Itinerary Generated:**
• **Available Time:** ${itinerary.targetHours} Hours (Starting: ${itinerary.startTime})
${itinerary.deadlineTime ? `• **Return Deadline:** **${itinerary.deadlineTime}** (${itinerary.deadlineLabel || 'Departure'})\n• **🛡️ Smart Deadline Protection Buffer:** **${itinerary.safetyBufferMinutes} Minutes** (Ensures timely return without rush)` : ''}
• **Total Route Transit:** ~${itinerary.totalDistanceKm} km
• **Estimated Budget:** ${itinerary.totalCostEstimate}

---

**🗺️ Step-by-Step Time-Based Timeline:**

${itinerary.stops.map(s => `
**${s.startTime} – ${s.endTime}** (Stop ${s.stopNumber})
📍 **${s.name}** (${s.durationMinutes} min stay)
• **Activity:** ${s.activity}
• **💡 Why This Place:** ${s.whyThisPlace}
${s.travelTimeToNextMinutes ? `↳ 🛺 *Transit to next stop:* ~${s.travelTimeToNextMinutes} mins via ${s.transportModeToNext} (~${s.travelDistanceToNextKm} km)` : ''}
`).join('\n')}

${itinerary.suggestedHotel ? `\n🏨 **Smart Hotel Location Suggestion:** **${itinerary.suggestedHotel.name}** (${itinerary.suggestedHotel.area})\n_${itinerary.suggestedHotel.rationale}_` : ''}

_All numbered stops and connecting route lines are plotted on your interactive map. You can edit, skip, extend (+15m), or optimize this trip anytime from the Copilot Drawer!_`;

    return {
      text,
      language: activeLang,
      hasImage: itineraryImages.length > 0,
      images: itineraryImages,
      hasMap: true,
      mapData: itineraryMapData,
      copilotItinerary: itinerary
    };
  }

  // Check for dynamic point-to-point route query (e.g., "gwalior to sheopur", "kanpur to prayag", "bhopal to sanchi")
  const routeMatch = userMessage.match(/\b([a-zA-Z\u0900-\u097F]{3,})\s+(?:to|se|se lekar|tak)\s+([a-zA-Z\u0900-\u097F]{3,})\b/i);
  let computedDynamicRoute: any = null;
  if (routeMatch) {
    computedDynamicRoute = calculateDynamicMPRoute(routeMatch[1], routeMatch[2]) || calculateDynamicUPRoute(routeMatch[1], routeMatch[2]);
  }

  // Match referenced places & city crowd advisories
  let matchedPlaces = searchUPPlaces(userMessage);

  // Multi-Turn Chat Memory Recall:
  // If user asks a follow-up (e.g., "what is the ticket price?", "how to reach there?", "timings?", "photos?", "hotel nearby?"),
  // look up the most recent place discussed in conversationHistory so Disha AI answers for that exact destination!
  if (matchedPlaces.length === 0 && conversationHistory && conversationHistory.length > 0) {
    for (let i = conversationHistory.length - 1; i >= 0; i--) {
      const prevMsg = conversationHistory[i];
      if (prevMsg.role === 'user') {
        const prevMatched = searchUPPlaces(prevMsg.content);
        if (prevMatched.length > 0) {
          matchedPlaces = prevMatched;
          break;
        }
      }
    }
  }

  const matchedCrowdAdvisory = getCrowdAdvisoryByCity(userMessage) || (matchedPlaces.length > 0 ? getCrowdAdvisoryByCity(matchedPlaces[0].city) : null);

  // Extract images strictly corresponding to the matched place and NEVER substitute wrong cities
  let responseImages: InChatImage[] = [];
  
  if (matchedPlaces.length > 0) {
    // Only return images for the places actually matched in the query!
    matchedPlaces.slice(0, 4).forEach(place => {
      place.images.forEach(img => {
        responseImages.push({
          url: img.url,
          title: activeLang === 'hi' ? img.title.hi : img.title.en,
          caption: activeLang === 'hi' ? `${place.hindiName} (${place.hindiCity})` : `${place.name} (${place.city})`
        });
      });
    });
  } else if (isGhatsQuery) {
    // Only return distinct images from ghats
    upGhats.slice(0, 6).forEach(g => {
      if (g.images.length > 0) {
        responseImages.push({
          url: g.images[0].url,
          title: activeLang === 'hi' ? g.hindiName : g.name,
          caption: activeLang === 'hi' ? `${g.hindiName} (${g.hindiCity})` : `${g.name} (${g.city})`
        });
      }
    });
  } else if (isImageRequest) {
    // General photo request: give 1 representative photo across varied circuits (Ayodhya, Varanasi, Mathura, Jhansi)
    const diversePlaces = [
      upPlaces.find(p => p.city.toLowerCase() === 'ayodhya'),
      upPlaces.find(p => p.city.toLowerCase() === 'varanasi'),
      upPlaces.find(p => p.city.toLowerCase() === 'mathura'),
      upPlaces.find(p => p.city.toLowerCase() === 'jhansi')
    ].filter(Boolean) as UPPlace[];

    diversePlaces.forEach(place => {
      if (place.images.length > 0) {
        responseImages.push({
          url: place.images[0].url,
          title: activeLang === 'hi' ? place.hindiName : place.name,
          caption: activeLang === 'hi' ? place.hindiName : place.name
        });
      }
    });
  }

  // Extract Map / Route Data
  let mapData: InChatMapData | undefined = undefined;

  if (computedDynamicRoute) {
    mapData = {
      title: activeLang === 'hi' ? computedDynamicRoute.name.hi : computedDynamicRoute.name.en,
      center: computedDynamicRoute.waypoints[0],
      zoom: 8,
      markers: computedDynamicRoute.waypoints.map((w, idx) => ({
        position: w,
        title: idx === 0 
          ? (activeLang === 'hi' ? `प्रारंभिक स्थल: ${routeMatch![1]}` : `Start: ${routeMatch![1]}`)
          : idx === computedDynamicRoute!.waypoints.length - 1 
            ? (activeLang === 'hi' ? `गंतव्य: ${routeMatch![2]}` : `Destination: ${routeMatch![2]}`)
            : (activeLang === 'hi' ? `मार्ग पड़ाव ${idx}` : `Highway Waypoint ${idx}`),
        description: `Distance: ~${computedDynamicRoute!.distanceKm} km | ${computedDynamicRoute!.estimatedDrivingTime}`
      })),
      routePath: computedDynamicRoute.waypoints,
      distanceKm: computedDynamicRoute.distanceKm
    };
  } else if (isGhatsQuery) {
    mapData = {
      title: activeLang === 'hi' ? 'उत्तर प्रदेश के सभी प्रमुख पावन घाट' : 'All Sacred Ghats of Uttar Pradesh',
      center: [25.3076, 83.0103],
      zoom: 8,
      markers: upGhats.map(g => ({
        position: g.coordinates,
        title: activeLang === 'hi' ? `${g.hindiName} (${g.hindiCity})` : `${g.name} (${g.city})`,
        description: activeLang === 'hi' ? g.description.hi : g.description.en
      }))
    };
  } else if (matchedPlaces.length >= 2) {
    const isExplicitMultiRoute = /\b(route|circuit|itinerary|plan|safarnama|yatra marg|yatra|tour|parikrama)\b/i.test(userMessage) &&
      (userMessage.toLowerCase().includes('from') || userMessage.toLowerCase().includes('to') || userMessage.toLowerCase().includes('se') || userMessage.toLowerCase().includes('tak') || userMessage.toLowerCase().includes('circuit'));

    mapData = {
      title: activeLang === 'hi' 
        ? (isExplicitMultiRoute ? `${matchedPlaces[0].hindiCity} से ${matchedPlaces[matchedPlaces.length - 1].hindiCity} यात्रा मार्ग` : `${matchedPlaces[0].hindiCity} क्षेत्र के प्रमुख स्थल`)
        : (isExplicitMultiRoute ? `${matchedPlaces[0].city} to ${matchedPlaces[matchedPlaces.length - 1].city} Route` : `Key Places in ${matchedPlaces[0].city} Region`),
      center: matchedPlaces[0].coordinates,
      zoom: 8,
      markers: matchedPlaces.map(p => ({
        position: p.coordinates,
        title: activeLang === 'hi' ? p.hindiName : p.name,
        description: activeLang === 'hi' ? p.description.hi : p.description.en
      })),
      ...(isExplicitMultiRoute ? {
        routePath: matchedPlaces.map(p => p.coordinates),
        distanceKm: 240
      } : {})
    };
  } else if (matchedPlaces.length === 1) {
    const place = matchedPlaces[0];
    mapData = {
      title: activeLang === 'hi' ? place.hindiName : place.name,
      center: place.coordinates,
      zoom: 14,
      markers: [{
        position: place.coordinates,
        title: activeLang === 'hi' ? place.hindiName : place.name,
        description: activeLang === 'hi' ? place.description.hi : place.description.en
      }]
    };
  } else if (isMapRouteRequest) {
    const defaultRoute = upRoutes[0];
    mapData = {
      title: activeLang === 'hi' ? defaultRoute.name.hi : defaultRoute.name.en,
      center: [26.7956, 82.1943],
      zoom: 8,
      markers: upPlaces.slice(0, 6).map(p => ({
        position: p.coordinates,
        title: activeLang === 'hi' ? p.hindiName : p.name,
        description: activeLang === 'hi' ? p.description.hi : p.description.en
      })),
      routePath: defaultRoute.waypoints,
      distanceKm: defaultRoute.distanceKm
    };
  }

  // System Prompt with Real-time Crowd Status & Travel Causes
  const crowdSummary = Object.values(UP_CROWD_ADVISORIES).map(c => `
[CITY CROWD & FEASIBILITY STATUS - ${c.cityName.en}]:
Crowd Level: ${c.currentCrowdLevel.toUpperCase()} (${c.crowdBadge.en})
Travel Feasibility ("Jane layak hai ya nahi"): ${c.feasibilityVerdict.en}
Detailed Status: ${c.detailedStatus.en}
Best Visiting Hours: ${c.bestVisitingSlots.en}
How to Reach: ${c.howToReach.en}
Recent Happenings: ${c.latestHappening.en}
`).join('\n---\n');

  const placesInfo = upPlaces.slice(0, 35).map(p => `
Place: ${p.name} (${p.hindiName}) | City: ${p.city} (${p.hindiCity}) | Category: ${p.category}
Travel Cause: ${p.travelCause.en} / ${p.travelCause.hi}
History: ${p.deepHistory.en}
Timings & Fees: ${p.timings.en} | ${p.entryFee.en}
Accessibility: ${p.accessibilityRating}/10 (${p.accessibilityNotes.en})
`).join('\n');

  // Dynamic District Crowd Telemetry
  const districtCrowdPromptSection = districtCrowd ? `
*** LIVE TELEMETRY FOR ${districtCrowd.district.toUpperCase()} (${districtCrowd.hindiDistrict}) ***
Primary Hub: ${districtCrowd.primaryHub}
Crowd Level: ${districtCrowd.crowdLevel.toUpperCase()} (${districtCrowd.crowdLevelText.en})
Queue Wait Time: ${districtCrowd.waitTimeFormatted.en} / ${districtCrowd.waitTimeFormatted.hi}
Feasibility Verdict ("Jane Layak Hai Ya Nahi"): ${districtCrowd.feasibilityVerdict.en}
Peak Rush Hours: ${districtCrowd.peakHours.en}
Recommended Best Slot: ${districtCrowd.bestSlot.en}
Police & Traffic Advisory: ${districtCrowd.policeAdvisory.en}
Key Temple Queue Breakdown: ${districtCrowd.keySpots.map(s => `${s.name} (${s.waitMinutes} mins wait)`).join(', ')}
Provide this EXACT numerical queue time and advice clearly to the user!
` : '';

  const systemPrompt = `You are Ghumo AI (घूमो एआई), the official, intelligent and highly informed travel companion for Ghumo India (Team Srajan).
Your knowledge covers all 75 districts of Uttar Pradesh including Jhansi, Kanpur, Ayodhya, Varanasi, Mathura, Vrindavan, Prayagraj, Agra, Lucknow, Chitrakoot, Gorakhpur, Mirzapur, etc.

Language Guidelines:
- The user's active language is **${activeLang === 'hi' ? 'HINDI (हिन्दी)' : 'ENGLISH'}**.
- If the user writes in Hindi or asks in Hindi, write in pure, articulate, and culturally respectful Hindi (शुद्ध एवं सुरुचिपूर्ण हिन्दी).
- If the user writes in English, respond in articulate, structured, and informative English.

Core Responsibilities:
1. **Accurate City-Specific Responses**:
   - If asked about Jhansi, focus exclusively on Jhansi (Jhansi Fort, Rani Laxmi Bai, Rani Mahal, 1857 freedom struggle history, transport, and photos). Never substitute Agra or other cities.
   - If asked about Kanpur, focus on JK Temple, Bithoor Brahmavarta Ghat, Valmiki Ashram, and Allen Forest Zoo.
   - If asked about Mathura / Vrindavan crowd, state current queue time (~1.5 to 2.5 hours at Bankey Bihari), entry gates, and best slot.
2. **Accurate Route & Highway Guidance**:
   - If asked for routes (e.g. Kanpur to Prayagraj, Lucknow to Ayodhya, Jhansi to Chitrakoot), provide highway numbers, distance in km, driving times, and train connectivity.
3. **Answer "Jane Layak Hai Ya Nahi" & Live Crowd Status**:
   - Give clear feasibility verdicts, current queue wait times, and the best hours to visit.
4. **Explain the "Travel Cause"**:
   - Always clearly explain *why* a place or pilgrimage is visited.
5. **Formatting**:
   - Use Markdown headers (###), bold bullet points, and helpful emojis (🛕, 🏰, 🌊, 🛣️, ⏰, ♿, 💡).

${districtCrowdPromptSection}

REAL-TIME CROWD & FEASIBILITY ADVISORIES:
${crowdSummary}

DESTINATIONS & GHATS HIGHLIGHTS:
${placesInfo}
`;

  // Execute Gemini API call
  try {
    if (!genAI) throw new Error('Gemini API client not initialized');

    const candidateModels = ['gemini-3.6-flash', 'gemini-2.5-flash', 'gemini-1.5-flash'];
    let responseText = '';

    for (const modelName of candidateModels) {
      try {
        const model = genAI.getGenerativeModel({
          model: modelName,
          systemInstruction: systemPrompt
        });

        const safeHistory = Array.isArray(conversationHistory) ? conversationHistory : [];
        const contents = [
          ...safeHistory.slice(-4).map(msg => ({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.content }]
          })),
          {
            role: 'user',
            parts: [{ text: userMessage }]
          }
        ];

        const result = await model.generateContent({ contents });
        responseText = result.response.text();
        if (responseText) break;
      } catch (modelErr: any) {
        console.warn(`Model ${modelName} error:`, modelErr?.message);
      }
    }

    if (!responseText) throw new Error('No text returned from models');

    const cloudResponse: GeminiResponse = {
      text: responseText,
      language: activeLang,
      hasImage: responseImages.length > 0,
      images: responseImages.length > 0 ? responseImages : undefined,
      hasMap: !!mapData,
      mapData,
      crowdAdvisory: matchedCrowdAdvisory,
      districtCrowdStatus: districtCrowd,
      scrapedNews: matchingScrapedNews.length > 0 ? matchingScrapedNews.slice(0, 3) : undefined,
      newsItems: isNewsRequest ? upNews : undefined
    };

    responseCache.set(cacheKey, cloudResponse);
    return cloudResponse;

  } catch (apiError: any) {
    console.warn('Gemini API fallback triggered:', apiError);

    // High quality offline fallback generator
    const offlineRes = generateSmartOfflineResponse(
      userMessage, 
      activeLang, 
      matchedPlaces, 
      mapData, 
      responseImages, 
      matchedCrowdAdvisory, 
      computedDynamicRoute, 
      upNews, 
      isGhatsQuery, 
      upGhats,
      districtCrowd,
      matchingScrapedNews,
      isCrowdQuery
    );

    responseCache.set(cacheKey, offlineRes);
    return offlineRes;
  }
}

// Comprehensive intelligent offline response generator
function generateSmartOfflineResponse(
  userMessage: string,
  lang: 'en' | 'hi',
  matchedPlaces: UPPlace[],
  mapData?: InChatMapData,
  images?: InChatImage[],
  crowdAdvisory?: UPCityCrowdAdvisory,
  dynamicRoute?: ReturnType<typeof calculateDynamicUPRoute>,
  news?: UPNewsEvent[],
  isGhatsQuery?: boolean,
  upGhats?: UPPlace[],
  districtCrowd?: DistrictCrowdStatus,
  scrapedNews?: ScrapedNewsItem[],
  isCrowdQuery?: boolean
): GeminiResponse {
  // If user is ONLY querying general crowd without a specific place match
  if (matchedPlaces.length === 0 && districtCrowd && (isCrowdQuery || userMessage.toLowerCase().includes('crowd') || userMessage.toLowerCase().includes('bheed') || userMessage.toLowerCase().includes('kitni') || userMessage.toLowerCase().includes('rush') || userMessage.toLowerCase().includes('line'))) {
    const text = lang === 'hi'
      ? `### 👥 ${districtCrowd.hindiDistrict} — लाइव भीड़ एवं दर्शन स्थिति रिपोर्ट

**🔴 वर्तमान भीड़ स्तर:** **${districtCrowd.crowdLevelText.hi}**
• **कतार में प्रतीक्षा समय:** **${districtCrowd.waitTimeFormatted.hi}**
• **प्रमुख केंद्र:** ${districtCrowd.primaryHub}
• **अंतिम अपडेट:** ${districtCrowd.lastUpdated}

**🧭 क्या जाने लायक है या नहीं (Feasibility Verdict):**
${districtCrowd.feasibilityVerdict.hi}

**⏰ प्रमुख मंदिरों में कतार स्थिति:**
${districtCrowd.keySpots.map(s => `• **${s.hindiName}:** ${s.waitMinutes > 0 ? `~${s.waitMinutes} मिनट प्रतीक्षा` : 'सामान्य/सुगम प्रवाह'} (${s.status === 'heavy_rush' ? 'भारी दबाव ⚠️' : s.status === 'moderate' ? 'मध्यम ⏳' : 'सुगम ✅'})`).join('\n')}

**💡 सर्वश्रेष्ठ दर्शन समय (Best Time to Visit):**
• **अनुकूल स्लॉट:** ${districtCrowd.bestSlot.hi}
• **अधिक भीड़ का समय (Peak Hours):** ${districtCrowd.peakHours.hi}

**🚓 पुलिस एवं यातायात परामर्श:**
• ${districtCrowd.policeAdvisory.hi}

_आप न्यूज़ पेज (News Tab) पर जाकर इस जिले के लाइव समाचार व विस्तृत एडवाइजरी भी देख सकते हैं!_`
      : `### 👥 ${districtCrowd.district} — Live Crowd & Darshan Status Report

**🔴 Current Crowd Level:** **${districtCrowd.crowdLevelText.en}**
• **Estimated Queue Wait:** **${districtCrowd.waitTimeFormatted.en}**
• **Primary Hub:** ${districtCrowd.primaryHub}
• **Last Updated:** ${districtCrowd.lastUpdated}

**🧭 Feasibility Verdict ("Jane Layak Hai Ya Nahi"):**
${districtCrowd.feasibilityVerdict.en}

**⏰ Key Spots & Temple Queue Breakdown:**
${districtCrowd.keySpots.map(s => `• **${s.name}:** ${s.waitMinutes > 0 ? `~${s.waitMinutes} mins wait` : 'Zero/Fast Line'} (${s.status === 'heavy_rush' ? 'Heavy Rush ⚠️' : s.status === 'moderate' ? 'Moderate ⏳' : 'Smooth ✅'})`).join('\n')}

**💡 Recommended Darshan Slots:**
• **Best Time:** ${districtCrowd.bestSlot.en}
• **Peak Rush Hours:** ${districtCrowd.peakHours.en}

**🚓 Police & Traffic Advisory:**
• ${districtCrowd.policeAdvisory.en}

_Visit our dedicated News Page to view live web-scraped district bulletins and alerts!_`;

    return {
      text,
      language: lang,
      hasImage: (images && images.length > 0) || false,
      images,
      hasMap: !!mapData,
      mapData,
      districtCrowdStatus: districtCrowd,
      scrapedNews: scrapedNews && scrapedNews.length > 0 ? scrapedNews.slice(0, 3) : undefined
    };
  }

  // If point-to-point route computed
  if (dynamicRoute) {
    const text = lang === 'hi'
      ? `### 🛣️ ${dynamicRoute.name.hi} (मार्ग एवं दूरी विवरण)

**📍 दूरी एवं अनुमानित समय:**
• **कुल दूरी:** ~${dynamicRoute.distanceKm} किमी
• **सड़क मार्ग समय:** ${dynamicRoute.estimatedDrivingTime}
• **प्रमुख एक्सप्रेसवे / हाईवे:** ${dynamicRoute.highwayName?.hi || 'राष्ट्रीय राजमार्ग (NH)'}

**🚗 यात्रा एवं पड़ाव योजना (Itinerary):**
• **प्रारंभ स्थल:** ${dynamicRoute.recommendedStops[0]}
• **मध्य मार्ग पड़ाव:** ${dynamicRoute.recommendedStops[1]}
• **गंतव्य:** ${dynamicRoute.recommendedStops[2]}

**🚆 प्रमुख ट्रेन विकल्प:**
• वंदे भारत एक्सप्रेस, प्रयागराज एक्सप्रेस, श्रम शक्ति एक्सप्रेस एवं नियमित सुपरफास्ट ट्रेनें।

_मैप में पूरा रूट ट्रैक और वेपॉइंट्स मार्क कर दिए गए हैं!_`
      : `### 🛣️ ${dynamicRoute.name.en} (Route & Highway Overview)

**📍 Distance & Travel Duration:**
• **Total Distance:** ~${dynamicRoute.distanceKm} km
• **Driving Time:** ${dynamicRoute.estimatedDrivingTime}
• **Primary Highway / Expressway:** ${dynamicRoute.highwayName?.en || 'National Highway Corridor'}

**🚗 Recommended Journey Milestones:**
• **Origin:** ${dynamicRoute.recommendedStops[0]}
• **Midway Pitstop:** ${dynamicRoute.recommendedStops[1]}
• **Arrival:** ${dynamicRoute.recommendedStops[2]}

**🚆 Train Options:**
• Vande Bharat Express, Prayagraj Express, Shram Shakti Express, and frequent superfast connectivity.

_The interactive highway track has been plotted on your map!_`;

    return {
      text,
      language: lang,
      hasImage: false,
      hasMap: !!mapData,
      mapData
    };
  }

  // If user asked about Ghats specifically
  if (isGhatsQuery && upGhats) {
    const text = lang === 'hi'
      ? `### 🌊 उत्तर प्रदेश के प्रमुख पावन घाट दर्शन एवं विवरण

1. **दशाश्वमेध घाट (वाराणसी):** विश्वविख्यात सांध्य महा गंगा आरती (सायं 6:45 बजे)।
2. **अस्सी घाट (वाराणसी):** "सुबह-ए-बनारस" - प्रातःकालीन योग, शास्त्रीय राग एवं सूर्योदय आरती।
3. **नमो घाट (वाराणसी):** 75 फीट ऊंचे नमस्ते स्कल्पचर, पूर्णतः व्हीलचेयर सुलभ।
4. **ब्रह्मावर्त घाट (बिठूर, कानपुर):** भगवान ब्रह्मा द्वारा सृष्टि रचना स्थली एवं पवित्र गंगा स्नान।
5. **राम की पैड़ी एवं सरयू घाट (अयोध्या):** दिव्य दीपोत्सव स्थल एवं सांध्य सरयू महा आरती।
6. **गुप्तार घाट (अयोध्या):** भगवान श्री राम की पावन जल समाधि स्थली।
7. **विश्राम घाट (मथुरा):** कंस वध के उपरांत विश्राम स्थल व सांध्य यमुना महारती।
8. **केशी घाट (वृंदावन):** 17वीं सदी के झरोखेदार महलों से सुसज्जित यमुना तट।
9. **त्रिवेणी संगम (प्रयागराज):** गंगा, यमुना और सरस्वती का पवित्र महासंगम।
10. **रामघाट (चित्रकूट):** मंदाकिनी नदी का पावन तट।

_मैप पर सभी प्रमुख घाटों की लोकेशन मार्क कर दी गई है!_`
      : `### 🌊 Sacred Ghats of Uttar Pradesh: Complete Riverfront Guide

1. **Dashashwamedh Ghat (Varanasi):** World-famous evening Maha Ganga Aarti (~6:45 PM).
2. **Assi Ghat (Varanasi):** "Subah-e-Banaras" dawn program with Vedic havan & yoga (5:30 AM).
3. **Namo Ghat (Varanasi):** 75-ft Namaste sculptures, 100% wheelchair-accessible plaza.
4. **Brahmavarta Ghat (Bithoor, Kanpur):** Site where Lord Brahma performed Ashwamedha sacrifice.
5. **Ram Ki Paidi & Saryu Ghat (Ayodhya):** Historic Deepotsav riverfront & evening Saryu Aarti.
6. **Guptar Ghat (Ayodhya):** Peaceful sanctuary of Lord Rama\'s Jal Samadhi.
7. **Vishram Ghat (Mathura):** Lord Krishna rested after slaying Kansa; Yamuna Aarti (7:00 PM).
8. **Keshi Ghat (Vrindavan):** 17th-century ornate Rajasthani sandstone pavilions on Yamuna.
9. **Triveni Sangam (Prayagraj):** Sacred confluence of Ganga, Yamuna, and Saraswati.
10. **Ramghat (Chitrakoot):** Mandakini riverfront where Saint Tulsidas received divine darshan.

_All ghat markers have been highlighted on your interactive map!_`;

    return {
      text,
      language: lang,
      hasImage: (images && images.length > 0) || false,
      images,
      hasMap: !!mapData,
      mapData
    };
  }

  // Matched places guide
  if (matchedPlaces.length > 0) {
    let output = '';

    matchedPlaces.slice(0, 2).forEach(p => {
      const isDetailedQuery = /\b(detailed|detail|details|history|cause|causes|significance|about|parichay|itihas|mahatva|poori jankari|sab kuch|katha)\b/i.test(userMessage);
      const isFeeQuery = !isDetailedQuery && (/\b(ticket|price|fee|entry fee|cost|charge|shulk|paisa|kiraya)\b/i.test(userMessage) ||
        /(टिकट|शुल्क|प्रवेश शुल्क|खर्चा|फीस|किराया|पैसे|रेट)/i.test(userMessage));
      const isTimingQuery = !isDetailedQuery && (/\b(timing|timings|open|close|hours|samay|khulta|band)\b/i.test(userMessage) ||
        /(समय|टाइमिंग|टाइम|कब खुलता|कब बंद|घंटे)/i.test(userMessage));

      if (lang === 'hi') {
        if (isFeeQuery) {
          output += `### 🎟️ ${p.hindiName} — प्रवेश शुल्क एवं टिकट विवरण

• **प्रवेश शुल्क (Entry Fee):** **${p.entryFee.hi}**
• **दर्शन व भ्रमण समय (Timings):** ${p.timings.hi}
• **सुगमता एवं सुविधाएं:** ${p.accessibilityNotes.hi}
• **यात्रा सुझाव:** ${p.safetyTips.hi}

`;
        } else if (isTimingQuery) {
          output += `### ⏰ ${p.hindiName} — दर्शन एवं भ्रमण समय

• **दर्शन / भ्रमण समय:** **${p.timings.hi}**
• **प्रवेश शुल्क:** ${p.entryFee.hi}
• **फोटोग्राफी सुझाव:** ${p.photographyTips.hi}
• **यात्रा सुरक्षा:** ${p.safetyTips.hi}

`;
        } else {
          output += `### 🛕 ${p.hindiName} (${p.hindiCity})

**✨ यात्रा का उद्देश्य एवं ऐतिहासिक महत्व (Travel Cause):**
${p.travelCause.hi}

**📜 ऐतिहासिक एवं वास्तुकला परिचय:**
${p.deepHistory.hi}

**⏰ दर्शन / भ्रमण समय एवं प्रवेश शुल्क:**
• **समय:** ${p.timings.hi}
• **प्रवेश शुल्क:** ${p.entryFee.hi}

**♿ सुगमता एवं सुविधाएं (Accessibility):**
• **रेटिंग:** ${p.accessibilityRating}/10 (${p.accessibilityNotes.hi})

**💡 यात्रा व फोटोग्राफी सुझाव:**
• ${p.safetyTips.hi}
• **फोटोग्राफी:** ${p.photographyTips.hi}

`;
        }
      } else {
        if (isFeeQuery) {
          output += `### 🎟️ ${p.name} — Entry Fee & Tickets

• **Entry Fee:** **${p.entryFee.en}**
• **Visiting Hours:** ${p.timings.en}
• **Accessibility:** ${p.accessibilityNotes.en}
• **Pro Tip:** ${p.safetyTips.en}

`;
        } else if (isTimingQuery) {
          output += `### ⏰ ${p.name} — Timings & Visiting Hours

• **Visiting Hours:** **${p.timings.en}**
• **Entry Fee:** ${p.entryFee.en}
• **Photography:** ${p.photographyTips.en}
• **Safety Tip:** ${p.safetyTips.en}

`;
        } else {
          output += `### 🛕 ${p.name} (${p.city})

**✨ Travel Purpose & Significance (Travel Cause):**
${p.travelCause.en}

**📜 Historical Context:**
${p.deepHistory.en}

**⏰ Timings & Entry Details:**
• **Timings:** ${p.timings.en}
• **Entry Fee:** ${p.entryFee.en}

**♿ Accessibility & Facilities:**
• **Rating:** ${p.accessibilityRating}/10 (${p.accessibilityNotes.en})

**💡 Pro Travel Tips & Safety:**
• ${p.safetyTips.en}
• **Photography:** ${p.photographyTips.en}

`;
        }
      }
    });

    const primaryPlace = matchedPlaces[0];
    const cityCrowd = districtCrowd || getDistrictCrowdMetrics(primaryPlace.city);
    const relatedScams = getUPScams().filter(s => s.city.toLowerCase() === primaryPlace.city.toLowerCase());

    if (cityCrowd && (isCrowdQuery || userMessage.toLowerCase().includes('crowd') || userMessage.toLowerCase().includes('bheed') || userMessage.toLowerCase().includes('status'))) {
      if (lang === 'hi') {
        output += `### 👥 लाइव भीड़ एवं दर्शन स्थिति (${cityCrowd.hindiDistrict})\n• **भीड़ स्तर:** ${cityCrowd.crowdLevelText.hi}\n• **अनुमानित प्रतीक्षा समय:** ${cityCrowd.waitTimeFormatted.hi}\n• **सर्वश्रेष्ठ दर्शन स्लॉट:** ${cityCrowd.bestSlot.hi}\n• **व्यवस्था स्थिति:** ${cityCrowd.feasibilityVerdict.hi}\n\n`;
      } else {
        output += `### 👥 Live Crowd & Darshan Status (${cityCrowd.district})\n• **Crowd Level:** ${cityCrowd.crowdLevelText.en}\n• **Estimated Queue Wait:** ${cityCrowd.waitTimeFormatted.en}\n• **Recommended Darshan Slot:** ${cityCrowd.bestSlot.en}\n• **Status Verdict:** ${cityCrowd.feasibilityVerdict.en}\n\n`;
      }
    }

    return {
      text: output.trim(),
      language: lang,
      hasImage: (images && images.length > 0) || false,
      images,
      hasMap: !!mapData,
      mapData,
      districtCrowdStatus: cityCrowd || undefined,
      scrapedNews: scrapedNews && scrapedNews.length > 0 ? scrapedNews.slice(0, 3) : undefined,
      scamAlerts: relatedScams.length > 0 ? relatedScams : undefined
    };
  }

  // Default rich overview
  const generalText = lang === 'hi'
    ? `### 🙏 नमस्ते! मैं घूमो इंडिया (Ghumo India — Team Srajan) की एआई साथी घूमो AI (Ghumo AI) हूँ।

मैं मध्य प्रदेश के अनदेखे ऐतिहासिक स्थलों (बटेश्वर, मितावली, गढ़ी पढ़ावली, ककनमठ, ग्वालियर किला, ओरछा, चंदेरी) तथा देश के सभी प्रमुख पर्यटन सर्किट की संपूर्ण यात्रा योजना, रूट, फोटो और प्रमाणिक जानकारी प्रदान कर सकती हूँ!`
    : `### 🙏 Namaste! I am Ghumo AI, your travel and heritage companion for Ghumo India (Team Srajan — AI Synergy Hackathon Problem 4 Track Tourism).

I provide verified itineraries, route maps, historical context, and photos for Madhya Pradesh's hidden heritage (Bateshwar, Mitawali, Padhavali, Kakanmath, Gwalior Fort, Orchha) and premier travel destinations across India!`;

  return {
    text: generalText,
    language: lang,
    hasImage: (images && images.length > 0) || false,
    images,
    hasMap: !!mapData,
    mapData
  };
}
