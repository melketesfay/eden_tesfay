# AGENTS.md

## Project: Rest Assured AFH Website

This repository contains the public website for **Rest Assured AFH**, a licensed Adult Family Home in Everett, Washington.

The project is a real client/business website, not a toy demo. Treat all changes as production-facing unless explicitly told otherwise.

## Business context

Known business details from project discussions:

- Business name: **Rest Assured AFH**
- Domain: **restassuredafh.com**
- Business type: licensed Adult Family Home / residential senior care
- Location: **5417 133rd St SE, Everett, WA 98208**
- Area focus: Everett, Silver Firs, Snohomish County, and nearby Seattle-area searches where relevant
- License: **#758759**
- Owner: **Eden Tesfay**
- Owner experience: **17+ years in healthcare**
- Phone: **+1 (425) 332-3455**
- Mobile: **+1 (206) 403-3838**
- Email: **restassuredafh@gmail.com**

Known positioning/services from prior work:

- owner-led care
- warm home-like setting
- family-centered care
- calm residential environment
- dignity, safety, personal care
- medication assistance
- memory care support
- respite care
- hospice support
- meals/nutrition
- housekeeping/laundry

Do not invent medical claims, guarantees, staff credentials, availability, pricing, resident capacity, testimonials, certifications, or services beyond what is documented or explicitly provided.

## Language and tone

The website and repository documentation should be written in **English** because the business and audience are US-facing.

Preferred tone:

- professional
- calm
- trustworthy
- warm but not sentimental
- clear and local-search aware
- not keyword-stuffed
- not exaggerated

Avoid:

- fake urgency
- overpromising care outcomes
- generic AI marketing language
- manipulative SEO copy
- “best in Everett” claims unless independently supported
- fabricated reviews or testimonials
- thin duplicate city pages

## Development principles

Before editing:

1. Inspect the current repository files.
2. Do not assume this document is perfectly synchronized with the latest code.
3. Preserve working production behavior unless the requested task requires a change.
4. Prefer small, reviewable changes.
5. Do not remove SEO, accessibility, performance, structured data, contact, QR, or deployment-related work without a clear reason.
6. Do not commit secrets, API keys, service account files, `.env`, or private client data.

## Expected repository direction

The repository currently needs to be made more professional for portfolio/client handoff use.

Known planned changes:

- Rename the GitHub repository to a professional name, recommended: `rest-assured-afh-website`.
- Rewrite `README.md` as a public-facing, employer/client-oriented project overview.
- Move long technical/progress documentation into `docs/`.
- Add AI handoff/context files under `docs/ai/`.
- Add or update:
  - `docs/TECHNICAL_DOCUMENTATION.md`
  - `docs/PROJECT_HISTORY.md`
  - `docs/DEPLOYMENT.md`
  - `docs/SEO_PLAN.md`
  - `docs/MAINTENANCE.md`
  - `docs/SECURITY.md`
  - `docs/TODO.md`

## Current architecture known from chat

The site is a static website. Known files/features from prior work include:

- `index.html`
- `style.css`
- `script.js`
- `/save-contact/index.html`
- `/downloads/contact.vcf`
- `robots.txt`
- `sitemap.xml`
- image assets, including real home photos and generated/cleaned logo assets
- favicon/logo work
- lightbox functionality for real-photo gallery
- contact/save-contact QR workflow
- structured data / JSON-LD work for the local business and owner
- performance optimizations for Lighthouse mobile score
- Cloudflare in front of the site

The actual current repository may differ. Always inspect the repo before changing.

## SEO rules

SEO is a high-priority next phase, especially local SEO.

Known target search themes:

- adult family home Everett WA
- adult family home Silver Firs
- adult family home near Silver Firs
- adult care Everett
- adult care Silver Firs
- senior care Everett WA
- residential senior care Everett
- memory care support Everett
- respite care Everett WA
- hospice support Everett WA
- personal care assistance Everett
- medication assistance Everett

Important: local SEO must be aggressive but legitimate.

Allowed:

- improve page titles/descriptions
- add local landing page content where useful
- improve Google Business Profile-aligned copy
- improve structured data
- add service sections
- add FAQ if truthful
- improve internal linking
- maintain NAP consistency
- create one strong local landing page first, e.g. `/adult-family-home-everett-wa/`

Avoid:

- keyword stuffing
- fake reviews
- fake locations
- doorway pages
- duplicate city pages with thin text
- unsupported ranking claims
- changing the Google Business Profile name to spam keywords

## Deployment direction

Current hosting was discussed as home-hosted behind Cloudflare. The planned improvement is to evaluate and likely migrate the static site to **Firebase Hosting** with GitHub Actions-based deployment.

Expected target workflow:

- GitHub repository as source of truth
- push/merge to `main` triggers deployment
- Firebase Hosting serves the static site
- Cloudflare remains DNS/CDN/proxy layer if appropriate
- custom domain remains `restassuredafh.com`
- home server can remain as fallback only if useful

Cloud Run was discussed but is likely unnecessary for the current static website. Firebase Hosting is the preferred first option for a static site. Cloud Run may become relevant later for backend/API features.

## Security rules

Do not expose private infrastructure publicly.

Known security/ops requirements:

- no secrets in Git
- no `.env` files committed
- no service account JSON files committed
- GitHub Actions secrets must be stored in GitHub Secrets or via Firebase/GitHub integration
- Cloudflare SSL should remain strict/full where applicable
- do not weaken DNS/SSL settings just to make deployment easier
- avoid exposing home-hosted services directly if Firebase can serve production

## Performance and accessibility

Performance work has already been significant. Avoid regressing it.

Known performance decisions:

- images were converted/resized/optimized
- stale preload warnings were addressed
- Lighthouse mobile performance reportedly reached 90+
- desktop performance reportedly reached 99
- future performance work should focus on CDN/edge delivery, caching strategy, and real user monitoring rather than reducing visual quality further

When changing images:

- preserve `width` and `height` attributes where appropriate
- use modern formats where already implemented
- avoid oversized hero images
- preserve lazy loading unless a specific image needs high priority
- check Lighthouse after large changes

## Contact and QR workflow

Known QR/contact decisions:

- Website QR target: `https://restassuredafh.com/`
- Save-contact QR target: `https://restassuredafh.com/save-contact/`
- `contact.vcf` should be triggered from the save-contact page
- do not point public QR codes directly to `contact.vcf` unless explicitly requested

## Owner section

Known owner section direction:

- Owner: Eden Tesfay
- 17+ years healthcare experience
- owner-led care
- use calm and credible copy
- avoid inventing medical titles or credentials not provided

Previous owner-section concept included:

- “Meet the Owner”
- “Experienced care, personally led.”
- quote about giving families peace of mind
- badges/highlights: 17+ years healthcare experience, owner-led care, License #758759

Only keep or reintroduce this if it matches the current repository state and client preference.

## How to work with this repo

When receiving a task:

1. Read this `AGENTS.md`.
2. Read `docs/ai/HANDOFF.md`.
3. Read `docs/ai/DECISIONS.md`.
4. Read `docs/ai/NEXT_ACTIONS.md`.
5. Inspect the actual repository state.
6. Make the smallest useful change.
7. Update the relevant docs if the change affects project state or decisions.

## Non-goals

Do not start a full redesign before SEO/deployment/documentation issues are handled.

Known priority order:

1. Project documentation and repo professionalism
2. SEO audit and local SEO plan
3. Firebase Hosting / CI-CD evaluation and migration
4. Local SEO implementation
5. Later V2 design overhaul
