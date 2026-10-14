# Risks and Limitations

| Risk | Planned Mitigation |
| :--- | :--- |
| **AI-generated false facts** | Ground responses in retrieved records and validate outputs server-side |
| **Stale destination information** | Track checked dates and show freshness status on every card |
| **Incomplete destination coverage** | Disclose dataset scope clearly and expand incrementally |
| **Conflicting sources** | Flag conflicts for human review and label uncertainty in UI |
| **Uncertain travel times** | Use a routing provider where available or mark unknown |
| **AI or map API failure** | Provide graceful fallback behaviour (database browsing always functional) |
| **Location privacy** | Request explicit user consent and provide full manual search alternative |
| **API key leakage** | Keep privileged secrets server-side and never bundle in frontend code |
| **Cultural or community harm** | Use sourced guidance and confirm restrictions with authoritative sources |
| **Scope overload** | Focus Version 1 strictly on discovery and lightweight itinerary |

> **Important:** Do not describe information as “verified” unless a defined verification process has actually been completed.
