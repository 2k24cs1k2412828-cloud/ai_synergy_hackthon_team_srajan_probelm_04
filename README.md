# SRAJAN — Beyond the Fort

**AI Synergy Hackathon 2026 | Tourism Track | Case Study 04**  
**Project:** AI-assisted discovery of lesser-known heritage and cultural destinations across Madhya Pradesh.

---

## Project Overview

*Beyond the Fort* challenges us to investigate barriers that may prevent travellers from discovering and exploring destinations beyond familiar tourist attractions.

Team Srajan proposes a mobile-first, discovery-focused tourism platform that helps travellers explore relevant destinations using structured destination information, preference-based recommendations, source-backed explanations, map presentation, and basic itinerary planning.

The discovery gap is our leading problem hypothesis. Its extent and causes require further validation.

## Problem Statement

> How might we help travellers discover and evaluate lesser-known heritage and cultural destinations across Madhya Pradesh through relevant recommendations and accessible, source-backed destination information?

## Proposed Solution

The proposed platform will:
- Help travellers discover destinations according to interests and available time.
- Present available destination details with source and freshness information.
- Provide map-based destination exploration.
- Support basic itinerary planning.
- Use Google Gemini for explanations grounded in retrieved destination records.

## Proposed Technology Stack

- **Frontend:** React, TypeScript, Vite
- **Backend:** Node.js, TypeScript, Express
- **Database:** Supabase / PostgreSQL
- **AI:** Google Gemini API
- **Maps:** Map library and a suitable map provider, to be selected

*These technologies describe the intended architecture. Integration and implementation remain unverified.*

## Current Status

**Stage:** Planning and technical documentation.  
This repository documents the proposed solution, system architecture, research process, data strategy, acceptance tests, and Round 2 roadmap. It does not yet claim a working application or completed API integration.

## Repository Contents

- `docs/` — problem investigation, architecture, workflow, stack, risks, and roadmap
- `prototype/` — proposed interface wireframe and pseudocode
- `data/` — destination data schema and exploration guidance
- `research/` — evidence and source register
- `tests/` — planned acceptance tests and API test plan

## Responsible AI Principles

- Use source-backed destination records for factual explanations.
- Distinguish verified information from assumptions and unknowns.
- Do not invent historical facts, prices, opening hours, or access restrictions.
- Disclose missing data, stale information, and implementation limitations.
- Keep privileged API credentials on the server.

## Round 2 Objective

Build and test a discovery-first prototype using a curated destination dataset, preference-based filtering, source-aware AI explanations, and selected supporting capabilities.

## Team

**Team Srajan** — AI Synergy Hackathon 2026
