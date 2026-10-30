import { useState } from 'react';
import { 
  Compass, 
  Sparkles, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  ShieldAlert, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  SkipForward, 
  ChevronRight, 
  Car, 
  Footprints, 
  Navigation, 
  UtensilsCrossed, 
  X,
  RotateCcw,
  Zap,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  type TripItinerary, 
  type ItineraryStop,
  replanDelay,
  removeStopFromItinerary,
  advanceItineraryProgress,
  extendStayAtCurrentStop,
  optimizeItineraryOrder,
  getPresetItineraries
} from '../services/copilotService';

interface CopilotTimelineProps {
  itinerary: TripItinerary | null;
  language: 'en' | 'hi';
  onUpdateItinerary: (updated: TripItinerary) => void;
  onClearItinerary?: () => void;
  onFocusStop: (coordinates: [number, number], stopId: string) => void;
  onAskAIAboutStop: (prompt: string) => void;
  onClose?: () => void;
  isOpen: boolean;
  onToggleOpen: () => void;
}

export function CopilotTimeline({
  itinerary,
  language,
  onUpdateItinerary,
  onClearItinerary,
  onFocusStop,
  onAskAIAboutStop,
  onClose,
  isOpen,
  onToggleOpen
}: CopilotTimelineProps) {
  const [selectedPresetIndex, setSelectedPresetIndex] = useState<number>(0);
  const presets = getPresetItineraries();

  if (!isOpen) {
    return (
      <motion.button
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        onClick={onToggleOpen}
        className="fixed bottom-20 left-4 z-[1050] px-3.5 py-2.5 rounded-xl shadow-lg border border-[var(--color-border)] flex items-center gap-2 text-xs font-semibold text-[var(--color-primary-foreground)] bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all cursor-pointer"
        title="Open AI Travel Copilot Itinerary"
      >
        <span className="w-2 h-2 rounded-full bg-[#34D399]" />
        <Compass className="w-4 h-4 text-[var(--color-primary-foreground)]" />
        <span>{language === 'hi' ? 'यात्रा कोपायलट' : 'AI Copilot'}</span>
        {itinerary && (
          <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-white/20 text-white font-medium">
            {itinerary.stops.length}
          </span>
        )}
      </motion.button>
    );
  }

  // Handle preset selection when no itinerary active
  const handleLoadPreset = (preset: TripItinerary) => {
    onUpdateItinerary(preset);
  };

  // One-tap actions
  const handleExtendStay = (extraMinutes: number = 15) => {
    if (!itinerary) return;
    const updated = extendStayAtCurrentStop(itinerary, extraMinutes);
    onUpdateItinerary(updated);
  };

  const handleAdvanceStop = () => {
    if (!itinerary) return;
    const nextIdx = Math.min(itinerary.currentStopIndex + 1, itinerary.stops.length - 1);
    const updated = advanceItineraryProgress(itinerary, nextIdx);
    onUpdateItinerary(updated);
    if (updated.stops[nextIdx]) {
      onFocusStop(updated.stops[nextIdx].coordinates, updated.stops[nextIdx].id);
    }
  };

  const handleRemoveStop = (stopId: string) => {
    if (!itinerary) return;
    const updated = removeStopFromItinerary(itinerary, stopId);
    onUpdateItinerary(updated);
  };

  const handleOptimizeTrip = () => {
    if (!itinerary) return;
    const updated = optimizeItineraryOrder(itinerary);
    onUpdateItinerary(updated);
  };

  const handleRunningLate = (minutes: number = 20) => {
    if (!itinerary) return;
    const updated = replanDelay(itinerary, minutes);
    onUpdateItinerary(updated);
  };

  return (
    <motion.aside
      initial={{ x: -350, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -350, opacity: 0 }}
      transition={{ type: 'spring', damping: 25, stiffness: 220 }}
      className="fixed top-14 sm:top-16 bottom-20 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-auto z-[1150] max-w-[calc(100vw-16px)] sm:w-96 glass rounded-2xl shadow-2xl border border-[var(--glass-border)] backdrop-blur-xl flex flex-col overflow-hidden bg-white/95 dark:bg-neutral-900/95"
    >
      {/* Header Bar */}
      <div className="p-3.5 border-b border-[var(--glass-border)] flex items-center justify-between gap-2 flex-shrink-0 bg-black/5 dark:bg-white/5">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 rounded-xl bg-[var(--color-surface-secondary)] border border-[var(--color-border)] flex items-center justify-center flex-shrink-0">
            <Compass className="w-4 h-4 text-[var(--color-primary)]" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] truncate font-display">
                {language === 'hi' ? 'AI यात्रा कोपायलट' : 'AI Travel Copilot'}
              </h2>
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-[var(--color-surface-secondary)] text-[var(--color-text-primary)] border border-[var(--color-border)] font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#183D32] dark:bg-[#34D399]" />
                Live
              </span>
            </div>
            <p className="text-[10px] text-[var(--text-secondary)] truncate">
              {itinerary ? (language === 'hi' ? itinerary.titleHi : itinerary.title) : (language === 'hi' ? 'समय-आधारित यात्रा मार्गदर्शक' : 'Time-Aware Itinerary Engine')}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {itinerary && itinerary.stops.length > 1 && (
            <button
              onClick={handleOptimizeTrip}
              className="px-2 py-1 rounded-lg text-[10px] font-semibold bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary-hover)] flex items-center gap-1 shadow-2xs transition-all cursor-pointer"
              title="Optimize order to reduce travel time"
            >
              <Sparkles className="w-3 h-3" />
              <span className="hidden xs:inline">{language === 'hi' ? 'अनुकूलन' : 'Optimize'}</span>
            </button>
          )}

          {itinerary && onClearItinerary && (
            <button
              onClick={onClearItinerary}
              className="px-2 py-1 rounded-lg text-[10px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--color-surface-secondary)] border border-[var(--color-border)] flex items-center gap-1 transition-all cursor-pointer"
              title={language === 'hi' ? 'यात्रा रीसेट करें और नया मार्ग बनाएं' : 'Clear & Reset Trip'}
            >
              <RotateCcw className="w-3 h-3" />
              <span>{language === 'hi' ? 'रीसेट' : 'Clear'}</span>
            </button>
          )}

          <button
            onClick={onToggleOpen}
            className="p-1 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--color-surface-secondary)] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Body */}
      {itinerary ? (
        <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
          {/* Smart Deadline Protection Banner */}
          {itinerary.deadlineTime && (
            <div className="px-3.5 py-2 border-b border-[var(--glass-border)] bg-[var(--color-surface-secondary)]/50 flex items-center justify-between gap-2 flex-shrink-0">
              <div className="flex items-center gap-2 min-w-0">
                {itinerary.safetyBufferMinutes >= 20 ? (
                  <ShieldCheck className="w-4 h-4 text-[#183D32] dark:text-[#34D399] flex-shrink-0" />
                ) : (
                  <ShieldAlert className="w-4 h-4 text-[#A94327] flex-shrink-0 animate-bounce" />
                )}
                <div className="min-w-0">
                  <p className="text-[11px] font-bold text-[var(--text-primary)] truncate">
                    {itinerary.deadlineLabel || (language === 'hi' ? 'वापसी समयसीमा' : 'Return Deadline')}: {itinerary.deadlineTime}
                  </p>
                  <p className="text-[10px] text-[var(--text-secondary)]">
                    {language === 'hi' 
                      ? `सुरक्षा बफर: ${itinerary.safetyBufferMinutes} मिनट शेष` 
                      : `Safety buffer: ${itinerary.safetyBufferMinutes} mins reserved`}
                  </p>
                </div>
              </div>

              {/* Check-in / Next Stop Button */}
              <button
                onClick={handleAdvanceStop}
                className="px-2 py-1 rounded-lg text-[10px] font-semibold bg-[var(--color-surface)] text-[var(--color-text-primary)] hover:bg-[var(--color-surface-secondary)] border border-[var(--color-border)] flex items-center gap-1 transition-all flex-shrink-0 cursor-pointer shadow-2xs"
                title="Mark current stop done and proceed to next"
              >
                <CheckCircle2 className="w-3 h-3 text-[#183D32] dark:text-[#34D399]" />
                <span>{language === 'hi' ? 'अगला पड़ाव' : 'Next Stop'}</span>
              </button>
            </div>
          )}

          {/* Quick Replanning Control Chips */}
          <div className="px-3 py-1.5 border-b border-[var(--glass-border)] flex items-center gap-1.5 overflow-x-auto scrollbar-hide flex-shrink-0 bg-[var(--color-surface-secondary)]/30">
            <span className="text-[10px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider flex-shrink-0">
              {language === 'hi' ? 'त्वरित बदलाव:' : 'Quick Replan:'}
            </span>

            <button
              onClick={() => handleRunningLate(20)}
              className="px-2.5 py-0.5 rounded-md text-[10px] font-medium whitespace-nowrap bg-[var(--color-surface)] text-[var(--color-text-primary)] border border-[var(--color-border)] hover:bg-[var(--color-surface-secondary)] transition-colors cursor-pointer"
            >
              ⏱️ {language === 'hi' ? '+20 मिनट देरी' : 'Running 20m Late'}
            </button>

            <button
              onClick={() => handleExtendStay(15)}
              className="px-2.5 py-0.5 rounded-md text-[10px] font-medium whitespace-nowrap bg-[var(--color-surface)] text-[var(--color-text-primary)] border border-[var(--color-border)] hover:bg-[var(--color-surface-secondary)] transition-colors cursor-pointer"
            >
              ⏳ {language === 'hi' ? '+15 मिनट विश्राम' : '+15m Stay'}
            </button>

            <button
              onClick={() => {
                const p = language === 'hi'
                  ? `मेरे वर्तमान यात्रा मार्ग (${itinerary.city}) के पास एक अच्छा भोजनालय या कैफे जोड़ें।`
                  : `Add a famous local food stop or café along my current route in ${itinerary.city}.`;
                onAskAIAboutStop(p);
              }}
              className="px-2.5 py-0.5 rounded-md text-[10px] font-medium whitespace-nowrap bg-[var(--color-surface)] text-[var(--color-text-primary)] border border-[var(--color-border)] hover:bg-[var(--color-surface-secondary)] transition-colors cursor-pointer"
            >
              🍲 {language === 'hi' ? 'खानपान जोड़ें' : 'Add Food'}
            </button>

            <button
              onClick={() => {
                const p = language === 'hi'
                  ? `कृपया मेरी यात्रा को कम पैदल चलने और अधिक ऑटो/टैक्सी का उपयोग करने हेतु पुनर्गठित करें।`
                  : `Please replan my trip with minimal walking and more cab/auto transit.`;
                onAskAIAboutStop(p);
              }}
              className="px-2.5 py-0.5 rounded-full text-[10px] font-bold whitespace-nowrap bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-200 border border-blue-300 dark:border-blue-700 hover:bg-blue-200 transition-colors cursor-pointer"
            >
              🚖 {language === 'hi' ? 'कम पैदल चलें' : 'Walk Less'}
            </button>
          </div>

          {/* Timeline Scrollable Stops List */}
          <div className="flex-1 min-h-0 overflow-y-auto p-3 space-y-3">
            {itinerary.stops.map((stop, idx) => {
              const isCurrent = stop.status === 'current';
              const isCompleted = stop.status === 'completed';
              const isUpcoming = stop.status === 'upcoming';
              const isLast = idx === itinerary.stops.length - 1;

              return (
                <div key={stop.id} className="relative">
                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    onClick={() => onFocusStop(stop.coordinates, stop.id)}
                    className={`rounded-xl p-3 border transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-[var(--accent-primary)]/10 border-[var(--accent-primary)] shadow-md'
                        : isCompleted
                          ? 'bg-black/5 dark:bg-white/5 border-[var(--glass-border)] opacity-75'
                          : 'bg-white/70 dark:bg-neutral-800/70 border-[var(--glass-border)] hover:border-[var(--accent-primary)]/50'
                    }`}
                  >
                    {/* Top Row: Number, Time, Status */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {/* Numbered Marker Badge */}
                        <div
                          className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold ${
                            isCompleted
                              ? 'bg-[#183D32] dark:bg-[#34D399] text-white dark:text-[#0D1C17]'
                              : isCurrent
                                ? 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)]'
                                : 'bg-[var(--color-surface-secondary)] text-[var(--color-text-primary)] border border-[var(--color-border)]'
                          }`}
                        >
                          {isCompleted ? '✓' : stop.stopNumber}
                        </div>

                        <div>
                          <span className="text-xs font-bold text-[var(--text-primary)]">
                            {stop.startTime} – {stop.endTime}
                          </span>
                          <span className="text-[10px] text-[var(--text-secondary)] ml-1.5">
                            ({stop.durationMinutes}m)
                          </span>
                        </div>
                      </div>

                      {/* Status Pill */}
                      <span
                        className={`text-[10px] font-medium px-2 py-0.5 rounded-md ${
                          isCompleted
                            ? 'bg-[#183D32]/10 dark:bg-[#34D399]/15 text-[#183D32] dark:text-[#34D399] border border-[#183D32]/20 dark:border-[#34D399]/30'
                            : isCurrent
                              ? 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-2xs font-semibold'
                              : 'bg-[var(--color-surface-secondary)] text-[var(--color-text-secondary)] border border-[var(--color-border)]'
                        }`}
                      >
                        {isCompleted
                          ? (language === 'hi' ? 'पूर्ण ✓' : 'Done ✓')
                          : isCurrent
                            ? (language === 'hi' ? 'वर्तमान पड़ाव 📍' : 'Current 📍')
                            : (language === 'hi' ? 'आगामी →' : 'Upcoming')}
                      </span>
                    </div>

                    {/* Place Name & Category */}
                    <div className="mt-2 flex items-start gap-2.5">
                      {stop.imageUrl && (
                        <img
                          src={stop.imageUrl}
                          alt={stop.name}
                          className="w-12 h-12 rounded-lg object-cover flex-shrink-0 border border-[var(--glass-border)]"
                        />
                      )}
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xs font-extrabold text-[var(--text-primary)] leading-snug truncate">
                          {language === 'hi' ? stop.hindiName : stop.name}
                        </h3>
                        <p className="text-[10px] text-[var(--text-secondary)] mt-0.5 line-clamp-1">
                          {language === 'hi' ? stop.activityHi : stop.activity}
                        </p>
                      </div>
                    </div>

                    {/* "Why This Place?" Rationale Box */}
                    <div className="mt-2.5 p-2 rounded-lg bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/20 text-[10px] text-[var(--text-primary)] flex items-start gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[var(--accent-primary)] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-[var(--accent-primary)] block uppercase text-[9px]">
                          {language === 'hi' ? '✨ चयन का कारण (Why This Place)' : '✨ Why This Place?'}
                        </span>
                        <p className="text-[10px] text-[var(--text-secondary)] mt-0.5 leading-relaxed">
                          {language === 'hi' ? stop.whyThisPlaceHi : stop.whyThisPlace}
                        </p>
                      </div>
                    </div>

                    {/* One-Tap Action Buttons */}
                    <div className="mt-2.5 pt-2 border-t border-[var(--glass-border)] flex items-center justify-between gap-1.5 text-[10px]">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const prompt = language === 'hi'
                            ? `मुझे ${stop.hindiName} के बारे में और बताएं और क्या यह मेरी वर्तमान यात्रा में आवश्यक है?`
                            : `Tell me more about ${stop.name} and why it fits my current itinerary.`;
                          onAskAIAboutStop(prompt);
                        }}
                        className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 hover:bg-black/10 text-[var(--text-primary)] font-bold transition-colors cursor-pointer"
                      >
                        {language === 'hi' ? 'AI से पूछें' : 'Ask AI'}
                      </button>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleExtendStay(15);
                          }}
                          className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 hover:bg-black/10 text-[var(--text-primary)] font-bold transition-colors cursor-pointer"
                          title="Add 15 minutes stay"
                        >
                          +15m
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveStop(stop.id);
                          }}
                          className="p-1 rounded-md text-rose-500 hover:bg-rose-500/15 transition-colors cursor-pointer"
                          title="Remove this stop"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>

                  {/* Transit Segment Indicator to next stop */}
                  {!isLast && stop.travelTimeToNextMinutes && (
                    <div className="my-1.5 ml-5 pl-4 border-l-2 border-dashed border-[var(--accent-primary)]/40 flex items-center gap-2 py-1 text-[10px] text-[var(--text-secondary)] font-medium">
                      <span className="p-1 rounded-full bg-[var(--accent-primary)]/15 text-[var(--accent-primary)]">
                        {stop.transportModeToNext === 'walk' ? (
                          <Footprints className="w-3 h-3" />
                        ) : (
                          <Car className="w-3 h-3" />
                        )}
                      </span>
                      <span>
                        {language === 'hi'
                          ? `अगले पड़ाव हेतु ~${stop.travelTimeToNextMinutes} मिनट (${stop.transportModeToNext === 'walk' ? 'पैदल' : 'ऑटो/टैक्सी'} • ${stop.travelDistanceToNextKm} किमी)`
                          : `Transit ~${stop.travelTimeToNextMinutes} mins via ${stop.transportModeToNext} (~${stop.travelDistanceToNextKm} km)`}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Smart Hotel Location (Multi-Day) */}
            {itinerary.suggestedHotel && (
              <div className="p-3 rounded-xl border border-indigo-500/30 bg-indigo-500/10 dark:bg-indigo-500/15 text-[11px] space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  <Compass className="w-4 h-4" />
                  <span>{language === 'hi' ? 'अनुशंसित होटल क्षेत्र' : 'Smart Hotel Recommendation'}</span>
                </div>
                <p className="font-extrabold text-[var(--text-primary)]">
                  🏨 {itinerary.suggestedHotel.name}
                </p>
                <p className="text-[10px] text-[var(--text-secondary)]">
                  📍 {itinerary.suggestedHotel.area} • {itinerary.suggestedHotel.priceRange}
                </p>
                <p className="text-[10px] text-[var(--text-secondary)] italic pt-1 border-t border-indigo-500/20">
                  "{itinerary.suggestedHotel.rationale}"
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Empty State: Comprehensive First-Time Guide & Curated Starters */
        <div className="flex-1 p-4 flex flex-col justify-start overflow-y-auto space-y-4 text-[var(--text-primary)]">
          {/* Welcome Hero Banner */}
          <div className="p-3.5 rounded-2xl bg-[var(--color-surface-secondary)]/50 border border-[var(--color-border)] space-y-2 flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-[var(--color-primary)] text-[var(--color-primary-foreground)] flex items-center justify-center shadow-xs">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs font-bold text-[var(--text-primary)] font-display truncate">
                  {language === 'hi' ? 'AI यात्रा कोपायलट में आपका स्वागत है' : 'Welcome to AI Travel Copilot'}
                </h3>
                <p className="text-[10px] text-[var(--text-secondary)] truncate">
                  {language === 'hi' ? 'समय-सचेत गतिशील यात्रा साथी' : 'Dynamic Time-Aware Trip Companion'}
                </p>
              </div>
            </div>
            <p className="text-[11px] text-[var(--text-primary)] leading-relaxed">
              {language === 'hi'
                ? 'कोपायलट आपकी यात्रा को समय, दूरी, और वापसी समयसीमा (ट्रेन/फ्लाइट) के अनुसार खुद प्रबंधित करता है ताकि कोई देरी न हो।'
                : 'Copilot dynamically tracks transit time, stay durations, and return deadlines so you never miss a train or flight.'}
            </p>
          </div>

          {/* How It Works Guide */}
          <div className="space-y-2 flex-shrink-0">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--text-secondary)] block px-0.5">
              {language === 'hi' ? 'यह कैसे काम करता है? (3 सरल चरण)' : 'How It Works (3 Easy Steps):'}
            </span>

            {/* Step 1: Map Selection */}
            <div className="p-2.5 rounded-xl border border-[var(--glass-border)] bg-[var(--color-surface)] flex items-start gap-2.5">
              <div className="w-6 h-6 rounded-lg bg-[var(--color-surface-secondary)] text-[var(--color-primary)] flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-[11px] font-bold text-[var(--text-primary)]">
                  {language === 'hi' ? '1. मानचित्र से सीधे जोड़ें' : '1. Pick Places from Interactive Map'}
                </h4>
                <p className="text-[10px] text-[var(--text-secondary)] leading-tight mt-0.5">
                  {language === 'hi'
                    ? 'नक्शे पर किसी भी मंदिर, घाट या स्मारक पर क्लिक करें और "Add to Copilot" दबाएं।'
                    : 'Click any temple, ghat, or monument on the map and tap "+ Add to Copilot".'}
                </p>
              </div>
            </div>

            {/* Step 2: Disha AI Chat */}
            <div className="p-2.5 rounded-xl border border-[var(--glass-border)] bg-[var(--color-surface)] flex items-start gap-2.5">
              <div className="w-6 h-6 rounded-lg bg-[var(--color-surface-secondary)] text-[var(--color-primary)] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-[11px] font-bold text-[var(--text-primary)]">
                  {language === 'hi' ? '2. घूमो AI से बोलकर बनवाएं' : '2. Tell Ghumo AI in Natural Chat'}
                </h4>
                <p className="text-[10px] text-[var(--text-secondary)] leading-tight mt-0.5">
                  {language === 'hi'
                    ? 'चैट में कहें: "ग्वालियर से 4 घंटे का समय है, बटेश्वर और मितावली का रूट प्लान बनाओ"।'
                    : 'Ask: "I have 4 hours from Gwalior for Bateshwar & Mitawali" — AI builds the route.'}
                </p>
              </div>
            </div>

            {/* Step 3: Dynamic Replanning */}
            <div className="p-2.5 rounded-xl border border-[var(--glass-border)] bg-[var(--color-surface)] flex items-start gap-2.5">
              <div className="w-6 h-6 rounded-lg bg-[var(--color-surface-secondary)] text-[var(--color-primary)] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-[11px] font-bold text-[var(--text-primary)]">
                  {language === 'hi' ? '3. देरी होने पर 1-टैप रीप्लान' : '3. Real-Time Dynamic Re-planning'}
                </h4>
                <p className="text-[10px] text-[var(--text-secondary)] leading-tight mt-0.5">
                  {language === 'hi'
                    ? 'देर होने पर 1-टैप "Running 20m Late" दबाएं, यह तुरंत अगला शेड्यूल ठीक कर देगा।'
                    : 'Running late? Tap "Running 20m Late" to automatically protect your return deadline.'}
                </p>
              </div>
            </div>
          </div>

          {/* Action 1: Create Blank Custom Trip */}
          <div className="pt-1 flex-shrink-0">
            <button
              onClick={() => {
                onUpdateItinerary({
                  id: `custom_${Date.now()}`,
                  title: language === 'hi' ? 'मेरी कस्टम यात्रा' : 'My Custom UP Journey',
                  titleHi: 'मेरी कस्टम यात्रा',
                  city: 'Uttar Pradesh',
                  hindiCity: 'उत्तर प्रदेश',
                  targetHours: 3,
                  startTime: '10:00 AM',
                  safetyBufferMinutes: 20,
                  currentStopIndex: 0,
                  stops: [],
                  totalDistanceKm: 0,
                  totalCostEstimate: '₹200 - ₹500',
                  optimizationsApplied: ['Custom User Plan']
                });
              }}
              className="w-full p-2.5 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)] bg-[var(--color-surface)] hover:bg-[var(--color-surface-secondary)] text-xs font-semibold text-[var(--color-primary)] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs group"
            >
              <Plus className="w-4 h-4 text-[var(--color-primary)] group-hover:scale-110 transition-transform" />
              <span>{language === 'hi' ? '+ नई खाली यात्रा शुरू करें (नक्शे से जोड़ें)' : '+ Start Blank Custom Trip (Build from Map)'}</span>
            </button>
          </div>

          {/* Action 2: Quick Presets */}
          <div className="space-y-2 flex-shrink-0">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--text-secondary)] block px-0.5">
              {language === 'hi' ? 'या तुरंत तैयार यात्रा चुनें:' : 'Or Load an Instant Curated Circuit:'}
            </span>

            {presets.map((preset) => (
              <button
                key={preset.id}
                onClick={() => handleLoadPreset(preset)}
                className="w-full text-left p-2.5 rounded-xl border border-[var(--glass-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary)] hover:bg-[var(--color-surface-secondary)] transition-all group cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">
                    {language === 'hi' ? preset.titleHi : preset.title}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-[var(--color-surface-secondary)] text-[var(--color-text-primary)] border border-[var(--color-border)] font-semibold">
                    {preset.targetHours}h
                  </span>
                </div>
                <p className="text-[10px] text-[var(--text-secondary)] mt-1 truncate">
                  📍 {preset.stops.map(s => s.name).join(' → ')}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.aside>
  );
}
