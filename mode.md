# GhumoIndia — Mode Architecture, Features & UI Specification

**Project:** GhumoIndia (Team Srajan — AI Synergy Hackathon Problem 4: Tourism & Heritage)  
**Theme:** *Beyond the Fort — Lesser-Known Archaeological & Cultural Destinations Across Madhya Pradesh*  
**Live Production URL:** [https://ghumoindia-dusky.vercel.app/](https://ghumoindia-dusky.vercel.app/)  
**Source Code Repository:** [ai_synergy_hackthon_team_srajan_probelm_04](https://github.com/2k24cs1k2412828-cloud/ai_synergy_hackthon_team_srajan_probelm_04)  
**Version:** 1.2.0 (Production Release)

---

## 1. Executive Summary & Core Mission

GhumoIndia is an AI-assisted travel portal and intelligent copilot engineered specifically to bridge the discovery and feasibility gap for Madhya Pradesh’s 50 lesser-known heritage and archaeological wonders.

While iconic attractions like Gwalior Fort and Khajuraho receive substantial footfall, extraordinary sites located just 30 to 90 minutes away—such as the **200-temple Gurjara-Pratihara necropolis of Bateshwar**, the **hypaethral circular Yogini shrine at Mitawali**, the **carved friezes of Garhi Padhavali**, the **mortarless 115-foot tower of Kakanmath (Suhania)**, and the **Koshak Mahal of Chanderi**—suffer from acute last-mile obscurity, uncertain road telemetry, and uncoordinated travel timelines.

GhumoIndia solves this through a unified architectural model:
1. **Curated 50 MP Heritage Sites Showcase** with authentic photographic archives, architectural analyses, and last-mile road telemetry.
2. **Interactive Spatial GIS Leaflet Map** rendering heritage clusters, point-to-point road waypoints, and transit times.
3. **Ghumo AI Intelligent Travel Concierge (Gemini 2.5 Flash Grounded)** providing bilingual cultural explanations and itinerary structuring.
4. **Time-Aware Dynamic Travel Copilot** featuring return-deadline protection, transit-time buffering, and 1-tap live schedule replanning.
5. **Real-Time MP Travel Bulletins & Crowd Telemetry** for safety and crowd-density forecasting.

---

## 2. Root Architecture & State Flow

### 2.1 Component & Directory Hierarchy

```
ghumo-india/
├── index.html                   # HTML5 Entry Point with meta, preconnect fonts, semantic title
├── src/
│   ├── main.tsx                 # React DOM Root initialization
│   ├── styles/
│   │   ├── index.css            # Morning/Evening theme variables, editorial glassmorphism, scrollbars
│   │   ├── theme.css            # Tailwind theme tokens, Radix UI base colors, dark/light variants
│   │   ├── fonts.css            # Google Fonts import (Inter, Playfair Display / Cinzel)
│   │   └── tailwind.css         # Tailwind v4 directives
│   ├── data/
│   │   ├── mp-50-heritage-sites.ts    # Comprehensive database of 50 MP heritage destinations
│   │   └── mp-comprehensive-database.ts # Extended heritage database with coordinates and telemetry
│   ├── app/
│   │   ├── App.tsx              # Main State Coordinator, Landmark Router & Layout Engine
│   │   ├── components/
│   │   │   ├── MPSitesShowcase.tsx    # "Beyond the Fort" 50 Sites Explorer
│   │   │   ├── MapPanel.tsx           # Leaflet GIS Map with cluster markers and route lines
│   │   │   ├── ChatPanel.tsx          # Ghumo AI Conversational Guide (Bilingual, Voice, Map Cards)
│   │   │   ├── CopilotTimeline.tsx    # Dynamic Time-Aware Copilot Drawer & Replan Engine
│   │   │   ├── NewsPanel.tsx          # Live District Bulletins & Crowd Feasibility Dossier
│   │   │   ├── LoadingScreen.tsx      # Accessible Initial Splash Screen Overlay
│   │   │   ├── BoatBookingModal.tsx   # Ghat & Riverfront Service Booking Modal
│   │   │   ├── ServiceBookingModal.tsx# Verified Local Guide & Cab Booking Modal
│   │   │   └── android/
│   │   │       └── AndroidAppShell.tsx # Dedicated Native Capacitor Android Shell
│   │   └── services/
│   │       ├── geminiService.ts       # Google Generative AI integration grounded on MP 50 catalog
│   │       ├── copilotService.ts      # Itinerary math, transit calculations, dynamic replanning
│   │       └── scrapedNewsService.ts  # Regional news and crowd telemetry scraper simulation
```

### 2.2 Root State Synchronization (`App.tsx`)

At the core of GhumoIndia is a single-state coordinator in `src/app/App.tsx`. Rather than isolating views into decoupled pages, the application maintains synchronized reactive state across all components:

```mermaid
graph TD
    App[App.tsx State Coordinator] --> LM[layoutMode: mpsites | split | fullchat | fullmap | news]
    App --> SC[selectedMapCoordinates: LatLng]
    App --> RW[activeRouteWaypoints: LatLng Array]
    App --> CP[externalChatPrompt: string]
    App --> IT[activeItinerary: TripItinerary]
    App --> CO[isCopilotOpen: boolean]
    App --> TH[theme: morning | evening]
    App --> LG[language: en | hi]

    SC --> MapPanel[MapPanel.tsx - Pan/Zoom Focus]
    RW --> MapPanel[MapPanel.tsx - Render Active Polyline]
    CP --> ChatPanel[ChatPanel.tsx - Auto-Submit AI Prompt]
    IT --> CopilotTimeline[CopilotTimeline.tsx - Render Timeline]
    IT --> ChatPanel[ChatPanel.tsx - Contextual Chat Advisories]
    IT --> MapPanel[MapPanel.tsx - Highlight Stop Markers]
```

- **Cross-Component Triggers:**
  - Clicking *"Add to Copilot"* in `MPSitesShowcase` updates `activeItinerary`, sets map center `selectedMapCoordinates`, and slides open `CopilotTimeline`.
  - Clicking *"Ask AI"* in `MapPanel` or `MPSitesShowcase` writes to `externalChatPrompt`, automatically switches layout mode to `split` or `fullchat`, and triggers Ghumo AI.
  - Selecting a route or replanning via `CopilotTimeline` recalculates waypoints and passes `activeRouteWaypoints` directly into Leaflet's tile engine.

---

## 3. The 5 Application Display Modes (`layoutMode`)

The user can transition between 5 specialized operational modes via the desktop header switcher or the mobile bottom navigation bar.

---

### Mode 1: `mpsites` — "Beyond the Fort" 50 Heritage Showcase *(Default View)*

#### Purpose & Conception
The flagship catalog view showcasing all 50 curated archaeological destinations across Madhya Pradesh. Designed with an editorial magazine aesthetic, featuring authentic imagery, architectural breakdowns, and travel telemetry.

#### UI Structure
1. **Hero Spotlight & Curated Circuit Launcher:**
   - Visual header with badges: *"Madhya Pradesh Tourism Guide"*, *"ASI Protected Heritage"*, and regional tags (*Chambal • Gwalior • Bundelkhand • Malwa*).
   - Direct button: **"Plan Heritage Tour"** (`onAskAI`) launching an automated 4-hour circuit prompt.
2. **Zone Filter Bar:**
   - Segmented buttons for regions: **All Zones (50)**, **Chambal & Morena (10)**, **Gwalior Citadel (7)**, **Bundelkhand (18)**, and **Malwa & Central MP (15)**.
   - Shows badge counts with WCAG AA verified high-contrast styling (`bg-black/25 text-white font-bold` when selected).
3. **Route Confidence Filter & Live Search:**
   - Filters destinations by accessibility safety: **All Routes**, **HIGH** (Paved Highway), **MEDIUM** (Rural Single Lane), and **LOW** (Unpaved Track / Trek).
   - Real-time text search indexing site names, dynasties (Kachchhapaghata, Gurjara-Pratihara, Bundela, Tomara), and architectural features.
4. **Two-Column Master-Detail Layout:**
   - **Left Column (Destination Selector):** Scrollable card list with thumbnail preview, catalog index number (`#1` to `#50`), architectural category badge, route confidence pill, and district tag.
   - **Right Column (Comprehensive Architectural Dossier):**
     - Full-width hero image with overlay tags, dynasty period, and geographic coordinates.
     - **Quick Action Bar:** *"Explore on Map"* (switches to `fullmap` and centers coordinates), *"Add to Copilot"* (appends to active itinerary), and *"Ask AI Guide"* (opens conversational discussion).
     - **5 In-Depth Tab Panels:**
       1. *Historical Overview:* Dynasty, foundation century, patronage, and cultural significance.
       2. *Architecture & Art:* Mortarless dry masonry, sanctum layouts, sculpted friezes, and shikhara styles.
       3. *Last-Mile Access:* Highway distance, nearest railway station/airport, road condition, and last-mile connectivity.
       4. *Telemetry & Feasibility:* Estimated taxi/cab fare, return feasibility rating, and safety buffer advice.
       5. *Visiting Advice:* ASI timings, entry tickets, photography recommendations, and verified accessibility rating (`/10`).

---

### Mode 2: `fullmap` — Interactive Spatial GIS Explorer

#### Purpose & Conception
A spatial visualization dashboard built on Leaflet that contextualizes Madhya Pradesh’s geographical heritage clusters and renders actual road trails.

#### UI Structure & Features
1. **Custom Map Marker Layer:**
   - Color-coded circular SVG pins categorizing monuments:
     - 🏛️ *Temples & Complexes* (Emerald/Amber)
     - 🏰 *Forts & Palaces* (Terracotta/Saffron)
     - 🛕 *Stupas & Monasteries* (Purple/Indigo)
     - 🌿 *Natural Heritage & Ghats* (Teal/Cyan)
2. **Chambal Heritage Circuit Polyline:**
   - Renders the verified road route connecting **Gwalior Fort → Bateshwar Temples → Mitawali Chausath Yogini → Garhi Padhavali → Kakanmath Shiva Temple → Gwalior**.
   - Computes total loop distance (~128 km) and realistic travel duration (~4h 15m including buffer).
3. **Rich Destination Popups:**
   - Clicking any pin displays thumbnail photography, Hindi/English titles, timings, accessibility rating (`♿ X/10`), a direct **"Directions via Google Maps"** navigation button, and a 1-tap **"+ Add to Copilot"** button.
4. **Floating Map Controls:**
   - Layer toggles, full-screen viewport toggle, and route-clear action button (`text-rose-800 bg-rose-100`).

---

### Mode 3: `split` — Dual-Pillar Interactive Tour Planner

#### Purpose & Conception
The workhorse split interface designed for desktop power-users. Simultaneously displays the GIS Map on the left pillar and the Ghumo AI Chatbot on the right pillar.

#### UI Structure & Features
- **Left Pillar (60% Desktop Width):** Embedded `MapPanel` with active coordinates and highlighted waypoints.
- **Right Pillar (40% Desktop Width):** Embedded `ChatPanel` with conversational guidance, suggested quick prompts, and voice recognition.
- **Dynamic Cross-Talk:**
  - Asking the AI about a monument highlights its pin on the map.
  - Clicking a marker on the map populates the chatbot's input field or adds the stop to the itinerary.
- **Mobile Responsiveness:**
  - Automatically converts into a single-pane view with a sticky bottom navigation tab to switch between Map and Chat seamlessly.

---

### Mode 4: `fullchat` — Immersive Ghumo AI Concierge & Cultural Guide

#### Purpose & Conception
A distraction-free, large-canvas conversational experience powered by Google Gemini 2.5 Flash, specialized for multi-turn itinerary formulation, architectural inquiries, and historical storytelling.

#### UI Structure & Features
1. **Collapsible Left Curated Routes Drawer (Desktop):**
   - Quick launchers for curated MP heritage circuits:
     - *Bateshwar & Mitawali Circuit (4h loop)*
     - *Running 20m Late, Replan*
     - *Gwalior Fort & Padhavali Trail*
     - *Kakanmath (Suhania) Architecture*
     - *MP Heritage Telemetry & Feasibility*
     - *Lesser-Known MP Heritage Gems*
     - *Orchha Palaces & Ram Raja Temple*
   - Official MP Tourism toll-free helpline badge (`1800-233-0303`).
2. **Conversational Stream:**
   - **User Bubbles:** Vibrant terracotta gradient with high-contrast text.
   - **AI Response Cards:** Frosted glassmorphism (`glass`) with structured typography:
     - Formatted Markdown (headings, bullet points, blockquotes, bold emphasis).
     - **In-Chat Image Galleries:** Rendered visual highlights with lightbox modal support.
     - **In-Chat Interactive Map Cards:** Embedded route summaries showing distances and stop sequences.
     - **Real-Time Live Crowd Telemetry Cards:** Displaying current crowd levels, queue wait times, and police advisories.
3. **Audio Features (Bilingual Web Speech):**
   - **Speech-to-Text (STT):** Microphone input allowing travelers to speak queries in Hindi or English.
   - **Text-to-Speech (TTS):** Dedicated *"Listen"* (`Volume2`) button on every AI response for audio-guided commentary.
4. **Bottom Quick Action Carousel & Prompt Input Bar:**
   - Horizontal prompt chips for 1-tap follow-ups.
   - Expandable text input with clear button, voice toggle, and submit button.

---

### Mode 5: `news` — Live Travel Bulletins & Regional Crowd Telemetry

#### Purpose & Conception
A real-time safety, feasibility, and travel advisory dispatch center that tracks crowd density, temple queue wait times, road blockages, and police advisories across MP districts.

#### UI Structure & Features
1. **District Telemetry Spotlight Dossier:**
   - Live district selector: **Gwalior, Morena, Orchha, Chanderi, Khajuraho, Ujjain, Vidisha**.
   - Status indicators: `Extreme`, `High`, `Moderate`, or `Serene Flow`.
   - **Insights Grid:**
     - *Peak Rush Hours:* Identifies heavy congestion windows.
     - *Recommended Peaceful Slot:* Suggests optimal darshan and photography hours (styled in verified `text-emerald-800` for high contrast).
     - *Police & Traffic Advisory:* Outlines parking restrictions, highway roadworks, and local regulations.
2. **Key Shrine Queue Telemetry:**
   - Displays estimated wait minutes for specific spots (e.g., Ram Raja Temple Orchha, Bateshwar complex entrance, Gwalior Fort cable ropeway).
3. **Curated Archaeological News Feed:**
   - ASI restoration updates, festival announcements, and heritage preservation bulletins with direct links to sources.

---

## 4. The AI Travel Copilot Engine (`CopilotTimeline.tsx` & `copilotService.ts`)

The AI Travel Copilot operates as an interactive drawer accessible from any mode by clicking the **Copilot** toggle button in the header or bottom navigation bar.

### 4.1 How It Works
- **Timeline Sequencing:** Breaks an active itinerary down into ordered stops with exact start times, end times, stay durations, and inter-stop transit estimates.
- **Stop State Tracking:**
  - `current`: Highlighted with an active marker ring and orange card border.
  - `completed`: Marked with a green checkmark and verified `emerald-800` status badge.
  - `upcoming`: Outlined with neutral borders and time remaining.

### 4.2 Return Deadline Protection
- **The Problem:** Travelers visiting remote sites in Morena or Chanderi risk missing evening return trains or flights from Gwalior Junction / Rajmata Vijaya Raje Scindia Airport.
- **The Solution:** The Copilot calculates total accumulated transit time + minimum 20-minute safety buffer. If delays threaten this buffer, the banner displays a prominent animated warning with replanning advice.

### 4.3 1-Tap Dynamic Replanning
The Copilot provides instant recalculation chips:
1. **⏱️ +20m Late (`handleRunningLate`):** Shifts all subsequent stop arrival times by 20 minutes and re-evaluates the return deadline.
2. **⏳ +15m Stay (`handleExtendStay`):** Adds 15 minutes of dwell time to the current stop.
3. **🍲 Add Food:** Prompts the AI to inject a nearby culinary stop into the route.
4. **🚖 Walk Less:** Reconfigures transit instructions to favor auto/cab access over walking.

---

## 5. UI Design System & Theming

### 5.1 The Two Atmospheric Themes

The application includes two curated atmospheric palettes in `src/styles/index.css`:

| Token | Morning / Day Theme (`[data-theme="morning"]`) | Evening / Aarti Theme (`[data-theme="evening"]`) |
| :--- | :--- | :--- |
| **Concept** | Warm Alabaster, Saffron Terracotta & Sacred Ochre | Deep Midnight Ghats & Warm Aarti Amber |
| `--bg-primary` | `#FAF8F5` (Warm Alabaster) | `#0A0F1D` (Midnight Blue-Black) |
| `--bg-secondary` | `#F3EFE9` (Warm Pale Sandstone) | `#111A2E` (Deep Riverfront Navy) |
| `--accent-primary` | `#C2410C` (Terracotta / Burnt Saffron) | `#F59E0B` (Warm Aarti Amber) |
| `--accent-secondary`| `#0D9488` (Teal Stone) | `#38BDF8` (Sky River Blue) |
| `--text-primary` | `#1C1917` (Deep Obsidian Charcoal) | `#F8FAFC` (Alabaster White) |
| `--text-secondary` | `#57534E` (Warm Mineral Stone) | `#94A3B8` (Soft Slate) |
| `--glass-bg` | `#FFFFFF` (Crisp Glass) | `#111A2E` (Translucent Navy Glass) |
| `--glass-border` | `#E7DFD5` (Soft Ochre Border) | `#1E293B` (Midnight Slate Border) |

### 5.2 Accessibility & Contrast Engineering (WCAG 2.2 AA)
All text colors, badges, and status pills are strictly calibrated:
- **Normal Text Contrast:** Exceeds **4.5:1** across both Morning and Evening modes.
- **Badges:** Uses 800-series text on 100-series tinted containers (`text-emerald-800` on `bg-emerald-100`, `text-orange-800` on `bg-orange-100`, `text-amber-800` on `bg-amber-100`, `text-purple-800` on `bg-purple-100`).
- **Semantic HTML5 Landmarks:**
  - `<header role="banner">` for top branding and global controls.
  - `<nav aria-label="Primary Navigation">` for desktop and mobile mode switchers.
  - `<main id="main-content" role="main" tabIndex={-1}>` for the primary view canvas.
  - `<aside role="complementary">` for the desktop fullchat route sidebar.
  - `<nav aria-label="Skip links">` with keyboard-visible skip link targeting `#main-content`.

---

## 6. Native Android App Shell (Capacitor)

When running inside an Android environment (detected via `Capacitor.getPlatform() === 'android'`), `App.tsx` routes rendering to `AndroidAppShell.tsx`:
- Native status bar and navigation bar padding adjustments (`env(safe-area-inset-bottom)`).
- Edge-to-edge hardware back-button handling.
- Optimized touch targets and offline SQLite/Capacitor storage ready for disconnected heritage zones.

---

## 7. Mode Switching Matrix

| Mode Key | Title (English / Hindi) | Icon | Primary Use Case | Primary Component |
| :--- | :--- | :--- | :--- | :--- |
| `mpsites` | **Heritage Sites** / धरोहर स्थल | `<Globe />` | Deep architectural and historical research on 50 MP sites | `MPSitesShowcase.tsx` |
| `fullmap` | **Explore Map** / मानचित्र | `<MapIcon />` | Geographic spatial inspection, marker popup directions, and Chambal loop route | `MapPanel.tsx` |
| `split` | **Trip Planner** / टूर प्लानर | `<Columns2 />` | Dual-screen collaborative planning (Interactive Map + AI Concierge) | `MapPanel.tsx` + `ChatPanel.tsx` |
| `fullchat` | **Ghumo AI** / घूमो AI गाइड | `<MessageSquare />` | Conversational travel assistant with speech, image galleries, and curated prompts | `ChatPanel.tsx` + Sidebar |
| `news` | **Travel Updates** / यात्रा बुलेटिन | `<Newspaper />` | Live crowd telemetry, police advisories, and queue wait times | `NewsPanel.tsx` |

---

*Document compiled and verified against the live codebase.*  
*Team Srajan — AI Synergy Hackathon 2026.*
