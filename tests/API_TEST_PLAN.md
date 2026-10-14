# API Test Plan

**Status:** Planned for Round 2; not yet executed.

---

## 1. Overview and Scope

This document details the test strategy, suite structure, and execution criteria for validating the Express backend API against the specifications in [docs/API_CONTRACT.md](file:///home/mayanksoni/Downloads/ai_code/docs/API_CONTRACT.md).

## 2. Test Suites

### Suite 1: Health & System Diagnostics (`GET /api/health`)

| Test ID | Objective | Input / Conditions | Expected HTTP Status | Expected Response Body |
| :--- | :--- | :--- | :--- | :--- |
| **API-HT-01** | Verify API health check | `GET /api/health` | 200 OK | `{"status": "ok"}` |
| **API-HT-02** | Verify CORS headers | Preflight `OPTIONS /api/health` | 204 No Content | Proper Access-Control headers |

### Suite 2: Destination Retrieval (`GET /api/destinations`)

| Test ID | Objective | Input / Conditions | Expected HTTP Status | Expected Response Behavior |
| :--- | :--- | :--- | :--- | :--- |
| **API-DST-01** | Fetch destination list without filters | `GET /api/destinations` | 200 OK | Default array of records capped at default limit |
| **API-DST-02** | Filter by valid district | `GET /api/destinations?district=Morena` | 200 OK | Only records matching district "Morena" |
| **API-DST-03** | Filter by category | `GET /api/destinations?category=Heritage` | 200 OK | Only records with category "Heritage" |
| **API-DST-04** | Limit constraint enforcement | `GET /api/destinations?limit=100` | 200 OK | Results capped at server maximum (50) |
| **API-DST-05** | Invalid query parameter handling | `GET /api/destinations?limit=-5` | 400 Bad Request | Informative error envelope |

### Suite 3: Preference-Based Recommendations (`POST /api/recommendations`)

| Test ID | Objective | Input Payload | Expected HTTP Status | Expected Behavior |
| :--- | :--- | :--- | :--- | :--- |
| **API-REC-01** | Valid interest & time criteria | `{"interests": ["history"], "timeAvailableHours": 5}` | 200 OK | Ranked candidate list with source & freshness fields |
| **API-REC-02** | Empty interest array | `{"interests": [], "timeAvailableHours": 4}` | 400 Bad Request | Validation error indicating missing required interests |
| **API-REC-03** | Negative or non-numeric time | `{"interests": ["history"], "timeAvailableHours": -2}` | 400 Bad Request | Validation error |
| **API-REC-04** | Zero matches gracefully handled | `{"interests": ["nonexistent_tag"], "timeAvailableHours": 1}` | 200 OK | Empty array `[]` with recommendations metadata |

### Suite 4: Grounded AI Explanation (`POST /api/assistant/explain`)

| Test ID | Objective | Input Payload | Expected HTTP Status | Expected Behavior |
| :--- | :--- | :--- | :--- | :--- |
| **API-EXP-01** | Valid destination explanation | `{"destinationId": "MP-DEST-001", "question": "Why visit?"}` | 200 OK | Explanation strictly referencing record attributes |
| **API-EXP-02** | Non-existent destination ID | `{"destinationId": "INVALID-999", "question": "Tell me more"}` | 404 Not Found | Clear error message |
| **API-EXP-03** | Gemini API timeout or rate limit | Simulate upstream Gemini 503 or network drop | 503 Service Unavailable | Fallback response with raw database facts, no crash |
| **API-EXP-04** | Prompt injection resilience | Payload containing instructions to override system prompt | 200 OK | Output remains strictly bounded to retrieved destination data |

## 3. Tooling and Automation Framework

- **HTTP Testing:** Supertest with Vitest / Jest
- **Schema Validation:** Zod for incoming request body validation
- **Mocking:** Nock / MSW for upstream Gemini API mock testing
- **CI Pipeline:** Automated execution upon Pull Request in Round 2
