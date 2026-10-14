# Acceptance Tests

**Status:** Planned; not yet executed.

---

| ID | Scenario | Expected Result | Implementation Status |
| :--- | :--- | :--- | :--- |
| **AT-01** | Traveller requests recommendations using interests | Relevant destination records are returned with complete source metadata and confidence tags | Planned for Round 2 |
| **AT-02** | Opening-hours or pricing information is missing | System explicitly reports *unknown* rather than inventing or hallucinating a value | Planned for Round 2 |
| **AT-03** | Two sources provide conflicting information | Conflict is flagged for human editorial review and disclosed to the user | Planned for Round 2 |
| **AT-04** | Gemini AI service is unavailable or times out | Database-backed destination browsing, manual filters, and map presentation still work | Planned for Round 2 |
| **AT-05** | Itinerary exceeds a known time or distance constraint | System flags the schedule conflict and suggests alternative stops or adjusted timings | Planned for Round 2 |
| **AT-06** | Traveller declines precise browser/GPS location permission | Manual destination search and district filtering remain fully accessible and functional | Planned for Round 2 |

---

## Test Execution Logging Standard

When tests are implemented in Round 2, record:
- **Execution Date:** YYYY-MM-DD
- **Test Environment:** OS, Node.js version, browser version
- **Observed Result:** Exact payload or UI behavior
- **Pass / Fail Status:** Verified outcome
- **Evidence Link:** Screenshot, API test log, or screen recording artifact
