# Round 2 Implementation Roadmap

---

## Phase 1 — Project Foundation
Create the React frontend and Node.js API, configure environment variables, establish the database schema, and seed reviewed destination records.

## Phase 2 — Discovery Experience
Implement destination cards, preference filters, relevant ranking, empty states, and manual search.

## Phase 3 — Grounded AI
Integrate Gemini on the backend, provide retrieved destination records, validate outputs, and implement graceful fallback.

## Phase 4 — Map and Basic Itinerary
Integrate a selected map provider and build a basic itinerary workflow using only available data and known constraints.

## Phase 5 — Testing and Demonstration
Run acceptance tests, document failures, capture evidence from working features, and update implementation status.

---

## Definition of Done

- Users can filter the curated destination dataset.
- Destination details show source and freshness information.
- AI explanations use retrieved records.
- Unknown information is not invented.
- Basic browsing survives an AI service failure.
- At least three acceptance tests have recorded results.
- Implemented features and limitations are clearly disclosed.

---

## Deferred Features

End-to-end booking, payment processing, live crowd prediction, guaranteed real-time operational information, and comprehensive state-wide coverage remain outside the initial MVP unless separately scoped and implemented.
