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

## Immediate Actions

1. Confirm Cloudflare SSL/TLS mode remains Full strict if Cloudflare proxying is re-enabled.
2. Decide whether to revoke the Firebase CLI GitHub OAuth authorization after setup.
3. Keep any home-server fallback activation runbook in private operational notes, not this public repository.
4. Review whether "nurse-led" wording is approved and documented.
5. Check and fix non-numeric image height attributes if confirmed as a cleanup task.
6. Confirm homepage `script.js` loading behavior against performance notes.

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
