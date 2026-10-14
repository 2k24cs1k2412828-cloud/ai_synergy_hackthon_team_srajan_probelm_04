# Draft API Contract

**Status:** Proposed; endpoints not yet implemented.

---

## 1. Health Check

`GET /api/health`

- **Purpose:** Report whether the API process is responding.
- **Expected Success Response (200 OK):**
```json
{
  "status": "ok"
}
```

## 2. Destination Listing

`GET /api/destinations`

- **Proposed Query Filters:**
  - `district` (e.g., `Morena`, `Chanderi`)
  - `category` (e.g., `heritage`, `culture`, `nature`)
  - `interest` (e.g., `architecture`, `temples`)
  - `limit` (positive integer, max 50)
- **Validation:** The backend validates filter parameters and caps the maximum number of returned results.

## 3. Destination Recommendations

`POST /api/recommendations`

- **Purpose:** Retrieve candidate destinations ranked by traveller preferences.
- **Example Request:**
```json
{
  "interests": ["history", "architecture"],
  "timeAvailableHours": 5
}
```
- **Expected Behaviour:**
  - Validate input payload structure and boundary values.
  - Retrieve candidate destination records from database.
  - Rank candidates using known attributes and travel times.
  - Return source and freshness metadata with each destination.
  - Avoid returning destinations absent from the retrieved dataset.

## 4. AI Explanation

`POST /api/assistant/explain`

- **Purpose:** Generate natural-language explanations strictly grounded in retrieved destination records.
- **Example Request:**
```json
{
  "destinationId": "example-id",
  "question": "Why might this destination interest me?"
}
```
- **Expected Behaviour:**
  - Retrieve the destination record server-side.
  - Provide only verified and approved context to Gemini API.
  - Validate and filter the AI response.
  - Preserve and attach source metadata.
  - Safely handle missing destinations (404) and AI service downtime (503 / graceful fallback).

## 5. Error Handling

Planned HTTP response codes include:
- **400 Bad Request:** Invalid request parameters or payload
- **404 Not Found:** Destination or resource not found
- **429 Too Many Requests:** Rate limit reached
- **500 Internal Server Error:** Unexpected server-side error
- **503 Service Unavailable:** Dependent external service (e.g., Gemini or map provider) unavailable

*Exact response envelopes and error schemas will be finalised during implementation.*
