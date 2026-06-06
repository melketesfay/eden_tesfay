# Rest Assured AFH Website

Production static website for **Rest Assured AFH**, a licensed Adult Family Home in Everett, Washington.

The site presents the home, owner-led care approach, real home photos, contact options, local SEO foundation, and a save-contact workflow for business card QR codes.

## Live Site

```text
https://restassuredafh.com/
```

## Project Goals

- Present Rest Assured AFH clearly and professionally for families researching senior care.
- Support local search visibility for Everett, Silver Firs, and nearby Snohomish County searches.
- Make contact easy through phone, email, location, QR, and vCard workflows.
- Keep the website fast, accessible, secure, and easy to maintain.
- Maintain a professional repository structure suitable for client handoff and portfolio review.

## Key Features

- Responsive static homepage.
- Real home photo gallery with lightbox behavior.
- Owner section for Eden Tesfay and 17+ years of healthcare experience.
- Services overview for personal care, medication assistance, memory care support, respite care, hospice support, meals/nutrition, and housekeeping/laundry.
- Local business SEO metadata and structured data.
- `robots.txt` and `sitemap.xml`.
- Save-contact page at `/save-contact/`.
- Downloadable vCard at `/downloads/contact.vcf`.
- Business card QR assets.

## Tech Stack

- HTML
- CSS
- JavaScript
- Static assets using optimized image formats where available

The current site does not require a backend for its core public-facing experience.

## Repository Structure

```text
.
|-- index.html
|-- style.css
|-- script.js
|-- save-contact/
|-- downloads/
|-- assets/
|-- business_card/
|-- docs/
|-- robots.txt
`-- sitemap.xml
```

## Documentation

Project documentation is kept in `docs/`:

- `docs/TECHNICAL_DOCUMENTATION.md`
- `docs/PROJECT_HISTORY.md`
- `docs/DEPLOYMENT.md`
- `docs/SEO_PLAN.md`
- `docs/MAINTENANCE.md`
- `docs/SECURITY.md`
- `docs/TODO.md`
- `docs/ai/`

## Status

The current priority is repository professionalization, documentation cleanup, SEO planning, and deployment evaluation. A larger design overhaul is intentionally deferred until those foundations are handled.

Recommended next infrastructure direction: evaluate Firebase Hosting with GitHub-based deployment while keeping Cloudflare DNS/CDN considerations documented.
