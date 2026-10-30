import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Compass, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Camera, 
  Navigation, 
  ArrowRight, 
  Search, 
  Car, 
  Train, 
  Layers, 
  Info, 
  X, 
  ExternalLink,
  BookOpen,
  Landmark,
  Share2,
  Calendar,
  CheckCircle2,
  SlidersHorizontal,
  Route,
  ChevronRight,
  Plus
} from 'lucide-react';
import { toast } from 'sonner';

import { MP_50_HERITAGE_SITES, type MP50HeritageSite } from '../../data/mp-50-heritage-sites';

export type MPSiteDetail = MP50HeritageSite;
export const MP_HERITAGE_SITES: MPSiteDetail[] = MP_50_HERITAGE_SITES;

interface MPSitesShowcaseProps {
  theme: 'morning' | 'evening';
  language: 'en' | 'hi';
  onFocusMapLocation: (coords: [number, number]) => void;
  onAskAI: (prompt: string) => void;
  onAddPlaceToItinerary?: (place: any) => void;
}

export function MPSitesShowcase({
  theme,
  language,
  onFocusMapLocation,
  onAskAI,
  onAddPlaceToItinerary
}: MPSitesShowcaseProps) {
  const [selectedSiteId, setSelectedSiteId] = useState<string>(MP_HERITAGE_SITES[0].id);
  const [activeTab, setActiveTab] = useState<'history' | 'culture' | 'architecture' | 'reach' | 'practical'>('history');
  const [zoneFilter, setZoneFilter] = useState<'all' | 'chambal' | 'gwalior' | 'shivpuri' | 'central' | 'malwa' | 'nimar' | 'bundelkhand' | 'baghelkhand' | 'mahakoshal'>('all');
  const [confidenceFilter, setConfidenceFilter] = useState<'all' | 'HIGH' | 'MEDIUM' | 'LOW'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);

  const selectedSite = MP_HERITAGE_SITES.find(s => s.id === selectedSiteId) || MP_HERITAGE_SITES[0];

  const handleAddToTrip = () => {
    if (onAddPlaceToItinerary) {
      onAddPlaceToItinerary({
        id: selectedSite.id,
        name: { en: selectedSite.name.en, hi: selectedSite.name.hi },
        coordinates: selectedSite.coordinates,
        city: selectedSite.district.en,
        hindiCity: selectedSite.district.hi,
        category: 'heritage',
        durationHours: 2,
        heroImage: selectedSite.heroImage,
        tagline: selectedSite.tagline.en
      });
    } else {
      toast.info(language === 'hi' ? 'यात्रा कोपायलट में जोड़ा गया' : 'Added to Copilot trip');
    }
  };

  const filteredSites = MP_HERITAGE_SITES.filter(site => {
    const matchesZone = zoneFilter === 'all' || site.zone === zoneFilter;
    const matchesConf = confidenceFilter === 'all' || site.routeConfidence === confidenceFilter;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      !q || 
      site.name.en.toLowerCase().includes(q) || 
      site.name.hi.includes(q) ||
      site.district.en.toLowerCase().includes(q) ||
      site.district.hi.includes(q) ||
      site.focus.en.toLowerCase().includes(q) ||
      site.history.dynasty.en.toLowerCase().includes(q);
    return matchesZone && matchesConf && matchesSearch;
  });

  const zones = [
    { id: 'all' as const, label: { en: 'All 50 Sites', hi: 'सभी 50 धरोहरें' }, count: MP_HERITAGE_SITES.length },
    { id: 'chambal' as const, label: { en: 'Chambal (Morena, Bhind, Sheopur)', hi: 'चंबल परिपथ' }, count: MP_HERITAGE_SITES.filter(s => s.zone === 'chambal').length },
    { id: 'gwalior' as const, label: { en: 'Gwalior Citadel', hi: 'ग्वालियर दुर्ग' }, count: MP_HERITAGE_SITES.filter(s => s.zone === 'gwalior').length },
    { id: 'shivpuri' as const, label: { en: 'Shivpuri Region', hi: 'शिवपुरी क्षेत्र' }, count: MP_HERITAGE_SITES.filter(s => s.zone === 'shivpuri').length },
    { id: 'central' as const, label: { en: 'Central MP (Sanchi, Bhimbetka, Vidisha)', hi: 'मध्य क्षेत्र (सांची, भीमबेटका)' }, count: MP_HERITAGE_SITES.filter(s => s.zone === 'central').length },
    { id: 'malwa' as const, label: { en: 'Malwa (Mandu, Dhar, Indore, Ujjain)', hi: 'मालवा (मांडू, धार, उज्जैन)' }, count: MP_HERITAGE_SITES.filter(s => s.zone === 'malwa').length },
    { id: 'nimar' as const, label: { en: 'Nimar (Burhanpur, Maheshwar, Omkareshwar)', hi: 'निमाड़ (बुरहानपुर, महेश्वर)' }, count: MP_HERITAGE_SITES.filter(s => s.zone === 'nimar').length },
    { id: 'bundelkhand' as const, label: { en: 'Bundelkhand (Chanderi, Eran, Niwari)', hi: 'बुंदेलखंड (चंदेरी, एरण)' }, count: MP_HERITAGE_SITES.filter(s => s.zone === 'bundelkhand').length },
    { id: 'baghelkhand' as const, label: { en: 'Baghelkhand (Panna, Rewa, Satna, Umaria)', hi: 'बघेलखंड (पन्ना, रीवा, बांधवगढ़)' }, count: MP_HERITAGE_SITES.filter(s => s.zone === 'baghelkhand').length },
    { id: 'mahakoshal' as const, label: { en: 'Mahakoshal (Jabalpur, Katni)', hi: 'महाकौशल (जबलपुर, कटनी)' }, count: MP_HERITAGE_SITES.filter(s => s.zone === 'mahakoshal').length }
  ];

  return (
    <div className="w-full h-full overflow-y-auto bg-[var(--bg-primary)] p-4 md:p-6 lg:p-8 space-y-6 select-text">
      {/* Top Banner / Destination Portal Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="editorial-card rounded-2xl p-5 md:p-6 border border-[var(--glass-border)] shadow-sm relative overflow-hidden bg-[var(--card-bg)]"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-semibold tracking-wide px-2.5 py-0.5 rounded-md bg-[var(--color-surface-secondary)] text-[var(--color-text-primary)] border border-[var(--color-border)]">
                Madhya Pradesh Tourism Guide
              </span>
              <span className="text-[11px] font-medium tracking-wide px-2.5 py-0.5 rounded-md bg-[#183D32]/10 dark:bg-[#34D399]/15 text-[#183D32] dark:text-[#34D399] border border-[#183D32]/20 dark:border-[#34D399]/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#183D32] dark:bg-[#34D399]" />
                ASI Protected Heritage
              </span>
              <span className="text-[11px] text-[var(--text-secondary)]">
                {language === 'hi' ? 'चंबल • ग्वालियर • बुंदेलखंड • मालवा' : 'Chambal • Gwalior • Bundelkhand • Malwa'}
              </span>
            </div>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-[var(--text-primary)] font-display">
              {language === 'hi' 
                ? 'बियॉन्ड द फोर्ट — मध्य प्रदेश की पुरातात्विक व सांस्कृतिक धरोहरें'
                : 'Beyond the Fort — Archaeological & Cultural Wonders of Madhya Pradesh'}
            </h2>

            <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
              {language === 'hi'
                ? 'ग्वालियर दुर्ग, मुरैना के बटेश्वर (200 मंदिर), मितावली, गढ़ी पढ़ावली और ककनमठ से लेकर ओरछा और चंदेरी के महलों का प्रामाणिक ऐतिहासिक, वास्तुशिल्पीय व यात्रा मार्गदर्शक।'
                : 'A curated historical and travel guide to extraordinary medieval monuments across Morena, Gwalior Citadel, Orchha Riverfront Palaces, and Chanderi.'}
            </p>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0 self-start md:self-auto">
            <button
              onClick={() => onAskAI('मध्य प्रदेश की अनदेखी धरोहरों (बटेश्वर, मितावली, पढ़ावली, ककनमठ) का 4 घंटे का संपूर्ण हेरिटेज टूर प्लान बताएं।')}
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-[#A94327] hover:bg-[#8F361E] text-white shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#D6A85B]" />
              <span>{language === 'hi' ? 'टूर प्लान बनाएं' : 'Plan Heritage Tour'}</span>
            </button>
          </div>
        </div>

        {/* Zone Filters & Search */}
        <div className="mt-5 pt-4 border-t border-[var(--glass-border)] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide py-1">
            {zones.map(z => {
              const isSelected = zoneFilter === z.id;
              return (
                <button
                  key={z.id}
                  onClick={() => setZoneFilter(z.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-[var(--color-primary)] text-white border-transparent shadow-xs'
                      : 'glass border-[var(--glass-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <span>{language === 'hi' ? z.label.hi : z.label.en}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-black/25 text-white font-bold' : 'bg-[var(--color-surface-secondary)] text-[var(--color-text-primary)] font-bold'}`}>
                    {z.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Route Confidence Filter */}
            <div className="flex items-center gap-1 p-0.5 rounded-full glass border border-[var(--glass-border)]">
              {(['all', 'HIGH', 'MEDIUM', 'LOW'] as const).map(conf => (
                <button
                  key={conf}
                  onClick={() => setConfidenceFilter(conf)}
                  className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
                    confidenceFilter === conf
                      ? conf === 'HIGH'
                        ? 'bg-emerald-700 text-white shadow-xs'
                        : conf === 'MEDIUM'
                        ? 'bg-amber-700 text-white shadow-xs'
                        : conf === 'LOW'
                        ? 'bg-rose-700 text-white shadow-xs'
                        : 'bg-[var(--color-primary)] text-white shadow-xs'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {conf === 'all' ? (language === 'hi' ? 'सभी मार्ग' : 'All Routes') : `${conf}`}
                </button>
              ))}
            </div>

            <div className="relative min-w-[200px]">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={language === 'hi' ? 'धरोहर या राजवंश खोजें...' : 'Search 50 sites, dynasty...'}
                className="w-full pl-8 pr-3 py-1.5 text-xs rounded-full glass border border-[var(--glass-border)] bg-transparent text-[var(--text-primary)] focus:outline-none focus:border-[var(--color-primary)]"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Two-Column Layout: Left Thumbnails List & Right Deep-Dive Page */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Destination Cards Selector */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] flex items-center gap-1.5">
              <Landmark className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'धरोहर स्थल तालिका' : 'Heritage Destinations'} ({filteredSites.length})</span>
            </span>
            <span className="text-[11px] text-[var(--text-secondary)]">
              {language === 'hi' ? 'विवरण देखने के लिए चुनें' : 'Click card to view details'}
            </span>
          </div>

          <div className="space-y-2.5">
            {filteredSites.map(site => {
              const isSelected = site.id === selectedSiteId;
              return (
                <motion.div
                  key={site.id}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setSelectedSiteId(site.id)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex gap-3 relative overflow-hidden ${
                    isSelected
                      ? 'editorial-card border-[var(--color-primary)] shadow-md bg-[var(--color-surface-secondary)]/30'
                      : 'glass border-[var(--glass-border)] hover:border-[var(--color-primary)]/50'
                  }`}
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-neutral-200 dark:bg-neutral-800 border border-[var(--glass-border)]">
                    <img 
                      src={site.heroImage} 
                      alt={site.name.en}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                    />
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                    <div>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-[var(--color-surface-secondary)] text-[var(--color-text-secondary)]">
                          #{site.num}
                        </span>
                        <span className={`text-[10px] font-medium tracking-tight px-2 py-0.5 rounded-md truncate max-w-[150px] border ${
                          site.category === 'fort' || site.category === 'palace'
                            ? 'bg-[#A94327]/10 text-[#A94327] dark:text-[#E06D4E] border-[#A94327]/20'
                            : site.category === 'temple'
                            ? 'bg-[#A77C35]/10 text-[#7A5617] dark:text-[#D6A85B] border-[#A77C35]/25'
                            : 'bg-[var(--color-surface-secondary)] text-[var(--color-text-primary)] border-[var(--color-border)]'
                        }`}>
                          {language === 'hi' ? site.badge.hi : site.badge.en}
                        </span>
                        <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-md uppercase border ${
                          site.routeConfidence === 'HIGH'
                            ? 'bg-[#183D32]/10 dark:bg-[#34D399]/15 text-[#183D32] dark:text-[#34D399] border-[#183D32]/20 dark:border-[#34D399]/30'
                            : site.routeConfidence === 'MEDIUM'
                            ? 'bg-[#8A4B08]/10 dark:bg-[#FBBF24]/15 text-[#8A4B08] dark:text-[#FBBF24] border-[#8A4B08]/20 dark:border-[#FBBF24]/30'
                            : 'bg-[var(--color-surface-secondary)] text-[var(--color-text-secondary)] border-[var(--color-border)]'
                        }`}>
                          {site.routeConfidence}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-[var(--text-primary)] truncate mt-1">
                        {language === 'hi' ? site.name.hi : site.name.en}
                      </h3>
                      <p className="text-[11px] text-[var(--text-secondary)] truncate flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-[var(--accent-primary)] flex-shrink-0" />
                        <span>{language === 'hi' ? site.district.hi : site.district.en}</span>
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-[var(--text-secondary)] pt-1 border-t border-[var(--glass-border)]/50">
                      <span>{language === 'hi' ? site.history.period.hi : site.history.period.en}</span>
                      <span className="font-semibold text-[var(--accent-primary)] flex items-center gap-0.5">
                        {language === 'hi' ? 'विस्तार' : 'Explore'} <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Comprehensive Destination Showcase Article */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSite.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="editorial-card rounded-2xl border border-[var(--glass-border)] shadow-2xl overflow-hidden bg-[var(--card-bg)] backdrop-blur-md"
            >
              {/* Monument Hero Header with Badges */}
              <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
                <img 
                  src={selectedSite.heroImage} 
                  alt={selectedSite.name.en}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                {/* Top Floating Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-stone-900/90 text-white border border-white/20 shadow-lg backdrop-blur-md">
                    {language === 'hi' ? selectedSite.badge.hi : selectedSite.badge.en}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleAddToTrip}
                      className="px-3 py-1.5 rounded-full text-xs font-bold bg-[#A94327] hover:bg-[#8F361E] text-white border border-white/20 shadow-md transition-all flex items-center gap-1.5 cursor-pointer backdrop-blur-md"
                      title={language === 'hi' ? 'यात्रा कोपायलट में जोड़ें' : 'Add to Trip Copilot'}
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>{language === 'hi' ? 'यात्रा में जोड़ें' : 'Add to Trip'}</span>
                    </button>
                    <a
                      href={selectedSite.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-full text-xs font-bold glass text-white border border-white/20 shadow-md hover:bg-white/20 transition-all flex items-center gap-1.5 cursor-pointer backdrop-blur-md"
                      title="Open in Google Maps"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
                      <span>{language === 'hi' ? 'गूगल मैप्स' : 'Google Maps'}</span>
                    </a>
                    <button
                      onClick={() => onFocusMapLocation(selectedSite.coordinates)}
                      className="px-3 py-1.5 rounded-full text-xs font-bold glass text-white border border-white/20 shadow-md hover:bg-white/20 transition-all flex items-center gap-1.5 cursor-pointer backdrop-blur-md"
                      title="Focus on map"
                    >
                      <Navigation className="w-3.5 h-3.5 text-white" />
                      <span>{language === 'hi' ? 'मानचित्र में देखें' : 'View on Map'}</span>
                    </button>
                  </div>
                </div>

                {/* Title & Tagline Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-orange-300 font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{language === 'hi' ? selectedSite.district.hi : selectedSite.district.en}</span>
                    <span>•</span>
                    <span>{language === 'hi' ? selectedSite.history.dynasty.hi : selectedSite.history.dynasty.en}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-display tracking-tight text-white drop-shadow-md">
                    {language === 'hi' ? selectedSite.name.hi : selectedSite.name.en}
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-200 line-clamp-2 max-w-2xl font-medium">
                    {language === 'hi' ? selectedSite.tagline.hi : selectedSite.tagline.en}
                  </p>
                </div>
              </div>

              {/* Photo Showcase Strip with Clickable Lightbox */}
              {selectedSite.gallery && selectedSite.gallery.length > 0 && (
                <div className="p-4 bg-[var(--bg-secondary)] border-b border-[var(--glass-border)]">
                  <div className="flex items-center justify-between mb-2 px-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] flex items-center gap-1.5">
                      <Camera className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                      <span>{language === 'hi' ? 'प्रामाणिक छायाचित्र गैलरी' : 'Authentic Site Gallery'}</span>
                    </span>
                    <span className="text-[10px] text-[var(--text-secondary)]">
                      {language === 'hi' ? 'बड़ा देखने के लिए क्लिक करें' : 'Click photo to enlarge'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {selectedSite.gallery.map((img, idx) => (
                      <div
                        key={idx}
                        onClick={() => setActiveLightboxImage(img.url)}
                        className="group relative h-24 sm:h-28 rounded-xl overflow-hidden cursor-pointer border border-[var(--glass-border)]"
                      >
                        <img 
                          src={img.url} 
                          alt={img.caption.en}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2">
                          <p className="text-[10px] text-white font-medium text-center line-clamp-2">
                            {language === 'hi' ? img.caption.hi : img.caption.en}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation Tab Bar for the Deep-Dive Sections */}
              <div className="px-4 border-b border-[var(--glass-border)] flex items-center gap-2 overflow-x-auto scrollbar-hide bg-[var(--bg-primary)]">
                <button
                  onClick={() => setActiveTab('history')}
                  className={`py-3 px-3 text-xs font-bold relative flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === 'history'
                      ? 'text-[var(--accent-primary)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{language === 'hi' ? 'इतिहास व राजवंश' : 'History & Dynasties'}</span>
                  {activeTab === 'history' && (
                    <motion.div
                      layoutId="activeDossierTab"
                      className="absolute bottom-0 inset-x-0 h-0.5 bg-[var(--accent-primary)] rounded-full"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab('culture')}
                  className={`py-3 px-3 text-xs font-bold relative flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === 'culture'
                      ? 'text-[var(--accent-primary)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{language === 'hi' ? 'संस्कृति व महत्व' : 'Culture & Purpose'}</span>
                  {activeTab === 'culture' && (
                    <motion.div
                      layoutId="activeDossierTab"
                      className="absolute bottom-0 inset-x-0 h-0.5 bg-[var(--accent-primary)] rounded-full"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`py-3 px-3 text-xs font-bold relative flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === 'architecture'
                      ? 'text-[var(--accent-primary)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>{language === 'hi' ? 'वास्तुकला व इंजीनियरिंग' : 'Architecture & Civil Art'}</span>
                  {activeTab === 'architecture' && (
                    <motion.div
                      layoutId="activeDossierTab"
                      className="absolute bottom-0 inset-x-0 h-0.5 bg-[var(--accent-primary)] rounded-full"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab('reach')}
                  className={`py-3 px-3 text-xs font-bold relative flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === 'reach'
                      ? 'text-[var(--accent-primary)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <Car className="w-3.5 h-3.5" />
                  <span>{language === 'hi' ? 'पहुंचने का मार्ग व टैक्सी' : 'How to Reach & Transit'}</span>
                  {activeTab === 'reach' && (
                    <motion.div
                      layoutId="activeDossierTab"
                      className="absolute bottom-0 inset-x-0 h-0.5 bg-[var(--accent-primary)] rounded-full"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab('practical')}
                  className={`py-3 px-3 text-xs font-bold relative flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === 'practical'
                      ? 'text-[var(--accent-primary)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>{language === 'hi' ? 'समय, टिकट व सलाह' : 'Visiting Hours & Tips'}</span>
                  {activeTab === 'practical' && (
                    <motion.div
                      layoutId="activeDossierTab"
                      className="absolute bottom-0 inset-x-0 h-0.5 bg-[var(--accent-primary)] rounded-full"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                </button>
              </div>

              {/* Tab Content Body */}
              <div className="p-5 md:p-6 space-y-5">
                {/* 1. History & Dynasty Tab */}
                {activeTab === 'history' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--glass-border)]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                          {language === 'hi' ? 'संबंधित राजवंश' : 'Ruling Dynasty'}
                        </span>
                        <p className="text-sm font-bold text-[var(--text-primary)] mt-0.5">
                          {language === 'hi' ? selectedSite.history.dynasty.hi : selectedSite.history.dynasty.en}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--glass-border)]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                          {language === 'hi' ? 'ऐतिहासिक कालखंड' : 'Historical Period'}
                        </span>
                        <p className="text-sm font-bold text-[var(--text-primary)] mt-0.5">
                          {language === 'hi' ? selectedSite.history.period.hi : selectedSite.history.period.en}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-sm font-bold text-[var(--text-primary)]">
                        {language === 'hi' ? '📜 ऐतिहासिक गाथा एवं पुरातात्विक पृष्ठभूमि' : '📜 Historical Narrative & Archaeological Background'}
                      </h3>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                        {language === 'hi' ? selectedSite.history.chronicle.hi : selectedSite.history.chronicle.en}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1.5">
                      <h3 className="text-xs font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4" />
                        <span>{language === 'hi' ? 'ASI संरक्षण एवं पुनरुद्धार अभिलेख' : 'ASI Conservation & Archaeological Record'}</span>
                      </h3>
                      <p className="text-xs text-[var(--text-primary)] leading-relaxed">
                        {language === 'hi' ? selectedSite.history.asiSignificance.hi : selectedSite.history.asiSignificance.en}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* 2. Culture & Purpose Tab */}
                {activeTab === 'culture' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--glass-border)] space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent-primary)]">
                        {language === 'hi' ? 'भ्रमण का उद्देश्य एवं आध्यात्मिक महत्व (Travel Cause)' : 'Travel Purpose & Spiritual Significance'}
                      </span>
                      <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed font-medium">
                        {language === 'hi' ? selectedSite.culture.significance.hi : selectedSite.culture.significance.en}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-sm font-bold text-[var(--text-primary)]">
                        {language === 'hi' ? '🕉️ पौराणिक आख्यान एवं देव स्वरूप' : '🕉️ Mythology & Deities'}
                      </h3>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                        {language === 'hi' ? selectedSite.culture.mythology.hi : selectedSite.culture.mythology.en}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-[var(--glass-border)] bg-[var(--bg-primary)] space-y-1">
                      <h4 className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                        <span>{language === 'hi' ? 'जीवंत लोक परंपरा एवं त्यौहार' : 'Living Traditions & Seasonal Festivals'}</span>
                      </h4>
                      <p className="text-xs text-[var(--text-secondary)]">
                        {language === 'hi' ? selectedSite.culture.livingTradition.hi : selectedSite.culture.livingTradition.en}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* 3. Architecture & Civil Art Tab */}
                {activeTab === 'architecture' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <div className="p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--glass-border)]">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent-primary)]">
                        {language === 'hi' ? 'स्थापत्य शैली' : 'Architectural Style'}
                      </span>
                      <p className="text-sm font-bold text-[var(--text-primary)] mt-0.5">
                        {language === 'hi' ? selectedSite.architecture.style.hi : selectedSite.architecture.style.en}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-sm font-bold text-[var(--text-primary)]">
                        {language === 'hi' ? '📐 इंजीनियरिंग एवं संरचनात्मक विशेषताएं' : '📐 Civil Engineering & Structural Highlights'}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {(language === 'hi' ? selectedSite.architecture.engineeringHighlights.hi : selectedSite.architecture.engineeringHighlights.en).map((item, idx) => (
                          <div key={idx} className="p-3 rounded-xl border border-[var(--glass-border)] bg-[var(--bg-secondary)] flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <p className="text-xs text-[var(--text-primary)]">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider">
                        {language === 'hi' ? 'वास्तुशिल्पीय विश्लेषण' : 'Architectural Overview'}
                      </h3>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                        {language === 'hi' ? selectedSite.architecture.architecturalNotes.hi : selectedSite.architecture.architecturalNotes.en}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* 4. How to Reach & Transit Tab */}
                {activeTab === 'reach' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--glass-border)] space-y-1">
                        <div className="flex items-center gap-1.5 text-orange-900 dark:text-orange-300 text-xs font-bold">
                          <Car className="w-3.5 h-3.5" />
                          <span>{language === 'hi' ? 'सड़क मार्ग' : 'Road Distance'}</span>
                        </div>
                        <p className="text-xs text-[var(--text-primary)] font-medium">
                          {language === 'hi' ? selectedSite.howToReach.fromHub.hi : selectedSite.howToReach.fromHub.en}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--glass-border)] space-y-1">
                        <div className="flex items-center gap-1.5 text-blue-900 dark:text-blue-300 text-xs font-bold">
                          <Train className="w-3.5 h-3.5" />
                          <span>{language === 'hi' ? 'निकटतम रेलवे स्टेशन' : 'Nearest Railway'}</span>
                        </div>
                        <p className="text-xs text-[var(--text-primary)] font-medium">
                          {language === 'hi' ? selectedSite.howToReach.nearestRail.hi : selectedSite.howToReach.nearestRail.en}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--glass-border)] space-y-1">
                        <div className="flex items-center gap-1.5 text-purple-900 dark:text-purple-300 text-xs font-bold">
                          <Navigation className="w-3.5 h-3.5" />
                          <span>{language === 'hi' ? 'हवाई अड्डा' : 'Nearest Airport'}</span>
                        </div>
                        <p className="text-xs text-[var(--text-primary)] font-medium">
                          {language === 'hi' ? selectedSite.howToReach.nearestAir.hi : selectedSite.howToReach.nearestAir.en}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-[var(--glass-border)] bg-[var(--bg-secondary)] space-y-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                          {language === 'hi' ? 'सड़क की स्थिति' : 'Road Condition & Surface'}
                        </span>
                        <p className="text-xs sm:text-sm text-[var(--text-primary)] font-medium mt-0.5">
                          {language === 'hi' ? selectedSite.howToReach.roadCondition.hi : selectedSite.howToReach.roadCondition.en}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-[var(--glass-border)]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                          {language === 'hi' ? 'अनुमानित टैक्सी / कैब किराया (Taxi Fare Estimate)' : 'Estimated Cab / Taxi Fare'}
                        </span>
                        <p className="text-xs sm:text-sm text-[var(--text-primary)] font-bold mt-0.5">
                          {language === 'hi' ? selectedSite.howToReach.taxiEstimate.hi : selectedSite.howToReach.taxiEstimate.en}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-[var(--glass-border)]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-orange-800 dark:text-orange-300">
                          {language === 'hi' ? 'वापसी यात्रा व समय सीमा (Return Journey Feasibility)' : 'Return Feasibility & Deadline Safety'}
                        </span>
                        <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                          {language === 'hi' ? selectedSite.howToReach.returnFeasibility.hi : selectedSite.howToReach.returnFeasibility.en}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 5. Visiting Hours & Tips Tab */}
                {activeTab === 'practical' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--glass-border)]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                          {language === 'hi' ? 'खुलने का समय' : 'Visiting Hours'}
                        </span>
                        <p className="text-xs font-bold text-[var(--text-primary)] mt-0.5">
                          {language === 'hi' ? selectedSite.practicalInfo.timings.hi : selectedSite.practicalInfo.timings.en}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--glass-border)]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                          {language === 'hi' ? 'प्रवेश शुल्क' : 'Entry Ticket'}
                        </span>
                        <p className="text-xs font-bold text-[var(--text-primary)] mt-0.5">
                          {language === 'hi' ? selectedSite.practicalInfo.entryFee.hi : selectedSite.practicalInfo.entryFee.en}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--glass-border)]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                          {language === 'hi' ? 'सर्वोत्तम समय स्लॉट' : 'Best Visiting Slot'}
                        </span>
                        <p className="text-xs font-bold text-orange-800 dark:text-orange-300 mt-0.5">
                          {language === 'hi' ? selectedSite.practicalInfo.bestSlot.hi : selectedSite.practicalInfo.bestSlot.en}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl border border-[var(--glass-border)] bg-[var(--bg-secondary)] space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                            <Camera className="w-3.5 h-3.5 text-blue-500" />
                            <span>{language === 'hi' ? 'फोटोग्राफी सुझाव' : 'Photography Advice'}</span>
                          </span>
                        </div>
                        <p className="text-xs text-[var(--text-secondary)]">
                          {language === 'hi' ? selectedSite.practicalInfo.photographyTips.hi : selectedSite.practicalInfo.photographyTips.en}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl border border-[var(--glass-border)] bg-[var(--bg-secondary)] space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                            <span>{language === 'hi' ? 'सुगमता रेटिंग (Accessibility)' : 'Accessibility Rating'}</span>
                          </span>
                          <span className="text-xs font-extrabold text-emerald-800 dark:text-emerald-300">
                            {selectedSite.practicalInfo.accessibilityScore}/10
                          </span>
                        </div>
                        <p className="text-xs text-[var(--text-secondary)]">
                          {language === 'hi' ? selectedSite.practicalInfo.accessibilityNotes.hi : selectedSite.practicalInfo.accessibilityNotes.en}
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20">
                      <h3 className="text-xs font-bold text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                        <Info className="w-4 h-4" />
                        <span>{language === 'hi' ? 'सुरक्षा एवं सावधानी परामर्श' : 'Safety Advisory & Practical Precautions'}</span>
                      </h3>
                      <p className="text-xs text-[var(--text-primary)] mt-1">
                        {language === 'hi' ? selectedSite.practicalInfo.safetyAdvisory.hi : selectedSite.practicalInfo.safetyAdvisory.en}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Evidence & Registry Sources Box */}
                <div className="pt-4 border-t border-[var(--glass-border)] flex flex-wrap items-center justify-between gap-2 text-[11px] text-[var(--text-secondary)]">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[var(--text-primary)]">{language === 'hi' ? 'प्रमाणित स्रोत:' : 'Evidence Grounding:'}</span>
                    {selectedSite.evidenceSources.map((source, sIdx) => (
                      <a
                        key={sIdx}
                        href={source.url}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2 py-0.5 rounded-md glass border border-[var(--glass-border)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-colors flex items-center gap-1"
                      >
                        <span>{source.title}</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Ribbon */}
                <div className="pt-3 border-t border-[var(--glass-border)] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleAddToTrip}
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--color-primary-foreground)] shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>{language === 'hi' ? 'कोपायलट में जोड़ें' : 'Add to Copilot'}</span>
                    </button>

                    <button
                      onClick={() => onFocusMapLocation(selectedSite.coordinates)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-surface-secondary)] text-[var(--color-text-primary)] shadow-2xs transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                      <span>{language === 'hi' ? 'मानचित्र पर रूट देखें' : 'View Route on Map'}</span>
                    </button>

                    <button
                      onClick={() => {
                        const q = language === 'hi'
                          ? `${selectedSite.name.hi} का विस्तृत इतिहास, स्थापत्य, और ग्वालियर से 4 घंटे का भ्रमण रूट प्लान बताएं।`
                          : `Tell me the complete history, architecture, and a 4-hour travel route from Gwalior for ${selectedSite.name.en}.`;
                        onAskAI(q);
                      }}
                      className="px-4 py-2 rounded-xl text-xs font-bold glass border border-[var(--glass-border)] text-[var(--text-primary)] hover:border-stone-800 transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-stone-900 dark:text-stone-100" />
                      <span>{language === 'hi' ? 'घूमो AI से पूछें' : 'Ask Ghumo AI'}</span>
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      if (navigator.clipboard) {
                        navigator.clipboard.writeText(window.location.origin + `?site=${selectedSite.id}`);
                        toast.success(language === 'hi' ? 'धरोहर लिंक कॉपी किया गया!' : 'Heritage link copied to clipboard!');
                      }
                    }}
                    className="p-2 rounded-xl glass border border-[var(--glass-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                    title="Share site"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal for Fullscreen Photo Viewing */}
      <AnimatePresence>
        {activeLightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveLightboxImage(null)}
            className="fixed inset-0 z-[100000] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
          >
            <button
              onClick={() => setActiveLightboxImage(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={activeLightboxImage} 
              alt="Enlarged heritage view"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl" 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
