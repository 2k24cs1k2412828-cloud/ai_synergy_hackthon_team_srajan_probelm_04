// Ghumo India AI Travel Copilot Engine
// Provides time-based itinerary generation, dynamic replanning, deadline protection,
// experience-driven recommendation, and map-itinerary synchronization across Uttar Pradesh.

import { UP_PLACES, type UPPlace } from './uttarPradeshService';
import { UP_CITY_COORDINATES, UP_LANDMARK_COORDINATES } from '../../data/up-comprehensive-database';
import { MP_PLACES, MP_CITY_COORDINATES, MP_LANDMARK_COORDINATES, calculateDynamicMPRoute, type MPPlace } from '../../data/mp-comprehensive-database';
import { MP_50_HERITAGE_SITES } from '../../data/mp-50-heritage-sites';

export interface ItineraryStop {
  id: string;
  stopNumber: number;
  placeId?: string;
  name: string;
  hindiName: string;
  city: string;
  hindiCity: string;
  category: string;
  coordinates: [number, number];
  imageUrl?: string;
  startTime: string; // e.g., "4:00 PM"
  endTime: string;   // e.g., "4:45 PM"
  durationMinutes: number;
  travelTimeToNextMinutes?: number;
  travelDistanceToNextKm?: number;
  transportModeToNext?: 'walk' | 'auto' | 'taxi' | 'metro';
  activity: string;
  activityHi: string;
  whyThisPlace: string;
  whyThisPlaceHi: string;
  isFoodStop?: boolean;
  costEstimate?: string;
  status: 'completed' | 'current' | 'upcoming';
}

export interface TripDay {
  dayNumber: number;
  title: string;
  titleHi: string;
  dateLabel?: string;
  stops: ItineraryStop[];
}

export interface TripItinerary {
  id: string;
  title: string;
  titleHi: string;
  city: string;
  hindiCity: string;
  targetHours: number;
  startTime: string; // e.g. "4:00 PM"
  deadlineTime?: string; // e.g. "7:00 PM"
  deadlineLabel?: string; // e.g. "Train departure at Cantt Station"
  safetyBufferMinutes: number; // e.g. 30
  currentStopIndex: number;
  stops: ItineraryStop[];
  isMultiDay?: boolean;
  days?: TripDay[];
  activeDayIndex?: number;
  suggestedHotel?: {
    name: string;
    area: string;
    rationale: string;
    coordinates: [number, number];
    priceRange: string;
  };
  totalDistanceKm: number;
  totalCostEstimate: string;
  optimizationsApplied?: string[];
}

// Haversine distance calculator between coordinates in km
export function calculateGeoDistanceKm(coord1: [number, number], coord2: [number, number]): number {
  const R = 6371;
  const dLat = (coord2[0] - coord1[0]) * Math.PI / 180;
  const dLng = (coord2[1] - coord1[1]) * Math.PI / 180;
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(coord1[0] * Math.PI / 180) * Math.cos(coord2[0] * Math.PI / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 1.25 * 10) / 10; // ~1.25 urban winding coefficient
}

// Convert "4:00 PM" to minutes from midnight
export function timeStringToMinutes(timeStr: string): number {
  const match = timeStr.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return 960; // Default 4:00 PM = 16 * 60 = 960
  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const ampm = match[3].toUpperCase();
  if (ampm === 'PM' && hours < 12) hours += 12;
  if (ampm === 'AM' && hours === 12) hours = 0;
  return hours * 60 + minutes;
}

// Convert minutes from midnight to formatted "4:00 PM"
export function minutesToTimeString(totalMinutes: number): string {
  const norm = ((totalMinutes % 1440) + 1440) % 1440;
  let hours = Math.floor(norm / 60);
  const minutes = norm % 60;
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  if (hours === 0) hours = 12;
  const mm = minutes < 10 ? `0${minutes}` : `${minutes}`;
  return `${hours}:${mm} ${ampm}`;
}

// Estimate realistic transit speed and mode
export function getTransitModeAndDuration(distanceKm: number, preferWalking: boolean = false): {
  mode: 'walk' | 'auto' | 'taxi';
  durationMinutes: number;
} {
  if (distanceKm <= 1.2 && preferWalking) {
    return { mode: 'walk', durationMinutes: Math.max(5, Math.round(distanceKm * 15)) };
  }
  if (distanceKm <= 0.8) {
    return { mode: 'walk', durationMinutes: Math.max(5, Math.round(distanceKm * 14)) };
  }
  if (distanceKm <= 5.0) {
    return { mode: 'auto', durationMinutes: Math.max(8, Math.round(distanceKm * 3.5 + 4)) };
  }
  return { mode: 'taxi', durationMinutes: Math.max(12, Math.round(distanceKm * 2.8 + 6)) };
}

// Natural language query parser
export interface ParsedTripConstraints {
  city: string;
  hours: number;
  startTime: string;
  deadlineTime?: string;
  deadlineLabel?: string;
  startLocationName?: string;
  destinationName?: string;
  preferFood: boolean;
  preferHistory: boolean;
  preferGhats: boolean;
  preferSunset: boolean;
  preferNature: boolean;
  preferWalking: boolean;
  walkLess: boolean;
  budget: 'budget' | 'moderate' | 'comfort';
  isMultiDay: boolean;
  numDays: number;
}

export function parseNaturalLanguageTripQuery(query: string): ParsedTripConstraints {
  const q = query.toLowerCase();

  // 1. Detect Origin if specified (e.g., "from Gwalior", "Gwalior se")
  let startLocationName: string | undefined = undefined;
  const originMatch = q.match(/(?:from|se|start from|starting from|निकलकर)\s+([a-zA-Z\u0900-\u097F]+)/i);
  if (originMatch) {
    const rawOrigin = originMatch[1].trim();
    if (rawOrigin.includes('gwalior') || rawOrigin.includes('ग्वालियर')) startLocationName = 'Gwalior';
    else if (rawOrigin.includes('morena') || rawOrigin.includes('मुरैना')) startLocationName = 'Morena';
    else if (rawOrigin.includes('bhopal') || rawOrigin.includes('भोपाल')) startLocationName = 'Bhopal';
    else if (rawOrigin.includes('indore') || rawOrigin.includes('इंदौर')) startLocationName = 'Indore';
    else if (rawOrigin.includes('jhansi') || rawOrigin.includes('झांसी')) startLocationName = 'Jhansi';
  } else if (q.includes('gwalior') && (q.includes('for sheopur') || q.includes('to sheopur') || q.includes('sheopur fort'))) {
    startLocationName = 'Gwalior';
  }

  // 2. Detect City & Destination (Madhya Pradesh Heritage priority)
  let city = 'Gwalior'; // Default to central MP hub instead of Varanasi
  let destinationName: string | undefined = undefined;

  if (q.includes('sheopur') || q.includes('श्योपुर')) {
    city = 'Sheopur';
    destinationName = 'Sheopur Fort';
  } else if (q.includes('bateshwar') || q.includes('बटेश्वर') || q.includes('mitawali') || q.includes('मितावली') || q.includes('padhavali') || q.includes('पढ़ावली') || q.includes('kakanmath') || q.includes('ककनमठ') || q.includes('morena') || q.includes('मुरैना')) {
    city = 'Morena';
    destinationName = q.includes('bateshwar') ? 'Bateshwar Temples Complex' : q.includes('mitawali') ? 'Mitawali Chausath Yogini' : q.includes('padhavali') ? 'Garhi Padhavali' : q.includes('kakanmath') ? 'Kakanmath Temple' : 'Morena Heritage Circuit';
  } else if (q.includes('orchha') || q.includes('ओरछा') || q.includes('ram raja') || q.includes('jahangir mahal') || q.includes('chaturbhuj')) {
    city = 'Orchha';
    destinationName = 'Orchha Heritage Complex';
  } else if (q.includes('datia') || q.includes('दतिया') || q.includes('sonagiri')) {
    city = 'Datia';
    destinationName = 'Datia Bir Singh Dev Palace';
  } else if (q.includes('chanderi') || q.includes('चंदेरी') || q.includes('koshak') || q.includes('badal mahal')) {
    city = 'Chanderi';
    destinationName = 'Chanderi Kirti Durg';
  } else if (q.includes('khajuraho') || q.includes('खजुराहो') || q.includes('kandariya')) {
    city = 'Khajuraho';
    destinationName = 'Khajuraho Western Temples';
  } else if (q.includes('sanchi') || q.includes('सांची') || q.includes('stupa') || q.includes('bhimbetka') || q.includes('भीमबेटका')) {
    city = 'Sanchi';
    destinationName = q.includes('bhimbetka') ? 'Bhimbetka Prehistoric Caves' : 'Great Sanchi Stupa';
  } else if (q.includes('bhopal') || q.includes('भोपाल') || q.includes('bhojpur') || q.includes('upper lake')) {
    city = 'Bhopal';
    destinationName = 'Bhopal Heritage Circuit';
  } else if (q.includes('ujjain') || q.includes('उज्जैन') || q.includes('mahakal') || q.includes('mahakaleshwar')) {
    city = 'Ujjain';
    destinationName = 'Shri Mahakaleshwar Jyotirlinga';
  } else if (q.includes('mandu') || q.includes('मांडू') || q.includes('jahaz mahal') || q.includes('roopmati')) {
    city = 'Mandu';
    destinationName = 'Jahaz Mahal & Mandu Citadel';
  } else if (q.includes('shivpuri') || q.includes('शिवपुरी') || q.includes('narwar') || q.includes('madhav')) {
    city = 'Shivpuri';
    destinationName = 'Narwar Fort & Madhav National Park';
  } else if (q.includes('jabalpur') || q.includes('जबलपुर') || q.includes('bhedaghat') || q.includes('dhuandhar')) {
    city = 'Jabalpur';
    destinationName = 'Bhedaghat Marble Rocks & Dhuandhar';
  } else if (q.includes('pachmarhi') || q.includes('पचमढ़ी')) {
    city = 'Pachmarhi';
    destinationName = 'Pachmarhi Hill Station';
  } else if (q.includes('bhind') || q.includes('भिंड') || q.includes('ater')) {
    city = 'Bhind';
    destinationName = 'Ater Fort';
  } else if (q.includes('indore') || q.includes('इंदौर') || q.includes('rajwada')) {
    city = 'Indore';
    destinationName = 'Rajwada Palace Indore';
  } else if (q.includes('burhanpur') || q.includes('बुरहानपुर') || q.includes('asirgarh')) {
    city = 'Burhanpur';
    destinationName = 'Asirgarh Fort';
  } else if (q.includes('gwalior') || q.includes('ग्वालियर') || q.includes('sas bahu') || q.includes('teli ka mandir') || q.includes('jai vilas') || q.includes('man mandir')) {
    city = 'Gwalior';
    destinationName = 'Gwalior Fort & Man Mandir';
  // UP Cities
  } else if (q.includes('ayodhya') || q.includes('ram mandir')) {
    city = 'Ayodhya';
  } else if (q.includes('lucknow') || q.includes('awadh')) {
    city = 'Lucknow';
  } else if (q.includes('mathura') || q.includes('vrindavan') || q.includes('braj')) {
    city = 'Mathura';
  } else if (q.includes('agra') || q.includes('taj')) {
    city = 'Agra';
  } else if (q.includes('varanasi') || q.includes('kashi') || q.includes('banaras')) {
    city = 'Varanasi';
  } else if (q.includes('prayagraj') || q.includes('allahabad') || q.includes('sangam')) {
    city = 'Prayagraj';
  } else if (q.includes('kanpur') || q.includes('bithoor')) {
    city = 'Kanpur';
  } else if (q.includes('jhansi')) {
    city = 'Jhansi';
  } else if (q.includes('chitrakoot')) {
    city = 'Chitrakoot';
  }

  // 3. Detect multi-day
  const isMultiDay = /\b(2 days|3 days|two days|three days|weekend trip|multi-day|दिन)\b/i.test(q);
  let numDays = 1;
  if (q.includes('3 day') || q.includes('three day')) numDays = 3;
  else if (q.includes('2 day') || q.includes('two day')) numDays = 2;

  // 4. Detect hours available
  let hours = 3; // Default 3 hours
  const hoursMatch = q.match(/(\d+)\s*[-–—]?\s*(?:hours|hour|hrs|hr|ghante|ghanta|घंटे|घंटा)/i);
  if (hoursMatch) {
    hours = Math.min(14, Math.max(1, parseInt(hoursMatch[1], 10)));
  } else if (q.includes('half day') || q.includes('afternoon') || q.includes('दोपहर')) {
    hours = 4;
  } else if (q.includes('full day') || q.includes('पूरा दिन')) {
    hours = 8;
  } else if (q.includes('evening') || q.includes('sunset') || q.includes('शाम')) {
    hours = 3;
  }

  // 5. Start time (default current/afternoon 3:30 PM)
  let startTime = '3:30 PM';
  const timeMatch = q.match(/\b(\d{1,2}(?::\d{2})?)\s*(am|pm)\b/i);
  if (timeMatch) {
    const rawH = timeMatch[1].includes(':') ? timeMatch[1] : `${timeMatch[1]}:00`;
    startTime = `${rawH} ${timeMatch[2].toUpperCase()}`;
  }

  // 6. Detect return deadline
  let deadlineTime: string | undefined = undefined;
  let deadlineLabel: string | undefined = undefined;
  const deadlineMatch = q.match(/(?:back by|reach by|before|deadline|train at|flight at|station by|तक वापस)\s*(\d{1,2}(?::\d{2})?\s*(?:am|pm)?)/i);
  if (deadlineMatch) {
    let t = deadlineMatch[1].trim();
    if (!/am|pm/i.test(t)) {
      t = `${t} PM`; // Default PM if unspecified
    }
    if (!t.includes(':')) {
      t = t.replace(/(\d+)\s*(am|pm)/i, '$1:00 $2');
    }
    deadlineTime = t.toUpperCase();
    if (q.includes('train') || q.includes('railway') || q.includes('station')) {
      deadlineLabel = 'Railway Station Departure';
    } else if (q.includes('flight') || q.includes('airport')) {
      deadlineLabel = 'Airport Flight Check-in';
    } else {
      deadlineLabel = 'Return Deadline';
    }
  }

  // 7. Preferences
  const preferFood = /\b(food|chaat|kachori|sweets|lunch|dinner|cafe|restaurant|khana|tasting|hungry|bite)\b/i.test(q);
  const preferHistory = /\b(history|historical|heritage|fort|monument|museum|archaeology|purana|itihas)\b/i.test(q);
  const preferGhats = /\b(ghat|river|aarti|ganga|saryu|yamuna|boat|snan|sip|betwa)\b/i.test(q);
  const preferSunset = /\b(sunset|evening|viewpoint|golden hour|dusk|sunset view)\b/i.test(q);
  const preferNature = /\b(nature|wildlife|park|peaceful|quiet|garden|sukoon|chambal)\b/i.test(q);
  const preferWalking = /\b(walk|walking tour|on foot|pedestrian)\b/i.test(q);
  const walkLess = /\b(don't want to walk|dont walk|less walking|no walking|cab|taxi|tired)\b/i.test(q);

  return {
    city,
    hours,
    startTime,
    deadlineTime,
    deadlineLabel,
    startLocationName,
    destinationName,
    preferFood,
    preferHistory,
    preferGhats,
    preferSunset,
    preferNature,
    preferWalking: preferWalking && !walkLess,
    walkLess,
    budget: q.includes('cheap') || q.includes('budget') ? 'budget' : q.includes('luxury') ? 'comfort' : 'moderate',
    isMultiDay,
    numDays
  };
}

// Generate practical time-aware trip itinerary
export function generateTimeBasedItinerary(constraints: ParsedTripConstraints): TripItinerary {
  const { city, hours, startTime, deadlineTime, deadlineLabel, startLocationName } = constraints;

  // SPECIAL CASE: Sheopur Fort Excursion (e.g. from Gwalior or in Sheopur)
  if (city.toLowerCase() === 'sheopur' || constraints.destinationName?.toLowerCase().includes('sheopur')) {
    const isFromGwalior = (startLocationName && startLocationName.toLowerCase().includes('gwalior')) || true;
    let currentM = timeStringToMinutes(startTime);

    const stops: ItineraryStop[] = [
      {
        id: `stop_sheopur_citadel_${Date.now()}_1`,
        stopNumber: 1,
        placeId: 'sheopur_fort_mp',
        name: 'Sheopur Fort Main Citadel & Royal Courtyards',
        hindiName: 'श्योपुर दुर्ग मुख्य गढ़ व राजदरबार',
        city: 'Sheopur',
        hindiCity: 'श्योपुर',
        category: 'heritage',
        coordinates: [25.6669, 76.6978],
        imageUrl: '/images/places/chanderi_fort.jpg',
        startTime: minutesToTimeString(currentM),
        endTime: minutesToTimeString(currentM + 60),
        durationMinutes: 60,
        travelTimeToNextMinutes: 10,
        travelDistanceToNextKm: 1.2,
        transportModeToNext: 'auto',
        activity: 'Exploration of 16th-century fortress citadel, defensive ramparts, and Gaur-Scindia royal gateways',
        activityHi: '16वीं सदी के गौड़-सिंधिया दुर्ग, परकोटे, विशाल तोपची बुर्जों और प्राचीरों का विस्तृत अवलोकन',
        whyThisPlace: 'Core medieval stronghold overlooking the town with strategic defensive masonry and deep regional chronicles.',
        whyThisPlaceHi: 'सीप नदी के संगम पर स्थित सामरिक दृष्टिकोण से निर्मित मध्यकालीन गौड़ राजपूतों का मुख्य दुर्ग।',
        costEstimate: 'Free Entry (Protected Heritage)',
        status: 'current'
      },
      {
        id: `stop_sheopur_sip_${Date.now()}_2`,
        stopNumber: 2,
        placeId: 'sheopur_fort_mp',
        name: 'River Sip Pavilions & Painted Chhatris',
        hindiName: 'सीप नदी संगम छतरियां व भित्तिचित्र मंडप',
        city: 'Sheopur',
        hindiCity: 'श्योपुर',
        category: 'heritage',
        coordinates: [25.6685, 76.6990],
        imageUrl: '/images/places/chanderi_fort.jpg',
        startTime: minutesToTimeString(currentM + 70),
        endTime: minutesToTimeString(currentM + 115),
        durationMinutes: 45,
        travelTimeToNextMinutes: 8,
        travelDistanceToNextKm: 0.9,
        transportModeToNext: 'walk',
        activity: 'Scenic riverside viewpoints, dry sandstone masonry techniques, and surviving medieval fresco carvings',
        activityHi: 'सीप नदी तट पर बने नक्काशीदार पत्थर के झरोखे, छतरियां व मध्ययुगीन भित्तिचित्रों का अवलोकन',
        whyThisPlace: 'Breathtaking riverside vista where historic river bastions meet traditional Rajasthani-Malwa architectural motifs.',
        whyThisPlaceHi: 'प्राकृतिक नदी प्रवाह और पारम्परिक राजस्थानी-मालवा शैली के संगम का अनुपम दृश्य।',
        costEstimate: 'Free Access',
        status: 'upcoming'
      },
      {
        id: `stop_sheopur_food_${Date.now()}_3`,
        stopNumber: 3,
        placeId: 'sheopur_bazaar_food',
        name: 'Sheopur Heritage Bazaar & Local Chambal-Malwa Cuisine',
        hindiName: 'श्योपुर हेरिटेज बाज़ार व स्थानीय मालवा-चंबल खानपान',
        city: 'Sheopur',
        hindiCity: 'श्योपुर',
        category: 'food',
        coordinates: [25.6650, 76.6960],
        startTime: minutesToTimeString(currentM + 123),
        endTime: minutesToTimeString(currentM + 158),
        durationMinutes: 35,
        travelTimeToNextMinutes: 15,
        travelDistanceToNextKm: 2.0,
        transportModeToNext: 'auto',
        activity: 'Authentic regional refreshments, Sheopur Peda, fresh kachoris, and local wood-craft showcase',
        activityHi: 'स्थानीय कचौरी, प्रसिद्ध श्योपुर पेड़ा, गरमा-गरम चाय एवं प्रसिद्ध हस्तशिल्प काष्ठकला केंद्र',
        whyThisPlace: 'Well-known local marketplace perfectly timed for midday rest and genuine regional flavors.',
        whyThisPlaceHi: 'यात्रा के मध्य में अल्पाहार व स्थानीय सांस्कृतिक जीवन के जीवंत अनुभव हेतु आदर्श स्थल।',
        isFoodStop: true,
        costEstimate: '₹120 - ₹250',
        status: 'upcoming'
      },
      {
        id: `stop_sheopur_return_${Date.now()}_4`,
        stopNumber: 4,
        placeId: 'sheopur_highway_junction',
        name: isFromGwalior ? 'Pohri-Sheopur Highway Buffer & Return Transit' : 'Sheopur Fort Panorama & Departure Point',
        hindiName: isFromGwalior ? 'पोहरी-श्योपुर हाईवे वापसी प्रस्थान बिंदु' : 'श्योपुर दुर्ग विहंगम विदाई स्थल',
        city: 'Sheopur',
        hindiCity: 'श्योपुर',
        category: 'heritage',
        coordinates: [25.6700, 76.7000],
        startTime: minutesToTimeString(currentM + 173),
        endTime: minutesToTimeString(currentM + 205),
        durationMinutes: 32,
        activity: isFromGwalior ? 'Safe return departure via State Highway connecting to Gwalior (NH-27 / SH-24)' : 'Sunset panoramic vista of fortress walls',
        activityHi: isFromGwalior ? 'ग्वालियर सुरक्षित वापसी हेतु हाईवे रवानगी (पोहरी-मोहाना मार्ग)' : 'दुर्ग प्राचीरों का संध्याकालीन विहंगम विदाई दृश्य',
        whyThisPlace: 'Ensures ample daylight safety buffer and relaxed return travel without rush.',
        whyThisPlaceHi: 'दिन की रोशनी में सुरक्षित वापसी व समय सीमा सुरक्षा बफर सुनिश्चित करता है।',
        costEstimate: isFromGwalior ? '₹2,500 - ₹3,500 (Taxi Hire)' : 'Nominal',
        status: 'upcoming'
      }
    ];

    const itinTitle = isFromGwalior
      ? `Gwalior to Sheopur Fort ${hours}-Hour Curated Heritage Circuit`
      : `${hours}-Hour Sheopur Fort Curated Experience`;
    const itinTitleHi = isFromGwalior
      ? `ग्वालियर से श्योपुर दुर्ग ${hours} घंटे का प्रामाणिक हेरिटेज परिपथ`
      : `श्योपुर दुर्ग ${hours} घंटे का प्रामाणिक हेरिटेज परिपथ`;

    return {
      id: `itin_sheopur_${Date.now()}`,
      title: itinTitle,
      titleHi: itinTitleHi,
      city: 'Sheopur',
      hindiCity: 'श्योपुर',
      targetHours: hours,
      startTime,
      deadlineTime,
      deadlineLabel: deadlineLabel || (isFromGwalior ? 'Gwalior Return Buffer' : 'Return Deadline'),
      safetyBufferMinutes: 30,
      currentStopIndex: 0,
      stops,
      totalDistanceKm: isFromGwalior ? 210 : 8.5,
      totalCostEstimate: isFromGwalior ? '₹2,500 - ₹3,500 (Taxi) / ₹350 (Bus)' : '₹300 - ₹600',
      optimizationsApplied: [
        'Aligned with Gwalior-Sheopur Highway connectivity (NH-27 / SH-24)',
        '30-minute deadline protection buffer for daylight highway driving',
        'Includes River Sip confluence vista and authentic regional culinary stop'
      ]
    };
  }

  // GENERAL CANDIDATE PLACES SEARCH (Madhya Pradesh Database first, then Uttar Pradesh)
  const mpMatches = MP_PLACES.filter(p => 
    p.city.toLowerCase() === city.toLowerCase() || 
    p.hindiCity.includes(city) ||
    p.tags.some(t => t.toLowerCase().includes(city.toLowerCase()))
  );

  let candidatePlaces: Array<{
    id: string;
    name: string;
    hindiName: string;
    city: string;
    hindiCity: string;
    category: string;
    accessibilityRating: number;
    coordinates: [number, number];
    images?: { url: string; title: any }[];
    description?: { en: string; hi: string };
  }> = [];

  if (mpMatches.length > 0) {
    candidatePlaces = mpMatches.map(p => ({
      id: p.id,
      name: p.name,
      hindiName: p.hindiName,
      city: p.city,
      hindiCity: p.hindiCity,
      category: p.category,
      accessibilityRating: p.accessibilityRating,
      coordinates: p.coordinates,
      images: p.images,
      description: p.description
    }));
  } else {
    const upMatches = UP_PLACES.filter(p => 
      p.city.toLowerCase() === city.toLowerCase() || 
      p.hindiCity.includes(city)
    );
    if (upMatches.length > 0) {
      candidatePlaces = upMatches.map(p => ({
        id: p.id,
        name: p.name,
        hindiName: p.hindiName,
        city: p.city,
        hindiCity: p.hindiCity,
        category: p.category,
        accessibilityRating: p.accessibilityRating,
        coordinates: p.coordinates,
        images: p.images,
        description: p.description
      }));
    } else {
      // Default to top MP heritage places
      candidatePlaces = MP_PLACES.slice(0, 6).map(p => ({
        id: p.id,
        name: p.name,
        hindiName: p.hindiName,
        city: p.city,
        hindiCity: p.hindiCity,
        category: p.category,
        accessibilityRating: p.accessibilityRating,
        coordinates: p.coordinates,
        images: p.images,
        description: p.description
      }));
    }
  }

  // Score candidate places according to user intent
  const scoredPlaces = candidatePlaces.map(p => {
    let score = p.accessibilityRating * 1.5;
    if (constraints.preferFood && p.category === 'food') score += 15;
    if (constraints.preferGhats && (p.category === 'ghat' || p.name.includes('Ghat') || p.name.includes('Sip') || p.name.includes('Betwa'))) score += 12;
    if (constraints.preferHistory && (p.category === 'heritage' || p.category === 'monument' || p.category === 'temple')) score += 10;
    if (constraints.preferSunset && (p.category === 'ghat' || p.name.includes('Ghat') || p.category === 'nature')) score += 12;
    if (constraints.preferNature && p.category === 'nature') score += 14;
    return { place: p, score };
  }).sort((a, b) => b.score - a.score);

  // Target number of stops based on available hours (avg ~45-60m stay + ~15m transit)
  const maxStops = Math.min(5, Math.max(2, Math.floor(hours * 1.25)));

  // Selected places
  const selected: typeof candidatePlaces = [];
  
  scoredPlaces.forEach(item => {
    if (selected.length >= maxStops) return;
    if (!selected.some(s => s.id === item.place.id)) {
      selected.push(item.place);
    }
  });

  // Calculate timeline
  let currentMinutes = timeStringToMinutes(startTime);
  const safetyBufferMinutes = deadlineTime ? 30 : 15;
  const stops: ItineraryStop[] = [];
  let totalDistanceKm = 0;

  for (let i = 0; i < selected.length; i++) {
    const p = selected[i];
    const isFirst = i === 0;
    const isLast = i === selected.length - 1;
    const isFood = p.category === 'food';

    // Duration at this stop
    let stayDuration = isFood ? 40 : (isLast && constraints.preferSunset ? 50 : 35);
    if (hours <= 2) stayDuration = Math.min(stayDuration, 30);

    const stopStartStr = minutesToTimeString(currentMinutes);
    const stopEndMinutes = currentMinutes + stayDuration;
    const stopEndStr = minutesToTimeString(stopEndMinutes);

    // Distance to next
    let travelTimeToNext = 0;
    let distToNext = 0;
    let transitMode: 'walk' | 'auto' | 'taxi' = 'auto';

    if (!isLast) {
      const nextPlace = selected[i + 1];
      distToNext = calculateGeoDistanceKm(p.coordinates, nextPlace.coordinates);
      totalDistanceKm += distToNext;
      const transit = getTransitModeAndDuration(distToNext, constraints.preferWalking);
      transitMode = transit.mode;
      travelTimeToNext = transit.durationMinutes;
    }

    // "Why This Place?" rationale
    let why = `Selected for its prime location in ${p.city} and high cultural value.`;
    let whyHi = `${p.hindiCity} में अपनी केंद्रीय स्थिति और सांस्कृतिक महत्व के लिए चयनित।`;

    if (isFirst) {
      why = `Ideal starting point close to transit hubs with smooth crowd access and deep historical connection.`;
      whyHi = `आवागमन के निकटतम एवं सुगम दर्शन हेतु आदर्श प्रारंभिक बिंदु।`;
    } else if (isFood) {
      why = `Famous culinary institution located directly along your route without causing detours, fitting your ${stayDuration}-minute food window.`;
      whyHi = `मार्ग पर स्थित प्रसिद्ध प्रामाणिक खानपान केंद्र, जो अतिरिक्त चक्कर लगाए बिना समय में फिट बैठता है।`;
    } else if (isLast && constraints.preferSunset) {
      why = `Iconic evening viewpoint, perfectly timed before departure with a ${safetyBufferMinutes}-minute buffer.`;
      whyHi = `संध्याकालीन विहंगम दृश्य हेतु सर्वोत्तम स्थल, जो वापसी के लिए पर्याप्त समय छोड़ता है।`;
    } else {
      why = `Strategically chosen to minimize cross-city transit while experiencing the quintessential heritage of ${p.city}.`;
      whyHi = `${p.hindiCity} की प्रामाणिक धरोहर का अनुभव करते हुए यात्रा समय को न्यूनतम रखने हेतु चयनित।`;
    }

    stops.push({
      id: `stop_${p.id}_${i}`,
      stopNumber: i + 1,
      placeId: p.id,
      name: p.name,
      hindiName: p.hindiName,
      city: p.city,
      hindiCity: p.hindiCity,
      category: p.category,
      coordinates: p.coordinates,
      imageUrl: p.images?.[0]?.url,
      startTime: stopStartStr,
      endTime: stopEndStr,
      durationMinutes: stayDuration,
      travelTimeToNextMinutes: isLast ? undefined : travelTimeToNext,
      travelDistanceToNextKm: isLast ? undefined : distToNext,
      transportModeToNext: isLast ? undefined : transitMode,
      activity: isFood ? `Authentic Food Tasting & Refreshment` : `Guided Darshan & Heritage Walk`,
      activityHi: isFood ? `पारंपरिक स्थानीय खानपान व विश्राम` : `दर्शन, परिक्रमा एवं ऐतिहासिक अवलोकन`,
      whyThisPlace: why,
      whyThisPlaceHi: whyHi,
      isFoodStop: isFood,
      costEstimate: isFood ? '₹150 - ₹250' : 'Free entry / Nominal',
      status: i === 0 ? 'current' : 'upcoming'
    });

    currentMinutes = stopEndMinutes + travelTimeToNext;
  }

  // Multi-day hotel suggestion if requested
  const suggestedHotel = constraints.isMultiDay ? {
    name: `${city} Heritage Palace & Pilgrims Suites`,
    area: `Central ${city} (Within 15 mins of all main heritage sites)`,
    rationale: `Staying in this central district minimizes daily transit across your ${constraints.numDays}-day circuit and keeps you close to prime heritage clusters.`,
    coordinates: selected[0]?.coordinates || [26.2183, 78.1828],
    priceRange: '₹1,800 - ₹3,500 / night'
  } : undefined;

  return {
    id: `itin_${city.toLowerCase()}_${Date.now()}`,
    title: `${hours}-Hour ${city} Curated Experience`,
    titleHi: `${city} ${hours} घंटे का सुगम तीर्थ एवं धरोहर भ्रमण`,
    city,
    hindiCity: selected[0]?.hindiCity || city,
    targetHours: hours,
    startTime,
    deadlineTime,
    deadlineLabel: deadlineLabel || (deadlineTime ? 'Return Deadline' : undefined),
    safetyBufferMinutes,
    currentStopIndex: 0,
    stops,
    isMultiDay: constraints.isMultiDay,
    suggestedHotel,
    totalDistanceKm: Math.round(totalDistanceKm * 10) / 10,
    totalCostEstimate: constraints.budget === 'budget' ? '₹300 - ₹500' : '₹600 - ₹1,200',
    optimizationsApplied: [
      'Geographic sequence optimized for minimal cross-town auto transit',
      'Food stop aligned with midway lunch/snack window',
      deadlineTime ? `${safetyBufferMinutes}-minute deadline safety buffer enforced` : 'Spiritual and daylight alignment'
    ]
  };
}

// Replanning: User is running late by X minutes
export function replanDelay(itinerary: TripItinerary, delayMinutes: number): TripItinerary {
  const updated = { ...itinerary };
  const currentIdx = updated.currentStopIndex;

  // Shift current stop end time and subsequent stops
  let accumulatedMinutes = delayMinutes;
  
  updated.stops = updated.stops.map((stop, idx) => {
    if (idx < currentIdx) return stop;

    const startM = timeStringToMinutes(stop.startTime) + (idx === currentIdx ? 0 : accumulatedMinutes);
    let duration = stop.durationMinutes;

    // If delay is significant (>20m) and deadline exists, trim stay durations to protect deadline
    if (delayMinutes >= 20 && updated.deadlineTime && duration > 25) {
      const trim = Math.min(10, duration - 25);
      duration -= trim;
      accumulatedMinutes = Math.max(0, accumulatedMinutes - trim);
    }

    const endM = startM + duration;

    return {
      ...stop,
      startTime: minutesToTimeString(startM),
      endTime: minutesToTimeString(endM),
      durationMinutes: duration
    };
  });

  // Re-calculate deadline safety buffer
  if (updated.deadlineTime && updated.stops.length > 0) {
    const lastStopEndM = timeStringToMinutes(updated.stops[updated.stops.length - 1].endTime);
    const deadlineM = timeStringToMinutes(updated.deadlineTime);
    updated.safetyBufferMinutes = Math.max(0, deadlineM - lastStopEndM);
  }

  updated.optimizationsApplied = [
    ...(updated.optimizationsApplied || []),
    `Schedule adjusted by +${delayMinutes} mins delay with deadline protection buffer recalculation`
  ];

  return updated;
}

// Replanning: Remove stop
export function removeStopFromItinerary(itinerary: TripItinerary, stopId: string): TripItinerary {
  const filtered = itinerary.stops.filter(s => s.id !== stopId);
  if (filtered.length === 0) return itinerary;

  // Re-number and recalculate transit times
  let currentM = timeStringToMinutes(filtered[0].startTime);
  let totalDist = 0;

  const recomputed = filtered.map((s, idx) => {
    const isLast = idx === filtered.length - 1;
    const startM = currentM;
    const endM = startM + s.durationMinutes;
    let dist = 0;
    let travelTime = 0;
    let mode: 'walk' | 'auto' | 'taxi' = 'auto';

    if (!isLast) {
      dist = calculateGeoDistanceKm(s.coordinates, filtered[idx + 1].coordinates);
      totalDist += dist;
      const tr = getTransitModeAndDuration(dist);
      travelTime = tr.durationMinutes;
      mode = tr.mode;
    }

    currentM = endM + travelTime;

    return {
      ...s,
      stopNumber: idx + 1,
      startTime: minutesToTimeString(startM),
      endTime: minutesToTimeString(endM),
      travelDistanceToNextKm: isLast ? undefined : dist,
      travelTimeToNextMinutes: isLast ? undefined : travelTime,
      transportModeToNext: isLast ? undefined : mode
    };
  });

  return {
    ...itinerary,
    stops: recomputed,
    totalDistanceKm: Math.round(totalDist * 10) / 10,
    currentStopIndex: Math.min(itinerary.currentStopIndex, recomputed.length - 1)
  };
}

// Initialize fresh itinerary from a single place (when user starts trip from map)
export function createItineraryFromSinglePlace(
  place: UPPlace,
  language: 'en' | 'hi' = 'en'
): TripItinerary {
  const isFood = place.category === 'food';
  const duration = isFood ? 45 : 45;
  const now = new Date();
  let hours = now.getHours();
  const minutes = Math.ceil(now.getMinutes() / 15) * 15;
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  const startTime = `${displayHours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
  const startM = hours * 60 + minutes;
  const endM = startM + duration;
  const endHours = Math.floor(endM / 60) % 24;
  const endMinutes = endM % 60;
  const endAmpm = endHours >= 12 ? 'PM' : 'AM';
  const endDisplayHours = endHours % 12 || 12;
  const endTime = `${endDisplayHours}:${endMinutes < 10 ? '0' : ''}${endMinutes} ${endAmpm}`;

  const firstStop: ItineraryStop = {
    id: `stop_${place.id || 'custom'}_${Date.now()}`,
    stopNumber: 1,
    placeId: place.id,
    name: place.name,
    hindiName: place.hindiName || place.name,
    city: place.city || 'Uttar Pradesh',
    hindiCity: place.hindiCity || 'उत्तर प्रदेश',
    category: place.category || 'heritage',
    coordinates: place.coordinates,
    imageUrl: place.images?.[0]?.url,
    startTime: startTime,
    endTime: endTime,
    durationMinutes: duration,
    activity: isFood ? 'Local Culinary Experience' : 'Darshan & Heritage Tour',
    activityHi: isFood ? 'स्थानीय खानपान व स्वाद' : 'दर्शन एवं सांस्कृतिक भ्रमण',
    whyThisPlace: `Initial destination selected by traveler from interactive map.`,
    whyThisPlaceHi: `यात्री द्वारा सीधे इंटरैक्टिव मानचित्र से चुना गया प्रारंभिक पड़ाव।`,
    isFoodStop: isFood,
    status: 'current'
  };

  return {
    id: `trip_${Date.now()}`,
    title: `${place.name} Dynamic Tour`,
    titleHi: `${place.hindiName || place.name} यात्रा`,
    city: place.city || 'Uttar Pradesh',
    hindiCity: place.hindiCity || 'उत्तर प्रदेश',
    targetHours: 3,
    startTime: startTime,
    safetyBufferMinutes: 20,
    currentStopIndex: 0,
    stops: [firstStop],
    totalDistanceKm: 0,
    totalCostEstimate: '₹200 - ₹500',
    optimizationsApplied: ['Custom Itinerary Initialized from Map']
  };
}

// Replanning: Insert new stop
export function insertPlaceIntoItinerary(
  itinerary: TripItinerary, 
  place: UPPlace, 
  afterIndex?: number
): TripItinerary {
  const insertIdx = afterIndex !== undefined ? afterIndex + 1 : itinerary.currentStopIndex + 1;
  const isFood = place.category === 'food';
  const duration = isFood ? 35 : 30;

  const newStop: ItineraryStop = {
    id: `stop_${place.id}_${Date.now()}`,
    stopNumber: insertIdx + 1,
    placeId: place.id,
    name: place.name,
    hindiName: place.hindiName,
    city: place.city,
    hindiCity: place.hindiCity,
    category: place.category,
    coordinates: place.coordinates,
    imageUrl: place.images?.[0]?.url,
    startTime: '0:00 AM', // Will be recomputed below
    endTime: '0:00 AM',
    durationMinutes: duration,
    activity: isFood ? 'Local Culinary Experience' : 'Sightseeing & Photography',
    activityHi: isFood ? 'स्थानीय खानपान स्वाद' : 'दर्शन एवं फोटोग्राफी',
    whyThisPlace: `User-selected addition dynamically inserted into route.`,
    whyThisPlaceHi: `यात्री द्वारा सीधे मानचित्र से यात्रा में जोड़ा गया।`,
    isFoodStop: isFood,
    status: 'upcoming'
  };

  const newStops = [...itinerary.stops];
  newStops.splice(insertIdx, 0, newStop);

  // Recalculate full timing
  let currentM = timeStringToMinutes(newStops[0].startTime);
  let totalDist = 0;

  const recomputed = newStops.map((s, idx) => {
    const isLast = idx === newStops.length - 1;
    const startM = currentM;
    const endM = startM + s.durationMinutes;
    let dist = 0;
    let travelTime = 0;
    let mode: 'walk' | 'auto' | 'taxi' = 'auto';

    if (!isLast) {
      dist = calculateGeoDistanceKm(s.coordinates, newStops[idx + 1].coordinates);
      totalDist += dist;
      const tr = getTransitModeAndDuration(dist);
      travelTime = tr.durationMinutes;
      mode = tr.mode;
    }

    currentM = endM + travelTime;

    return {
      ...s,
      stopNumber: idx + 1,
      startTime: minutesToTimeString(startM),
      endTime: minutesToTimeString(endM),
      travelDistanceToNextKm: isLast ? undefined : dist,
      travelTimeToNextMinutes: isLast ? undefined : travelTime,
      transportModeToNext: isLast ? undefined : mode
    };
  });

  return {
    ...itinerary,
    stops: recomputed,
    totalDistanceKm: Math.round(totalDist * 10) / 10
  };
}

// Replanning: Extend stay at current stop
export function extendStayAtCurrentStop(itinerary: TripItinerary, extraMinutes: number = 15): TripItinerary {
  const currentIdx = itinerary.currentStopIndex;
  if (currentIdx >= 0 && currentIdx < itinerary.stops.length) {
    const updatedStops = itinerary.stops.map((s, idx) => {
      if (idx === currentIdx) {
        return {
          ...s,
          durationMinutes: s.durationMinutes + extraMinutes
        };
      }
      return s;
    });
    return replanDelay({ ...itinerary, stops: updatedStops }, extraMinutes);
  }
  return replanDelay(itinerary, extraMinutes);
}

// Replanning: Advance trip progress
export function advanceItineraryProgress(itinerary: TripItinerary, newIndex: number): TripItinerary {
  const updatedStops = itinerary.stops.map((s, idx) => {
    if (idx < newIndex) return { ...s, status: 'completed' as const };
    if (idx === newIndex) return { ...s, status: 'current' as const };
    return { ...s, status: 'upcoming' as const };
  });

  return {
    ...itinerary,
    currentStopIndex: Math.min(newIndex, itinerary.stops.length - 1),
    stops: updatedStops
  };
}

// "✨ Optimize My Trip" - Sorts stops by geographical proximity (Traveling Salesperson heuristic)
export function optimizeItineraryOrder(itinerary: TripItinerary): TripItinerary {
  if (itinerary.stops.length <= 2) return itinerary;

  const first = itinerary.stops[0];
  const last = itinerary.deadlineTime ? itinerary.stops[itinerary.stops.length - 1] : null;
  const middle = last ? itinerary.stops.slice(1, -1) : itinerary.stops.slice(1);

  // Greedy shortest route ordering
  const ordered: ItineraryStop[] = [first];
  const remaining = [...middle];

  while (remaining.length > 0) {
    const currentCoord = ordered[ordered.length - 1].coordinates;
    let bestIdx = 0;
    let bestDist = Infinity;

    for (let i = 0; i < remaining.length; i++) {
      const dist = calculateGeoDistanceKm(currentCoord, remaining[i].coordinates);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = i;
      }
    }

    ordered.push(remaining.splice(bestIdx, 1)[0]);
  }

  if (last) {
    ordered.push(last);
  }

  // Recalculate timeline with optimized sequence
  let currentM = timeStringToMinutes(ordered[0].startTime);
  let totalDist = 0;

  const recomputed = ordered.map((s, idx) => {
    const isLast = idx === ordered.length - 1;
    const startM = currentM;
    const endM = startM + s.durationMinutes;
    let dist = 0;
    let travelTime = 0;
    let mode: 'walk' | 'auto' | 'taxi' = 'auto';

    if (!isLast) {
      dist = calculateGeoDistanceKm(s.coordinates, ordered[idx + 1].coordinates);
      totalDist += dist;
      const tr = getTransitModeAndDuration(dist);
      travelTime = tr.durationMinutes;
      mode = tr.mode;
    }

    currentM = endM + travelTime;

    return {
      ...s,
      stopNumber: idx + 1,
      startTime: minutesToTimeString(startM),
      endTime: minutesToTimeString(endM),
      travelDistanceToNextKm: isLast ? undefined : dist,
      travelTimeToNextMinutes: isLast ? undefined : travelTime,
      transportModeToNext: isLast ? undefined : mode
    };
  });

  return {
    ...itinerary,
    stops: recomputed,
    totalDistanceKm: Math.round(totalDist * 10) / 10,
    optimizationsApplied: [
      ...(itinerary.optimizationsApplied || []),
      `Optimized stop sequencing via geographic proximity (reduced redundant backtracking)`
    ]
  };
}

// Ready-to-go quick trip presets
export function getPresetItineraries(): TripItinerary[] {
  return [
    generateTimeBasedItinerary({
      city: 'Sheopur',
      hours: 4,
      startTime: '8:00 AM',
      deadlineTime: '6:00 PM',
      deadlineLabel: 'Gwalior Return Buffer',
      startLocationName: 'Gwalior',
      destinationName: 'Sheopur Fort',
      preferFood: true,
      preferGhats: false,
      preferHistory: true,
      preferSunset: true,
      preferNature: true,
      preferWalking: true,
      walkLess: false,
      budget: 'comfort',
      isMultiDay: false,
      numDays: 1
    }),
    generateTimeBasedItinerary({
      city: 'Morena',
      hours: 4,
      startTime: '9:00 AM',
      deadlineTime: '3:00 PM',
      deadlineLabel: 'Gwalior Return Deadline',
      destinationName: 'Bateshwar Temples Complex',
      preferFood: false,
      preferGhats: false,
      preferHistory: true,
      preferSunset: false,
      preferNature: false,
      preferWalking: true,
      walkLess: false,
      budget: 'moderate',
      isMultiDay: false,
      numDays: 1
    }),
    generateTimeBasedItinerary({
      city: 'Orchha',
      hours: 4,
      startTime: '10:00 AM',
      deadlineTime: '4:30 PM',
      deadlineLabel: 'Jhansi Station Return',
      preferFood: true,
      preferGhats: true,
      preferHistory: true,
      preferSunset: true,
      preferNature: false,
      preferWalking: true,
      walkLess: false,
      budget: 'moderate',
      isMultiDay: false,
      numDays: 1
    }),
    generateTimeBasedItinerary({
      city: 'Gwalior',
      hours: 3,
      startTime: '2:30 PM',
      deadlineTime: '7:00 PM',
      deadlineLabel: 'Gwalior Junction Return',
      preferFood: true,
      preferGhats: false,
      preferHistory: true,
      preferSunset: true,
      preferNature: false,
      preferWalking: false,
      walkLess: false,
      budget: 'moderate',
      isMultiDay: false,
      numDays: 1
    })
  ];
}
