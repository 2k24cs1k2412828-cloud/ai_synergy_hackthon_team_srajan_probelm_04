# Dataset Exploration Plan

## Purpose

The destination dataset will provide structured information for discovery, recommendation, and basic itinerary planning across Madhya Pradesh's lesser-known cultural and heritage sites.

## Proposed Fields

- **destination_id:** Destination unique identifier
- **name:** Destination name
- **district:** District within Madhya Pradesh
- **category:** Destination category (e.g., Heritage, Architecture, Nature, Spiritual)
- **interests:** Comma-separated relevant interests (e.g., history, sculpture, trekking)
- **short_description:** Factual description sourced directly from documented records
- **latitude:** Latitude (decimal degrees), where reliably sourced
- **longitude:** Longitude (decimal degrees), where reliably sourced
- **source_name:** Name of the documenting authority or publisher
- **source_url:** Direct URL to authoritative reference
- **date_checked:** Date of last verification/access (YYYY-MM-DD)
- **freshness_status:** Currentness of the record (e.g., Verified Active, Review Needed)
- **verification_status:** Status of multi-source verification (e.g., Official Source Verified, Single Source)

## Data Collection Rules

1. Select a manageable number of candidate destinations across Madhya Pradesh.
2. Prefer official tourism, district administration, site authority, or other credible primary sources where available.
3. Record the exact claim supported by each source.
4. Record when the information was checked.
5. Do not guess missing coordinates, opening hours, prices, or access details.
6. Respect source licensing and attribution.
7. Separate source availability from independent verification.

## Dataset Exploration Questions

- What percentage of records has a source URL?
- What percentage has reliable coordinates?
- Which fields are frequently missing?
- Which districts and categories are represented?
- Which facts need fresh confirmation before a trip?

> **Important:** The dataset should contain actual sourced destination records before being presented as researched data. Placeholder rows are not evidence of destination coverage.
