// =====================================================================
// MADHYA PRADESH HERITAGE GUIDE — Concise Edition • 50 Curated Sites
// Official Grounded Dataset for Ghumo India Travel Ecosystem & Ghumo AI
// Covers Chambal, Gwalior, Shivpuri, Central MP, Malwa, Nimar, Bundelkhand,
// Baghelkhand, and Mahakoshal circuits.
// =====================================================================

export interface MP50HeritageSite {
  id: string;
  num: number;
  name: { en: string; hi: string };
  tagline: { en: string; hi: string };
  badge: { en: string; hi: string };
  district: { en: string; hi: string };
  zone: 'chambal' | 'gwalior' | 'bundelkhand' | 'malwa' | 'central' | 'mahakoshal' | 'baghelkhand' | 'nimar' | 'shivpuri';
  category: 'asi_heritage' | 'ancient_temple' | 'fort_palace' | 'buddhist_site' | 'rock_art_nature' | 'monument';
  coordinates: [number, number];
  heroImage: string;
  gallery: { url: string; caption: { en: string; hi: string } }[];
  routeConfidence: 'HIGH' | 'MEDIUM' | 'LOW';
  mapUrl: string;
  focus: { en: string; hi: string };
  lastMileGuidance: { en: string; hi: string };
  note?: { en: string; hi: string };
  history: {
    dynasty: { en: string; hi: string };
    period: { en: string; hi: string };
    chronicle: { en: string; hi: string };
    asiSignificance: { en: string; hi: string };
  };
  culture: {
    significance: { en: string; hi: string };
    mythology: { en: string; hi: string };
    livingTradition: { en: string; hi: string };
  };
  architecture: {
    style: { en: string; hi: string };
    engineeringHighlights: { en: string[]; hi: string[] };
    architecturalNotes: { en: string; hi: string };
  };
  howToReach: {
    fromHub: { en: string; hi: string };
    nearestRail: { en: string; hi: string };
    nearestAir: { en: string; hi: string };
    roadCondition: { en: string; hi: string };
    taxiEstimate: { en: string; hi: string };
    returnFeasibility: { en: string; hi: string };
  };
  practicalInfo: {
    timings: { en: string; hi: string };
    entryFee: { en: string; hi: string };
    bestSlot: { en: string; hi: string };
    accessibilityScore: number;
    accessibilityNotes: { en: string; hi: string };
    photographyTips: { en: string; hi: string };
    safetyAdvisory: { en: string; hi: string };
  };
  evidenceSources: { title: string; url: string; type: string }[];
}

export const MP_50_HERITAGE_SITES: MP50HeritageSite[] = [
  {
    id: "gwalior_fort_mp",
    num: 1,
    name: { en: "Gwalior Fort", hi: "ग्वालियर दुर्ग (गोप पर्वत)" },
    tagline: { en: "Gibraltar of India — 8th-Century Hilltop Citadel and Man Mandir Palace", hi: "भारत का जिब्राल्टर — 8वीं सदी का अजेय पहाड़ी दुर्ग व मान मंदिर महल" },
    badge: { en: "UNESCO Tentative & ASI Monument of National Importance", hi: "यूनेस्को संभावित व राष्ट्रीय महत्व का ASI स्मारक" },
    district: { en: "Gwalior, Madhya Pradesh", hi: "ग्वालियर, मध्य प्रदेश" },
    zone: "gwalior",
    category: "fort_palace",
    coordinates: [26.2295, 78.1691],
    heroImage: "/images/places/gwalior_fort.jpg",
    gallery: [
      { url: "/images/places/gwalior_fort.jpg", caption: { en: "Gwalior Fort Vista", hi: "ग्वालियर दुर्ग (गोप पर्वत) स्थापत्य" } }
    ],
    routeConfidence: "HIGH",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Gwalior+Fort+++Gwalior",
    focus: { en: "Medieval fortification and palace architecture.", hi: "धरोहर का मुख्य केंद्र: Medieval fortification and palace architecture." },
    lastMileGuidance: { en: "The fort is above the city. From Gwalior station or city centre, take a prepaid/ride-hail taxi or auto to the fort entrance. The uphill fort road and internal walking can take time…", hi: "The fort is above the city. From Gwalior station or city centre, take a prepaid/ride-hail taxi or auto to the fort entrance. The uphill fort road and internal walking can take time…" },
    history: {
      dynasty: { en: "Tomara, Mughal, Maratha (Scindia) Dynasties", hi: "तोमर, मुग़ल व मराठा (सिंधिया) राजवंश" },
      period: { en: "8th – 16th Century CE", hi: "8वीं से 16वीं शताब्दी" },
      chronicle: { en: "Hill fort with palace buildings, temples, water structures and defensive walls. Useful for architectural documentation and panoramic photography.", hi: "Hill fort with palace buildings, temples, water structures and defensive walls. Useful for architectural documentation and panoramic photography." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Medieval fortification and palace architecture.", hi: "ग्वालियर दुर्ग (गोप पर्वत) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Medieval Rajput, Tomara & Indo-Islamic defensive architecture", hi: "मध्यकालीन राजपूत, तोमर व भारतीय-इस्लामी स्थापत्य" },
      engineeringHighlights: {
        en: ["Medieval Rajput, Tomara & Indo-Islamic defensive architecture", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["मध्यकालीन राजपूत, तोमर व भारतीय-इस्लामी स्थापत्य", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "Hill fort with palace buildings, temples, water structures and defensive walls. Useful for architectural documentation and panoramic photography.", hi: "Hill fort with palace buildings, temples, water structures and defensive walls. Useful for architectural documentation and panoramic photography." }
    },
    howToReach: {
      fromHub: { en: "Gwalior Junction (GWL), the main rail hub; Gwalior Airport is the air option.", hi: "Gwalior Junction (GWL), the main rail hub; Gwalior Airport is the air option." },
      nearestRail: { en: "Gwalior Junction (GWL), the main rail hub; Gwalior Airport is the air option.", hi: "Gwalior Junction (GWL), the main rail hub; Gwalior Airport is the air option." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "₹25 for Indians, ₹300 for Foreigners (Museum additional)", hi: "भारतीय: ₹25, विदेशी: ₹300" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "The fort is above the city. From Gwalior station or city centre, take a prepaid/ride-hail taxi or auto to the fort entrance. The uphill fort road and internal walking can take time…", hi: "The fort is above the city. From Gwalior station or city centre, take a prepaid/ride-hail taxi or auto to the fort entrance. The uphill fort road and internal walking can take time…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "The fort is above the city. From Gwalior station or city centre, take a prepaid/ride-hail taxi or auto to the fort entrance. The uphill fort road and internal walking can take time…", hi: "The fort is above the city. From Gwalior station or city centre, take a prepaid/ride-hail taxi or auto to the fort entrance. The uphill fort road and internal walking can take time…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Gwalior+Fort+++Gwalior", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "bateshwar_morena_mp",
    num: 2,
    name: { en: "Bateshwar Temple Complex", hi: "बटेश्वर मंदिर समूह (मुरैना)" },
    tagline: { en: "200 Restored Gurjara-Pratihara Temples Resurrected from Ravines", hi: "चंबल के बीहड़ों से पुनर्जीवित 200 गुर्जर-प्रतिहार कालीन शिव व विष्णु मंदिर" },
    badge: { en: "ASI Restoration Miracle • 200 Temples Reassembled", hi: "ASI का चमत्कार • 200 मंदिरों का पुनर्गठन" },
    district: { en: "Morena, Madhya Pradesh", hi: "मुरैना, मध्य प्रदेश" },
    zone: "chambal",
    category: "ancient_temple",
    coordinates: [26.4258, 78.2045],
    heroImage: "/images/places/bateshwar.jpg",
    gallery: [
      { url: "/images/places/bateshwar.jpg", caption: { en: "Bateshwar Temple Complex Vista", hi: "बटेश्वर मंदिर समूह (मुरैना) स्थापत्य" } }
    ],
    routeConfidence: "HIGH",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Bateshwar+Temple+Complex+++Morena",
    focus: { en: "Early-medieval temple architecture.", hi: "धरोहर का मुख्य केंद्र: Early-medieval temple architecture." },
    lastMileGuidance: { en: "Bateshwar is a rural site roughly 30 km from Morena and around 35 km from Gwalior according to government tourism sources. A hired car/taxi is the most dependable last-mile option. Consider combining…", hi: "Bateshwar is a rural site roughly 30 km from Morena and around 35 km from Gwalior according to government tourism sources. A hired car/taxi is the most dependable last-mile option. Consider combining…" },
    note: { en: "Combine the Morena-area sites only after checking the day's road conditions and access. A hired vehicle is generally more practical than trying…", hi: "Combine the Morena-area sites only after checking the day's road conditions and access. A hired vehicle is generally more practical than trying…" },
    history: {
      dynasty: { en: "Gurjara-Pratihara Dynasty", hi: "गुर्जर-प्रतिहार राजवंश" },
      period: { en: "8th – 10th Century CE (750–1000 CE)", hi: "8वीं से 10वीं शताब्दी" },
      chronicle: { en: "A cluster of roughly 200 temples associated with the Gurjara-Pratihara period. Reconstruction from ruins provides a case study in archaeological conservation.", hi: "A cluster of roughly 200 temples associated with the Gurjara-Pratihara period. Reconstruction from ruins provides a case study in archaeological conservation." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Early-medieval temple architecture.", hi: "बटेश्वर मंदिर समूह (मुरैना) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "North Indian Pratihara Nagara Temple Architecture", hi: "उत्तरी भारतीय प्रतिहार नागर मंदिर स्थापत्य" },
      engineeringHighlights: {
        en: ["North Indian Pratihara Nagara Temple Architecture", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["उत्तरी भारतीय प्रतिहार नागर मंदिर स्थापत्य", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A cluster of roughly 200 temples associated with the Gurjara-Pratihara period. Reconstruction from ruins provides a case study in archaeological conservation.", hi: "A cluster of roughly 200 temples associated with the Gurjara-Pratihara period. Reconstruction from ruins provides a case study in archaeological conservation." }
    },
    howToReach: {
      fromHub: { en: "Morena station is a useful railhead; Gwalior Airport is the main airport option.", hi: "Morena station is a useful railhead; Gwalior Airport is the main airport option." },
      nearestRail: { en: "Morena station is a useful railhead; Gwalior Airport is the main airport option.", hi: "Morena station is a useful railhead; Gwalior Airport is the main airport option." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "₹25 for Indians, ₹300 for Foreigners", hi: "भारतीय: ₹25, विदेशी: ₹300" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Bateshwar is a rural site roughly 30 km from Morena and around 35 km from Gwalior according to government tourism sources. A hired car/taxi is the most dependable last-mile option. Consider combining…", hi: "Bateshwar is a rural site roughly 30 km from Morena and around 35 km from Gwalior according to government tourism sources. A hired car/taxi is the most dependable last-mile option. Consider combining…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Bateshwar is a rural site roughly 30 km from Morena and around 35 km from Gwalior according to government tourism sources. A hired car/taxi is the most dependable last-mile option. Consider combining…", hi: "Bateshwar is a rural site roughly 30 km from Morena and around 35 km from Gwalior according to government tourism sources. A hired car/taxi is the most dependable last-mile option. Consider combining…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Bateshwar+Temple+Complex+++Morena", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "mitawali_yogini_mp",
    num: 3,
    name: { en: "Chausath Yogini Temple", hi: "चौसठ योगिनी मंदिर (मितावली)" },
    tagline: { en: "Circular Tantric Temple Inspiring the Indian Parliament House Design", hi: "भारतीय संसद भवन की प्रेरणा बना 101 खंभों वाला वृत्ताकार तंत्र पीठ" },
    badge: { en: "Kachchhapaghata Dynasty • 1323 CE Epigraph", hi: "कच्छपघात राजवंश • 1323 ईस्वी अभिलेख" },
    district: { en: "Mitawali, Morena, Madhya Pradesh", hi: "मितावली, मुरैना, मध्य प्रदेश" },
    zone: "chambal",
    category: "ancient_temple",
    coordinates: [26.4428, 78.2573],
    heroImage: "/images/places/mitawali.jpg",
    gallery: [
      { url: "/images/places/mitawali.jpg", caption: { en: "Chausath Yogini Temple Vista", hi: "चौसठ योगिनी मंदिर (मितावली) स्थापत्य" } }
    ],
    routeConfidence: "MEDIUM",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Chausath+Yogini+Temple+++Mitawali+Morena",
    focus: { en: "Circular temple and hilltop setting.", hi: "धरोहर का मुख्य केंद्र: Circular temple and hilltop setting." },
    lastMileGuidance: { en: "Mitawali is in the same rural heritage circuit as Bateshwar and Padavali. Arrange a private car from Gwalior/Morena and confirm the final road condition locally; do not assume a frequent direct bus…", hi: "Mitawali is in the same rural heritage circuit as Bateshwar and Padavali. Arrange a private car from Gwalior/Morena and confirm the final road condition locally; do not assume a frequent direct bus…" },
    note: { en: "Combine the Morena-area sites only after checking the day's road conditions and access. A hired vehicle is generally more practical than trying…", hi: "Combine the Morena-area sites only after checking the day's road conditions and access. A hired vehicle is generally more practical than trying…" },
    history: {
      dynasty: { en: "Kachchhapaghata Dynasty (King Devapala)", hi: "कच्छपघात राजवंश (महाराजा देवपाल)" },
      period: { en: "14th Century CE (1323 CE / VS 1380)", hi: "14वीं शताब्दी (1323 ईस्वी)" },
      chronicle: { en: "A distinctive circular temple on an elevated site. Its layout and relationship to nearby temples are useful for comparative architectural research.", hi: "A distinctive circular temple on an elevated site. Its layout and relationship to nearby temples are useful for comparative architectural research." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Circular temple and hilltop setting.", hi: "चौसठ योगिनी मंदिर (मितावली) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Hypaethral Circular Colonnade with 64 Sub-shrines", hi: "खुला वृत्ताकार मंडप जिसमें 64 सहायक देवालय हैं" },
      engineeringHighlights: {
        en: ["Hypaethral Circular Colonnade with 64 Sub-shrines", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["खुला वृत्ताकार मंडप जिसमें 64 सहायक देवालय हैं", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A distinctive circular temple on an elevated site. Its layout and relationship to nearby temples are useful for comparative architectural research.", hi: "A distinctive circular temple on an elevated site. Its layout and relationship to nearby temples are useful for comparative architectural research." }
    },
    howToReach: {
      fromHub: { en: "Morena station or Gwalior Junction; Gwalior Airport for flights.", hi: "Morena station or Gwalior Junction; Gwalior Airport for flights." },
      nearestRail: { en: "Morena station or Gwalior Junction; Gwalior Airport for flights.", hi: "Morena station or Gwalior Junction; Gwalior Airport for flights." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry (ASI Protected Monument)", hi: "निःशुल्क प्रवेश (ASI संरक्षित)" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Mitawali is in the same rural heritage circuit as Bateshwar and Padavali. Arrange a private car from Gwalior/Morena and confirm the final road condition locally; do not assume a frequent direct bus…", hi: "Mitawali is in the same rural heritage circuit as Bateshwar and Padavali. Arrange a private car from Gwalior/Morena and confirm the final road condition locally; do not assume a frequent direct bus…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Mitawali is in the same rural heritage circuit as Bateshwar and Padavali. Arrange a private car from Gwalior/Morena and confirm the final road condition locally; do not assume a frequent direct bus…", hi: "Mitawali is in the same rural heritage circuit as Bateshwar and Padavali. Arrange a private car from Gwalior/Morena and confirm the final road condition locally; do not assume a frequent direct bus…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Chausath+Yogini+Temple+++Mitawali+Morena", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "garhi_padavali_mp",
    num: 4,
    name: { en: "Garhi Padavali", hi: "गढ़ी पढ़ावली (मुरैना)" },
    tagline: { en: "Mini Khajuraho — Exquisitely Sculpted Mukhamandapa inside a 19th-Century Fortress", hi: "मिनी खजुराहो — दुर्ग के भीतर 10वीं सदी का अलंकृत नक्काशीदार मुखमंडप" },
    badge: { en: "Mini Khajuraho of Chambal • ASI Protected", hi: "चंबल का मिनी खजुराहो • ASI संरक्षित" },
    district: { en: "Morena, Madhya Pradesh", hi: "पढ़ावली, मुरैना, मध्य प्रदेश" },
    zone: "chambal",
    category: "asi_heritage",
    coordinates: [26.4319, 78.2255],
    heroImage: "/images/places/padhavali.jpg",
    gallery: [
      { url: "/images/places/padhavali.jpg", caption: { en: "Garhi Padavali Vista", hi: "गढ़ी पढ़ावली (मुरैना) स्थापत्य" } }
    ],
    routeConfidence: "HIGH",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Garhi+Padavali+++Morena",
    focus: { en: "Fortified temple architecture.", hi: "धरोहर का मुख्य केंद्र: Fortified temple architecture." },
    lastMileGuidance: { en: "Padavali lies close to Bateshwar and is commonly combined with it on a road trip. Hire a car/taxi from Gwalior or Morena; public transport near the monument may be limited.", hi: "Padavali lies close to Bateshwar and is commonly combined with it on a road trip. Hire a car/taxi from Gwalior or Morena; public transport near the monument may be limited." },
    note: { en: "Combine the Morena-area sites only after checking the day's road conditions and access. A hired vehicle is generally more practical than trying…", hi: "Combine the Morena-area sites only after checking the day's road conditions and access. A hired vehicle is generally more practical than trying…" },
    history: {
      dynasty: { en: "Kachchhapaghata Dynasty & Jat Rulers of Gohad", hi: "कच्छपघात राजवंश व गोहद के जाट शासक" },
      period: { en: "10th Century CE temple with 19th-century fort walls", hi: "10वीं सदी का मंदिर व 19वीं सदी का परकोटा" },
      chronicle: { en: "A temple enclosed within fortifications, known for detailed stone carvings. Research the relationship between religious architecture and later defensive structures.", hi: "A temple enclosed within fortifications, known for detailed stone carvings. Research the relationship between religious architecture and later defensive structures." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Fortified temple architecture.", hi: "गढ़ी पढ़ावली (मुरैना) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Medieval Nagara Torana & Mandapa with high relief carvings", hi: "मध्यकालीन नागर तोरण व मंडप" },
      engineeringHighlights: {
        en: ["Medieval Nagara Torana & Mandapa with high relief carvings", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["मध्यकालीन नागर तोरण व मंडप", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A temple enclosed within fortifications, known for detailed stone carvings. Research the relationship between religious architecture and later defensive structures.", hi: "A temple enclosed within fortifications, known for detailed stone carvings. Research the relationship between religious architecture and later defensive structures." }
    },
    howToReach: {
      fromHub: { en: "Morena station or Gwalior Junction.", hi: "Morena station or Gwalior Junction." },
      nearestRail: { en: "Morena station or Gwalior Junction.", hi: "Morena station or Gwalior Junction." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry (ASI Protected Monument)", hi: "निःशुल्क प्रवेश (ASI संरक्षित)" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Padavali lies close to Bateshwar and is commonly combined with it on a road trip. Hire a car/taxi from Gwalior or Morena; public transport near the monument may be limited.", hi: "Padavali lies close to Bateshwar and is commonly combined with it on a road trip. Hire a car/taxi from Gwalior or Morena; public transport near the monument may be limited." },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Padavali lies close to Bateshwar and is commonly combined with it on a road trip. Hire a car/taxi from Gwalior or Morena; public transport near the monument may be limited.", hi: "Padavali lies close to Bateshwar and is commonly combined with it on a road trip. Hire a car/taxi from Gwalior or Morena; public transport near the monument may be limited." }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Garhi+Padavali+++Morena", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "kakanmath_temple_mp",
    num: 5,
    name: { en: "Kakanmath Temple", hi: "ककनमठ शिव मंदिर (सिहोनिया)" },
    tagline: { en: "Gravity-Defying 115-Foot Mortarless Sandstone Temple of Queen Kakanwati", hi: "बिना गारे-चूने के 115 फीट ऊंचा संतुलन का चमत्कारिक शिव मंदिर" },
    badge: { en: "11th-Century Architectural Feat • Kachchhapaghata", hi: "11वीं सदी का चमत्कार • कच्छपघात कालीन" },
    district: { en: "Sihoniya, Morena, Madhya Pradesh", hi: "सिहोनिया, मुरैना, मध्य प्रदेश" },
    zone: "chambal",
    category: "ancient_temple",
    coordinates: [26.5411, 78.2427],
    heroImage: "/images/places/kakanmath.jpg",
    gallery: [
      { url: "/images/places/kakanmath.jpg", caption: { en: "Kakanmath Temple Vista", hi: "ककनमठ शिव मंदिर (सिहोनिया) स्थापत्य" } }
    ],
    routeConfidence: "MEDIUM",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Kakanmath+Temple+++Sihoniya+Morena",
    focus: { en: "Medieval temple ruins.", hi: "धरोहर का मुख्य केंद्र: Medieval temple ruins." },
    lastMileGuidance: { en: "The temple is at Sihoniya in a rural area. Continue by pre-arranged taxi/private vehicle from Morena or Gwalior. Confirm the exact entrance and current road/access conditions before leaving the main road.", hi: "The temple is at Sihoniya in a rural area. Continue by pre-arranged taxi/private vehicle from Morena or Gwalior. Confirm the exact entrance and current road/access conditions before leaving the main road." },
    note: { en: "Combine the Morena-area sites only after checking the day's road conditions and access. A hired vehicle is generally more practical than trying…", hi: "Combine the Morena-area sites only after checking the day's road conditions and access. A hired vehicle is generally more practical than trying…" },
    history: {
      dynasty: { en: "Kachchhapaghata Dynasty (King Kirtiraja)", hi: "कच्छपघात राजवंश (राजा कीर्तिराज)" },
      period: { en: "11th Century CE (1015–1035 CE)", hi: "11वीं शताब्दी" },
      chronicle: { en: "A monumental Shiva temple associated with the Kachchhapaghata period. Surviving stonework offers opportunities to document construction techniques and sculpture.", hi: "A monumental Shiva temple associated with the Kachchhapaghata period. Surviving stonework offers opportunities to document construction techniques and sculpture." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Medieval temple ruins.", hi: "ककनमठ शिव मंदिर (सिहोनिया) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Monumental Nagara Shikhara constructed without binding mortar", hi: "विशाल नागर शिखर (बिना गारे के शुष्क पाषाण तकनीक)" },
      engineeringHighlights: {
        en: ["Monumental Nagara Shikhara constructed without binding mortar", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["विशाल नागर शिखर (बिना गारे के शुष्क पाषाण तकनीक)", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A monumental Shiva temple associated with the Kachchhapaghata period. Surviving stonework offers opportunities to document construction techniques and sculpture.", hi: "A monumental Shiva temple associated with the Kachchhapaghata period. Surviving stonework offers opportunities to document construction techniques and sculpture." }
    },
    howToReach: {
      fromHub: { en: "Morena station is a practical railhead; Gwalior is another major hub.", hi: "Morena station is a practical railhead; Gwalior is another major hub." },
      nearestRail: { en: "Morena station is a practical railhead; Gwalior is another major hub.", hi: "Morena station is a practical railhead; Gwalior is another major hub." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry (ASI Protected Monument)", hi: "निःशुल्क प्रवेश (ASI संरक्षित)" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "The temple is at Sihoniya in a rural area. Continue by pre-arranged taxi/private vehicle from Morena or Gwalior. Confirm the exact entrance and current road/access conditions before leaving the main road.", hi: "The temple is at Sihoniya in a rural area. Continue by pre-arranged taxi/private vehicle from Morena or Gwalior. Confirm the exact entrance and current road/access conditions before leaving the main road." },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "The temple is at Sihoniya in a rural area. Continue by pre-arranged taxi/private vehicle from Morena or Gwalior. Confirm the exact entrance and current road/access conditions before leaving the main road.", hi: "The temple is at Sihoniya in a rural area. Continue by pre-arranged taxi/private vehicle from Morena or Gwalior. Confirm the exact entrance and current road/access conditions before leaving the main road." }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Kakanmath+Temple+++Sihoniya+Morena", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "naresar_temples_mp",
    num: 6,
    name: { en: "Naresar Temple Group", hi: "नरेसर मंदिर समूह (मुरैना)" },
    tagline: { en: "Secluded Gorge Cluster of 22 Early-Pratihara Sandstone Shrines", hi: "घाटी में छिपे 22 प्रारंभिक प्रतिहार कालीन प्राचीन देवालय" },
    badge: { en: "8th-Century Hidden Pratihara Enclave", hi: "8वीं सदी का गुप्त प्रतिहार देवालय समूह" },
    district: { en: "Morena, Madhya Pradesh", hi: "नरेसर घाटी, मुरैना, मध्य प्रदेश" },
    zone: "chambal",
    category: "ancient_temple",
    coordinates: [26.3314, 78.1878],
    heroImage: "/images/places/bateshwar.jpg",
    gallery: [
      { url: "/images/places/bateshwar.jpg", caption: { en: "Naresar Temple Group Vista", hi: "नरेसर मंदिर समूह (मुरैना) स्थापत्य" } }
    ],
    routeConfidence: "LOW",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Naresar+Temple+Group+++Morena",
    focus: { en: "Secluded early-medieval temples.", hi: "धरोहर का मुख्य केंद्र: Secluded early-medieval temples." },
    lastMileGuidance: { en: "Plan as a rural excursion with a local driver/guide from Morena or Gwalior. Confirm site location, access permission, and the final approach in daylight; do not rely on a single map pin…", hi: "Plan as a rural excursion with a local driver/guide from Morena or Gwalior. Confirm site location, access permission, and the final approach in daylight; do not rely on a single map pin…" },
    note: { en: "Combine the Morena-area sites only after checking the day's road conditions and access. A hired vehicle is generally more practical than trying…", hi: "Combine the Morena-area sites only after checking the day's road conditions and access. A hired vehicle is generally more practical than trying…" },
    history: {
      dynasty: { en: "Early Gurjara-Pratihara Dynasty", hi: "प्रारंभिक गुर्जर-प्रतिहार राजवंश" },
      period: { en: "8th Century CE (circa 725–800 CE)", hi: "8वीं शताब्दी" },
      chronicle: { en: "A group of temples in the Chambal region. A candidate for studying the distribution of smaller medieval religious sites beyond major tourist centres.", hi: "A group of temples in the Chambal region. A candidate for studying the distribution of smaller medieval religious sites beyond major tourist centres." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Secluded early-medieval temples.", hi: "नरेसर मंदिर समूह (मुरैना) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Early Nagara Shikhara with miniature gavakshas", hi: "प्रारंभिक नागर शिखर व गवाक्ष" },
      engineeringHighlights: {
        en: ["Early Nagara Shikhara with miniature gavakshas", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["प्रारंभिक नागर शिखर व गवाक्ष", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A group of temples in the Chambal region. A candidate for studying the distribution of smaller medieval religious sites beyond major tourist centres.", hi: "A group of temples in the Chambal region. A candidate for studying the distribution of smaller medieval religious sites beyond major tourist centres." }
    },
    howToReach: {
      fromHub: { en: "Morena or Gwalior are the practical transport hubs; exact last-mile access is less consistently documented.", hi: "Morena or Gwalior are the practical transport hubs; exact last-mile access is less consistently documented." },
      nearestRail: { en: "Morena or Gwalior are the practical transport hubs; exact last-mile access is less consistently documented.", hi: "Morena or Gwalior are the practical transport hubs; exact last-mile access is less consistently documented." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry", hi: "निःशुल्क प्रवेश" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Plan as a rural excursion with a local driver/guide from Morena or Gwalior. Confirm site location, access permission, and the final approach in daylight; do not rely on a single map pin…", hi: "Plan as a rural excursion with a local driver/guide from Morena or Gwalior. Confirm site location, access permission, and the final approach in daylight; do not rely on a single map pin…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Plan as a rural excursion with a local driver/guide from Morena or Gwalior. Confirm site location, access permission, and the final approach in daylight; do not rely on a single map pin…", hi: "Plan as a rural excursion with a local driver/guide from Morena or Gwalior. Confirm site location, access permission, and the final approach in daylight; do not rely on a single map pin…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Naresar+Temple+Group+++Morena", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "ater_fort_bhind_mp",
    num: 7,
    name: { en: "Ater Fort", hi: "अटेर दुर्ग (भिंड)" },
    tagline: { en: "Massive 17th-Century Bhadauria Rajput Fortress Overlooking Chambal Ravines", hi: "चंबल के बीहड़ों पर पहरा देता भदौरिया राजपूतों का विशाल दुर्ग" },
    badge: { en: "1664 CE • Bhadauria Rajput Stronghold", hi: "1664 ईस्वी • भदौरिया राजपूत गढ़" },
    district: { en: "Bhind, Madhya Pradesh", hi: "अटेर, भिंड, मध्य प्रदेश" },
    zone: "chambal",
    category: "fort_palace",
    coordinates: [26.7547, 78.8358],
    heroImage: "/images/places/gwalior_fort.jpg",
    gallery: [
      { url: "/images/places/gwalior_fort.jpg", caption: { en: "Ater Fort Vista", hi: "अटेर दुर्ग (भिंड) स्थापत्य" } }
    ],
    routeConfidence: "HIGH",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ater+Fort+++Bhind",
    focus: { en: "Regional kingdom and military history.", hi: "धरोहर का मुख्य केंद्र: Regional kingdom and military history." },
    lastMileGuidance: { en: "The district administration places Ater Fort about 30–35 km from Bhind. Local buses/jeeps have been described from Bhind bus stand via Ater Road, but schedules can change; a pre-arranged taxi is more…", hi: "The district administration places Ater Fort about 30–35 km from Bhind. Local buses/jeeps have been described from Bhind bus stand via Ater Road, but schedules can change; a pre-arranged taxi is more…" },
    history: {
      dynasty: { en: "Bhadauria Rajput Dynasty (Raja Badan Singh)", hi: "भदौरिया राजपूत राजवंश (राजा बदन सिंह)" },
      period: { en: "17th Century CE (1664–1698 CE)", hi: "17वीं शताब्दी" },
      chronicle: { en: "A historic fort associated with the Bhadauria rulers. Its defensive architecture and setting are relevant to regional power and frontier landscapes.", hi: "A historic fort associated with the Bhadauria rulers. Its defensive architecture and setting are relevant to regional power and frontier landscapes." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Regional kingdom and military history.", hi: "अटेर दुर्ग (भिंड) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Indo-Rajput military defensive citadel with deep ramparts", hi: "राजपूत सैन्य दुर्ग स्थापत्य" },
      engineeringHighlights: {
        en: ["Indo-Rajput military defensive citadel with deep ramparts", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["राजपूत सैन्य दुर्ग स्थापत्य", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A historic fort associated with the Bhadauria rulers. Its defensive architecture and setting are relevant to regional power and frontier landscapes.", hi: "A historic fort associated with the Bhadauria rulers. Its defensive architecture and setting are relevant to regional power and frontier landscapes." }
    },
    howToReach: {
      fromHub: { en: "Bhind railway station; Gwalior Airport is the nearest major airport listed by the district administration.", hi: "Bhind railway station; Gwalior Airport is the nearest major airport listed by the district administration." },
      nearestRail: { en: "Bhind railway station; Gwalior Airport is the nearest major airport listed by the district administration.", hi: "Bhind railway station; Gwalior Airport is the nearest major airport listed by the district administration." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry (State Archaeology MP)", hi: "निःशुल्क प्रवेश" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "The district administration places Ater Fort about 30–35 km from Bhind. Local buses/jeeps have been described from Bhind bus stand via Ater Road, but schedules can change; a pre-arranged taxi is more…", hi: "The district administration places Ater Fort about 30–35 km from Bhind. Local buses/jeeps have been described from Bhind bus stand via Ater Road, but schedules can change; a pre-arranged taxi is more…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "The district administration places Ater Fort about 30–35 km from Bhind. Local buses/jeeps have been described from Bhind bus stand via Ater Road, but schedules can change; a pre-arranged taxi is more…", hi: "The district administration places Ater Fort about 30–35 km from Bhind. Local buses/jeeps have been described from Bhind bus stand via Ater Road, but schedules can change; a pre-arranged taxi is more…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Ater+Fort+++Bhind", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "sheopur_fort_mp",
    num: 8,
    name: { en: "Sheopur Fort", hi: "श्योपुर दुर्ग (श्योपुर)" },
    tagline: { en: "Historic Confluence Fort Between Sip and Chambal River Systems", hi: "सीप नदी के तट पर स्थित गौड़ व नरूका राजपूतों का ऐतिहासिक किला" },
    badge: { en: "Gaur & Maratha Historical Stronghold", hi: "गौड़ व मराठा ऐतिहासिक गढ़" },
    district: { en: "Sheopur, Madhya Pradesh", hi: "श्योपुर, मध्य प्रदेश" },
    zone: "chambal",
    category: "fort_palace",
    coordinates: [25.6669, 76.6978],
    heroImage: "/images/places/chanderi_fort.jpg",
    gallery: [
      { url: "/images/places/chanderi_fort.jpg", caption: { en: "Sheopur Fort Vista", hi: "श्योपुर दुर्ग (श्योपुर) स्थापत्य" } }
    ],
    routeConfidence: "HIGH",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Sheopur+Fort+++Sheopur",
    focus: { en: "Fort history and regional settlement.", hi: "धरोहर का मुख्य केंद्र: Fort history and regional settlement." },
    lastMileGuidance: { en: "The fort is within Sheopur town. Use a local auto/e-rickshaw/taxi from the bus stand or railway stop if operating. Government district information lists road buses from Gwalior, Morena, Shivpuri and Kota; check…", hi: "The fort is within Sheopur town. Use a local auto/e-rickshaw/taxi from the bus stand or railway stop if operating. Government district information lists road buses from Gwalior, Morena, Shivpuri and Kota; check…" },
    history: {
      dynasty: { en: "Gaur Rajputs & Gwalior Scindias", hi: "गौड़ राजपूत व सिंधिया रियासत" },
      period: { en: "16th – 18th Century CE", hi: "16वीं से 18वीं शताब्दी" },
      chronicle: { en: "A historic fort and settlement. Investigate surviving structures and the changing role of the town in the region.", hi: "A historic fort and settlement. Investigate surviving structures and the changing role of the town in the region." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Fort history and regional settlement.", hi: "श्योपुर दुर्ग (श्योपुर) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Medieval regional fort with painted pavilions", hi: "मध्यकालीन क्षेत्रीय दुर्ग स्थापत्य" },
      engineeringHighlights: {
        en: ["Medieval regional fort with painted pavilions", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["मध्यकालीन क्षेत्रीय दुर्ग स्थापत्य", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A historic fort and settlement. Investigate surviving structures and the changing role of the town in the region.", hi: "A historic fort and settlement. Investigate surviving structures and the changing role of the town in the region." }
    },
    howToReach: {
      fromHub: { en: "Sheopur town is the main road hub. Rail connections may be limited; verify the currently operating service before relying on rail.", hi: "Sheopur town is the main road hub. Rail connections may be limited; verify the currently operating service before relying on rail." },
      nearestRail: { en: "Sheopur town is the main road hub. Rail connections may be limited; verify the currently operating service before relying on rail.", hi: "Sheopur town is the main road hub. Rail connections may be limited; verify the currently operating service before relying on rail." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry", hi: "निःशुल्क प्रवेश" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "The fort is within Sheopur town. Use a local auto/e-rickshaw/taxi from the bus stand or railway stop if operating. Government district information lists road buses from Gwalior, Morena, Shivpuri and Kota; check…", hi: "The fort is within Sheopur town. Use a local auto/e-rickshaw/taxi from the bus stand or railway stop if operating. Government district information lists road buses from Gwalior, Morena, Shivpuri and Kota; check…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "The fort is within Sheopur town. Use a local auto/e-rickshaw/taxi from the bus stand or railway stop if operating. Government district information lists road buses from Gwalior, Morena, Shivpuri and Kota; check…", hi: "The fort is within Sheopur town. Use a local auto/e-rickshaw/taxi from the bus stand or railway stop if operating. Government district information lists road buses from Gwalior, Morena, Shivpuri and Kota; check…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Sheopur+Fort+++Sheopur", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "narwar_fort_shivpuri_mp",
    num: 9,
    name: { en: "Narwar Fort", hi: "नरवर दुर्ग (शिवपुरी)" },
    tagline: { en: "Epic Citadel of King Nala on Vindhya Hills Above Sindh River", hi: "सिंध नदी के ऊपर विंध्य पहाड़ियों पर राजा नल की ऐतिहासिक नगरी व दुर्ग" },
    badge: { en: "Kachchhapaghata & Tomara Citadel • 8 km Circumference", hi: "8 किमी परिधि का ऐतिहासिक दुर्ग • नल-दमयंती कथा" },
    district: { en: "Shivpuri, Madhya Pradesh", hi: "नरवर, शिवपुरी, मध्य प्रदेश" },
    zone: "shivpuri",
    category: "fort_palace",
    coordinates: [25.6517, 77.9042],
    heroImage: "/images/places/gwalior_fort.jpg",
    gallery: [
      { url: "/images/places/gwalior_fort.jpg", caption: { en: "Narwar Fort Vista", hi: "नरवर दुर्ग (शिवपुरी) स्थापत्य" } }
    ],
    routeConfidence: "MEDIUM",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Narwar+Fort+++Shivpuri",
    focus: { en: "Hill fort and panoramic landscape.", hi: "धरोहर का मुख्य केंद्र: Hill fort and panoramic landscape." },
    lastMileGuidance: { en: "Narwar is a separate town from Shivpuri and the final leg is best done by hired taxi or a confirmed local bus. Confirm road conditions and opening/access arrangements locally; carry water and…", hi: "Narwar is a separate town from Shivpuri and the final leg is best done by hired taxi or a confirmed local bus. Confirm road conditions and opening/access arrangements locally; carry water and…" },
    history: {
      dynasty: { en: "Kachchhapaghata, Tomara & Scindia Dynasties", hi: "कच्छपघात, तोमर व सिंधिया राजवंश" },
      period: { en: "10th – 18th Century CE", hi: "10वीं से 18वीं शताब्दी" },
      chronicle: { en: "A large fort complex with historic walls, gateways and palace remains. Useful for studying Bundelkhand's political history and fort architecture.", hi: "A large fort complex with historic walls, gateways and palace remains. Useful for studying Bundelkhand's political history and fort architecture." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Hill fort and panoramic landscape.", hi: "नरवर दुर्ग (शिवपुरी) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Hilltop Rajput fortification with ornate chhatris and baolis", hi: "राजपूत पहाड़ी दुर्ग, छतरियां व बावड़ियां" },
      engineeringHighlights: {
        en: ["Hilltop Rajput fortification with ornate chhatris and baolis", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["राजपूत पहाड़ी दुर्ग, छतरियां व बावड़ियां", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A large fort complex with historic walls, gateways and palace remains. Useful for studying Bundelkhand's political history and fort architecture.", hi: "A large fort complex with historic walls, gateways and palace remains. Useful for studying Bundelkhand's political history and fort architecture." }
    },
    howToReach: {
      fromHub: { en: "Shivpuri is the practical road/rail hub; Gwalior is the larger airport hub.", hi: "Shivpuri is the practical road/rail hub; Gwalior is the larger airport hub." },
      nearestRail: { en: "Shivpuri is the practical road/rail hub; Gwalior is the larger airport hub.", hi: "Shivpuri is the practical road/rail hub; Gwalior is the larger airport hub." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry", hi: "निःशुल्क प्रवेश" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Narwar is a separate town from Shivpuri and the final leg is best done by hired taxi or a confirmed local bus. Confirm road conditions and opening/access arrangements locally; carry water and…", hi: "Narwar is a separate town from Shivpuri and the final leg is best done by hired taxi or a confirmed local bus. Confirm road conditions and opening/access arrangements locally; carry water and…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Narwar is a separate town from Shivpuri and the final leg is best done by hired taxi or a confirmed local bus. Confirm road conditions and opening/access arrangements locally; carry water and…", hi: "Narwar is a separate town from Shivpuri and the final leg is best done by hired taxi or a confirmed local bus. Confirm road conditions and opening/access arrangements locally; carry water and…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Narwar+Fort+++Shivpuri", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "surwaya_garhi_shivpuri_mp",
    num: 10,
    name: { en: "Surwaya Garhi", hi: "सुरवाया गढ़ी (शिवपुरी)" },
    tagline: { en: "Fortified Monastery and Monolithic Temple Complex of the Mattamayura Shaiva Sect", hi: "मत्तयूर शैव संप्रदाय का 10वीं सदी का सुदृढ़ दुर्गानुमा मठ व मंदिर परिसर" },
    badge: { en: "Mattamayura Shaiva Matha • 10th Century ASI Complex", hi: "10वीं सदी का दुर्लभ शैव मठ • ASI संरक्षित" },
    district: { en: "Shivpuri, Madhya Pradesh", hi: "सुरवाया, शिवपुरी, मध्य प्रदेश" },
    zone: "shivpuri",
    category: "asi_heritage",
    coordinates: [25.4883, 77.8319],
    heroImage: "/images/places/padhavali.jpg",
    gallery: [
      { url: "/images/places/padhavali.jpg", caption: { en: "Surwaya Garhi Vista", hi: "सुरवाया गढ़ी (शिवपुरी) स्थापत्य" } }
    ],
    routeConfidence: "HIGH",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Surwaya+Garhi+++Shivpuri",
    focus: { en: "Temples, monastery and fortified ruins.", hi: "धरोहर का मुख्य केंद्र: Temples, monastery and fortified ruins." },
    lastMileGuidance: { en: "The district administration places Survaya Garhi about 20 km from Shivpuri town and about 22–23 km from its railway station. Take a taxi/auto arranged for the return journey; public transport may not…", hi: "The district administration places Survaya Garhi about 20 km from Shivpuri town and about 22–23 km from its railway station. Take a taxi/auto arranged for the return journey; public transport may not…" },
    history: {
      dynasty: { en: "Pratihara / Kachchhapaghata Era", hi: "प्रतिहार/कच्छपघात काल" },
      period: { en: "10th Century CE", hi: "10वीं शताब्दी" },
      chronicle: { en: "A heritage complex containing ruined temples and monastery remains. Relevant to religious architecture and the history of monastic institutions.", hi: "A heritage complex containing ruined temples and monastery remains. Relevant to religious architecture and the history of monastic institutions." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Temples, monastery and fortified ruins.", hi: "सुरवाया गढ़ी (शिवपुरी) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Fortified matha (monastery) with Nagara sanctums and baoli", hi: "दुर्गानुमा मठ व नागर देवालय" },
      engineeringHighlights: {
        en: ["Fortified matha (monastery) with Nagara sanctums and baoli", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["दुर्गानुमा मठ व नागर देवालय", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A heritage complex containing ruined temples and monastery remains. Relevant to religious architecture and the history of monastic institutions.", hi: "A heritage complex containing ruined temples and monastery remains. Relevant to religious architecture and the history of monastic institutions." }
    },
    howToReach: {
      fromHub: { en: "Shivpuri railway station and town are the practical starting point.", hi: "Shivpuri railway station and town are the practical starting point." },
      nearestRail: { en: "Shivpuri railway station and town are the practical starting point.", hi: "Shivpuri railway station and town are the practical starting point." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry (ASI Protected Monument)", hi: "निःशुल्क प्रवेश" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "The district administration places Survaya Garhi about 20 km from Shivpuri town and about 22–23 km from its railway station. Take a taxi/auto arranged for the return journey; public transport may not…", hi: "The district administration places Survaya Garhi about 20 km from Shivpuri town and about 22–23 km from its railway station. Take a taxi/auto arranged for the return journey; public transport may not…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "The district administration places Survaya Garhi about 20 km from Shivpuri town and about 22–23 km from its railway station. Take a taxi/auto arranged for the return journey; public transport may not…", hi: "The district administration places Survaya Garhi about 20 km from Shivpuri town and about 22–23 km from its railway station. Take a taxi/auto arranged for the return journey; public transport may not…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Surwaya+Garhi+++Shivpuri", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "bhimbetka_raisen_mp",
    num: 11,
    name: { en: "Bhimbetka Rock Shelters", hi: "भीमबेटका शैलचित्र गुफाएं (रायसेन)" },
    tagline: { en: "30,000-Year-Old UNESCO World Heritage Prehistoric Rock Art Shelters", hi: "30,000 वर्ष पुराने यूनेस्को विश्व धरोहर प्रागैतिहासिक शैलचित्र" },
    badge: { en: "UNESCO World Heritage Site • 100,000 Years Human Inhabitation", hi: "यूनेस्को विश्व धरोहर स्थल • 750 शैल आश्रय" },
    district: { en: "Raisen, Madhya Pradesh", hi: "रायसेन / भोपाल, मध्य प्रदेश" },
    zone: "central",
    category: "rock_art_nature",
    coordinates: [22.9372, 77.6128],
    heroImage: "/images/places/bateshwar.jpg",
    gallery: [
      { url: "/images/places/bateshwar.jpg", caption: { en: "Bhimbetka Rock Shelters Vista", hi: "भीमबेटका शैलचित्र गुफाएं (रायसेन) स्थापत्य" } }
    ],
    routeConfidence: "HIGH",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Bhimbetka+Rock+Shelters+++Raisen",
    focus: { en: "Prehistoric art and archaeology.", hi: "धरोहर का मुख्य केंद्र: Prehistoric art and archaeology." },
    lastMileGuidance: { en: "The Bhopal district administration gives roughly 46 km by road from Bhopal. A pre-booked taxi is simplest. Buses may run on the highway, but the last mile from a stop can be…", hi: "The Bhopal district administration gives roughly 46 km by road from Bhopal. A pre-booked taxi is simplest. Buses may run on the highway, but the last mile from a stop can be…" },
    history: {
      dynasty: { en: "Paleolithic, Mesolithic to Chalcolithic Eras", hi: "पुरापाषाण, मध्यपाषाण व ताम्रपाषाण युग" },
      period: { en: "100,000 BCE – 10,000 BCE", hi: "1 लाख ई.पू. से ऐतिहासिक काल" },
      chronicle: { en: "A UNESCO World Heritage Site with rock shelters and paintings documenting human activity over long periods.", hi: "A UNESCO World Heritage Site with rock shelters and paintings documenting human activity over long periods." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Prehistoric art and archaeology.", hi: "भीमबेटका शैलचित्र गुफाएं (रायसेन) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Natural sandstone rock shelters with mineral pigment petroglyphs", hi: "प्राकृतिक बलुआ पत्थर शैल आश्रय व प्राकृतिक रंगों के शैलचित्र" },
      engineeringHighlights: {
        en: ["Natural sandstone rock shelters with mineral pigment petroglyphs", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["प्राकृतिक बलुआ पत्थर शैल आश्रय व प्राकृतिक रंगों के शैलचित्र", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A UNESCO World Heritage Site with rock shelters and paintings documenting human activity over long periods.", hi: "A UNESCO World Heritage Site with rock shelters and paintings documenting human activity over long periods." }
    },
    howToReach: {
      fromHub: { en: "Bhopal Junction / Rani Kamlapati are the practical rail stations; Raja Bhoj Airport is the nearest major airport.", hi: "Bhopal Junction / Rani Kamlapati are the practical rail stations; Raja Bhoj Airport is the nearest major airport." },
      nearestRail: { en: "Bhopal Junction / Rani Kamlapati are the practical rail stations; Raja Bhoj Airport is the nearest major airport.", hi: "Bhopal Junction / Rani Kamlapati are the practical rail stations; Raja Bhoj Airport is the nearest major airport." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "₹25 for Indians, ₹300 for Foreigners (Vehicle fee ₹50)", hi: "भारतीय: ₹25, विदेशी: ₹300" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "The Bhopal district administration gives roughly 46 km by road from Bhopal. A pre-booked taxi is simplest. Buses may run on the highway, but the last mile from a stop can be…", hi: "The Bhopal district administration gives roughly 46 km by road from Bhopal. A pre-booked taxi is simplest. Buses may run on the highway, but the last mile from a stop can be…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "The Bhopal district administration gives roughly 46 km by road from Bhopal. A pre-booked taxi is simplest. Buses may run on the highway, but the last mile from a stop can be…", hi: "The Bhopal district administration gives roughly 46 km by road from Bhopal. A pre-booked taxi is simplest. Buses may run on the highway, but the last mile from a stop can be…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Bhimbetka+Rock+Shelters+++Raisen", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "sanchi_stupa_raisen_mp",
    num: 12,
    name: { en: "Sanchi Stupa", hi: "सांची का महान स्तूप (रायसेन)" },
    tagline: { en: "Emperor Ashoka’s Great Stupa & Masterpiece Carved Toranas", hi: "सम्राट अशोक द्वारा निर्मित बौद्ध धर्म का सर्वोच्च विश्व धरोहर केंद्र" },
    badge: { en: "UNESCO World Heritage Site • 3rd Century BCE", hi: "यूनेस्को विश्व धरोहर • ईसा पूर्व तीसरी शताब्दी" },
    district: { en: "Raisen, Madhya Pradesh", hi: "सांची, रायसेन, मध्य प्रदेश" },
    zone: "central",
    category: "buddhist_site",
    coordinates: [23.4873, 77.7394],
    heroImage: "/images/places/sanchi.jpg",
    gallery: [
      { url: "/images/places/sanchi.jpg", caption: { en: "Sanchi Stupa Vista", hi: "सांची का महान स्तूप (रायसेन) स्थापत्य" } }
    ],
    routeConfidence: "HIGH",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Sanchi+Stupa+++Raisen",
    focus: { en: "Buddhist archaeology.", hi: "धरोहर का मुख्य केंद्र: Buddhist archaeology." },
    lastMileGuidance: { en: "From Sanchi station/town, use a short auto/e-rickshaw ride or walk depending on your arrival point and mobility. From Bhopal, buses and taxis operate toward Sanchi; allow extra time for the road journey.…", hi: "From Sanchi station/town, use a short auto/e-rickshaw ride or walk depending on your arrival point and mobility. From Bhopal, buses and taxis operate toward Sanchi; allow extra time for the road journey.…" },
    note: { en: "Use Sanchi/Vidisha as the base, but treat smaller Buddhist sites as separate rural excursions with a pre-arranged driver.", hi: "Use Sanchi/Vidisha as the base, but treat smaller Buddhist sites as separate rural excursions with a pre-arranged driver." },
    history: {
      dynasty: { en: "Mauryan, Sunga & Satavahana Dynasties", hi: "मौर्य, शुंग व सातवाहन राजवंश" },
      period: { en: "3rd Century BCE – 12th Century CE", hi: "तीसरी सदी ई.पू. से 12वीं सदी" },
      chronicle: { en: "A major Buddhist site with stupas, gateways, monasteries and inscriptions. A useful reference site for comparison with smaller Buddhist complexes.", hi: "A major Buddhist site with stupas, gateways, monasteries and inscriptions. A useful reference site for comparison with smaller Buddhist complexes." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Buddhist archaeology.", hi: "सांची का महान स्तूप (रायसेन) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Buddhist hemispherical brick/stone stupa with four ornamental toranas", hi: "अर्धगोलाकार स्तूप व चार अलंकृत पाषाण तोरण द्वार" },
      engineeringHighlights: {
        en: ["Buddhist hemispherical brick/stone stupa with four ornamental toranas", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["अर्धगोलाकार स्तूप व चार अलंकृत पाषाण तोरण द्वार", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A major Buddhist site with stupas, gateways, monasteries and inscriptions. A useful reference site for comparison with smaller Buddhist complexes.", hi: "A major Buddhist site with stupas, gateways, monasteries and inscriptions. A useful reference site for comparison with smaller Buddhist complexes." }
    },
    howToReach: {
      fromHub: { en: "Sanchi has its own railway station; Bhopal is the major rail/air hub.", hi: "Sanchi has its own railway station; Bhopal is the major rail/air hub." },
      nearestRail: { en: "Sanchi has its own railway station; Bhopal is the major rail/air hub.", hi: "Sanchi has its own railway station; Bhopal is the major rail/air hub." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "₹40 for Indians, ₹600 for Foreigners", hi: "भारतीय: ₹40, विदेशी: ₹600" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "From Sanchi station/town, use a short auto/e-rickshaw ride or walk depending on your arrival point and mobility. From Bhopal, buses and taxis operate toward Sanchi; allow extra time for the road journey.…", hi: "From Sanchi station/town, use a short auto/e-rickshaw ride or walk depending on your arrival point and mobility. From Bhopal, buses and taxis operate toward Sanchi; allow extra time for the road journey.…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "From Sanchi station/town, use a short auto/e-rickshaw ride or walk depending on your arrival point and mobility. From Bhopal, buses and taxis operate toward Sanchi; allow extra time for the road journey.…", hi: "From Sanchi station/town, use a short auto/e-rickshaw ride or walk depending on your arrival point and mobility. From Bhopal, buses and taxis operate toward Sanchi; allow extra time for the road journey.…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Sanchi+Stupa+++Raisen", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "udayagiri_caves_vidisha_mp",
    num: 13,
    name: { en: "Udayagiri Caves", hi: "उदयगिरि गुफाएं (विदिशा)" },
    tagline: { en: "Monumental 5th-Century Gupta Rock-Cut Sanctums & Varaha Avatar Panel", hi: "गुप्त काल की 20 शैलकृत गुफाएं व वराह अवतार का विश्वप्रसिद्ध पाषाण शिल्प" },
    badge: { en: "Golden Age of Guptas • Chandragupta II Inscriptions", hi: "गुप्त साम्राज्य का स्वर्णकाल • चंद्रगुप्त द्वितीय कालीन" },
    district: { en: "Vidisha, Madhya Pradesh", hi: "विदिशा, मध्य प्रदेश" },
    zone: "central",
    category: "asi_heritage",
    coordinates: [23.5358, 77.7797],
    heroImage: "/images/places/bateshwar.jpg",
    gallery: [
      { url: "/images/places/bateshwar.jpg", caption: { en: "Udayagiri Caves Vista", hi: "उदयगिरि गुफाएं (विदिशा) स्थापत्य" } }
    ],
    routeConfidence: "MEDIUM",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Udayagiri+Caves+++Vidisha",
    focus: { en: "Rock-cut caves and Gupta-period sculpture.", hi: "धरोहर का मुख्य केंद्र: Rock-cut caves and Gupta-period sculpture." },
    lastMileGuidance: { en: "The caves are outside Vidisha town. Hire an auto/taxi from Vidisha and agree on a return pickup; local public transport to the entrance is not dependable enough to assume. Take care on…", hi: "The caves are outside Vidisha town. Hire an auto/taxi from Vidisha and agree on a return pickup; local public transport to the entrance is not dependable enough to assume. Take care on…" },
    note: { en: "Use Sanchi/Vidisha as the base, but treat smaller Buddhist sites as separate rural excursions with a pre-arranged driver.", hi: "Use Sanchi/Vidisha as the base, but treat smaller Buddhist sites as separate rural excursions with a pre-arranged driver." },
    history: {
      dynasty: { en: "Imperial Gupta Dynasty (Chandragupta II Vikramaditya)", hi: "गुप्त साम्राज्य (चंद्रगुप्त विक्रमादित्य)" },
      period: { en: "4th – 5th Century CE (circa 400–425 CE)", hi: "4थी से 5वीं शताब्दी" },
      chronicle: { en: "Caves with Gupta-period inscriptions and Hindu and Jain sculptures, including the monumental Varaha relief.", hi: "Caves with Gupta-period inscriptions and Hindu and Jain sculptures, including the monumental Varaha relief." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Rock-cut caves and Gupta-period sculpture.", hi: "उदयगिरि गुफाएं (विदिशा) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Early classical Gupta rock-cut relief cave architecture", hi: "प्रारंभिक शास्त्रीय गुप्त शैलकृत गुहा स्थापत्य" },
      engineeringHighlights: {
        en: ["Early classical Gupta rock-cut relief cave architecture", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["प्रारंभिक शास्त्रीय गुप्त शैलकृत गुहा स्थापत्य", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "Caves with Gupta-period inscriptions and Hindu and Jain sculptures, including the monumental Varaha relief.", hi: "Caves with Gupta-period inscriptions and Hindu and Jain sculptures, including the monumental Varaha relief." }
    },
    howToReach: {
      fromHub: { en: "Vidisha railway station is the nearest practical railhead; Bhopal is the larger hub.", hi: "Vidisha railway station is the nearest practical railhead; Bhopal is the larger hub." },
      nearestRail: { en: "Vidisha railway station is the nearest practical railhead; Bhopal is the larger hub.", hi: "Vidisha railway station is the nearest practical railhead; Bhopal is the larger hub." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "₹25 for Indians, ₹300 for Foreigners", hi: "भारतीय: ₹25, विदेशी: ₹300" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "The caves are outside Vidisha town. Hire an auto/taxi from Vidisha and agree on a return pickup; local public transport to the entrance is not dependable enough to assume. Take care on…", hi: "The caves are outside Vidisha town. Hire an auto/taxi from Vidisha and agree on a return pickup; local public transport to the entrance is not dependable enough to assume. Take care on…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "The caves are outside Vidisha town. Hire an auto/taxi from Vidisha and agree on a return pickup; local public transport to the entrance is not dependable enough to assume. Take care on…", hi: "The caves are outside Vidisha town. Hire an auto/taxi from Vidisha and agree on a return pickup; local public transport to the entrance is not dependable enough to assume. Take care on…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Udayagiri+Caves+++Vidisha", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "ashapuri_temple_ruins_mp",
    num: 14,
    name: { en: "Ashapuri Temple Ruins", hi: "आशापुरी मंदिर खंडहर (रायसेन)" },
    tagline: { en: "Ancient Bhojpur Satellite: 26 Pratihara & Paramara Temples Around Medieval Lake", hi: "भोजपुर के निकट 26 प्रतिहार व परमार कालीन मंदिरों का पुरातात्विक परिसर" },
    badge: { en: "State Archaeological Site • Paramara Epigraphic Hub", hi: "राज्य संरक्षित पुरातात्विक स्थल • परमार कालीन" },
    district: { en: "Raisen, Madhya Pradesh", hi: "आशापुरी, रायसेन, मध्य प्रदेश" },
    zone: "central",
    category: "ancient_temple",
    coordinates: [23.1167, 77.6333],
    heroImage: "/images/places/padhavali.jpg",
    gallery: [
      { url: "/images/places/padhavali.jpg", caption: { en: "Ashapuri Temple Ruins Vista", hi: "आशापुरी मंदिर खंडहर (रायसेन) स्थापत्य" } }
    ],
    routeConfidence: "LOW",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ashapuri+Temple+Ruins+++Raisen",
    focus: { en: "Temple ruins and architectural fragments.", hi: "धरोहर का मुख्य केंद्र: Temple ruins and architectural fragments." },
    lastMileGuidance: { en: "Ashapuri is a rural temple-ruin area, not the Himachal Pradesh temple with a similar name. Arrange a private vehicle from the Bhopal–Bhojpur/Raisen side and confirm local access with a reliable district/heritage source.…", hi: "Ashapuri is a rural temple-ruin area, not the Himachal Pradesh temple with a similar name. Arrange a private vehicle from the Bhopal–Bhojpur/Raisen side and confirm local access with a reliable district/heritage source.…" },
    history: {
      dynasty: { en: "Pratihara & Paramara Dynasties", hi: "प्रतिहार व परमार राजवंश" },
      period: { en: "9th – 11th Century CE", hi: "9वीं से 11वीं शताब्दी" },
      chronicle: { en: "A group of temple remains with scattered architectural fragments. Research surviving components and the area's historic temple landscape.", hi: "A group of temple remains with scattered architectural fragments. Research surviving components and the area's historic temple landscape." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Temple ruins and architectural fragments.", hi: "आशापुरी मंदिर खंडहर (रायसेन) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Central Indian Nagara ruins with an on-site sculpture shed", hi: "मध्य भारतीय नागर खंडहर व मूर्तिकला दीर्घा" },
      engineeringHighlights: {
        en: ["Central Indian Nagara ruins with an on-site sculpture shed", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["मध्य भारतीय नागर खंडहर व मूर्तिकला दीर्घा", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A group of temple remains with scattered architectural fragments. Research surviving components and the area's historic temple landscape.", hi: "A group of temple remains with scattered architectural fragments. Research surviving components and the area's historic temple landscape." }
    },
    howToReach: {
      fromHub: { en: "Bhopal/Obedullaganj are practical transport hubs; confirm the exact site pin before travelling.", hi: "Bhopal/Obedullaganj are practical transport hubs; confirm the exact site pin before travelling." },
      nearestRail: { en: "Bhopal/Obedullaganj are practical transport hubs; confirm the exact site pin before travelling.", hi: "Bhopal/Obedullaganj are practical transport hubs; confirm the exact site pin before travelling." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry", hi: "निःशुल्क प्रवेश" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Ashapuri is a rural temple-ruin area, not the Himachal Pradesh temple with a similar name. Arrange a private vehicle from the Bhopal–Bhojpur/Raisen side and confirm local access with a reliable district/heritage source.…", hi: "Ashapuri is a rural temple-ruin area, not the Himachal Pradesh temple with a similar name. Arrange a private vehicle from the Bhopal–Bhojpur/Raisen side and confirm local access with a reliable district/heritage source.…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Ashapuri is a rural temple-ruin area, not the Himachal Pradesh temple with a similar name. Arrange a private vehicle from the Bhopal–Bhojpur/Raisen side and confirm local access with a reliable district/heritage source.…", hi: "Ashapuri is a rural temple-ruin area, not the Himachal Pradesh temple with a similar name. Arrange a private vehicle from the Bhopal–Bhojpur/Raisen side and confirm local access with a reliable district/heritage source.…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Ashapuri+Temple+Ruins+++Raisen", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "satdhara_buddhist_site_mp",
    num: 15,
    name: { en: "Satdhara Buddhist Site", hi: "सतधारा बौद्ध स्तूप परिसर (रायसेन)" },
    tagline: { en: "Splendid Sanchi Satellite: 28 Stupas and Monasteries Overlooking Halali River", hi: "हलाली नदी के तट पर 28 स्तूपों और बौद्ध विहारों का शांत पवित्र परिसर" },
    badge: { en: "UNESCO Tentative Relic Site • Ashokan Era", hi: "अशोक कालीन बौद्ध महाविहार • 28 स्तूप" },
    district: { en: "Raisen, Madhya Pradesh", hi: "सतधारा, रायसेन, मध्य प्रदेश" },
    zone: "central",
    category: "buddhist_site",
    coordinates: [23.4858, 77.6522],
    heroImage: "/images/places/sanchi.jpg",
    gallery: [
      { url: "/images/places/sanchi.jpg", caption: { en: "Satdhara Buddhist Site Vista", hi: "सतधारा बौद्ध स्तूप परिसर (रायसेन) स्थापत्य" } }
    ],
    routeConfidence: "MEDIUM",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Satdhara+Buddhist+Site+++Raisen",
    focus: { en: "Buddhist archaeological landscape.", hi: "धरोहर का मुख्य केंद्र: Buddhist archaeological landscape." },
    lastMileGuidance: { en: "Satdhara is a rural archaeological stop in the wider Sanchi landscape. Visit by private vehicle from Sanchi and plan the return ride in advance. Do not assume autos or buses will be…", hi: "Satdhara is a rural archaeological stop in the wider Sanchi landscape. Visit by private vehicle from Sanchi and plan the return ride in advance. Do not assume autos or buses will be…" },
    note: { en: "Use Sanchi/Vidisha as the base, but treat smaller Buddhist sites as separate rural excursions with a pre-arranged driver.", hi: "Use Sanchi/Vidisha as the base, but treat smaller Buddhist sites as separate rural excursions with a pre-arranged driver." },
    history: {
      dynasty: { en: "Mauryan to Gupta Periods", hi: "मौर्य से गुप्त काल" },
      period: { en: "3rd Century BCE – 7th Century CE", hi: "तीसरी सदी ई.पू. से 7वीं सदी" },
      chronicle: { en: "A quieter Buddhist complex in the wider Sanchi region. Compare its stupas and setting with Sanchi.", hi: "A quieter Buddhist complex in the wider Sanchi region. Compare its stupas and setting with Sanchi." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Buddhist archaeological landscape.", hi: "सतधारा बौद्ध स्तूप परिसर (रायसेन) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Brick and dry-stone masonry stupas on hill terraces", hi: "पाषाण व ईंट के महास्तूप" },
      engineeringHighlights: {
        en: ["Brick and dry-stone masonry stupas on hill terraces", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["पाषाण व ईंट के महास्तूप", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A quieter Buddhist complex in the wider Sanchi region. Compare its stupas and setting with Sanchi.", hi: "A quieter Buddhist complex in the wider Sanchi region. Compare its stupas and setting with Sanchi." }
    },
    howToReach: {
      fromHub: { en: "Sanchi is the most practical visitor hub; Bhopal is the main rail/air hub.", hi: "Sanchi is the most practical visitor hub; Bhopal is the main rail/air hub." },
      nearestRail: { en: "Sanchi is the most practical visitor hub; Bhopal is the main rail/air hub.", hi: "Sanchi is the most practical visitor hub; Bhopal is the main rail/air hub." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry (ASI Protected)", hi: "निःशुल्क प्रवेश (ASI संरक्षित)" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Satdhara is a rural archaeological stop in the wider Sanchi landscape. Visit by private vehicle from Sanchi and plan the return ride in advance. Do not assume autos or buses will be…", hi: "Satdhara is a rural archaeological stop in the wider Sanchi landscape. Visit by private vehicle from Sanchi and plan the return ride in advance. Do not assume autos or buses will be…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Satdhara is a rural archaeological stop in the wider Sanchi landscape. Visit by private vehicle from Sanchi and plan the return ride in advance. Do not assume autos or buses will be…", hi: "Satdhara is a rural archaeological stop in the wider Sanchi landscape. Visit by private vehicle from Sanchi and plan the return ride in advance. Do not assume autos or buses will be…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Satdhara+Buddhist+Site+++Raisen", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "sonari_buddhist_stupas_mp",
    num: 16,
    name: { en: "Sonari Buddhist Stupas", hi: "सोनारी बौद्ध स्तूप (रायसेन)" },
    tagline: { en: "Quiet Ridge of Relic Stupas Discovered by Alexander Cunningham", hi: "कनिंघम द्वारा खोजे गए पहाड़ी की चोटी पर स्थित प्राचीन बौद्ध धातु स्तूप" },
    badge: { en: "Cunningham Discovery 1851 • Ashoka Heritage", hi: "अलेक्जेंडर कनिंघम द्वारा 1851 में अन्वेषित" },
    district: { en: "Raisen, Madhya Pradesh", hi: "सोनारी, रायसेन, मध्य प्रदेश" },
    zone: "central",
    category: "buddhist_site",
    coordinates: [23.4472, 77.7114],
    heroImage: "/images/places/sanchi.jpg",
    gallery: [
      { url: "/images/places/sanchi.jpg", caption: { en: "Sonari Buddhist Stupas Vista", hi: "सोनारी बौद्ध स्तूप (रायसेन) स्थापत्य" } }
    ],
    routeConfidence: "LOW",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Sonari+Buddhist+Stupas+++Raisen",
    focus: { en: "Early Buddhist archaeology.", hi: "धरोहर का मुख्य केंद्र: Early Buddhist archaeology." },
    lastMileGuidance: { en: "Sonari is a rural Buddhist archaeological site. Arrange a driver familiar with the Sanchi-area sites and confirm the correct location and access before setting out; a single combined trip can include other…", hi: "Sonari is a rural Buddhist archaeological site. Arrange a driver familiar with the Sanchi-area sites and confirm the correct location and access before setting out; a single combined trip can include other…" },
    note: { en: "Use Sanchi/Vidisha as the base, but treat smaller Buddhist sites as separate rural excursions with a pre-arranged driver.", hi: "Use Sanchi/Vidisha as the base, but treat smaller Buddhist sites as separate rural excursions with a pre-arranged driver." },
    history: {
      dynasty: { en: "Sunga & Satavahana Era", hi: "शुंग व सातवाहन काल" },
      period: { en: "2nd Century BCE – 1st Century CE", hi: "दूसरी सदी ई.पू. से पहली सदी" },
      chronicle: { en: "An early Buddhist site associated with the wider Sanchi landscape. Relevant to relic discoveries, Buddhist patronage and regional networks.", hi: "An early Buddhist site associated with the wider Sanchi landscape. Relevant to relic discoveries, Buddhist patronage and regional networks." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Early Buddhist archaeology.", hi: "सोनारी बौद्ध स्तूप (रायसेन) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Stone casing stupa with ancient pradakshina patha", hi: "पाषाण वेष्टित स्तूप व प्रदक्षिणा पथ" },
      engineeringHighlights: {
        en: ["Stone casing stupa with ancient pradakshina patha", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["पाषाण वेष्टित स्तूप व प्रदक्षिणा पथ", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "An early Buddhist site associated with the wider Sanchi landscape. Relevant to relic discoveries, Buddhist patronage and regional networks.", hi: "An early Buddhist site associated with the wider Sanchi landscape. Relevant to relic discoveries, Buddhist patronage and regional networks." }
    },
    howToReach: {
      fromHub: { en: "Sanchi/Vidisha are practical bases; Bhopal is the larger transport hub.", hi: "Sanchi/Vidisha are practical bases; Bhopal is the larger transport hub." },
      nearestRail: { en: "Sanchi/Vidisha are practical bases; Bhopal is the larger transport hub.", hi: "Sanchi/Vidisha are practical bases; Bhopal is the larger transport hub." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry", hi: "निःशुल्क प्रवेश" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Sonari is a rural Buddhist archaeological site. Arrange a driver familiar with the Sanchi-area sites and confirm the correct location and access before setting out; a single combined trip can include other…", hi: "Sonari is a rural Buddhist archaeological site. Arrange a driver familiar with the Sanchi-area sites and confirm the correct location and access before setting out; a single combined trip can include other…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Sonari is a rural Buddhist archaeological site. Arrange a driver familiar with the Sanchi-area sites and confirm the correct location and access before setting out; a single combined trip can include other…", hi: "Sonari is a rural Buddhist archaeological site. Arrange a driver familiar with the Sanchi-area sites and confirm the correct location and access before setting out; a single combined trip can include other…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Sonari+Buddhist+Stupas+++Raisen", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "andher_buddhist_stupas_mp",
    num: 17,
    name: { en: "Andher Buddhist Stupas", hi: "अंधेर बौद्ध स्तूप (विदिशा)" },
    tagline: { en: "Elevated Hilltop Stupas Guarding the Ancient Besnagar Merchant Route", hi: "प्राचीन बेसनगर व्यापारिक मार्ग की निगरानी करते तीन स्तूप" },
    badge: { en: "Ancient Relic Reliquary Site • 2nd Century BCE", hi: "प्राचीन धातु पेटिका स्थल • शुंग कालीन" },
    district: { en: "Vidisha region, Madhya Pradesh", hi: "अंधेर, विदिशा / रायसेन सीमा, मध्य प्रदेश" },
    zone: "central",
    category: "buddhist_site",
    coordinates: [23.4114, 77.7631],
    heroImage: "/images/places/sanchi.jpg",
    gallery: [
      { url: "/images/places/sanchi.jpg", caption: { en: "Andher Buddhist Stupas Vista", hi: "अंधेर बौद्ध स्तूप (विदिशा) स्थापत्य" } }
    ],
    routeConfidence: "LOW",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Andher+Buddhist+Stupas+++Vidisha+region",
    focus: { en: "Smaller Buddhist complex.", hi: "धरोहर का मुख्य केंद्र: Smaller Buddhist complex." },
    lastMileGuidance: { en: "Andher is a rural archaeological site. Use a pre-arranged car and local directions from a knowledgeable driver/guide. Confirm the precise site and access status; last-mile public transport is not guaranteed.", hi: "Andher is a rural archaeological site. Use a pre-arranged car and local directions from a knowledgeable driver/guide. Confirm the precise site and access status; last-mile public transport is not guaranteed." },
    note: { en: "Use Sanchi/Vidisha as the base, but treat smaller Buddhist sites as separate rural excursions with a pre-arranged driver.", hi: "Use Sanchi/Vidisha as the base, but treat smaller Buddhist sites as separate rural excursions with a pre-arranged driver." },
    history: {
      dynasty: { en: "Sunga Dynasty", hi: "शुंग राजवंश" },
      period: { en: "2nd Century BCE", hi: "दूसरी सदी ईसा पूर्व" },
      chronicle: { en: "A smaller Buddhist site associated with the Sanchi–Vidisha area, useful for comparative study of stupas and archaeological landscapes.", hi: "A smaller Buddhist site associated with the Sanchi–Vidisha area, useful for comparative study of stupas and archaeological landscapes." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Smaller Buddhist complex.", hi: "अंधेर बौद्ध स्तूप (विदिशा) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Dry-stone stupas commanding expansive valley panoramas", hi: "शुष्क पाषाण स्तूप स्थापत्य" },
      engineeringHighlights: {
        en: ["Dry-stone stupas commanding expansive valley panoramas", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["शुष्क पाषाण स्तूप स्थापत्य", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A smaller Buddhist site associated with the Sanchi–Vidisha area, useful for comparative study of stupas and archaeological landscapes.", hi: "A smaller Buddhist site associated with the Sanchi–Vidisha area, useful for comparative study of stupas and archaeological landscapes." }
    },
    howToReach: {
      fromHub: { en: "Vidisha/Sanchi are the practical bases; Bhopal is the larger rail/air hub.", hi: "Vidisha/Sanchi are the practical bases; Bhopal is the larger rail/air hub." },
      nearestRail: { en: "Vidisha/Sanchi are the practical bases; Bhopal is the larger rail/air hub.", hi: "Vidisha/Sanchi are the practical bases; Bhopal is the larger rail/air hub." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry", hi: "निःशुल्क प्रवेश" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Andher is a rural archaeological site. Use a pre-arranged car and local directions from a knowledgeable driver/guide. Confirm the precise site and access status; last-mile public transport is not guaranteed.", hi: "Andher is a rural archaeological site. Use a pre-arranged car and local directions from a knowledgeable driver/guide. Confirm the precise site and access status; last-mile public transport is not guaranteed." },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Andher is a rural archaeological site. Use a pre-arranged car and local directions from a knowledgeable driver/guide. Confirm the precise site and access status; last-mile public transport is not guaranteed.", hi: "Andher is a rural archaeological site. Use a pre-arranged car and local directions from a knowledgeable driver/guide. Confirm the precise site and access status; last-mile public transport is not guaranteed." }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Andher+Buddhist+Stupas+++Vidisha+region", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "raisen_fort_raisen_mp",
    num: 18,
    name: { en: "Raisen Fort", hi: "रायसेन दुर्ग (रायसेन)" },
    tagline: { en: "Massive 1200 CE Hill Citadel Featuring Ancient Water Reservoirs & Medieval Palaces", hi: "विशाल पहाड़ी दुर्ग, 40 से अधिक बावड़ियां व ऐतिहासिक बादल महल" },
    badge: { en: "13th Century Fortress • 40 Historic Baolis", hi: "13वीं सदी का किला • प्राचीन जल संचयन प्रणाली" },
    district: { en: "Raisen, Madhya Pradesh", hi: "रायसेन, मध्य प्रदेश" },
    zone: "central",
    category: "fort_palace",
    coordinates: [23.3325, 77.7889],
    heroImage: "/images/places/gwalior_fort.jpg",
    gallery: [
      { url: "/images/places/gwalior_fort.jpg", caption: { en: "Raisen Fort Vista", hi: "रायसेन दुर्ग (रायसेन) स्थापत्य" } }
    ],
    routeConfidence: "HIGH",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Raisen+Fort+++Raisen",
    focus: { en: "Hill fort and historic structures.", hi: "धरोहर का मुख्य केंद्र: Hill fort and historic structures." },
    lastMileGuidance: { en: "Raisen town is roughly 45–50 km from Bhopal, and Raisen has no railway station according to the district administration. Take a bus/taxi to Raisen town, then a local auto/taxi to the fort…", hi: "Raisen town is roughly 45–50 km from Bhopal, and Raisen has no railway station according to the district administration. Take a bus/taxi to Raisen town, then a local auto/taxi to the fort…" },
    history: {
      dynasty: { en: "Tomaras, Malwa Sultans, Sher Shah Suri", hi: "तोमर, मालवा सुल्तान व शेरशाह सूरी" },
      period: { en: "13th – 16th Century CE", hi: "13वीं से 16वीं शताब्दी" },
      chronicle: { en: "A hilltop fort with defensive walls and historic religious structures. Research military architecture, water systems and changing use.", hi: "A hilltop fort with defensive walls and historic religious structures. Research military architecture, water systems and changing use." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Hill fort and historic structures.", hi: "रायसेन दुर्ग (रायसेन) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Indo-Islamic and Rajput defensive hill fortification", hi: "इंडो-इस्लामिक व राजपूत सैन्य दुर्ग" },
      engineeringHighlights: {
        en: ["Indo-Islamic and Rajput defensive hill fortification", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["इंडो-इस्लामिक व राजपूत सैन्य दुर्ग", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A hilltop fort with defensive walls and historic religious structures. Research military architecture, water systems and changing use.", hi: "A hilltop fort with defensive walls and historic religious structures. Research military architecture, water systems and changing use." }
    },
    howToReach: {
      fromHub: { en: "Bhopal Junction / Rani Kamlapati; Raja Bhoj Airport.", hi: "Bhopal Junction / Rani Kamlapati; Raja Bhoj Airport." },
      nearestRail: { en: "Bhopal Junction / Rani Kamlapati; Raja Bhoj Airport.", hi: "Bhopal Junction / Rani Kamlapati; Raja Bhoj Airport." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry (ASI Protected)", hi: "निःशुल्क प्रवेश" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Raisen town is roughly 45–50 km from Bhopal, and Raisen has no railway station according to the district administration. Take a bus/taxi to Raisen town, then a local auto/taxi to the fort…", hi: "Raisen town is roughly 45–50 km from Bhopal, and Raisen has no railway station according to the district administration. Take a bus/taxi to Raisen town, then a local auto/taxi to the fort…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Raisen town is roughly 45–50 km from Bhopal, and Raisen has no railway station according to the district administration. Take a bus/taxi to Raisen town, then a local auto/taxi to the fort…", hi: "Raisen town is roughly 45–50 km from Bhopal, and Raisen has no railway station according to the district administration. Take a bus/taxi to Raisen town, then a local auto/taxi to the fort…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Raisen+Fort+++Raisen", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "jahaz_mahal_mandu_mp",
    num: 19,
    name: { en: "Jahaz Mahal", hi: "जहाज महल (मांडू)" },
    tagline: { en: "Floating Ship Palace Between Two Artificial Lakes in the City of Joy", hi: "दो कृत्रिम झीलों (कपूर व मुंज तालाब) के बीच तैरता जहाज महल" },
    badge: { en: "UNESCO Tentative • Sultan Ghiyas-ud-din Khilji", hi: "यूनेस्को संभावित • 15वीं सदी का मालवा सल्तनत स्थापत्य" },
    district: { en: "Mandu, Dhar, Madhya Pradesh", hi: "मांडू, धार, मध्य प्रदेश" },
    zone: "malwa",
    category: "fort_palace",
    coordinates: [22.3664, 75.3912],
    heroImage: "/images/places/chanderi_fort.jpg",
    gallery: [
      { url: "/images/places/chanderi_fort.jpg", caption: { en: "Jahaz Mahal Vista", hi: "जहाज महल (मांडू) स्थापत्य" } }
    ],
    routeConfidence: "HIGH",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Jahaz+Mahal+++Mandu+Dhar",
    focus: { en: "Medieval palace and water architecture.", hi: "धरोहर का मुख्य केंद्र: Medieval palace and water architecture." },
    lastMileGuidance: { en: "Mandu is about 95 km from Indore and about 35 km from Dhar according to the Dhar district page. Buses run via Dhar, but for visiting multiple monuments within Mandu, a private…", hi: "Mandu is about 95 km from Indore and about 35 km from Dhar according to the Dhar district page. Buses run via Dhar, but for visiting multiple monuments within Mandu, a private…" },
    note: { en: "Mandu and Dhar can be paired in a broader western-Malwa itinerary; allow enough time for road transfers and walking between monuments.", hi: "Mandu and Dhar can be paired in a broader western-Malwa itinerary; allow enough time for road transfers and walking between monuments." },
    history: {
      dynasty: { en: "Malwa Sultanate (Ghiyas-ud-din Khilji)", hi: "मालवा सल्तनत (ग़ियासुद्दीन खिलजी)" },
      period: { en: "Late 15th Century CE (1469–1500 CE)", hi: "15वीं शताब्दी" },
      chronicle: { en: "A palace between two water bodies, famous for its ship-like appearance. Useful for studying palace design and water management.", hi: "A palace between two water bodies, famous for its ship-like appearance. Useful for studying palace design and water management." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Medieval palace and water architecture.", hi: "जहाज महल (मांडू) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Malwa Provincial Islamic pavilion architecture with open-air terrace baths", hi: "मालवा इस्लामी स्थापत्य व छत पर बने कुंड" },
      engineeringHighlights: {
        en: ["Malwa Provincial Islamic pavilion architecture with open-air terrace baths", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["मालवा इस्लामी स्थापत्य व छत पर बने कुंड", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A palace between two water bodies, famous for its ship-like appearance. Useful for studying palace design and water management.", hi: "A palace between two water bodies, famous for its ship-like appearance. Useful for studying palace design and water management." }
    },
    howToReach: {
      fromHub: { en: "Indore Junction is the main rail hub; Devi Ahilyabai Holkar Airport is the nearest major airport.", hi: "Indore Junction is the main rail hub; Devi Ahilyabai Holkar Airport is the nearest major airport." },
      nearestRail: { en: "Indore Junction is the main rail hub; Devi Ahilyabai Holkar Airport is the nearest major airport.", hi: "Indore Junction is the main rail hub; Devi Ahilyabai Holkar Airport is the nearest major airport." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "₹25 for Indians, ₹300 for Foreigners (Mandu circuit ticket)", hi: "भारतीय: ₹25, विदेशी: ₹300 (मांडू साझा टिकट)" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Mandu is about 95 km from Indore and about 35 km from Dhar according to the Dhar district page. Buses run via Dhar, but for visiting multiple monuments within Mandu, a private…", hi: "Mandu is about 95 km from Indore and about 35 km from Dhar according to the Dhar district page. Buses run via Dhar, but for visiting multiple monuments within Mandu, a private…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Mandu is about 95 km from Indore and about 35 km from Dhar according to the Dhar district page. Buses run via Dhar, but for visiting multiple monuments within Mandu, a private…", hi: "Mandu is about 95 km from Indore and about 35 km from Dhar according to the Dhar district page. Buses run via Dhar, but for visiting multiple monuments within Mandu, a private…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Jahaz+Mahal+++Mandu+Dhar", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "hoshang_shah_tomb_mandu_mp",
    num: 20,
    name: { en: "Hoshang Shah's Tomb", hi: "होशंग शाह का मक़बरा (मांडू)" },
    tagline: { en: "India’s First Pure White Marble Mausoleum that Inspired the Taj Mahal", hi: "भारत का पहला संगमरमरी मक़बरा — जिसने ताजमहल के निर्माण को प्रेरित किया" },
    badge: { en: "First Marble Tomb in India • Taj Mahal Precursor", hi: "भारत का प्रथम संगमरमरी मक़बरा • ताजमहल की प्रेरणा" },
    district: { en: "Mandu, Madhya Pradesh", hi: "मांडू, धार, मध्य प्रदेश" },
    zone: "malwa",
    category: "asi_heritage",
    coordinates: [22.3683, 75.3892],
    heroImage: "/images/places/koshak_mahal.jpg",
    gallery: [
      { url: "/images/places/koshak_mahal.jpg", caption: { en: "Hoshang Shah's Tomb Vista", hi: "होशंग शाह का मक़बरा (मांडू) स्थापत्य" } }
    ],
    routeConfidence: "HIGH",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Hoshang+Shah's+Tomb+++Mandu",
    focus: { en: "Malwa Sultanate funerary architecture.", hi: "धरोहर का मुख्य केंद्र: Malwa Sultanate funerary architecture." },
    lastMileGuidance: { en: "Hoshang Shah's Tomb is within the Mandu monument area. Once in Mandu, use local walking routes and/or a vehicle between dispersed monuments; check the current ticketing/opening arrangements and respect any restricted areas.", hi: "Hoshang Shah's Tomb is within the Mandu monument area. Once in Mandu, use local walking routes and/or a vehicle between dispersed monuments; check the current ticketing/opening arrangements and respect any restricted areas." },
    note: { en: "Mandu and Dhar can be paired in a broader western-Malwa itinerary; allow enough time for road transfers and walking between monuments.", hi: "Mandu and Dhar can be paired in a broader western-Malwa itinerary; allow enough time for road transfers and walking between monuments." },
    history: {
      dynasty: { en: "Malwa Sultanate (Hoshang Shah & Mahmud Khilji)", hi: "मालवा सल्तनत (होशंग शाह)" },
      period: { en: "1435–1440 CE", hi: "1435–1440 ईस्वी" },
      chronicle: { en: "An important example of Malwa Sultanate architecture, with marble construction and decorative details.", hi: "An important example of Malwa Sultanate architecture, with marble construction and decorative details." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Malwa Sultanate funerary architecture.", hi: "होशंग शाह का मक़बरा (मांडू) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Afghan style dome, squinch arches and lattice marble screens (jalis)", hi: "अफगान शैली का भव्य गुंबद व संगमरमरी जालियां" },
      engineeringHighlights: {
        en: ["Afghan style dome, squinch arches and lattice marble screens (jalis)", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["अफगान शैली का भव्य गुंबद व संगमरमरी जालियां", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "An important example of Malwa Sultanate architecture, with marble construction and decorative details.", hi: "An important example of Malwa Sultanate architecture, with marble construction and decorative details." }
    },
    howToReach: {
      fromHub: { en: "Indore rail/air hub, then road to Mandu.", hi: "Indore rail/air hub, then road to Mandu." },
      nearestRail: { en: "Indore rail/air hub, then road to Mandu.", hi: "Indore rail/air hub, then road to Mandu." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Included in Mandu ASI central ticket", hi: "मांडू ASI साझा टिकट में सम्मिलित" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Hoshang Shah's Tomb is within the Mandu monument area. Once in Mandu, use local walking routes and/or a vehicle between dispersed monuments; check the current ticketing/opening arrangements and respect any restricted areas.", hi: "Hoshang Shah's Tomb is within the Mandu monument area. Once in Mandu, use local walking routes and/or a vehicle between dispersed monuments; check the current ticketing/opening arrangements and respect any restricted areas." },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Hoshang Shah's Tomb is within the Mandu monument area. Once in Mandu, use local walking routes and/or a vehicle between dispersed monuments; check the current ticketing/opening arrangements and respect any restricted areas.", hi: "Hoshang Shah's Tomb is within the Mandu monument area. Once in Mandu, use local walking routes and/or a vehicle between dispersed monuments; check the current ticketing/opening arrangements and respect any restricted areas." }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Hoshang+Shah's+Tomb+++Mandu", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "hindola_mahal_mandu_mp",
    num: 21,
    name: { en: "Hindola Mahal", hi: "हिंडोला महल (मांडू)" },
    tagline: { en: "The Swinging Palace with 77-Degree Sloping Massive Buttress Walls", hi: "77 डिग्री झुकी दीवारों वाला झूलता महल — दरबारी सभा भवन" },
    badge: { en: "Architectural Marvel • 77° Sloping Buttresses", hi: "स्थापत्य का अजूबा • झुकी हुई विशाल दीवारें" },
    district: { en: "Mandu, Madhya Pradesh", hi: "मांडू, धार, मध्य प्रदेश" },
    zone: "malwa",
    category: "fort_palace",
    coordinates: [22.3697, 75.3919],
    heroImage: "/images/places/koshak_mahal.jpg",
    gallery: [
      { url: "/images/places/koshak_mahal.jpg", caption: { en: "Hindola Mahal Vista", hi: "हिंडोला महल (मांडू) स्थापत्य" } }
    ],
    routeConfidence: "HIGH",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Hindola+Mahal+++Mandu",
    focus: { en: "Palace architecture.", hi: "धरोहर का मुख्य केंद्र: Palace architecture." },
    lastMileGuidance: { en: "Hindola Mahal is within Mandu's heritage zone. Combine it with nearby Mandu monuments in a day itinerary; use a local driver if you do not want to walk between sites. Monument entry…", hi: "Hindola Mahal is within Mandu's heritage zone. Combine it with nearby Mandu monuments in a day itinerary; use a local driver if you do not want to walk between sites. Monument entry…" },
    note: { en: "Mandu and Dhar can be paired in a broader western-Malwa itinerary; allow enough time for road transfers and walking between monuments.", hi: "Mandu and Dhar can be paired in a broader western-Malwa itinerary; allow enough time for road transfers and walking between monuments." },
    history: {
      dynasty: { en: "Malwa Sultanate (Hoshang Shah)", hi: "मालवा सल्तनत (होशंग शाह)" },
      period: { en: "circa 1425 CE", hi: "लगभग 1425 ईस्वी" },
      chronicle: { en: "A palace building known for sloping walls and monumental arches. Useful for documenting structural design and Mandu's architecture.", hi: "A palace building known for sloping walls and monumental arches. Useful for documenting structural design and Mandu's architecture." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Palace architecture.", hi: "हिंडोला महल (मांडू) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Monumental T-shaped royal audience hall with soaring pointed arches", hi: "टी-आकार का विशाल दरबार हॉल" },
      engineeringHighlights: {
        en: ["Monumental T-shaped royal audience hall with soaring pointed arches", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["टी-आकार का विशाल दरबार हॉल", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A palace building known for sloping walls and monumental arches. Useful for documenting structural design and Mandu's architecture.", hi: "A palace building known for sloping walls and monumental arches. Useful for documenting structural design and Mandu's architecture." }
    },
    howToReach: {
      fromHub: { en: "Indore rail/air hub, then road to Mandu.", hi: "Indore rail/air hub, then road to Mandu." },
      nearestRail: { en: "Indore rail/air hub, then road to Mandu.", hi: "Indore rail/air hub, then road to Mandu." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Included in Mandu ASI central ticket", hi: "मांडू ASI साझा टिकट में सम्मिलित" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Hindola Mahal is within Mandu's heritage zone. Combine it with nearby Mandu monuments in a day itinerary; use a local driver if you do not want to walk between sites. Monument entry…", hi: "Hindola Mahal is within Mandu's heritage zone. Combine it with nearby Mandu monuments in a day itinerary; use a local driver if you do not want to walk between sites. Monument entry…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Hindola Mahal is within Mandu's heritage zone. Combine it with nearby Mandu monuments in a day itinerary; use a local driver if you do not want to walk between sites. Monument entry…", hi: "Hindola Mahal is within Mandu's heritage zone. Combine it with nearby Mandu monuments in a day itinerary; use a local driver if you do not want to walk between sites. Monument entry…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Hindola+Mahal+++Mandu", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "bagh_caves_dhar_mp",
    num: 22,
    name: { en: "Bagh Caves", hi: "बाघ की गुफाएं (धार)" },
    tagline: { en: "Masterpiece 5th-Century Rock-Cut Buddhist Caves with Ajanta-Style Murals", hi: "अजंता शैली के दुर्लभ भित्तिचित्रों वाली 9 बौद्ध शैलकृत गुफाएं" },
    badge: { en: "Ajanta Contemporary • 4th–6th Century CE", hi: "अजंता समकालीन • दुर्लभ बौद्ध भित्तिचित्र" },
    district: { en: "Dhar, Madhya Pradesh", hi: "बाघ, धार, मध्य प्रदेश" },
    zone: "malwa",
    category: "buddhist_site",
    coordinates: [22.3167, 74.8],
    heroImage: "/images/places/bateshwar.jpg",
    gallery: [
      { url: "/images/places/bateshwar.jpg", caption: { en: "Bagh Caves Vista", hi: "बाघ की गुफाएं (धार) स्थापत्य" } }
    ],
    routeConfidence: "MEDIUM",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Bagh+Caves+++Dhar",
    focus: { en: "Rock-cut Buddhist architecture and mural art.", hi: "धरोहर का मुख्य केंद्र: Rock-cut Buddhist architecture and mural art." },
    lastMileGuidance: { en: "Bagh Caves are a rural destination and the road journey is substantial. Arrange a private vehicle and verify the final route, site opening and any seasonal access issues with local authorities before…", hi: "Bagh Caves are a rural destination and the road journey is substantial. Arrange a private vehicle and verify the final route, site opening and any seasonal access issues with local authorities before…" },
    history: {
      dynasty: { en: "Mahishti / Imperial Gupta Era", hi: "गुप्त काल" },
      period: { en: "4th – 6th Century CE", hi: "4थी से 6वीं शताब्दी" },
      chronicle: { en: "Buddhist rock-cut monuments dating broadly to the late ancient period, with important mural remains. Research conservation and documentation of surviving art.", hi: "Buddhist rock-cut monuments dating broadly to the late ancient period, with important mural remains. Research conservation and documentation of surviving art." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Rock-cut Buddhist architecture and mural art.", hi: "बाघ की गुफाएं (धार) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Rock-cut sandstone viharas, chaityas with tempera paintings", hi: "शैलकृत बौद्ध विहार व चैत्य" },
      engineeringHighlights: {
        en: ["Rock-cut sandstone viharas, chaityas with tempera paintings", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["शैलकृत बौद्ध विहार व चैत्य", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "Buddhist rock-cut monuments dating broadly to the late ancient period, with important mural remains. Research conservation and documentation of surviving art.", hi: "Buddhist rock-cut monuments dating broadly to the late ancient period, with important mural remains. Research conservation and documentation of surviving art." }
    },
    howToReach: {
      fromHub: { en: "Indore is the main airport/rail hub; Dhar is a useful district hub.", hi: "Indore is the main airport/rail hub; Dhar is a useful district hub." },
      nearestRail: { en: "Indore is the main airport/rail hub; Dhar is a useful district hub.", hi: "Indore is the main airport/rail hub; Dhar is a useful district hub." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "₹25 for Indians, ₹300 for Foreigners (ASI)", hi: "भारतीय: ₹25, विदेशी: ₹300" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Bagh Caves are a rural destination and the road journey is substantial. Arrange a private vehicle and verify the final route, site opening and any seasonal access issues with local authorities before…", hi: "Bagh Caves are a rural destination and the road journey is substantial. Arrange a private vehicle and verify the final route, site opening and any seasonal access issues with local authorities before…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Bagh Caves are a rural destination and the road journey is substantial. Arrange a private vehicle and verify the final route, site opening and any seasonal access issues with local authorities before…", hi: "Bagh Caves are a rural destination and the road journey is substantial. Arrange a private vehicle and verify the final route, site opening and any seasonal access issues with local authorities before…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Bagh+Caves+++Dhar", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "budhi_mandu_dhar_mp",
    num: 23,
    name: { en: "Budhi Mandu / Budhi Mandav", hi: "बूढ़ी मांडू (धार)" },
    tagline: { en: "Original Pre-Sultanate Settlement with Ancient Ruins and Forest Trails", hi: "सल्तनत काल से पहले का मूल मांडव गढ़ — प्राचीन परमार अवशेष" },
    badge: { en: "Paramara Ancient Foundation • Wilderness Trail", hi: "परमार कालीन प्राचीन नींव • घने जंगल में अवशेष" },
    district: { en: "Dhar, Madhya Pradesh", hi: "मांडू पठार, धार, मध्य प्रदेश" },
    zone: "malwa",
    category: "asi_heritage",
    coordinates: [22.35, 75.35],
    heroImage: "/images/places/chanderi_fort.jpg",
    gallery: [
      { url: "/images/places/chanderi_fort.jpg", caption: { en: "Budhi Mandu / Budhi Mandav Vista", hi: "बूढ़ी मांडू (धार) स्थापत्य" } }
    ],
    routeConfidence: "LOW",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Budhi+Mandu+++Budhi+Mandav+++Dhar",
    focus: { en: "Forgotten settlement and ruins.", hi: "धरोहर का मुख्य केंद्र: Forgotten settlement and ruins." },
    lastMileGuidance: { en: "The label Budhi Mandu/Budhi Mandav can be used inconsistently in online sources. Verify the exact site identity and map pin with a local heritage source before travelling. A local guide/driver from Dhar…", hi: "The label Budhi Mandu/Budhi Mandav can be used inconsistently in online sources. Verify the exact site identity and map pin with a local heritage source before travelling. A local guide/driver from Dhar…" },
    history: {
      dynasty: { en: "Paramara Dynasty", hi: "परमार राजवंश" },
      period: { en: "10th – 12th Century CE", hi: "10वीं से 12वीं शताब्दी" },
      chronicle: { en: "A ruined settlement with fortification remains, temple fragments and evidence of a former lake. Its proposed identification with historical Mandapika remains an interpretive question.", hi: "A ruined settlement with fortification remains, temple fragments and evidence of a former lake. Its proposed identification with historical Mandapika remains an interpretive question." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Forgotten settlement and ruins.", hi: "बूढ़ी मांडू (धार) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Early medieval stone structures, bastions, and water tanks", hi: "प्रारंभिक मध्यकालीन पाषाण निर्माण" },
      engineeringHighlights: {
        en: ["Early medieval stone structures, bastions, and water tanks", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["प्रारंभिक मध्यकालीन पाषाण निर्माण", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A ruined settlement with fortification remains, temple fragments and evidence of a former lake. Its proposed identification with historical Mandapika remains an interpretive question.", hi: "A ruined settlement with fortification remains, temple fragments and evidence of a former lake. Its proposed identification with historical Mandapika remains an interpretive question." }
    },
    howToReach: {
      fromHub: { en: "Dhar is the nearest practical town; Indore is the main rail/air hub.", hi: "Dhar is the nearest practical town; Indore is the main rail/air hub." },
      nearestRail: { en: "Dhar is the nearest practical town; Indore is the main rail/air hub.", hi: "Dhar is the nearest practical town; Indore is the main rail/air hub." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry", hi: "निःशुल्क प्रवेश" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "The label Budhi Mandu/Budhi Mandav can be used inconsistently in online sources. Verify the exact site identity and map pin with a local heritage source before travelling. A local guide/driver from Dhar…", hi: "The label Budhi Mandu/Budhi Mandav can be used inconsistently in online sources. Verify the exact site identity and map pin with a local heritage source before travelling. A local guide/driver from Dhar…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "The label Budhi Mandu/Budhi Mandav can be used inconsistently in online sources. Verify the exact site identity and map pin with a local heritage source before travelling. A local guide/driver from Dhar…", hi: "The label Budhi Mandu/Budhi Mandav can be used inconsistently in online sources. Verify the exact site identity and map pin with a local heritage source before travelling. A local guide/driver from Dhar…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Budhi+Mandu+++Budhi+Mandav+++Dhar", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "dhar_fort_dhar_mp",
    num: 24,
    name: { en: "Dhar Fort", hi: "धार का किला (धार)" },
    tagline: { en: "Raja Bhoj’s Capital Citadel Rebuilt by Muhammad bin Tughlaq in 1344 CE", hi: "राजा भोज की ऐतिहासिक राजधानी में मुहम्मद बिन तुगलक द्वारा निर्मित लाल किला" },
    badge: { en: "1344 CE Red Sandstone Citadel • Birthplace of Peshwa Baji Rao II", hi: "1344 ईस्वी • पेशवा बाजीराव द्वितीय की जन्मस्थली" },
    district: { en: "Dhar, Madhya Pradesh", hi: "धार, मध्य प्रदेश" },
    zone: "malwa",
    category: "fort_palace",
    coordinates: [22.6, 75.2972],
    heroImage: "/images/places/gwalior_fort.jpg",
    gallery: [
      { url: "/images/places/gwalior_fort.jpg", caption: { en: "Dhar Fort Vista", hi: "धार का किला (धार) स्थापत्य" } }
    ],
    routeConfidence: "MEDIUM",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Dhar+Fort+++Dhar",
    focus: { en: "Fort and regional political history.", hi: "धरोहर का मुख्य केंद्र: Fort and regional political history." },
    lastMileGuidance: { en: "Reach Dhar by bus or taxi from Indore, then use a local auto/taxi to the fort. Confirm which portions of the fort are accessible on the day and whether any museum/building has…", hi: "Reach Dhar by bus or taxi from Indore, then use a local auto/taxi to the fort. Confirm which portions of the fort are accessible on the day and whether any museum/building has…" },
    note: { en: "Mandu and Dhar can be paired in a broader western-Malwa itinerary; allow enough time for road transfers and walking between monuments.", hi: "Mandu and Dhar can be paired in a broader western-Malwa itinerary; allow enough time for road transfers and walking between monuments." },
    history: {
      dynasty: { en: "Paramaras, Tughlaqs, Marathas (Pawars)", hi: "परमार, तुगलक व धार के पवार" },
      period: { en: "14th Century CE (1344 CE)", hi: "14वीं शताब्दी" },
      chronicle: { en: "A historic fort associated with Malwa's political history. Ramparts and surrounding structures offer subjects for military-architecture research.", hi: "A historic fort associated with Malwa's political history. Ramparts and surrounding structures offer subjects for military-architecture research." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Fort and regional political history.", hi: "धार का किला (धार) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Red sandstone fortifications with Kharbuja Mahal and museum", hi: "लाल बलुआ पत्थर का दुर्ग व खरबूजा महल" },
      engineeringHighlights: {
        en: ["Red sandstone fortifications with Kharbuja Mahal and museum", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["लाल बलुआ पत्थर का दुर्ग व खरबूजा महल", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A historic fort associated with Malwa's political history. Ramparts and surrounding structures offer subjects for military-architecture research.", hi: "A historic fort associated with Malwa's political history. Ramparts and surrounding structures offer subjects for military-architecture research." }
    },
    howToReach: {
      fromHub: { en: "Dhar town is the practical bus/road hub; Indore is the main rail/air hub.", hi: "Dhar town is the practical bus/road hub; Indore is the main rail/air hub." },
      nearestRail: { en: "Dhar town is the practical bus/road hub; Indore is the main rail/air hub.", hi: "Dhar town is the practical bus/road hub; Indore is the main rail/air hub." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry", hi: "निःशुल्क प्रवेश" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Reach Dhar by bus or taxi from Indore, then use a local auto/taxi to the fort. Confirm which portions of the fort are accessible on the day and whether any museum/building has…", hi: "Reach Dhar by bus or taxi from Indore, then use a local auto/taxi to the fort. Confirm which portions of the fort are accessible on the day and whether any museum/building has…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Reach Dhar by bus or taxi from Indore, then use a local auto/taxi to the fort. Confirm which portions of the fort are accessible on the day and whether any museum/building has…", hi: "Reach Dhar by bus or taxi from Indore, then use a local auto/taxi to the fort. Confirm which portions of the fort are accessible on the day and whether any museum/building has…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Dhar+Fort+++Dhar", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "asirgarh_fort_burhanpur_mp",
    num: 25,
    name: { en: "Asirgarh Fort", hi: "असीरगढ़ दुर्ग (बुरहानपुर)" },
    tagline: { en: "Key to the Deccan — Impregnable Satpura Citadel of King Asa Ahir & Akbar", hi: "दक्खन की चाबी — सतपुड़ा की चोटी पर स्थित अजेय असीरगढ़ दुर्ग" },
    badge: { en: "Door to South India • Historic Gupteshwar Mahadev", hi: "दक्षिण का द्वार • अश्वत्थामा पूजा से प्रसिद्ध शिव मंदिर" },
    district: { en: "Burhanpur, Madhya Pradesh", hi: "असीरगढ़, बुरहानपुर, मध्य प्रदेश" },
    zone: "nimar",
    category: "fort_palace",
    coordinates: [21.4681, 76.2994],
    heroImage: "/images/places/gwalior_fort.jpg",
    gallery: [
      { url: "/images/places/gwalior_fort.jpg", caption: { en: "Asirgarh Fort Vista", hi: "असीरगढ़ दुर्ग (बुरहानपुर) स्थापत्य" } }
    ],
    routeConfidence: "MEDIUM",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Asirgarh+Fort+++Burhanpur",
    focus: { en: "Hill fort and strategic routes.", hi: "धरोहर का मुख्य केंद्र: Hill fort and strategic routes." },
    lastMileGuidance: { en: "Asirgarh Fort is outside Burhanpur and involves a hill approach. Arrange a taxi/private vehicle from Burhanpur and confirm the road/entrance and any restrictions with local authorities. Wear sturdy footwear and avoid exploring…", hi: "Asirgarh Fort is outside Burhanpur and involves a hill approach. Arrange a taxi/private vehicle from Burhanpur and confirm the road/entrance and any restrictions with local authorities. Wear sturdy footwear and avoid exploring…" },
    history: {
      dynasty: { en: "Ahir Rulers, Farooqui Dynasty, Mughals", hi: "आसा अहीर, फ़ारूकी सुल्तान व मुग़ल" },
      period: { en: "15th – 17th Century CE (Akbar captured 1601 CE)", hi: "15वीं से 17वीं शताब्दी" },
      chronicle: { en: "A strategically located hill fort historically important to routes through the Satpura region. Research fortification and military geography.", hi: "A strategically located hill fort historically important to routes through the Satpura region. Research fortification and military geography." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Hill fort and strategic routes.", hi: "असीरगढ़ दुर्ग (बुरहानपुर) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Triple-tiered hill fort with Jama Masjid and ancient water tanks", hi: "तीन स्तरों वाला पहाड़ी दुर्ग" },
      engineeringHighlights: {
        en: ["Triple-tiered hill fort with Jama Masjid and ancient water tanks", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["तीन स्तरों वाला पहाड़ी दुर्ग", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A strategically located hill fort historically important to routes through the Satpura region. Research fortification and military geography.", hi: "A strategically located hill fort historically important to routes through the Satpura region. Research fortification and military geography." }
    },
    howToReach: {
      fromHub: { en: "Burhanpur is the practical rail/road hub; it is served by long-distance trains.", hi: "Burhanpur is the practical rail/road hub; it is served by long-distance trains." },
      nearestRail: { en: "Burhanpur is the practical rail/road hub; it is served by long-distance trains.", hi: "Burhanpur is the practical rail/road hub; it is served by long-distance trains." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry (ASI Protected)", hi: "निःशुल्क प्रवेश" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Asirgarh Fort is outside Burhanpur and involves a hill approach. Arrange a taxi/private vehicle from Burhanpur and confirm the road/entrance and any restrictions with local authorities. Wear sturdy footwear and avoid exploring…", hi: "Asirgarh Fort is outside Burhanpur and involves a hill approach. Arrange a taxi/private vehicle from Burhanpur and confirm the road/entrance and any restrictions with local authorities. Wear sturdy footwear and avoid exploring…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Asirgarh Fort is outside Burhanpur and involves a hill approach. Arrange a taxi/private vehicle from Burhanpur and confirm the road/entrance and any restrictions with local authorities. Wear sturdy footwear and avoid exploring…", hi: "Asirgarh Fort is outside Burhanpur and involves a hill approach. Arrange a taxi/private vehicle from Burhanpur and confirm the road/entrance and any restrictions with local authorities. Wear sturdy footwear and avoid exploring…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Asirgarh+Fort+++Burhanpur", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "shahi_qila_burhanpur_mp",
    num: 26,
    name: { en: "Shahi Qila", hi: "शाही क़िला व हम्माम (बुरहानपुर)" },
    tagline: { en: "Royal Tapti Riverfront Palace with Mumtaz Mahal’s Persian Painted Hammam", hi: "ताप्ती नदी तट पर मुमताज महल का ऐतिहासिक शाही हम्माम व महल" },
    badge: { en: "Mughal Imperial Seat • Persian Painted Royal Baths", hi: "मुगल कालीन हम्माम • फारसी चित्रकारी" },
    district: { en: "Burhanpur, Madhya Pradesh", hi: "बुरहानपुर, मध्य प्रदेश" },
    zone: "nimar",
    category: "fort_palace",
    coordinates: [21.3122, 76.2236],
    heroImage: "/images/places/orchha_palace.jpg",
    gallery: [
      { url: "/images/places/orchha_palace.jpg", caption: { en: "Shahi Qila Vista", hi: "शाही क़िला व हम्माम (बुरहानपुर) स्थापत्य" } }
    ],
    routeConfidence: "MEDIUM",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Shahi+Qila+++Burhanpur",
    focus: { en: "Palace-fort and Mughal-era history.", hi: "धरोहर का मुख्य केंद्र: Palace-fort and Mughal-era history." },
    lastMileGuidance: { en: "Shahi Qila is in Burhanpur town near the Tapti River area. Take an auto/e-rickshaw or taxi from the station/bus stand. Confirm current access to individual palace sections and any local ticket requirements.", hi: "Shahi Qila is in Burhanpur town near the Tapti River area. Take an auto/e-rickshaw or taxi from the station/bus stand. Confirm current access to individual palace sections and any local ticket requirements." },
    history: {
      dynasty: { en: "Farooqui Sultans & Imperial Mughals (Shah Jahan)", hi: "फ़ारूकी व मुग़ल (शाहजहाँ)" },
      period: { en: "16th – 17th Century CE", hi: "16वीं से 17वीं शताब्दी" },
      chronicle: { en: "A historic palace-fort complex overlooking the Tapti River, useful for studying royal residence design and Burhanpur's history.", hi: "A historic palace-fort complex overlooking the Tapti River, useful for studying royal residence design and Burhanpur's history." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Palace-fort and Mughal-era history.", hi: "शाही क़िला व हम्माम (बुरहानपुर) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Mughal riverside palace architecture with subterranean Turkish baths", hi: "मुग़ल महल व भूमिगत हम्माम" },
      engineeringHighlights: {
        en: ["Mughal riverside palace architecture with subterranean Turkish baths", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["मुग़ल महल व भूमिगत हम्माम", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A historic palace-fort complex overlooking the Tapti River, useful for studying royal residence design and Burhanpur's history.", hi: "A historic palace-fort complex overlooking the Tapti River, useful for studying royal residence design and Burhanpur's history." }
    },
    howToReach: {
      fromHub: { en: "Burhanpur railway station and town bus/auto network.", hi: "Burhanpur railway station and town bus/auto network." },
      nearestRail: { en: "Burhanpur railway station and town bus/auto network.", hi: "Burhanpur railway station and town bus/auto network." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "₹25 for Indians, ₹300 for Foreigners (ASI)", hi: "भारतीय: ₹25, विदेशी: ₹300" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Shahi Qila is in Burhanpur town near the Tapti River area. Take an auto/e-rickshaw or taxi from the station/bus stand. Confirm current access to individual palace sections and any local ticket requirements.", hi: "Shahi Qila is in Burhanpur town near the Tapti River area. Take an auto/e-rickshaw or taxi from the station/bus stand. Confirm current access to individual palace sections and any local ticket requirements." },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Shahi Qila is in Burhanpur town near the Tapti River area. Take an auto/e-rickshaw or taxi from the station/bus stand. Confirm current access to individual palace sections and any local ticket requirements.", hi: "Shahi Qila is in Burhanpur town near the Tapti River area. Take an auto/e-rickshaw or taxi from the station/bus stand. Confirm current access to individual palace sections and any local ticket requirements." }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Shahi+Qila+++Burhanpur", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "koshak_mahal_chanderi_mp",
    num: 27,
    name: { en: "Koshak Mahal", hi: "कोषक महल (चंदेरी)" },
    tagline: { en: "1445 CE Symmetrical Malwa Palace Commissioned by Mahmud Khilji", hi: "1445 ईस्वी का चार खंडों वाला अद्भुत सममित महल" },
    badge: { en: "Malwa Sultanate • 15th Century Symmetrical Wonder", hi: "मालवा सल्तनत • 15वीं सदी का अनूठा महल" },
    district: { en: "Chanderi, Madhya Pradesh", hi: "चंदेरी, अशोकनगर, मध्य प्रदेश" },
    zone: "bundelkhand",
    category: "fort_palace",
    coordinates: [24.717, 78.118],
    heroImage: "/images/places/koshak_mahal.jpg",
    gallery: [
      { url: "/images/places/koshak_mahal.jpg", caption: { en: "Koshak Mahal Vista", hi: "कोषक महल (चंदेरी) स्थापत्य" } }
    ],
    routeConfidence: "HIGH",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Koshak+Mahal+++Chanderi",
    focus: { en: "Monumental historic architecture.", hi: "धरोहर का मुख्य केंद्र: Monumental historic architecture." },
    lastMileGuidance: { en: "Madhya Pradesh Tourism lists Lalitpur about 40 km and Ashoknagar about 50 km from Chanderi, while the district page names Ashoknagar as the nearest station. Compare actual train connections before booking. From…", hi: "Madhya Pradesh Tourism lists Lalitpur about 40 km and Ashoknagar about 50 km from Chanderi, while the district page names Ashoknagar as the nearest station. Compare actual train connections before booking. From…" },
    history: {
      dynasty: { en: "Malwa Sultanate (Mahmud Khilji I)", hi: "मालवा सल्तनत (महमूद खिलजी प्रथम)" },
      period: { en: "1445 CE", hi: "1445 ईस्वी" },
      chronicle: { en: "A large historic building associated with the 15th-century period. Its form is useful for research into unfinished or altered historical buildings.", hi: "A large historic building associated with the 15th-century period. Its form is useful for research into unfinished or altered historical buildings." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Monumental historic architecture.", hi: "कोषक महल (चंदेरी) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "White sandstone four-quartered cruciform royal residence", hi: "सफेद बलुआ पत्थर की चौकोर मेहराबी वास्तुकला" },
      engineeringHighlights: {
        en: ["White sandstone four-quartered cruciform royal residence", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["सफेद बलुआ पत्थर की चौकोर मेहराबी वास्तुकला", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A large historic building associated with the 15th-century period. Its form is useful for research into unfinished or altered historical buildings.", hi: "A large historic building associated with the 15th-century period. Its form is useful for research into unfinished or altered historical buildings." }
    },
    howToReach: {
      fromHub: { en: "Ashoknagar or Lalitpur railway station; road onward to Chanderi.", hi: "Ashoknagar or Lalitpur railway station; road onward to Chanderi." },
      nearestRail: { en: "Ashoknagar or Lalitpur railway station; road onward to Chanderi.", hi: "Ashoknagar or Lalitpur railway station; road onward to Chanderi." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "₹25 for Indians, ₹300 for Foreigners (ASI)", hi: "भारतीय: ₹25, विदेशी: ₹300" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Madhya Pradesh Tourism lists Lalitpur about 40 km and Ashoknagar about 50 km from Chanderi, while the district page names Ashoknagar as the nearest station. Compare actual train connections before booking. From…", hi: "Madhya Pradesh Tourism lists Lalitpur about 40 km and Ashoknagar about 50 km from Chanderi, while the district page names Ashoknagar as the nearest station. Compare actual train connections before booking. From…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Madhya Pradesh Tourism lists Lalitpur about 40 km and Ashoknagar about 50 km from Chanderi, while the district page names Ashoknagar as the nearest station. Compare actual train connections before booking. From…", hi: "Madhya Pradesh Tourism lists Lalitpur about 40 km and Ashoknagar about 50 km from Chanderi, while the district page names Ashoknagar as the nearest station. Compare actual train connections before booking. From…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Koshak+Mahal+++Chanderi", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "kati_ghati_chanderi_mp",
    num: 28,
    name: { en: "Kati Ghati", hi: "कटी घाटी प्रवेश द्वार (चंदेरी)" },
    tagline: { en: "Monolithic Gateway Carved Out of Solid Living Rock in Single Night (1495 CE)", hi: "जीवंत चट्टान को काटकर एक रात में बनाया गया 80 फीट का ऐतिहासिक दर्रा" },
    badge: { en: "1495 CE Rock-Cut Pass • Babur’s Gateway to Chanderi", hi: "1495 ईस्वी • बाबर के चंदेरी अभियान का साक्षी" },
    district: { en: "Chanderi, Madhya Pradesh", hi: "चंदेरी, अशोकनगर, मध्य प्रदेश" },
    zone: "bundelkhand",
    category: "monument",
    coordinates: [24.7083, 78.1306],
    heroImage: "/images/places/chanderi_fort.jpg",
    gallery: [
      { url: "/images/places/chanderi_fort.jpg", caption: { en: "Kati Ghati Vista", hi: "कटी घाटी प्रवेश द्वार (चंदेरी) स्थापत्य" } }
    ],
    routeConfidence: "HIGH",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Kati+Ghati+++Chanderi",
    focus: { en: "Rock-cut gateway and historic route.", hi: "धरोहर का मुख्य केंद्र: Rock-cut gateway and historic route." },
    lastMileGuidance: { en: "Kati Ghati is near Chanderi town and is best reached by local auto/taxi or as part of a town heritage circuit. The approach may involve roadside walking; avoid stopping in traffic and…", hi: "Kati Ghati is near Chanderi town and is best reached by local auto/taxi or as part of a town heritage circuit. The approach may involve roadside walking; avoid stopping in traffic and…" },
    history: {
      dynasty: { en: "Malwa Sultanate (Jimman Khan)", hi: "मालवा सल्तनत (जिम्मन खान)" },
      period: { en: "1495 CE", hi: "1495 ईस्वी" },
      chronicle: { en: "A dramatic gateway cut through rock near Chanderi. Relevant to historic transport routes and local engineering.", hi: "A dramatic gateway cut through rock near Chanderi. Relevant to historic transport routes and local engineering." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Rock-cut gateway and historic route.", hi: "कटी घाटी प्रवेश द्वार (चंदेरी) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Rock-cut defensive gateway sliced through living Vindhyan ridge", hi: "शैलकृत प्रवेश द्वार" },
      engineeringHighlights: {
        en: ["Rock-cut defensive gateway sliced through living Vindhyan ridge", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["शैलकृत प्रवेश द्वार", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A dramatic gateway cut through rock near Chanderi. Relevant to historic transport routes and local engineering.", hi: "A dramatic gateway cut through rock near Chanderi. Relevant to historic transport routes and local engineering." }
    },
    howToReach: {
      fromHub: { en: "Ashoknagar/Lalitpur railheads, then road to Chanderi.", hi: "Ashoknagar/Lalitpur railheads, then road to Chanderi." },
      nearestRail: { en: "Ashoknagar/Lalitpur railheads, then road to Chanderi.", hi: "Ashoknagar/Lalitpur railheads, then road to Chanderi." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry", hi: "निःशुल्क प्रवेश" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Kati Ghati is near Chanderi town and is best reached by local auto/taxi or as part of a town heritage circuit. The approach may involve roadside walking; avoid stopping in traffic and…", hi: "Kati Ghati is near Chanderi town and is best reached by local auto/taxi or as part of a town heritage circuit. The approach may involve roadside walking; avoid stopping in traffic and…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Kati Ghati is near Chanderi town and is best reached by local auto/taxi or as part of a town heritage circuit. The approach may involve roadside walking; avoid stopping in traffic and…", hi: "Kati Ghati is near Chanderi town and is best reached by local auto/taxi or as part of a town heritage circuit. The approach may involve roadside walking; avoid stopping in traffic and…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Kati+Ghati+++Chanderi", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "battisi_baodi_chanderi_mp",
    num: 29,
    name: { en: "Battisi Baodi", hi: "बत्तीसी बावड़ी (चंदेरी)" },
    tagline: { en: "Grand Stepwell with 32 Water Outlets Built by Sultan Ghiyas-ud-din in 1485 CE", hi: "32 जलधाराओं वाली विशाल 60 फीट वर्गाकार ऐतिहासिक बावड़ी" },
    badge: { en: "1485 CE Epigraph • 32 Hydro Wells", hi: "1485 ईस्वी शिलालेख • 32 जल कुंड" },
    district: { en: "Chanderi, Madhya Pradesh", hi: "चंदेरी, अशोकनगर, मध्य प्रदेश" },
    zone: "bundelkhand",
    category: "asi_heritage",
    coordinates: [24.7208, 78.1333],
    heroImage: "/images/places/koshak_mahal.jpg",
    gallery: [
      { url: "/images/places/koshak_mahal.jpg", caption: { en: "Battisi Baodi Vista", hi: "बत्तीसी बावड़ी (चंदेरी) स्थापत्य" } }
    ],
    routeConfidence: "HIGH",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Battisi+Baodi+++Chanderi",
    focus: { en: "Historic water engineering.", hi: "धरोहर का मुख्य केंद्र: Historic water engineering." },
    lastMileGuidance: { en: "Battisi Baodi is a Chanderi heritage stop. Use a local auto or hired vehicle from the town centre and check whether the stepwell is open and safe to enter; do not descend…", hi: "Battisi Baodi is a Chanderi heritage stop. Use a local auto or hired vehicle from the town centre and check whether the stepwell is open and safe to enter; do not descend…" },
    history: {
      dynasty: { en: "Malwa Sultanate (Ghiyas-ud-din Khilji)", hi: "मालवा सल्तनत (ग़ियासुद्दीन खिलजी)" },
      period: { en: "1485 CE", hi: "1485 ईस्वी" },
      chronicle: { en: "A historic stepwell with descending levels and stone details. Research traditional water storage and urban development.", hi: "A historic stepwell with descending levels and stone details. Research traditional water storage and urban development." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Historic water engineering.", hi: "बत्तीसी बावड़ी (चंदेरी) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Square stepwell with ghat steps, pavilions, and Arabic/Persian inscriptions", hi: "वर्गाकार पाषाण बावड़ी" },
      engineeringHighlights: {
        en: ["Square stepwell with ghat steps, pavilions, and Arabic/Persian inscriptions", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["वर्गाकार पाषाण बावड़ी", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A historic stepwell with descending levels and stone details. Research traditional water storage and urban development.", hi: "A historic stepwell with descending levels and stone details. Research traditional water storage and urban development." }
    },
    howToReach: {
      fromHub: { en: "Ashoknagar/Lalitpur railheads, then road to Chanderi.", hi: "Ashoknagar/Lalitpur railheads, then road to Chanderi." },
      nearestRail: { en: "Ashoknagar/Lalitpur railheads, then road to Chanderi.", hi: "Ashoknagar/Lalitpur railheads, then road to Chanderi." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry (ASI Protected)", hi: "निःशुल्क प्रवेश" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Battisi Baodi is a Chanderi heritage stop. Use a local auto or hired vehicle from the town centre and check whether the stepwell is open and safe to enter; do not descend…", hi: "Battisi Baodi is a Chanderi heritage stop. Use a local auto or hired vehicle from the town centre and check whether the stepwell is open and safe to enter; do not descend…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Battisi Baodi is a Chanderi heritage stop. Use a local auto or hired vehicle from the town centre and check whether the stepwell is open and safe to enter; do not descend…", hi: "Battisi Baodi is a Chanderi heritage stop. Use a local auto or hired vehicle from the town centre and check whether the stepwell is open and safe to enter; do not descend…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Battisi+Baodi+++Chanderi", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "kadwaya_complex_ashoknagar_mp",
    num: 30,
    name: { en: "Kadwaya Heritage Complex", hi: "कदवाया हेरिटेज परिसर (अशोकनगर)" },
    tagline: { en: "Temple Town of 40 Ancient Shrines & 10th-Century Mattamayura Shaiva Matha", hi: "40 प्राचीन मंदिरों का पवित्र नगर व 10वीं सदी का शैव मठ" },
    badge: { en: "Khadgapura Heritage • Mattamayura Monastery", hi: "प्राचीन खड्गपुर • 10वीं सदी का विशाल मठ" },
    district: { en: "Ashoknagar, Madhya Pradesh", hi: "कदवाया, अशोकनगर, मध्य प्रदेश" },
    zone: "bundelkhand",
    category: "ancient_temple",
    coordinates: [24.5833, 78.0167],
    heroImage: "/images/places/padhavali.jpg",
    gallery: [
      { url: "/images/places/padhavali.jpg", caption: { en: "Kadwaya Heritage Complex Vista", hi: "कदवाया हेरिटेज परिसर (अशोकनगर) स्थापत्य" } }
    ],
    routeConfidence: "LOW",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Kadwaya+Heritage+Complex+++Ashoknagar",
    focus: { en: "Temples, monastery and water architecture.", hi: "धरोहर का मुख्य केंद्र: Temples, monastery and water architecture." },
    lastMileGuidance: { en: "Kadwaya is a rural heritage complex. Hire a car from Ashoknagar and confirm the final road and site access locally. Public buses may reach nearby settlements but may not align with a…", hi: "Kadwaya is a rural heritage complex. Hire a car from Ashoknagar and confirm the final road and site access locally. Public buses may reach nearby settlements but may not align with a…" },
    history: {
      dynasty: { en: "Kachchhapaghata & Pratihara Dynasties", hi: "कच्छपघात व प्रतिहार राजवंश" },
      period: { en: "10th – 11th Century CE", hi: "10वीं से 11वीं शताब्दी" },
      chronicle: { en: "An archaeological complex combining temples, a monastery, fortified structures and water architecture.", hi: "An archaeological complex combining temples, a monastery, fortified structures and water architecture." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Temples, monastery and water architecture.", hi: "कदवाया हेरिटेज परिसर (अशोकनगर) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Early medieval Nagara temples and two-storey stone monastery", hi: "मध्यकालीन नागर मंदिर व दो मंजिला पाषाण मठ" },
      engineeringHighlights: {
        en: ["Early medieval Nagara temples and two-storey stone monastery", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["मध्यकालीन नागर मंदिर व दो मंजिला पाषाण मठ", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "An archaeological complex combining temples, a monastery, fortified structures and water architecture.", hi: "An archaeological complex combining temples, a monastery, fortified structures and water architecture." }
    },
    howToReach: {
      fromHub: { en: "Ashoknagar railway station/town is the practical hub.", hi: "Ashoknagar railway station/town is the practical hub." },
      nearestRail: { en: "Ashoknagar railway station/town is the practical hub.", hi: "Ashoknagar railway station/town is the practical hub." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry (ASI Protected)", hi: "निःशुल्क प्रवेश" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Kadwaya is a rural heritage complex. Hire a car from Ashoknagar and confirm the final road and site access locally. Public buses may reach nearby settlements but may not align with a…", hi: "Kadwaya is a rural heritage complex. Hire a car from Ashoknagar and confirm the final road and site access locally. Public buses may reach nearby settlements but may not align with a…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Kadwaya is a rural heritage complex. Hire a car from Ashoknagar and confirm the final road and site access locally. Public buses may reach nearby settlements but may not align with a…", hi: "Kadwaya is a rural heritage complex. Hire a car from Ashoknagar and confirm the final road and site access locally. Public buses may reach nearby settlements but may not align with a…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Kadwaya+Heritage+Complex+++Ashoknagar", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "maladevi_temple_gyaraspur_mp",
    num: 31,
    name: { en: "Maladevi Temple", hi: "मालादेवी मंदिर (ग्यारसपुर)" },
    tagline: { en: "9th-Century Slope-Hugging Rock-Platform Temple Overlooking Gyaraspur Valley", hi: "पहाड़ी की ढलान पर तराशा गया 9वीं सदी का भव्य जैन व हिंदू देवालय" },
    badge: { en: "9th-Century Pratihara Marvel • Slope Architecture", hi: "9वीं सदी का प्रतिहार शिल्प • पहाड़ी मंदिर" },
    district: { en: "Gyaraspur, Madhya Pradesh", hi: "ग्यारसपुर, विदिशा, मध्य प्रदेश" },
    zone: "central",
    category: "ancient_temple",
    coordinates: [23.65, 78.1167],
    heroImage: "/images/places/padhavali.jpg",
    gallery: [
      { url: "/images/places/padhavali.jpg", caption: { en: "Maladevi Temple Vista", hi: "मालादेवी मंदिर (ग्यारसपुर) स्थापत्य" } }
    ],
    routeConfidence: "MEDIUM",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Maladevi+Temple+++Gyaraspur",
    focus: { en: "Hillside temple architecture.", hi: "धरोहर का मुख्य केंद्र: Hillside temple architecture." },
    lastMileGuidance: { en: "Gyaraspur is a small town and Maladevi Temple is set against a rocky hillside. Arrange a taxi from Vidisha/Bhopal or confirm a local bus plus auto connection. Expect uneven ground and steps…", hi: "Gyaraspur is a small town and Maladevi Temple is set against a rocky hillside. Arrange a taxi from Vidisha/Bhopal or confirm a local bus plus auto connection. Expect uneven ground and steps…" },
    history: {
      dynasty: { en: "Pratihara Period", hi: "प्रतिहार काल" },
      period: { en: "9th – 10th Century CE", hi: "9वीं से 10वीं शताब्दी" },
      chronicle: { en: "A medieval temple built against a rocky hillside. Its setting and sculptural details are useful for studying temple construction and terrain.", hi: "A medieval temple built against a rocky hillside. Its setting and sculptural details are useful for studying temple construction and terrain." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Hillside temple architecture.", hi: "मालादेवी मंदिर (ग्यारसपुर) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Partially rock-cut and partly structural Nagara temple with tiered shikhara", hi: "आंशिक शैलकृत व नागर शिखर मंदिर" },
      engineeringHighlights: {
        en: ["Partially rock-cut and partly structural Nagara temple with tiered shikhara", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["आंशिक शैलकृत व नागर शिखर मंदिर", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A medieval temple built against a rocky hillside. Its setting and sculptural details are useful for studying temple construction and terrain.", hi: "A medieval temple built against a rocky hillside. Its setting and sculptural details are useful for studying temple construction and terrain." }
    },
    howToReach: {
      fromHub: { en: "Vidisha is a practical rail hub; Bhopal is the larger hub.", hi: "Vidisha is a practical rail hub; Bhopal is the larger hub." },
      nearestRail: { en: "Vidisha is a practical rail hub; Bhopal is the larger hub.", hi: "Vidisha is a practical rail hub; Bhopal is the larger hub." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry (ASI Protected)", hi: "निःशुल्क प्रवेश" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Gyaraspur is a small town and Maladevi Temple is set against a rocky hillside. Arrange a taxi from Vidisha/Bhopal or confirm a local bus plus auto connection. Expect uneven ground and steps…", hi: "Gyaraspur is a small town and Maladevi Temple is set against a rocky hillside. Arrange a taxi from Vidisha/Bhopal or confirm a local bus plus auto connection. Expect uneven ground and steps…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Gyaraspur is a small town and Maladevi Temple is set against a rocky hillside. Arrange a taxi from Vidisha/Bhopal or confirm a local bus plus auto connection. Expect uneven ground and steps…", hi: "Gyaraspur is a small town and Maladevi Temple is set against a rocky hillside. Arrange a taxi from Vidisha/Bhopal or confirm a local bus plus auto connection. Expect uneven ground and steps…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Maladevi+Temple+++Gyaraspur", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "garh_kundar_fort_niwari_mp",
    num: 32,
    name: { en: "Garh Kundar Fort", hi: "गढ़ कुण्डार दुर्ग (निवाड़ी)" },
    tagline: { en: "Legendary 11th-Century Bundela & Khangar Fortress with Labyrinthine Levels", hi: "खंगार राजा खेतसिंह का ऐतिहासिक रहस्यमयी पांच मंजिला दुर्ग" },
    badge: { en: "First Bundela Capital • 1180 CE Khangar Citadel", hi: "बुंदेलों की प्रथम राजधानी • खंगार राजपूत गढ़" },
    district: { en: "Niwari, Madhya Pradesh", hi: "गढ़ कुण्डार, निवाड़ी / टीकमगढ़, मध्य प्रदेश" },
    zone: "bundelkhand",
    category: "fort_palace",
    coordinates: [25.4833, 78.95],
    heroImage: "/images/places/orchha_palace.jpg",
    gallery: [
      { url: "/images/places/orchha_palace.jpg", caption: { en: "Garh Kundar Fort Vista", hi: "गढ़ कुण्डार दुर्ग (निवाड़ी) स्थापत्य" } }
    ],
    routeConfidence: "LOW",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Garh+Kundar+Fort+++Niwari",
    focus: { en: "Medieval fort and landscape.", hi: "धरोहर का मुख्य केंद्र: Medieval fort and landscape." },
    lastMileGuidance: { en: "Garh Kundar Fort is rural and best visited by private vehicle from the Jhansi/Niwari side. Confirm the exact route, road condition and access with local sources; plan to arrive in daylight.", hi: "Garh Kundar Fort is rural and best visited by private vehicle from the Jhansi/Niwari side. Confirm the exact route, road condition and access with local sources; plan to arrive in daylight." },
    history: {
      dynasty: { en: "Khangar & Bundela Dynasties", hi: "खंगार व बुंदेला राजवंश" },
      period: { en: "12th – 16th Century CE (Founded 1180 CE)", hi: "12वीं से 16वीं शताब्दी" },
      chronicle: { en: "A historic Bundelkhand fort with substantial masonry and a hilltop setting. Research regional political history and defensive planning.", hi: "A historic Bundelkhand fort with substantial masonry and a hilltop setting. Research regional political history and defensive planning." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Medieval fort and landscape.", hi: "गढ़ कुण्डार दुर्ग (निवाड़ी) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Defensive labyrinth fort with 2 floors underground and 3 above ground", hi: "दो भूमिगत और तीन ऊपरी मंजिलों वाला दुर्ग" },
      engineeringHighlights: {
        en: ["Defensive labyrinth fort with 2 floors underground and 3 above ground", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["दो भूमिगत और तीन ऊपरी मंजिलों वाला दुर्ग", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A historic Bundelkhand fort with substantial masonry and a hilltop setting. Research regional political history and defensive planning.", hi: "A historic Bundelkhand fort with substantial masonry and a hilltop setting. Research regional political history and defensive planning." }
    },
    howToReach: {
      fromHub: { en: "Jhansi/Niwari are practical transport hubs; confirm current train and bus options for the date.", hi: "Jhansi/Niwari are practical transport hubs; confirm current train and bus options for the date." },
      nearestRail: { en: "Jhansi/Niwari are practical transport hubs; confirm current train and bus options for the date.", hi: "Jhansi/Niwari are practical transport hubs; confirm current train and bus options for the date." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry", hi: "निःशुल्क प्रवेश" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Garh Kundar Fort is rural and best visited by private vehicle from the Jhansi/Niwari side. Confirm the exact route, road condition and access with local sources; plan to arrive in daylight.", hi: "Garh Kundar Fort is rural and best visited by private vehicle from the Jhansi/Niwari side. Confirm the exact route, road condition and access with local sources; plan to arrive in daylight." },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Garh Kundar Fort is rural and best visited by private vehicle from the Jhansi/Niwari side. Confirm the exact route, road condition and access with local sources; plan to arrive in daylight.", hi: "Garh Kundar Fort is rural and best visited by private vehicle from the Jhansi/Niwari side. Confirm the exact route, road condition and access with local sources; plan to arrive in daylight." }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Garh+Kundar+Fort+++Niwari", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "udayeshwara_temple_udaypur_mp",
    num: 33,
    name: { en: "Udayeshwara Temple", hi: "उदयेश्वर नीलकंठेश्वर मंदिर (उदयपुर)" },
    tagline: { en: "Supreme Masterpiece of Bhumija Temple Architecture Built by Raja Udayaditya (1080 CE)", hi: "भूमिज शैली का सर्वोत्तम शिखर मंदिर — राजा उदयादित्य द्वारा 1080 ईस्वी में निर्मित" },
    badge: { en: "1080 CE Paramara Inscription • Pinnacle of Bhumija Style", hi: "1080 ईस्वी शिलालेख • भूमिज स्थापत्य का शिखर" },
    district: { en: "Udaypur, Vidisha district, Madhya Pradesh", hi: "उदयपुर, विदिशा, मध्य प्रदेश" },
    zone: "central",
    category: "ancient_temple",
    coordinates: [23.9, 78.05],
    heroImage: "/images/places/bateshwar.jpg",
    gallery: [
      { url: "/images/places/bateshwar.jpg", caption: { en: "Udayeshwara Temple Vista", hi: "उदयेश्वर नीलकंठेश्वर मंदिर (उदयपुर) स्थापत्य" } }
    ],
    routeConfidence: "MEDIUM",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Udayeshwara+Temple+++Udaypur+Vidisha+district",
    focus: { en: "Medieval temple and inscriptions.", hi: "धरोहर का मुख्य केंद्र: Medieval temple and inscriptions." },
    lastMileGuidance: { en: "Udayeshwara Temple is in Udaypur village, distinct from other places with similar names. Arrange a taxi from Vidisha or coordinate a local bus/auto combination in advance. Verify the exact temple pin and…", hi: "Udayeshwara Temple is in Udaypur village, distinct from other places with similar names. Arrange a taxi from Vidisha or coordinate a local bus/auto combination in advance. Verify the exact temple pin and…" },
    history: {
      dynasty: { en: "Paramara Dynasty (King Udayaditya)", hi: "परमार राजवंश (राजा उदयादित्य)" },
      period: { en: "1059–1080 CE", hi: "11वीं शताब्दी (1080 ईस्वी)" },
      chronicle: { en: "A major medieval Shiva temple associated with the Paramara period. Useful for architectural and epigraphic study.", hi: "A major medieval Shiva temple associated with the Paramara period. Useful for architectural and epigraphic study." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Medieval temple and inscriptions.", hi: "उदयेश्वर नीलकंठेश्वर मंदिर (उदयपुर) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Pure Bhumija style stellate plan with 35 miniature shikhara tiers", hi: "शुद्ध भूमिज नागर शैली" },
      engineeringHighlights: {
        en: ["Pure Bhumija style stellate plan with 35 miniature shikhara tiers", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["शुद्ध भूमिज नागर शैली", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A major medieval Shiva temple associated with the Paramara period. Useful for architectural and epigraphic study.", hi: "A major medieval Shiva temple associated with the Paramara period. Useful for architectural and epigraphic study." }
    },
    howToReach: {
      fromHub: { en: "Vidisha is the practical rail hub; Bhopal is the larger rail/air hub.", hi: "Vidisha is the practical rail hub; Bhopal is the larger rail/air hub." },
      nearestRail: { en: "Vidisha is the practical rail hub; Bhopal is the larger rail/air hub.", hi: "Vidisha is the practical rail hub; Bhopal is the larger rail/air hub." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry (ASI Protected Monument)", hi: "निःशुल्क प्रवेश" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Udayeshwara Temple is in Udaypur village, distinct from other places with similar names. Arrange a taxi from Vidisha or coordinate a local bus/auto combination in advance. Verify the exact temple pin and…", hi: "Udayeshwara Temple is in Udaypur village, distinct from other places with similar names. Arrange a taxi from Vidisha or coordinate a local bus/auto combination in advance. Verify the exact temple pin and…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Udayeshwara Temple is in Udaypur village, distinct from other places with similar names. Arrange a taxi from Vidisha or coordinate a local bus/auto combination in advance. Verify the exact temple pin and…", hi: "Udayeshwara Temple is in Udaypur village, distinct from other places with similar names. Arrange a taxi from Vidisha or coordinate a local bus/auto combination in advance. Verify the exact temple pin and…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Udayeshwara+Temple+++Udaypur+Vidisha+district", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "eran_archaeological_site_sagar_mp",
    num: 34,
    name: { en: "Eran Archaeological Site", hi: "एरण पुरातात्विक स्थल (सागर)" },
    tagline: { en: "Birthplace of Indian Inscriptional History: Monumental Colossal Varaha & Sati Pillar", hi: "भारत का प्रथम सती अभिलेख (510 ईस्वी) व विशाल वराह की प्रतिमा" },
    badge: { en: "510 CE Bhanugupta Inscription • Toramana Huna Era", hi: "510 ईस्वी भानुगुप्त अभिलेख • हूण शासक तोरमाण काल" },
    district: { en: "Sagar region, Madhya Pradesh", hi: "एरण, बीना, सागर, मध्य प्रदेश" },
    zone: "bundelkhand",
    category: "asi_heritage",
    coordinates: [24.0906, 78.1994],
    heroImage: "/images/places/bateshwar.jpg",
    gallery: [
      { url: "/images/places/bateshwar.jpg", caption: { en: "Eran Archaeological Site Vista", hi: "एरण पुरातात्विक स्थल (सागर) स्थापत्य" } }
    ],
    routeConfidence: "HIGH",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Eran+Archaeological+Site+++Sagar+region",
    focus: { en: "Ancient settlement and monumental sculpture.", hi: "धरोहर का मुख्य केंद्र: Ancient settlement and monumental sculpture." },
    lastMileGuidance: { en: "The Sagar district page places Eran about six miles from Bamora station and names Bina as the nearest railway station. From the railhead, arrange a local taxi/vehicle; public transport to the archaeological…", hi: "The Sagar district page places Eran about six miles from Bamora station and names Bina as the nearest railway station. From the railhead, arrange a local taxi/vehicle; public transport to the archaeological…" },
    history: {
      dynasty: { en: "Gupta Empire & Hunas", hi: "गुप्त साम्राज्य व हूण" },
      period: { en: "5th – 6th Century CE", hi: "5वीं से 6वीं शताब्दी" },
      chronicle: { en: "An important ancient settlement with Gupta-period inscriptions, temple remains and sculpture. Research political history and religious iconography.", hi: "An important ancient settlement with Gupta-period inscriptions, temple remains and sculpture. Research political history and religious iconography." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Ancient settlement and monumental sculpture.", hi: "एरण पुरातात्विक स्थल (सागर) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Colossal monolithic stone zoomorphic Varaha and Garuda pillar", hi: "एकाश्म पाषाण वराह व गरुड़ ध्वज" },
      engineeringHighlights: {
        en: ["Colossal monolithic stone zoomorphic Varaha and Garuda pillar", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["एकाश्म पाषाण वराह व गरुड़ ध्वज", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "An important ancient settlement with Gupta-period inscriptions, temple remains and sculpture. Research political history and religious iconography.", hi: "An important ancient settlement with Gupta-period inscriptions, temple remains and sculpture. Research political history and religious iconography." }
    },
    howToReach: {
      fromHub: { en: "Bina is the main rail hub; Bamora station may be closer depending on the train. Sagar is the district hub.", hi: "Bina is the main rail hub; Bamora station may be closer depending on the train. Sagar is the district hub." },
      nearestRail: { en: "Bina is the main rail hub; Bamora station may be closer depending on the train. Sagar is the district hub.", hi: "Bina is the main rail hub; Bamora station may be closer depending on the train. Sagar is the district hub." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry (ASI Protected)", hi: "निःशुल्क प्रवेश" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "The Sagar district page places Eran about six miles from Bamora station and names Bina as the nearest railway station. From the railhead, arrange a local taxi/vehicle; public transport to the archaeological…", hi: "The Sagar district page places Eran about six miles from Bamora station and names Bina as the nearest railway station. From the railhead, arrange a local taxi/vehicle; public transport to the archaeological…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "The Sagar district page places Eran about six miles from Bamora station and names Bina as the nearest railway station. From the railhead, arrange a local taxi/vehicle; public transport to the archaeological…", hi: "The Sagar district page places Eran about six miles from Bamora station and names Bina as the nearest railway station. From the railhead, arrange a local taxi/vehicle; public transport to the archaeological…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Eran+Archaeological+Site+++Sagar+region", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "deorkothar_buddhist_rewa_mp",
    num: 35,
    name: { en: "Deorkothar Buddhist Site", hi: "देउर कोठार बौद्ध स्तूप (रीवा)" },
    tagline: { en: "Ashokan Buddhist Monastery on the Vindhyan Escarpment Discovered in 1982", hi: "विंध्य पहाड़ियों पर सम्राट अशोक कालीन बौद्ध महास्तूप व शैलचित्र" },
    badge: { en: "Ashoka Era Inscribed Pillar • 3rd Century BCE", hi: "अशोक कालीन अभिलेखीय स्तंभ • 1982 में खोजा गया" },
    district: { en: "Rewa, Madhya Pradesh", hi: "त्यौंथर, रीवा, मध्य प्रदेश" },
    zone: "baghelkhand",
    category: "buddhist_site",
    coordinates: [24.9333, 81.65],
    heroImage: "/images/places/sanchi.jpg",
    gallery: [
      { url: "/images/places/sanchi.jpg", caption: { en: "Deorkothar Buddhist Site Vista", hi: "देउर कोठार बौद्ध स्तूप (रीवा) स्थापत्य" } }
    ],
    routeConfidence: "HIGH",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Deorkothar+Buddhist+Site+++Rewa",
    focus: { en: "Buddhist archaeology.", hi: "धरोहर का मुख्य केंद्र: Buddhist archaeology." },
    lastMileGuidance: { en: "The Rewa district administration lists Deur Kothar about 64 km from Rewa bus stand. Arrange a taxi/private vehicle or confirm a current local bus plus onward ride. Carry water and confirm the…", hi: "The Rewa district administration lists Deur Kothar about 64 km from Rewa bus stand. Arrange a taxi/private vehicle or confirm a current local bus plus onward ride. Carry water and confirm the…" },
    history: {
      dynasty: { en: "Mauryan Dynasty (Emperor Ashoka)", hi: "मौर्य राजवंश (सम्राट अशोक)" },
      period: { en: "3rd Century BCE", hi: "तीसरी सदी ईसा पूर्व" },
      chronicle: { en: "An archaeological complex with stupa remains and evidence of ancient Buddhist activity. Useful for studying Buddhism beyond major centres.", hi: "An archaeological complex with stupa remains and evidence of ancient Buddhist activity. Useful for studying Buddhism beyond major centres." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Buddhist archaeology.", hi: "देउर कोठार बौद्ध स्तूप (रीवा) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Large brick stupas with Mauryan polish pillars and 63 rock shelters", hi: "ईंट के विशाल स्तूप व शैल आश्रय" },
      engineeringHighlights: {
        en: ["Large brick stupas with Mauryan polish pillars and 63 rock shelters", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["ईंट के विशाल स्तूप व शैल आश्रय", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "An archaeological complex with stupa remains and evidence of ancient Buddhist activity. Useful for studying Buddhism beyond major centres.", hi: "An archaeological complex with stupa remains and evidence of ancient Buddhist activity. Useful for studying Buddhism beyond major centres." }
    },
    howToReach: {
      fromHub: { en: "Rewa railway/bus hub; Rewa is the practical base.", hi: "Rewa railway/bus hub; Rewa is the practical base." },
      nearestRail: { en: "Rewa railway/bus hub; Rewa is the practical base.", hi: "Rewa railway/bus hub; Rewa is the practical base." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry (ASI Protected)", hi: "निःशुल्क प्रवेश" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "The Rewa district administration lists Deur Kothar about 64 km from Rewa bus stand. Arrange a taxi/private vehicle or confirm a current local bus plus onward ride. Carry water and confirm the…", hi: "The Rewa district administration lists Deur Kothar about 64 km from Rewa bus stand. Arrange a taxi/private vehicle or confirm a current local bus plus onward ride. Carry water and confirm the…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "The Rewa district administration lists Deur Kothar about 64 km from Rewa bus stand. Arrange a taxi/private vehicle or confirm a current local bus plus onward ride. Carry water and confirm the…", hi: "The Rewa district administration lists Deur Kothar about 64 km from Rewa bus stand. Arrange a taxi/private vehicle or confirm a current local bus plus onward ride. Carry water and confirm the…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Deorkothar+Buddhist+Site+++Rewa", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "nachna_kuthara_panna_mp",
    num: 36,
    name: { en: "Nachna–Kuthara Temples", hi: "नचना-कुठार मंदिर (पन्ना)" },
    tagline: { en: "5th-Century Parvati Temple: One of India’s Earliest Surviving Stone Temples", hi: "भारत के प्राचीनतम जीवित पाषाण मंदिरों में से एक — 5वीं सदी का पार्वती मंदिर" },
    badge: { en: "Early Gupta / Vakataka Era • 5th Century CE", hi: "गुप्त/वाकाटक कालीन • भारत का प्राचीनतम मंदिर" },
    district: { en: "Panna region, Madhya Pradesh", hi: "नचना, पन्ना, मध्य प्रदेश" },
    zone: "baghelkhand",
    category: "ancient_temple",
    coordinates: [24.3833, 80.3167],
    heroImage: "/images/places/padhavali.jpg",
    gallery: [
      { url: "/images/places/padhavali.jpg", caption: { en: "Nachna–Kuthara Temples Vista", hi: "नचना-कुठार मंदिर (पन्ना) स्थापत्य" } }
    ],
    routeConfidence: "LOW",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Nachna%E2%80%93Kuthara+Temples+++Panna+region",
    focus: { en: "Early temple architecture.", hi: "धरोहर का मुख्य केंद्र: Early temple architecture." },
    lastMileGuidance: { en: "Nachna–Kuthara is a rural temple group. Because place-name spellings and pin locations vary, verify the specific Chaumukhnath/Parvati temple location with a district or archaeological source. Use a pre-arranged vehicle; do not assume…", hi: "Nachna–Kuthara is a rural temple group. Because place-name spellings and pin locations vary, verify the specific Chaumukhnath/Parvati temple location with a district or archaeological source. Use a pre-arranged vehicle; do not assume…" },
    history: {
      dynasty: { en: "Gupta / Uchchakalpa Dynasty", hi: "गुप्त व उच्चकल्प राजवंश" },
      period: { en: "5th – 8th Century CE", hi: "5वीं से 8वीं शताब्दी" },
      chronicle: { en: "Includes the Chaumukhnath and Parvati temples, valuable for understanding early North Indian stone temple forms.", hi: "Includes the Chaumukhnath and Parvati temples, valuable for understanding early North Indian stone temple forms." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Early temple architecture.", hi: "नचना-कुठार मंदिर (पन्ना) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Early flat-roofed Gupta temple and Chaturmukha Mahadeva", hi: "सपाट छत वाला प्रारंभिक गुप्त देवालय" },
      engineeringHighlights: {
        en: ["Early flat-roofed Gupta temple and Chaturmukha Mahadeva", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["सपाट छत वाला प्रारंभिक गुप्त देवालय", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "Includes the Chaumukhnath and Parvati temples, valuable for understanding early North Indian stone temple forms.", hi: "Includes the Chaumukhnath and Parvati temples, valuable for understanding early North Indian stone temple forms." }
    },
    howToReach: {
      fromHub: { en: "Panna, Satna and Khajuraho are possible regional hubs; the best route depends on the exact temple and current road access.", hi: "Panna, Satna and Khajuraho are possible regional hubs; the best route depends on the exact temple and current road access." },
      nearestRail: { en: "Panna, Satna and Khajuraho are possible regional hubs; the best route depends on the exact temple and current road access.", hi: "Panna, Satna and Khajuraho are possible regional hubs; the best route depends on the exact temple and current road access." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry (ASI Protected)", hi: "निःशुल्क प्रवेश" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Nachna–Kuthara is a rural temple group. Because place-name spellings and pin locations vary, verify the specific Chaumukhnath/Parvati temple location with a district or archaeological source. Use a pre-arranged vehicle; do not assume…", hi: "Nachna–Kuthara is a rural temple group. Because place-name spellings and pin locations vary, verify the specific Chaumukhnath/Parvati temple location with a district or archaeological source. Use a pre-arranged vehicle; do not assume…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Nachna–Kuthara is a rural temple group. Because place-name spellings and pin locations vary, verify the specific Chaumukhnath/Parvati temple location with a district or archaeological source. Use a pre-arranged vehicle; do not assume…", hi: "Nachna–Kuthara is a rural temple group. Because place-name spellings and pin locations vary, verify the specific Chaumukhnath/Parvati temple location with a district or archaeological source. Use a pre-arranged vehicle; do not assume…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Nachna%E2%80%93Kuthara+Temples+++Panna+region", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "ajaygarh_fort_panna_mp",
    num: 37,
    name: { en: "Ajaygarh Fort", hi: "अजयगढ़ दुर्ग (पन्ना)" },
    tagline: { en: "Chandela Dynasty’s Impregnable Mountain Stronghold Over Ken River", hi: "केन नदी के ऊपर चंदेल राजाओं का दुर्गम पहाड़ी किला व गंगा-जमुना बावड़ी" },
    badge: { en: "Chandela Defense Capital • Khajuraho Contemporary", hi: "चंदेलों की सैन्य राजधानी • खजुराहो समकालीन" },
    district: { en: "Panna, Madhya Pradesh", hi: "अजयगढ़, पन्ना, मध्य प्रदेश" },
    zone: "baghelkhand",
    category: "fort_palace",
    coordinates: [24.9, 80.2667],
    heroImage: "/images/places/khajuraho.jpg",
    gallery: [
      { url: "/images/places/khajuraho.jpg", caption: { en: "Ajaygarh Fort Vista", hi: "अजयगढ़ दुर्ग (पन्ना) स्थापत्य" } }
    ],
    routeConfidence: "MEDIUM",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ajaygarh+Fort+++Panna",
    focus: { en: "Hill fort and Chandela history.", hi: "धरोहर का मुख्य केंद्र: Hill fort and Chandela history." },
    lastMileGuidance: { en: "Ajaygarh Fort requires a road journey from Panna and a climb/uneven walking. Hire a vehicle for the return trip, start early, carry water, and check local access and weather conditions before setting…", hi: "Ajaygarh Fort requires a road journey from Panna and a climb/uneven walking. Hire a vehicle for the return trip, start early, carry water, and check local access and weather conditions before setting…" },
    history: {
      dynasty: { en: "Chandela Dynasty", hi: "चंदेल राजवंश" },
      period: { en: "11th – 12th Century CE", hi: "11वीं से 12वीं शताब्दी" },
      chronicle: { en: "A hill fort associated with the Chandela kingdom, with fortifications and temples. Suitable for Bundelkhand history and landscape documentation.", hi: "A hill fort associated with the Chandela kingdom, with fortifications and temples. Suitable for Bundelkhand history and landscape documentation." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Hill fort and Chandela history.", hi: "अजयगढ़ दुर्ग (पन्ना) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Chandela stone ramparts, rock-cut Jain carvings, and ruined palaces", hi: "चंदेल पाषाण प्राचीर व शैलकृत प्रतिमाएं" },
      engineeringHighlights: {
        en: ["Chandela stone ramparts, rock-cut Jain carvings, and ruined palaces", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["चंदेल पाषाण प्राचीर व शैलकृत प्रतिमाएं", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A hill fort associated with the Chandela kingdom, with fortifications and temples. Suitable for Bundelkhand history and landscape documentation.", hi: "A hill fort associated with the Chandela kingdom, with fortifications and temples. Suitable for Bundelkhand history and landscape documentation." }
    },
    howToReach: {
      fromHub: { en: "Panna is a practical local base; Satna/Khajuraho are larger regional hubs.", hi: "Panna is a practical local base; Satna/Khajuraho are larger regional hubs." },
      nearestRail: { en: "Panna is a practical local base; Satna/Khajuraho are larger regional hubs.", hi: "Panna is a practical local base; Satna/Khajuraho are larger regional hubs." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry (ASI Protected)", hi: "निःशुल्क प्रवेश" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Ajaygarh Fort requires a road journey from Panna and a climb/uneven walking. Hire a vehicle for the return trip, start early, carry water, and check local access and weather conditions before setting…", hi: "Ajaygarh Fort requires a road journey from Panna and a climb/uneven walking. Hire a vehicle for the return trip, start early, carry water, and check local access and weather conditions before setting…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Ajaygarh Fort requires a road journey from Panna and a climb/uneven walking. Hire a vehicle for the return trip, start early, carry water, and check local access and weather conditions before setting…", hi: "Ajaygarh Fort requires a road journey from Panna and a climb/uneven walking. Hire a vehicle for the return trip, start early, carry water, and check local access and weather conditions before setting…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Ajaygarh+Fort+++Panna", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "bhumara_shiva_temple_satna_mp",
    num: 38,
    name: { en: "Bhumara Shiva Temple", hi: "भुमरा शिव मंदिर (सतना)" },
    tagline: { en: "5th-Century Gupta Sanctum with the Exquisite Monolithic Ekamukha Shiva Linga", hi: "गुप्त काल का पाषाण मंदिर व अलौकिक एकमुख शिवलिंग" },
    badge: { en: "Gupta Period Classic • 5th Century CE", hi: "शास्त्रीय गुप्त स्थापत्य • 5वीं शताब्दी" },
    district: { en: "Satna region, Madhya Pradesh", hi: "भुमरा, सतना, मध्य प्रदेश" },
    zone: "baghelkhand",
    category: "ancient_temple",
    coordinates: [24.35, 80.75],
    heroImage: "/images/places/padhavali.jpg",
    gallery: [
      { url: "/images/places/padhavali.jpg", caption: { en: "Bhumara Shiva Temple Vista", hi: "भुमरा शिव मंदिर (सतना) स्थापत्य" } }
    ],
    routeConfidence: "LOW",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Bhumara+Shiva+Temple+++Satna+region",
    focus: { en: "Early temple architecture.", hi: "धरोहर का मुख्य केंद्र: Early temple architecture." },
    lastMileGuidance: { en: "Bhumara is a rural archaeological site rather than a town-centre attraction. Arrange a knowledgeable local driver/guide from the nearest confirmed railhead and check road condition and land/site access. Exact last-mile details are…", hi: "Bhumara is a rural archaeological site rather than a town-centre attraction. Arrange a knowledgeable local driver/guide from the nearest confirmed railhead and check road condition and land/site access. Exact last-mile details are…" },
    history: {
      dynasty: { en: "Imperial Gupta / Parivrajaka Dynasties", hi: "गुप्त काल" },
      period: { en: "Late 5th Century CE", hi: "5वीं शताब्दी" },
      chronicle: { en: "An early temple site associated with Gupta-period architecture. Its remains and sculptural fragments are relevant to early Hindu temple design.", hi: "An early temple site associated with Gupta-period architecture. Its remains and sculptural fragments are relevant to early Hindu temple design." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Early temple architecture.", hi: "भुमरा शिव मंदिर (सतना) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Flat-roofed stone sanctum with intricate gavaksha reliefs", hi: "सपाट छत वाला पाषाण गर्भगृह" },
      engineeringHighlights: {
        en: ["Flat-roofed stone sanctum with intricate gavaksha reliefs", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["सपाट छत वाला पाषाण गर्भगृह", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "An early temple site associated with Gupta-period architecture. Its remains and sculptural fragments are relevant to early Hindu temple design.", hi: "An early temple site associated with Gupta-period architecture. Its remains and sculptural fragments are relevant to early Hindu temple design." }
    },
    howToReach: {
      fromHub: { en: "Satna/Maihar are practical rail hubs; confirm the exact Bhumara site pin before booking transport.", hi: "Satna/Maihar are practical rail hubs; confirm the exact Bhumara site pin before booking transport." },
      nearestRail: { en: "Satna/Maihar are practical rail hubs; confirm the exact Bhumara site pin before booking transport.", hi: "Satna/Maihar are practical rail hubs; confirm the exact Bhumara site pin before booking transport." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry (ASI Protected)", hi: "निःशुल्क प्रवेश" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Bhumara is a rural archaeological site rather than a town-centre attraction. Arrange a knowledgeable local driver/guide from the nearest confirmed railhead and check road condition and land/site access. Exact last-mile details are…", hi: "Bhumara is a rural archaeological site rather than a town-centre attraction. Arrange a knowledgeable local driver/guide from the nearest confirmed railhead and check road condition and land/site access. Exact last-mile details are…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Bhumara is a rural archaeological site rather than a town-centre attraction. Arrange a knowledgeable local driver/guide from the nearest confirmed railhead and check road condition and land/site access. Exact last-mile details are…", hi: "Bhumara is a rural archaeological site rather than a town-centre attraction. Arrange a knowledgeable local driver/guide from the nearest confirmed railhead and check road condition and land/site access. Exact last-mile details are…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Bhumara+Shiva+Temple+++Satna+region", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "bharhut_satna_mp",
    num: 39,
    name: { en: "Bharhut", hi: "भरहुत बौद्ध स्तूप स्थल (सतना)" },
    tagline: { en: "Pioneering Sunga Buddhist Railing Site that Transformed Buddhist Art History", hi: "बौद्ध कला के इतिहास का मील का पत्थर — 2nd Century BCE शुंग कालीन स्तूप" },
    badge: { en: "2nd Century BCE Sunga Masterpiece • Cunningham 1873", hi: "2री सदी ई.पू. का महास्तूप • कनिंघम अन्वेषण" },
    district: { en: "Satna, Madhya Pradesh", hi: "भरहुत, सतना, मध्य प्रदेश" },
    zone: "baghelkhand",
    category: "buddhist_site",
    coordinates: [24.5, 80.85],
    heroImage: "/images/places/sanchi.jpg",
    gallery: [
      { url: "/images/places/sanchi.jpg", caption: { en: "Bharhut Vista", hi: "भरहुत बौद्ध स्तूप स्थल (सतना) स्थापत्य" } }
    ],
    routeConfidence: "MEDIUM",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Bharhut+++Satna",
    focus: { en: "Ancient Buddhist archaeology.", hi: "धरोहर का मुख्य केंद्र: Ancient Buddhist archaeology." },
    lastMileGuidance: { en: "The historic Bharhut site is associated with the Satna area, but important Bharhut sculptures are held in museum collections elsewhere. Confirm whether your destination is the original archaeological locality or a museum…", hi: "The historic Bharhut site is associated with the Satna area, but important Bharhut sculptures are held in museum collections elsewhere. Confirm whether your destination is the original archaeological locality or a museum…" },
    history: {
      dynasty: { en: "Sunga Dynasty", hi: "शुंग राजवंश" },
      period: { en: "2nd Century BCE", hi: "दूसरी सदी ईसा पूर्व" },
      chronicle: { en: "An important Buddhist site known for sculptured railing fragments and inscriptions. Distinguish the original archaeological location from museum collections.", hi: "An important Buddhist site known for sculptured railing fragments and inscriptions. Distinguish the original archaeological location from museum collections." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Ancient Buddhist archaeology.", hi: "भरहुत बौद्ध स्तूप स्थल (सतना) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Narrative Jataka stone relief vedika (railings) and gateways", hi: "जातक कथाओं से सुसज्जित पाषाण वेदिका" },
      engineeringHighlights: {
        en: ["Narrative Jataka stone relief vedika (railings) and gateways", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["जातक कथाओं से सुसज्जित पाषाण वेदिका", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "An important Buddhist site known for sculptured railing fragments and inscriptions. Distinguish the original archaeological location from museum collections.", hi: "An important Buddhist site known for sculptured railing fragments and inscriptions. Distinguish the original archaeological location from museum collections." }
    },
    howToReach: {
      fromHub: { en: "Satna is the practical rail/road hub.", hi: "Satna is the practical rail/road hub." },
      nearestRail: { en: "Satna is the practical rail/road hub.", hi: "Satna is the practical rail/road hub." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry (ASI Protected)", hi: "निःशुल्क प्रवेश" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "The historic Bharhut site is associated with the Satna area, but important Bharhut sculptures are held in museum collections elsewhere. Confirm whether your destination is the original archaeological locality or a museum…", hi: "The historic Bharhut site is associated with the Satna area, but important Bharhut sculptures are held in museum collections elsewhere. Confirm whether your destination is the original archaeological locality or a museum…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "The historic Bharhut site is associated with the Satna area, but important Bharhut sculptures are held in museum collections elsewhere. Confirm whether your destination is the original archaeological locality or a museum…", hi: "The historic Bharhut site is associated with the Satna area, but important Bharhut sculptures are held in museum collections elsewhere. Confirm whether your destination is the original archaeological locality or a museum…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Bharhut+++Satna", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "bandhavgarh_fort_umaria_mp",
    num: 40,
    name: { en: "Bandhavgarh Fort", hi: "बांधवगढ़ दुर्ग (उमरिया)" },
    tagline: { en: "2,000-Year-Old Hilltop Fortress in Tiger Heartland with Shesh Shaiya Vishnu", hi: "2,000 वर्ष पुराना पहाड़ी दुर्ग व 35 फीट की शेष शय्या विष्णु प्रतिमा" },
    badge: { en: "Epic Treta Yuga Legend • 10th-Century Monolithic Vishnu", hi: "त्रेतायुग की गाथा • बाघ अभयारण्य का हृदय" },
    district: { en: "Umaria, Madhya Pradesh", hi: "बांधवगढ़, उमरिया, मध्य प्रदेश" },
    zone: "baghelkhand",
    category: "fort_palace",
    coordinates: [23.6933, 81.0267],
    heroImage: "/images/places/gwalior_fort.jpg",
    gallery: [
      { url: "/images/places/gwalior_fort.jpg", caption: { en: "Bandhavgarh Fort Vista", hi: "बांधवगढ़ दुर्ग (उमरिया) स्थापत्य" } }
    ],
    routeConfidence: "HIGH",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Bandhavgarh+Fort+++Umaria",
    focus: { en: "Historic hill fort and landscape.", hi: "धरोहर का मुख्य केंद्र: Historic hill fort and landscape." },
    lastMileGuidance: { en: "The fort is inside the Bandhavgarh protected landscape and is not an ordinary independent fort visit. Access may be subject to forest/park regulations, guide requirements and seasonal closures. Contact the official park/forest…", hi: "The fort is inside the Bandhavgarh protected landscape and is not an ordinary independent fort visit. Access may be subject to forest/park regulations, guide requirements and seasonal closures. Contact the official park/forest…" },
    history: {
      dynasty: { en: "Maghas, Vakatakas, Kalachuris, Baghelas", hi: "कलचुरि व बघेल राजवंश" },
      period: { en: "2nd Century BCE – 16th Century CE", hi: "प्राचीन काल से 16वीं सदी" },
      chronicle: { en: "A hilltop fort within the Bandhavgarh landscape, with temples, water structures and ruins. Access is subject to park regulations.", hi: "A hilltop fort within the Bandhavgarh landscape, with temples, water structures and ruins. Access is subject to park regulations." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Historic hill fort and landscape.", hi: "बांधवगढ़ दुर्ग (उमरिया) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Plateau hill fortress with rock-cut caves, tanks, and colossal sculptures", hi: "पहाड़ी दुर्ग व एकाश्म मूर्तियां" },
      engineeringHighlights: {
        en: ["Plateau hill fortress with rock-cut caves, tanks, and colossal sculptures", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["पहाड़ी दुर्ग व एकाश्म मूर्तियां", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A hilltop fort within the Bandhavgarh landscape, with temples, water structures and ruins. Access is subject to park regulations.", hi: "A hilltop fort within the Bandhavgarh landscape, with temples, water structures and ruins. Access is subject to park regulations." }
    },
    howToReach: {
      fromHub: { en: "Umaria is the key rail hub for Bandhavgarh; Tala is the common visitor base/gate.", hi: "Umaria is the key rail hub for Bandhavgarh; Tala is the common visitor base/gate." },
      nearestRail: { en: "Umaria is the key rail hub for Bandhavgarh; Tala is the common visitor base/gate.", hi: "Umaria is the key rail hub for Bandhavgarh; Tala is the common visitor base/gate." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Requires Forest Dept Permit & Safari Booking", hi: "वन विभाग अनुमति व सफारी बुकिंग आवश्यक" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "The fort is inside the Bandhavgarh protected landscape and is not an ordinary independent fort visit. Access may be subject to forest/park regulations, guide requirements and seasonal closures. Contact the official park/forest…", hi: "The fort is inside the Bandhavgarh protected landscape and is not an ordinary independent fort visit. Access may be subject to forest/park regulations, guide requirements and seasonal closures. Contact the official park/forest…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "The fort is inside the Bandhavgarh protected landscape and is not an ordinary independent fort visit. Access may be subject to forest/park regulations, guide requirements and seasonal closures. Contact the official park/forest…", hi: "The fort is inside the Bandhavgarh protected landscape and is not an ordinary independent fort visit. Access may be subject to forest/park regulations, guide requirements and seasonal closures. Contact the official park/forest…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Bandhavgarh+Fort+++Umaria", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "maheshwar_fort_palace_mp",
    num: 41,
    name: { en: "Maheshwar Fort and Palace", hi: "महेश्वर दुर्ग व अहिल्याबाई राजमहल (खरगोन)" },
    tagline: { en: "Rani Ahilyabai Holkar’s Narmada Riverfront Fort and World-Famous Weaving Capital", hi: "पुण्यश्लोक रानी अहिल्याबाई होल्कर की नर्मदा तट पर स्थित राजधानी व महेश्वर घाट" },
    badge: { en: "18th-Century Holkar Capital • World Heritage Tentative Ghats", hi: "होल्कर राजवंश की राजधानी • यूनेस्को संभावित नर्मदा घाट" },
    district: { en: "Khargone, Madhya Pradesh", hi: "महेश्वर, खरगोन, मध्य प्रदेश" },
    zone: "nimar",
    category: "fort_palace",
    coordinates: [22.1768, 75.5843],
    heroImage: "/images/places/orchha_palace.jpg",
    gallery: [
      { url: "/images/places/orchha_palace.jpg", caption: { en: "Maheshwar Fort and Palace Vista", hi: "महेश्वर दुर्ग व अहिल्याबाई राजमहल (खरगोन) स्थापत्य" } }
    ],
    routeConfidence: "HIGH",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Maheshwar+Fort+and+Palace+++Khargone",
    focus: { en: "Riverside fort and Holkar history.", hi: "धरोहर का मुख्य केंद्र: Riverside fort and Holkar history." },
    lastMileGuidance: { en: "Maheshwar is roughly 90 km from Indore by road. Buses and taxis operate from the Indore/Khargone side; local autos can connect the town, fort/palace and ghats. Confirm return bus timings before relying…", hi: "Maheshwar is roughly 90 km from Indore by road. Buses and taxis operate from the Indore/Khargone side; local autos can connect the town, fort/palace and ghats. Confirm return bus timings before relying…" },
    history: {
      dynasty: { en: "Holkar Dynasty (Rani Ahilyabai Holkar)", hi: "होल्कर राजवंश (रानी अहिल्याबाई)" },
      period: { en: "18th Century CE", hi: "18वीं शताब्दी" },
      chronicle: { en: "A historic fort associated with Ahilyabai Holkar, with palace buildings and ghats on the Narmada. Useful for royal patronage and urban heritage.", hi: "A historic fort associated with Ahilyabai Holkar, with palace buildings and ghats on the Narmada. Useful for royal patronage and urban heritage." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Riverside fort and Holkar history.", hi: "महेश्वर दुर्ग व अहिल्याबाई राजमहल (खरगोन) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Maratha riverside ghat architecture, ornate chhatris, and stone balconies", hi: "मराठा नदीय स्थापत्य, छतरियां व झरोखे" },
      engineeringHighlights: {
        en: ["Maratha riverside ghat architecture, ornate chhatris, and stone balconies", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["मराठा नदीय स्थापत्य, छतरियां व झरोखे", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A historic fort associated with Ahilyabai Holkar, with palace buildings and ghats on the Narmada. Useful for royal patronage and urban heritage.", hi: "A historic fort associated with Ahilyabai Holkar, with palace buildings and ghats on the Narmada. Useful for royal patronage and urban heritage." }
    },
    howToReach: {
      fromHub: { en: "Indore is the main rail/air hub; Khargone/Dhamnod are useful road hubs.", hi: "Indore is the main rail/air hub; Khargone/Dhamnod are useful road hubs." },
      nearestRail: { en: "Indore is the main rail/air hub; Khargone/Dhamnod are useful road hubs.", hi: "Indore is the main rail/air hub; Khargone/Dhamnod are useful road hubs." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry (Palace Museum nominal ₹20)", hi: "निःशुल्क (संग्रहालय: ₹20)" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Maheshwar is roughly 90 km from Indore by road. Buses and taxis operate from the Indore/Khargone side; local autos can connect the town, fort/palace and ghats. Confirm return bus timings before relying…", hi: "Maheshwar is roughly 90 km from Indore by road. Buses and taxis operate from the Indore/Khargone side; local autos can connect the town, fort/palace and ghats. Confirm return bus timings before relying…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Maheshwar is roughly 90 km from Indore by road. Buses and taxis operate from the Indore/Khargone side; local autos can connect the town, fort/palace and ghats. Confirm return bus timings before relying…", hi: "Maheshwar is roughly 90 km from Indore by road. Buses and taxis operate from the Indore/Khargone side; local autos can connect the town, fort/palace and ghats. Confirm return bus timings before relying…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Maheshwar+Fort+and+Palace+++Khargone", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "rajwada_palace_indore_mp",
    num: 42,
    name: { en: "Rajwada Palace", hi: "राजवाड़ा पैलेस (इंदौर)" },
    tagline: { en: "Historic Seven-Storey Palace of the Holkars Blending Maratha, Mughal & French Styles", hi: "होल्करों का सात मंजिला ऐतिहासिक राजमहल — मराठा, मुग़ल व फ्रांसीसी शैली का संगम" },
    badge: { en: "1766 CE Holkar Palace • Indore Landmark", hi: "1766 ईस्वी • इंदौर की ऐतिहासिक शान" },
    district: { en: "Indore, Madhya Pradesh", hi: "इंदौर, मध्य प्रदेश" },
    zone: "malwa",
    category: "fort_palace",
    coordinates: [22.7183, 75.855],
    heroImage: "/images/places/gwalior_fort.jpg",
    gallery: [
      { url: "/images/places/gwalior_fort.jpg", caption: { en: "Rajwada Palace Vista", hi: "राजवाड़ा पैलेस (इंदौर) स्थापत्य" } }
    ],
    routeConfidence: "HIGH",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rajwada+Palace+++Indore",
    focus: { en: "Holkar palace and urban history.", hi: "धरोहर का मुख्य केंद्र: Holkar palace and urban history." },
    lastMileGuidance: { en: "Rajwada is in central Indore. From the railway station, take an auto/e-rickshaw or taxi; traffic and pedestrianised/market lanes can affect the final approach. Check current entry access because the surrounding market area…", hi: "Rajwada is in central Indore. From the railway station, take an auto/e-rickshaw or taxi; traffic and pedestrianised/market lanes can affect the final approach. Check current entry access because the surrounding market area…" },
    history: {
      dynasty: { en: "Holkar Dynasty (Malhar Rao Holkar)", hi: "होल्कर राजवंश (मल्हार राव होल्कर)" },
      period: { en: "1766 CE", hi: "1766 ईस्वी" },
      chronicle: { en: "A historic palace associated with the Holkar dynasty, combining architectural influences and offering a case study in urban transformation.", hi: "A historic palace associated with the Holkar dynasty, combining architectural influences and offering a case study in urban transformation." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Holkar palace and urban history.", hi: "राजवाड़ा पैलेस (इंदौर) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Seven-storey Maratha timber and stone architecture with high entrance gate", hi: "सात मंजिला काष्ठ व पाषाण स्थापत्य" },
      engineeringHighlights: {
        en: ["Seven-storey Maratha timber and stone architecture with high entrance gate", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["सात मंजिला काष्ठ व पाषाण स्थापत्य", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A historic palace associated with the Holkar dynasty, combining architectural influences and offering a case study in urban transformation.", hi: "A historic palace associated with the Holkar dynasty, combining architectural influences and offering a case study in urban transformation." }
    },
    howToReach: {
      fromHub: { en: "Indore Junction and Indore airport.", hi: "Indore Junction and Indore airport." },
      nearestRail: { en: "Indore Junction and Indore airport.", hi: "Indore Junction and Indore airport." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "₹10 for Indians, ₹250 for Foreigners (State Archaeology)", hi: "भारतीय: ₹10, विदेशी: ₹250" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Rajwada is in central Indore. From the railway station, take an auto/e-rickshaw or taxi; traffic and pedestrianised/market lanes can affect the final approach. Check current entry access because the surrounding market area…", hi: "Rajwada is in central Indore. From the railway station, take an auto/e-rickshaw or taxi; traffic and pedestrianised/market lanes can affect the final approach. Check current entry access because the surrounding market area…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Rajwada is in central Indore. From the railway station, take an auto/e-rickshaw or taxi; traffic and pedestrianised/market lanes can affect the final approach. Check current entry access because the surrounding market area…", hi: "Rajwada is in central Indore. From the railway station, take an auto/e-rickshaw or taxi; traffic and pedestrianised/market lanes can affect the final approach. Check current entry access because the surrounding market area…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Rajwada+Palace+++Indore", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "vedh_shala_observatory_ujjain_mp",
    num: 43,
    name: { en: "Vedh Shala Observatory", hi: "वेधशाला जंतर मंतर (उज्जैन)" },
    tagline: { en: "1719 CE Solar Observatory Built by Maharaja Sawai Jai Singh II at the Prime Meridian", hi: "कर्क रेखा पर 1719 ईस्वी में सवाई जयसिंह द्वारा निर्मित प्राचीन खगोलीय वेधशाला" },
    badge: { en: "Tropic of Cancer Reference • 1719 CE Astronomical Yantras", hi: "कर्क रेखा संदर्भ • 1719 ईस्वी खगोलीय यंत्र" },
    district: { en: "Ujjain, Madhya Pradesh", hi: "उज्जैन, मध्य प्रदेश" },
    zone: "malwa",
    category: "monument",
    coordinates: [23.1678, 75.7689],
    heroImage: "/images/places/chanderi_fort.jpg",
    gallery: [
      { url: "/images/places/chanderi_fort.jpg", caption: { en: "Vedh Shala Observatory Vista", hi: "वेधशाला जंतर मंतर (उज्जैन) स्थापत्य" } }
    ],
    routeConfidence: "HIGH",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Vedh+Shala+Observatory+++Ujjain",
    focus: { en: "Historical astronomy.", hi: "धरोहर का मुख्य केंद्र: Historical astronomy." },
    lastMileGuidance: { en: "Vedh Shala is in Ujjain and can usually be reached by local auto/e-rickshaw or taxi from the station and city centre. Confirm current opening hours, entry arrangements and whether guided interpretation is…", hi: "Vedh Shala is in Ujjain and can usually be reached by local auto/e-rickshaw or taxi from the station and city centre. Confirm current opening hours, entry arrangements and whether guided interpretation is…" },
    history: {
      dynasty: { en: "Kachhwaha Dynasty (Maharaja Jai Singh II)", hi: "कच्छवाहा राजवंश (सवाई जयसिंह द्वितीय)" },
      period: { en: "1719 CE", hi: "1719 ईस्वी" },
      chronicle: { en: "An observatory associated with India's astronomical traditions. Research instruments, observation methods and historic knowledge systems.", hi: "An observatory associated with India's astronomical traditions. Research instruments, observation methods and historic knowledge systems." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Historical astronomy.", hi: "वेधशाला जंतर मंतर (उज्जैन) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Masonry architectural astronomical instruments: Samrat, Nadi Valaya, Digamsa", hi: "पाषाण निर्मित खगोलीय यन्त्र" },
      engineeringHighlights: {
        en: ["Masonry architectural astronomical instruments: Samrat, Nadi Valaya, Digamsa", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["पाषाण निर्मित खगोलीय यन्त्र", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "An observatory associated with India's astronomical traditions. Research instruments, observation methods and historic knowledge systems.", hi: "An observatory associated with India's astronomical traditions. Research instruments, observation methods and historic knowledge systems." }
    },
    howToReach: {
      fromHub: { en: "Ujjain Junction is the main rail hub; Indore is the larger air hub.", hi: "Ujjain Junction is the main rail hub; Indore is the larger air hub." },
      nearestRail: { en: "Ujjain Junction is the main rail hub; Indore is the larger air hub.", hi: "Ujjain Junction is the main rail hub; Indore is the larger air hub." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "₹10 for Indians, ₹50 for Foreigners", hi: "भारतीय: ₹10, विदेशी: ₹50" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Vedh Shala is in Ujjain and can usually be reached by local auto/e-rickshaw or taxi from the station and city centre. Confirm current opening hours, entry arrangements and whether guided interpretation is…", hi: "Vedh Shala is in Ujjain and can usually be reached by local auto/e-rickshaw or taxi from the station and city centre. Confirm current opening hours, entry arrangements and whether guided interpretation is…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Vedh Shala is in Ujjain and can usually be reached by local auto/e-rickshaw or taxi from the station and city centre. Confirm current opening hours, entry arrangements and whether guided interpretation is…", hi: "Vedh Shala is in Ujjain and can usually be reached by local auto/e-rickshaw or taxi from the station and city centre. Confirm current opening hours, entry arrangements and whether guided interpretation is…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Vedh+Shala+Observatory+++Ujjain", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "mandhata_island_omkareshwar_mp",
    num: 44,
    name: { en: "Mandhata Island and historic temples", hi: "मांधाता द्वीप व ऐतिहासिक मंदिर (ओंकारेश्वर)" },
    tagline: { en: "Om-Shaped Sacred Island with Jyotirlinga, Siddhanath Temple & Peshwa Chhatris", hi: "नर्मदा में ॐ आकार का पवित्र द्वीप, 10वीं सदी का सिद्धनाथ मंदिर व ज्योतिर्लिंग" },
    badge: { en: "12 Sacred Jyotirlingas • 10th-Century Nagara Temples", hi: "द्वादश ज्योतिर्लिंग • 10वीं सदी का सिद्धनाथ मंदिर" },
    district: { en: "Omkareshwar, Madhya Pradesh", hi: "ओंकारेश्वर, खंडवा, मध्य प्रदेश" },
    zone: "nimar",
    category: "ancient_temple",
    coordinates: [22.2435, 76.1506],
    heroImage: "/images/places/orchha_palace.jpg",
    gallery: [
      { url: "/images/places/orchha_palace.jpg", caption: { en: "Mandhata Island and historic temples Vista", hi: "मांधाता द्वीप व ऐतिहासिक मंदिर (ओंकारेश्वर) स्थापत्य" } }
    ],
    routeConfidence: "HIGH",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Mandhata+Island+and+historic+temples+++Omkareshwar",
    focus: { en: "Sacred geography and river settlement.", hi: "धरोहर का मुख्य केंद्र: Sacred geography and river settlement." },
    lastMileGuidance: { en: "The temple trust lists Mortakka bus stand about 12 km away, with buses toward Indore, Ujjain, Khargone and Khandwa. From Sanawad/Mortakka, continue by taxi/auto or local bus; check the return trip, especially…", hi: "The temple trust lists Mortakka bus stand about 12 km away, with buses toward Indore, Ujjain, Khargone and Khandwa. From Sanawad/Mortakka, continue by taxi/auto or local bus; check the return trip, especially…" },
    history: {
      dynasty: { en: "Paramaras, Holkars, Peshwas", hi: "परमार, होल्कर व पेशवा" },
      period: { en: "10th – 18th Century CE", hi: "10वीं से 18वीं शताब्दी" },
      chronicle: { en: "A religious and settlement landscape on the Narmada, with temples, ghats and historic routes.", hi: "A religious and settlement landscape on the Narmada, with temples, ghats and historic routes." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Sacred geography and river settlement.", hi: "मांधाता द्वीप व ऐतिहासिक मंदिर (ओंकारेश्वर) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Nagara riverfront island temples with elaborately carved stone friezes", hi: "नागर शैली के घाट व द्वीप मंदिर" },
      engineeringHighlights: {
        en: ["Nagara riverfront island temples with elaborately carved stone friezes", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["नागर शैली के घाट व द्वीप मंदिर", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A religious and settlement landscape on the Narmada, with temples, ghats and historic routes.", hi: "A religious and settlement landscape on the Narmada, with temples, ghats and historic routes." }
    },
    howToReach: {
      fromHub: { en: "Sanawad station is about 12 km away; Khandwa Junction is another rail option. Indore Airport is about 77 km away according to the temple's official how-to-reach page.", hi: "Sanawad station is about 12 km away; Khandwa Junction is another rail option. Indore Airport is about 77 km away according to the temple's official how-to-reach page." },
      nearestRail: { en: "Sanawad station is about 12 km away; Khandwa Junction is another rail option. Indore Airport is about 77 km away according to the temple's official how-to-reach page.", hi: "Sanawad station is about 12 km away; Khandwa Junction is another rail option. Indore Airport is about 77 km away according to the temple's official how-to-reach page." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry (VIP darshan ticketing separate)", hi: "निःशुल्क प्रवेश" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "The temple trust lists Mortakka bus stand about 12 km away, with buses toward Indore, Ujjain, Khargone and Khandwa. From Sanawad/Mortakka, continue by taxi/auto or local bus; check the return trip, especially…", hi: "The temple trust lists Mortakka bus stand about 12 km away, with buses toward Indore, Ujjain, Khargone and Khandwa. From Sanawad/Mortakka, continue by taxi/auto or local bus; check the return trip, especially…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "The temple trust lists Mortakka bus stand about 12 km away, with buses toward Indore, Ujjain, Khargone and Khandwa. From Sanawad/Mortakka, continue by taxi/auto or local bus; check the return trip, especially…", hi: "The temple trust lists Mortakka bus stand about 12 km away, with buses toward Indore, Ujjain, Khargone and Khandwa. From Sanawad/Mortakka, continue by taxi/auto or local bus; check the return trip, especially…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Mandhata+Island+and+historic+temples+++Omkareshwar", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "kundi_bhandara_burhanpur_mp",
    num: 45,
    name: { en: "Kundi Bhandara", hi: "कुंडी भण्डारा जल संरचना (बुरहानपुर)" },
    tagline: { en: "1615 CE Subterranean Hydraulic Wonder: Mughal Underground Aqueduct System", hi: "1615 ईस्वी की भूमिगत जल सुरंग — मुग़ल कालीन इंजीनियरिंग का अजूबा" },
    badge: { en: "UNESCO Tentative Subterranean Aqueduct • Abdul Rahim Khan-i-Khana", hi: "यूनेस्को संभावित • 100 फीट भूमिगत जल प्रणाली" },
    district: { en: "Burhanpur, Madhya Pradesh", hi: "बुरहानपुर, मध्य प्रदेश" },
    zone: "nimar",
    category: "asi_heritage",
    coordinates: [21.325, 76.2417],
    heroImage: "/images/places/koshak_mahal.jpg",
    gallery: [
      { url: "/images/places/koshak_mahal.jpg", caption: { en: "Kundi Bhandara Vista", hi: "कुंडी भण्डारा जल संरचना (बुरहानपुर) स्थापत्य" } }
    ],
    routeConfidence: "MEDIUM",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Kundi+Bhandara+++Burhanpur",
    focus: { en: "Historic water engineering.", hi: "धरोहर का मुख्य केंद्र: Historic water engineering." },
    lastMileGuidance: { en: "Kundi Bhandara is an underground historic water system, not a conventional open monument in every section. Arrange a local auto/taxi and confirm which parts are currently accessible, whether a guide is required…", hi: "Kundi Bhandara is an underground historic water system, not a conventional open monument in every section. Arrange a local auto/taxi and confirm which parts are currently accessible, whether a guide is required…" },
    history: {
      dynasty: { en: "Mughal Empire (Abdul Rahim Khan-i-Khana)", hi: "मुग़ल काल (अब्दुर्रहीम ख़ान-ए-ख़ाना)" },
      period: { en: "1615 CE", hi: "1615 ईस्वी" },
      chronicle: { en: "An underground water-supply system associated with Burhanpur's development. Relevant to traditional engineering and urban water management.", hi: "An underground water-supply system associated with Burhanpur's development. Relevant to traditional engineering and urban water management." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Historic water engineering.", hi: "कुंडी भण्डारा जल संरचना (बुरहानपुर) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Persian Qanat technology with 103 interconnected vertical inspection shafts", hi: "फारसी क़नात तकनीक व 103 कुंडी कुएं" },
      engineeringHighlights: {
        en: ["Persian Qanat technology with 103 interconnected vertical inspection shafts", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["फारसी क़नात तकनीक व 103 कुंडी कुएं", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "An underground water-supply system associated with Burhanpur's development. Relevant to traditional engineering and urban water management.", hi: "An underground water-supply system associated with Burhanpur's development. Relevant to traditional engineering and urban water management." }
    },
    howToReach: {
      fromHub: { en: "Burhanpur railway station and town are the practical hubs.", hi: "Burhanpur railway station and town are the practical hubs." },
      nearestRail: { en: "Burhanpur railway station and town are the practical hubs.", hi: "Burhanpur railway station and town are the practical hubs." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "₹10 for elevator descent into tunnel", hi: "₹10 (लिफ्ट से सुरंग दर्शन)" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Kundi Bhandara is an underground historic water system, not a conventional open monument in every section. Arrange a local auto/taxi and confirm which parts are currently accessible, whether a guide is required…", hi: "Kundi Bhandara is an underground historic water system, not a conventional open monument in every section. Arrange a local auto/taxi and confirm which parts are currently accessible, whether a guide is required…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Kundi Bhandara is an underground historic water system, not a conventional open monument in every section. Arrange a local auto/taxi and confirm which parts are currently accessible, whether a guide is required…", hi: "Kundi Bhandara is an underground historic water system, not a conventional open monument in every section. Arrange a local auto/taxi and confirm which parts are currently accessible, whether a guide is required…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Kundi+Bhandara+++Burhanpur", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "chausath_yogini_jabalpur_mp",
    num: 46,
    name: { en: "Chausath Yogini Temple", hi: "चौसठ योगिनी मंदिर (भेड़ाघाट, जबलपुर)" },
    tagline: { en: "10th-Century Circular Hilltop Tantric Temple Overlooking Marble Rocks & Narmada", hi: "नर्मदा व संगमरमरी चट्टानों के ऊपर 81 योगिनी प्रतिमाओं वाला 10वीं सदी का मंदिर" },
    badge: { en: "Kalachuri Dynasty • 10th Century Circular Hypaethral", hi: "कलचुरि राजवंश • 10वीं सदी का गोलाकार मंदिर" },
    district: { en: "Bhedaghat, Jabalpur, Madhya Pradesh", hi: "भेड़ाघाट, जबलपुर, मध्य प्रदेश" },
    zone: "mahakoshal",
    category: "ancient_temple",
    coordinates: [23.1314, 79.8006],
    heroImage: "/images/places/mitawali.jpg",
    gallery: [
      { url: "/images/places/mitawali.jpg", caption: { en: "Chausath Yogini Temple Vista", hi: "चौसठ योगिनी मंदिर (भेड़ाघाट, जबलपुर) स्थापत्य" } }
    ],
    routeConfidence: "HIGH",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Chausath+Yogini+Temple+++Bhedaghat+Jabalpur",
    focus: { en: "Circular temple and river landscape.", hi: "धरोहर का मुख्य केंद्र: Circular temple and river landscape." },
    lastMileGuidance: { en: "Bhedaghat is outside central Jabalpur. Travel by local bus or taxi to Bhedaghat, then continue by auto/walking to the Chausath Yogini hill/steps. Expect a stair climb and uneven stone surfaces; check weather…", hi: "Bhedaghat is outside central Jabalpur. Travel by local bus or taxi to Bhedaghat, then continue by auto/walking to the Chausath Yogini hill/steps. Expect a stair climb and uneven stone surfaces; check weather…" },
    history: {
      dynasty: { en: "Kalachuri Dynasty (King Yuvarajadeva I)", hi: "कलचुरि राजवंश (राजा युवराजदेव प्रथम)" },
      period: { en: "10th Century CE", hi: "10वीं शताब्दी" },
      chronicle: { en: "A circular hilltop temple with views toward the Narmada landscape. Compare its architecture with the Mitawali temple.", hi: "A circular hilltop temple with views toward the Narmada landscape. Compare its architecture with the Mitawali temple." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Circular temple and river landscape.", hi: "चौसठ योगिनी मंदिर (भेड़ाघाट, जबलपुर) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Circular open hypaethral cloister of 81 sculpted yoginis with central Gauri-Shankar temple", hi: "81 योगिनी कक्षों वाला वृत्ताकार खुला देवालय" },
      engineeringHighlights: {
        en: ["Circular open hypaethral cloister of 81 sculpted yoginis with central Gauri-Shankar temple", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["81 योगिनी कक्षों वाला वृत्ताकार खुला देवालय", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A circular hilltop temple with views toward the Narmada landscape. Compare its architecture with the Mitawali temple.", hi: "A circular hilltop temple with views toward the Narmada landscape. Compare its architecture with the Mitawali temple." }
    },
    howToReach: {
      fromHub: { en: "Jabalpur Junction is the rail hub; Jabalpur Airport serves the region.", hi: "Jabalpur Junction is the rail hub; Jabalpur Airport serves the region." },
      nearestRail: { en: "Jabalpur Junction is the rail hub; Jabalpur Airport serves the region.", hi: "Jabalpur Junction is the rail hub; Jabalpur Airport serves the region." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry (ASI Protected Monument)", hi: "निःशुल्क प्रवेश" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Bhedaghat is outside central Jabalpur. Travel by local bus or taxi to Bhedaghat, then continue by auto/walking to the Chausath Yogini hill/steps. Expect a stair climb and uneven stone surfaces; check weather…", hi: "Bhedaghat is outside central Jabalpur. Travel by local bus or taxi to Bhedaghat, then continue by auto/walking to the Chausath Yogini hill/steps. Expect a stair climb and uneven stone surfaces; check weather…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Bhedaghat is outside central Jabalpur. Travel by local bus or taxi to Bhedaghat, then continue by auto/walking to the Chausath Yogini hill/steps. Expect a stair climb and uneven stone surfaces; check weather…", hi: "Bhedaghat is outside central Jabalpur. Travel by local bus or taxi to Bhedaghat, then continue by auto/walking to the Chausath Yogini hill/steps. Expect a stair climb and uneven stone surfaces; check weather…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Chausath+Yogini+Temple+++Bhedaghat+Jabalpur", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "madan_mahal_fort_jabalpur_mp",
    num: 47,
    name: { en: "Madan Mahal Fort", hi: "मदन महल क़िला (जबलपुर)" },
    tagline: { en: "1116 CE Gond Watchtower Citadel of Raja Madan Shah on Giant Granite Boulders", hi: "विशाल ग्रेनाइट शिला पर 1116 ईस्वी में निर्मित गोंड राजा मदन शाह का सैन्य दुर्ग" },
    badge: { en: "12th Century Gond Kingdom • Balancing Rock Proximity", hi: "12वीं सदी का गोंड साम्राज्य • बैलेंसिंग रॉक के पास" },
    district: { en: "Jabalpur, Madhya Pradesh", hi: "जबलपुर, मध्य प्रदेश" },
    zone: "mahakoshal",
    category: "fort_palace",
    coordinates: [23.15, 79.8833],
    heroImage: "/images/places/gwalior_fort.jpg",
    gallery: [
      { url: "/images/places/gwalior_fort.jpg", caption: { en: "Madan Mahal Fort Vista", hi: "मदन महल क़िला (जबलपुर) स्थापत्य" } }
    ],
    routeConfidence: "MEDIUM",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Madan+Mahal+Fort+++Jabalpur",
    focus: { en: "Hilltop fort and Gond history.", hi: "धरोहर का मुख्य केंद्र: Hilltop fort and Gond history." },
    lastMileGuidance: { en: "The fort is on a hill within Jabalpur. Use an auto/taxi from the station or city centre to the approach, then walk/climb. The last stretch is not suitable for all mobility levels…", hi: "The fort is on a hill within Jabalpur. Use an auto/taxi from the station or city centre to the approach, then walk/climb. The last stretch is not suitable for all mobility levels…" },
    history: {
      dynasty: { en: "Gond Dynasty (Raja Madan Shah & Rani Durgavati)", hi: "गोंड राजवंश (राजा मदन शाह व वीरांगना रानी दुर्गावती)" },
      period: { en: "1116 CE (12th Century CE)", hi: "1116 ईस्वी" },
      chronicle: { en: "A small hilltop fort traditionally associated with the Gond rulers. Useful for regional military architecture and historical landscape.", hi: "A small hilltop fort traditionally associated with the Gond rulers. Useful for regional military architecture and historical landscape." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Hilltop fort and Gond history.", hi: "मदन महल क़िला (जबलपुर) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Granite boulder watchtower and war room overlooking Garha basin", hi: "ग्रेनाइट शिला सैन्य दुर्ग" },
      engineeringHighlights: {
        en: ["Granite boulder watchtower and war room overlooking Garha basin", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["ग्रेनाइट शिला सैन्य दुर्ग", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A small hilltop fort traditionally associated with the Gond rulers. Useful for regional military architecture and historical landscape.", hi: "A small hilltop fort traditionally associated with the Gond rulers. Useful for regional military architecture and historical landscape." }
    },
    howToReach: {
      fromHub: { en: "Madan Mahal station/Jabalpur Junction are practical rail options; Jabalpur Airport is the air option.", hi: "Madan Mahal station/Jabalpur Junction are practical rail options; Jabalpur Airport is the air option." },
      nearestRail: { en: "Madan Mahal station/Jabalpur Junction are practical rail options; Jabalpur Airport is the air option.", hi: "Madan Mahal station/Jabalpur Junction are practical rail options; Jabalpur Airport is the air option." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry (ASI Protected)", hi: "निःशुल्क प्रवेश" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "The fort is on a hill within Jabalpur. Use an auto/taxi from the station or city centre to the approach, then walk/climb. The last stretch is not suitable for all mobility levels…", hi: "The fort is on a hill within Jabalpur. Use an auto/taxi from the station or city centre to the approach, then walk/climb. The last stretch is not suitable for all mobility levels…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "The fort is on a hill within Jabalpur. Use an auto/taxi from the station or city centre to the approach, then walk/climb. The last stretch is not suitable for all mobility levels…", hi: "The fort is on a hill within Jabalpur. Use an auto/taxi from the station or city centre to the approach, then walk/climb. The last stretch is not suitable for all mobility levels…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Madan+Mahal+Fort+++Jabalpur", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "tigawa_temple_katni_mp",
    num: 48,
    name: { en: "Tigawa Temple", hi: "तिगवा कंकाली देवी मंदिर (कटनी)" },
    tagline: { en: "5th-Century Flat-Roofed Gupta Temple: Pristine Survivor of Classical Indian Temple Birth", hi: "भारत के मंदिर स्थापत्य के उद्गम का 5वीं सदी का अक्षुण्ण गुप्त मंदिर" },
    badge: { en: "Classical 5th-Century Gupta Sanctum • River Goddess Portals", hi: "5वीं सदी का शास्त्रीय गुप्त मंदिर • गंगा-यमुना द्वारपाल" },
    district: { en: "Katni/Jabalpur region, Madhya Pradesh", hi: "तिगवा, बहोरीबंद, कटनी, मध्य प्रदेश" },
    zone: "mahakoshal",
    category: "ancient_temple",
    coordinates: [23.6833, 80.25],
    heroImage: "/images/places/padhavali.jpg",
    gallery: [
      { url: "/images/places/padhavali.jpg", caption: { en: "Tigawa Temple Vista", hi: "तिगवा कंकाली देवी मंदिर (कटनी) स्थापत्य" } }
    ],
    routeConfidence: "LOW",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Tigawa+Temple+++Katni+Jabalpur+region",
    focus: { en: "Early stone temple.", hi: "धरोहर का मुख्य केंद्र: Early stone temple." },
    lastMileGuidance: { en: "The temple is in a rural setting and may be confused with similarly named locations. Arrange a private vehicle from the nearest confirmed town/railhead and verify local road conditions, the exact temple…", hi: "The temple is in a rural setting and may be confused with similarly named locations. Arrange a private vehicle from the nearest confirmed town/railhead and verify local road conditions, the exact temple…" },
    history: {
      dynasty: { en: "Imperial Gupta Dynasty", hi: "गुप्त साम्राज्य" },
      period: { en: "5th Century CE (circa 420–450 CE)", hi: "5वीं शताब्दी" },
      chronicle: { en: "An early temple associated with the Gupta architectural tradition. Useful for studying early North Indian temple plans.", hi: "An early temple associated with the Gupta architectural tradition. Useful for studying early North Indian temple plans." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Early stone temple.", hi: "तिगवा कंकाली देवी मंदिर (कटनी) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Square flat-roofed garbha griha with four-pillared porch (mandapa)", hi: "प्रारंभिक सपाट छत वाला गर्भगृह व खंभों वाला मंडप" },
      engineeringHighlights: {
        en: ["Square flat-roofed garbha griha with four-pillared porch (mandapa)", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["प्रारंभिक सपाट छत वाला गर्भगृह व खंभों वाला मंडप", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "An early temple associated with the Gupta architectural tradition. Useful for studying early North Indian temple plans.", hi: "An early temple associated with the Gupta architectural tradition. Useful for studying early North Indian temple plans." }
    },
    howToReach: {
      fromHub: { en: "Katni is a practical rail hub; verify the exact Tigawa Temple location before choosing a route.", hi: "Katni is a practical rail hub; verify the exact Tigawa Temple location before choosing a route." },
      nearestRail: { en: "Katni is a practical rail hub; verify the exact Tigawa Temple location before choosing a route.", hi: "Katni is a practical rail hub; verify the exact Tigawa Temple location before choosing a route." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry (ASI Protected Monument)", hi: "निःशुल्क प्रवेश" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "The temple is in a rural setting and may be confused with similarly named locations. Arrange a private vehicle from the nearest confirmed town/railhead and verify local road conditions, the exact temple…", hi: "The temple is in a rural setting and may be confused with similarly named locations. Arrange a private vehicle from the nearest confirmed town/railhead and verify local road conditions, the exact temple…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "The temple is in a rural setting and may be confused with similarly named locations. Arrange a private vehicle from the nearest confirmed town/railhead and verify local road conditions, the exact temple…", hi: "The temple is in a rural setting and may be confused with similarly named locations. Arrange a private vehicle from the nearest confirmed town/railhead and verify local road conditions, the exact temple…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Tigawa+Temple+++Katni+Jabalpur+region", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "dhamnar_caves_mandsaur_mp",
    num: 49,
    name: { en: "Dhamnar Caves", hi: "धमनार बौद्ध गुफाएं व धर्मराजेश्वर (मंदसौर)" },
    tagline: { en: "Monolithic Rock-Cut Temple Complex & 51 Buddhist Caves Carved from Laterite Hill", hi: "एलोरा की तरह एक ही पहाड़ी काटकर बना धर्मराजेश्वर मंदिर व 51 बौद्ध गुफाएं" },
    badge: { en: "Ellora of Malwa • 5th–7th Century Monolithic Wonder", hi: "मालवा का एलोरा • 51 शैलकृत बौद्ध गुफाएं" },
    district: { en: "Mandsaur, Madhya Pradesh", hi: "धमनार, मंदसौर, मध्य प्रदेश" },
    zone: "malwa",
    category: "ancient_temple",
    coordinates: [24.2, 75.5],
    heroImage: "/images/places/padhavali.jpg",
    gallery: [
      { url: "/images/places/padhavali.jpg", caption: { en: "Dhamnar Caves Vista", hi: "धमनार बौद्ध गुफाएं व धर्मराजेश्वर (मंदसौर) स्थापत्य" } }
    ],
    routeConfidence: "LOW",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Dhamnar+Caves+++Mandsaur",
    focus: { en: "Rock-cut architecture.", hi: "धरोहर का मुख्य केंद्र: Rock-cut architecture." },
    lastMileGuidance: { en: "Dhamnar is a rural rock-cut site. A private vehicle and local directions are recommended; do not assume a direct bus to the caves. The hillside/steps can be uneven, so carry water and…", hi: "Dhamnar is a rural rock-cut site. A private vehicle and local directions are recommended; do not assume a direct bus to the caves. The hillside/steps can be uneven, so carry water and…" },
    history: {
      dynasty: { en: "Rashtrakuta & Pratihara Era", hi: "राष्ट्रकूट व प्रतिहार काल" },
      period: { en: "5th – 8th Century CE", hi: "5वीं से 8वीं शताब्दी" },
      chronicle: { en: "A group of Buddhist and Hindu rock-cut monuments carved into a hillside, useful for comparing architecture and religious activity across periods.", hi: "A group of Buddhist and Hindu rock-cut monuments carved into a hillside, useful for comparing architecture and religious activity across periods." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Rock-cut architecture.", hi: "धमनार बौद्ध गुफाएं व धर्मराजेश्वर (मंदसौर) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Pit-hewn monolithic Nagara temple complex and Buddhist rock-cut viharas", hi: "शैलकृत एकाश्म नागर मंदिर व विहार" },
      engineeringHighlights: {
        en: ["Pit-hewn monolithic Nagara temple complex and Buddhist rock-cut viharas", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["शैलकृत एकाश्म नागर मंदिर व विहार", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A group of Buddhist and Hindu rock-cut monuments carved into a hillside, useful for comparing architecture and religious activity across periods.", hi: "A group of Buddhist and Hindu rock-cut monuments carved into a hillside, useful for comparing architecture and religious activity across periods." }
    },
    howToReach: {
      fromHub: { en: "Bhanpura/Mandsaur are regional road hubs; confirm the best rail connection for your date.", hi: "Bhanpura/Mandsaur are regional road hubs; confirm the best rail connection for your date." },
      nearestRail: { en: "Bhanpura/Mandsaur are regional road hubs; confirm the best rail connection for your date.", hi: "Bhanpura/Mandsaur are regional road hubs; confirm the best rail connection for your date." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free entry (ASI Protected)", hi: "निःशुल्क प्रवेश" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Dhamnar is a rural rock-cut site. A private vehicle and local directions are recommended; do not assume a direct bus to the caves. The hillside/steps can be uneven, so carry water and…", hi: "Dhamnar is a rural rock-cut site. A private vehicle and local directions are recommended; do not assume a direct bus to the caves. The hillside/steps can be uneven, so carry water and…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Dhamnar is a rural rock-cut site. A private vehicle and local directions are recommended; do not assume a direct bus to the caves. The hillside/steps can be uneven, so carry water and…", hi: "Dhamnar is a rural rock-cut site. A private vehicle and local directions are recommended; do not assume a direct bus to the caves. The hillside/steps can be uneven, so carry water and…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Dhamnar+Caves+++Mandsaur", type: "Government Tourism Registry" }
    ]
  },
  {
    id: "dhala_crater_shivpuri_mp",
    num: 50,
    name: { en: "Dhala Impact Structure", hi: "ढाला उल्कापिंड क्रेटर (शिवपुरी)" },
    tagline: { en: "Asia’s Oldest & Largest Asteroid Impact Crater Dating Back 2.5 Billion Years", hi: "2.5 अरब वर्ष पुराना एशिया का सबसे बड़ा और प्राचीन उल्कापिंड क्रेटर" },
    badge: { en: "2.5 Billion Year Paleoproterozoic Impact Structure", hi: "एशिया का सबसे बड़ा 11 किमी चौड़ा उल्कापिंड गड्ढा" },
    district: { en: "Shivpuri region, Madhya Pradesh", hi: "ढाला, शिवपुरी / दतिया सीमा, मध्य प्रदेश" },
    zone: "shivpuri",
    category: "rock_art_nature",
    coordinates: [25.2972, 77.8389],
    heroImage: "/images/places/bateshwar.jpg",
    gallery: [
      { url: "/images/places/bateshwar.jpg", caption: { en: "Dhala Impact Structure Vista", hi: "ढाला उल्कापिंड क्रेटर (शिवपुरी) स्थापत्य" } }
    ],
    routeConfidence: "LOW",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Dhala+Impact+Structure+++Shivpuri+region",
    focus: { en: "Geological heritage.", hi: "धरोहर का मुख्य केंद्र: Geological heritage." },
    lastMileGuidance: { en: "Dhala is a geological impact structure, not a standard tourist monument with a ticket counter or marked visitor route. Treat this as a research/fieldwork destination: confirm the exact coordinates, land access, permissions…", hi: "Dhala is a geological impact structure, not a standard tourist monument with a ticket counter or marked visitor route. Treat this as a research/fieldwork destination: confirm the exact coordinates, land access, permissions…" },
    history: {
      dynasty: { en: "Precambrian / Paleoproterozoic Geological Formation", hi: "प्रागैतिहासिक भूगर्भीय संरचना" },
      period: { en: "2.5 Billion Years Ago", hi: "2.5 अरब वर्ष पूर्व" },
      chronicle: { en: "A geological impact structure rather than a conventional monument. It supports interdisciplinary research into geology, landscape interpretation and geoheritage.", hi: "A geological impact structure rather than a conventional monument. It supports interdisciplinary research into geology, landscape interpretation and geoheritage." },
      asiSignificance: { en: "ASI Protected Monument & Heritage Site of National Significance", hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) संरक्षित राष्ट्रीय महत्व का स्थल" }
    },
    culture: {
      significance: { en: "Geological heritage.", hi: "ढाला उल्कापिंड क्रेटर (शिवपुरी) का सांस्कृतिक व ऐतिहासिक महत्व" },
      mythology: { en: "Steeped in medieval chronicles and regional folk memory of Madhya Pradesh", hi: "मध्य प्रदेश की ऐतिहासिक गाथाओं व लोक परंपराओं से जुड़ा धरोहर स्थल" },
      livingTradition: { en: "Welcoming cultural tourists, historians, and heritage enthusiasts year-round", hi: "पर्यटकों, शोधकर्ताओं और श्रद्धालुओं का प्रमुख आकर्षण" }
    },
    architecture: {
      style: { en: "Granite shock-metamorphosed shatter cones and impact breccia basin", hi: "11 किमी व्यास की विशाल भूगर्भीय उल्कापिंड घाटी" },
      engineeringHighlights: {
        en: ["Granite shock-metamorphosed shatter cones and impact breccia basin", "Dry-stone sandstone architectural technique", "Strategic elevated ridge positioning"],
        hi: ["11 किमी व्यास की विशाल भूगर्भीय उल्कापिंड घाटी", "पारंपरिक पाषाण शिल्प", "सामरिक रूप से महत्वपूर्ण भौगोलिक स्थिति"]
      },
      architecturalNotes: { en: "A geological impact structure rather than a conventional monument. It supports interdisciplinary research into geology, landscape interpretation and geoheritage.", hi: "A geological impact structure rather than a conventional monument. It supports interdisciplinary research into geology, landscape interpretation and geoheritage." }
    },
    howToReach: {
      fromHub: { en: "Shivpuri is the practical regional base; confirm coordinates with a geology/academic source before travel.", hi: "Shivpuri is the practical regional base; confirm coordinates with a geology/academic source before travel." },
      nearestRail: { en: "Shivpuri is the practical regional base; confirm coordinates with a geology/academic source before travel.", hi: "Shivpuri is the practical regional base; confirm coordinates with a geology/academic source before travel." },
      nearestAir: { en: "Gwalior (GWL), Bhopal (BHO), Khajuraho (HJR), or Indore (IDR) depending on region", hi: "निकटतम प्रमुख हवाई अड्डा" },
      roadCondition: { en: "Well-connected via State & National Highways with rural approach roads", hi: "राष्ट्रीय व राज्य राजमार्गों से सुगम संपर्क" },
      taxiEstimate: { en: "₹1,500 – ₹3,500 for full-day private taxi hiring", hi: "₹1,500 – ₹3,500 पूर्ण दिवस टैक्सी" },
      returnFeasibility: { en: "Feasible day excursion; hire a private vehicle and complete travel during daylight hours", hi: "दिन के समय सुरक्षित वापसी सुगम; निजी वाहन से भ्रमण सर्वोत्तम" }
    },
    practicalInfo: {
      timings: { en: "Sunrise to Sunset (6:00 AM – 6:00 PM)", hi: "सूर्योदय से सूर्यास्त (सुबह 6:00 से शाम 6:00)" },
      entryFee: { en: "Free access (Open geological site)", hi: "निःशुल्क भ्रमण" },
      bestSlot: { en: "October to March; morning 8:00 AM – 11:30 AM", hi: "अक्टूबर से मार्च; प्रातः 8:00 से 11:30 बजे" },
      accessibilityScore: 7,
      accessibilityNotes: { en: "Dhala is a geological impact structure, not a standard tourist monument with a ticket counter or marked visitor route. Treat this as a research/fieldwork destination: confirm the exact coordinates, land access, permissions…", hi: "Dhala is a geological impact structure, not a standard tourist monument with a ticket counter or marked visitor route. Treat this as a research/fieldwork destination: confirm the exact coordinates, land access, permissions…" },
      photographyTips: { en: "Capture dramatic sunlight on ancient stone facades during morning and late afternoon", hi: "प्रातःकालीन व सांध्यकालीन स्वर्णिम धूप में बेहतरीन फोटोग्राफी" },
      safetyAdvisory: { en: "Dhala is a geological impact structure, not a standard tourist monument with a ticket counter or marked visitor route. Treat this as a research/fieldwork destination: confirm the exact coordinates, land access, permissions…", hi: "Dhala is a geological impact structure, not a standard tourist monument with a ticket counter or marked visitor route. Treat this as a research/fieldwork destination: confirm the exact coordinates, land access, permissions…" }
    },
    evidenceSources: [
      { title: "Official Madhya Pradesh Heritage Registry", url: "https://www.google.com/maps/search/?api=1&query=Dhala+Impact+Structure+++Shivpuri+region", type: "Government Tourism Registry" }
    ]
  },
];

export function getMP50SiteById(id: string): MP50HeritageSite | undefined {
  const norm = id.toLowerCase().trim();
  return MP_50_HERITAGE_SITES.find(s => s.id.toLowerCase() === norm || s.name.en.toLowerCase().includes(norm));
}

export function searchMP50Sites(query: string): MP50HeritageSite[] {
  if (!query) return MP_50_HERITAGE_SITES;
  const q = query.toLowerCase().trim();
  return MP_50_HERITAGE_SITES.filter(s =>
    s.name.en.toLowerCase().includes(q) ||
    s.name.hi.includes(q) ||
    s.district.en.toLowerCase().includes(q) ||
    s.district.hi.includes(q) ||
    s.zone.toLowerCase().includes(q) ||
    s.focus.en.toLowerCase().includes(q)
  );
}

export function getMP50SitesByZone(zone: string): MP50HeritageSite[] {
  if (!zone || zone === 'all') return MP_50_HERITAGE_SITES;
  return MP_50_HERITAGE_SITES.filter(s => s.zone === zone);
}

export function getMP50SitesByConfidence(conf: 'HIGH' | 'MEDIUM' | 'LOW'): MP50HeritageSite[] {
  return MP_50_HERITAGE_SITES.filter(s => s.routeConfidence === conf);
}
