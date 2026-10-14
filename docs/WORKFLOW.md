# Proposed User Workflow

**Status:** This workflow describes intended behaviour and is not evidence of a working prototype.

---

## Standard Flow

1. **Open Discovery:** The traveller opens the destination discovery interface.
2. **Select Preferences:** The traveller selects interests and available time.
3. **Record Retrieval:** The backend retrieves matching destination records from the database.
4. **Candidate Ranking:** The application filters and ranks candidates using known attributes.
5. **Grounded Explanation:** Gemini assists in explaining why a destination may match the traveller's preferences based solely on retrieved records.
6. **Presentation:** The platform presents destination details, source references, freshness status, and map information where available.
7. **Itinerary Selection:** The traveller selects destinations for a basic itinerary.
8. **Constraint Evaluation:** The application checks supported constraints and flags missing information.
9. **Review and Edit:** The traveller reviews, edits, and decides whether to use the proposed plan.

## Exception Handling

- **No matching destinations:** Offer broader filters or alternative criteria.
- **Missing source:** Label the information as *unknown* or omit the claim entirely.
- **Conflicting sources:** Flag the conflict for human review.
- **Gemini unavailable:** Gracefully retain basic database-backed destination browsing.
- **Map unavailable:** Retain the destination list and textual location details.
- **Itinerary constraint violation:** Flag the issue clearly and allow the traveller to edit constraints or destinations.
