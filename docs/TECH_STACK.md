# Proposed Technology Stack

| Layer | Technology | Purpose | Status |
| :--- | :--- | :--- | :--- |
| **Frontend** | React | User interface | Proposed |
| **Language** | TypeScript | Type safety | Proposed |
| **Build tool** | Vite | Frontend development | Proposed |
| **Backend** | Node.js + Express | API and business logic | Proposed |
| **Database** | Supabase / PostgreSQL | Destination and itinerary data | Proposed |
| **AI** | Google Gemini API | Grounded explanations | Planned |
| **Maps** | Provider to be selected | Destination locations and possible routing | Pending selection |
| **Testing** | Framework to be selected | Automated and manual validation | Pending selection |
| **Documentation** | Markdown + Mermaid | Technical and research documentation | In use in this repository |

---

## Design Decisions

- Begin with a modular application rather than introducing unnecessary microservices.
- Keep privileged API keys on the backend.
- Store source metadata alongside destination information.
- Validate incoming requests and AI output.
- Keep the first version focused on destination discovery.

## Pending Technical Decisions

- Exact Gemini model and API version
- Map, geocoding, and routing provider
- Database schema and access policies
- Authentication requirements
- Hosting and deployment
- Automated test framework

> **Note:** No technology should be labelled *integrated* until the team has implemented and tested it.
