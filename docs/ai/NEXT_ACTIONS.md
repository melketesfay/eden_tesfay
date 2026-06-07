# Next Actions — Rest Assured AFH Website

This file lists concrete next actions for future AI sessions. Keep it short and move completed work into `docs/PROJECT_HISTORY.md` or the relevant documentation file.

## Current State

- Repository name: `rest-assured-afh-website`.
- Production domain: `https://restassuredafh.com/`.
- Static host: Firebase Hosting.
- Deployment: Firebase Hosting GitHub integration.
- PR behavior: Firebase preview deploys.
- `main` behavior: Firebase live-channel deploy.
- DNS provider: Cloudflare.
- `www.restassuredafh.com` redirects to `https://restassuredafh.com/`.
- Previous home-hosted setup is fallback/rollback only, not active public production.
- Branded `404.html` page exists for missing routes.
- Save-contact page uses approved licensed nurse/nurse-led wording.
- Mobile menu button changes from hamburger to close icon while open.

## Pause Note

Project work is paused after the June 2026 documentation, Firebase Hosting, custom-domain, 404, save-contact, and mobile-menu polish work. Resume from latest `main` and open a focused branch for the next task.

## Immediate Actions

1. Pull latest `main`, confirm a clean working tree, and smoke-test production.
2. Audit current local SEO visibility and Google Business Profile.
3. Update `docs/SEO_PLAN.md` with verified search and GBP observations.
4. Check and fix non-numeric image height attributes only if still confirmed as a cleanup task.
5. Confirm homepage `script.js` loading behavior only if still relevant after current deployment behavior.

## SEO Next Actions

1. Audit current local SEO visibility and Google Business Profile.
2. Update `docs/SEO_PLAN.md` with verified search observations.
3. Plan the first legitimate local landing page, likely `/adult-family-home-everett-wa/`.
4. Implement local SEO copy only from verified business facts.

## Guardrails

- Do not invent medical claims, staff credentials, reviews, pricing, availability, or guarantees.
- Do not expose private home-server details in public docs.
- Do not commit secrets, service account JSON files, `.env`, or Firebase tokens.
- Preserve Firebase Hosting, GitHub Actions, contact/vCard, SEO, accessibility, and performance behavior unless a requested task requires a change.
