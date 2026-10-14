# Proposed System Pseudocode

**Status:** Design logic only; not implemented.

---

## 1. Destination Discovery

```python
function discoverDestinations(preferences):
    validate(preferences)

    candidates = database.getDestinations(preferences)

    ranked = rankCandidates(
        candidates,
        preferences.interests,
        preferences.timeAvailableHours
    )

    return ranked with sourceMetadata and freshnessStatus
```

## 2. Grounded AI Explanation

```python
function explainDestination(destinationId, question):
    record = database.getDestination(destinationId)

    if record is missing:
        return safeNotFoundResponse()

    context = record.approvedFacts + record.sourceMetadata

    draft = Gemini.generate(question, context)

    checked = validateAndFilter(draft, context)

    return checked with sourceMetadata
```

## 3. Basic Itinerary

```python
function buildItinerary(destinations, availableTime):
    plan = arrangeUsingKnownDurationAndRouteData(destinations)

    mark missing travel data as unknown

    if known constraints are exceeded:
        flag the conflict

    return provisionalPlan
```

> **Note:** The pseudocode is intended to guide implementation and testing in Round 2.
