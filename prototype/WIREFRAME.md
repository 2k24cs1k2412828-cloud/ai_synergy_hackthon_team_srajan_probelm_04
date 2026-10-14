# Low-Fidelity Wireframe

**Status:** Concept only; not an implemented interface.

---

```text
+--------------------------------------------------+
| SRAJAN | Beyond the Fort                         |
| Discover destinations across Madhya Pradesh      |
+--------------------------------------------------+
| What interests you?                              |
| [History] [Architecture] [Culture] [Nature]      |
|                                                  |
| Available time: [5 hours v]                      |
| District:       [Any district v]                 |
|                                                  |
|               [Find Destinations]                |
+--------------------------------------------------+
| DESTINATION RESULTS                              |
|                                                  |
| +----------------------------------------------+ |
| | Destination name                             | |
| | District / category                          | |
| | Short description                            | |
| | Source status / last checked                 | |
| | [Details] [Show on map]                      | |
| +----------------------------------------------+ |
|                                                  |
| Selected destinations: [Build itinerary]        |
|                                                  |
| AI explanation based on retrieved records       |
+--------------------------------------------------+
```

## Design Principles

- **Mobile-first responsive layout:** Designed primarily for smartphones used by travellers in transit.
- **Clear source and freshness labels:** Every card explicitly indicates data provenance and date checked.
- **Accessible controls and readable text:** High-contrast text, clear touch targets, and accessible form labels.
- **Manual search fallback:** Full filtering and search support when GPS or location access is declined.
- **Honest status indicators:** No visual indicator (e.g., green checkmark badge) that implies independent verification unless the verification process supports it.
