# AI Handoff — Rest Assured AFH Website

## Purpose of this file

This file preserves project context for future AI coding sessions, especially Codex sessions running in VS Code or on another machine.

It is based on project discussions and known uploaded repository/documentation state. The current repository may have changed. Always inspect the repository before making edits.

## Project summary

**Rest Assured AFH Website** is a static production website for Rest Assured AFH, a licensed Adult Family Home in Everett, Washington.

The project serves two purposes:

1. A real public website for the business.
2. A professional portfolio-quality client project demonstrating web development, performance optimization, SEO, deployment, and operational thinking.

## Known business details

- Business: Rest Assured AFH
- Domain: `restassuredafh.com`
- Owner: Eden Tesfay
- Address: 5417 133rd St SE, Everett, WA 98208
- License: 758759
- Phone: +1 (425) 332-3455
- Mobile: +1 (206) 403-3838
- Email: restassuredafh@gmail.com
- Owner experience: 17+ years in healthcare
- Location focus: Everett, Silver Firs, nearby Seattle area where relevant
- Business type: licensed Adult Family Home / residential senior care

Known services/positioning:

- adult family home care
- residential senior care
- owner-led care
- personal care
- medication assistance
- memory care support
- respite care
- hospice support
- meals/nutrition
- housekeeping/laundry
- calm, warm, home-like environment
- family-centered care
- dignity, comfort, communication, safety

## Known project history

The project has gone through multiple versions and polish phases.

Known historical work:

- Built a static site with real home photos and generated/cleaned branding assets.
- Added or discussed real photo gallery/lightbox behavior.
- Created or updated save-contact page.
- Created vCard/contact workflow.
- Created QR codes for website and save-contact page.
- Worked on business cards and QR placement.
- Added SEO foundation such as `robots.txt`, `sitemap.xml`, metadata, structured data.
- Added local business/owner structured data concepts.
- Performed performance optimization:
  - image optimization
  - WebP generation/usage
  - `width`/`height` image attributes
  - lazy loading
  - hero image tuning
  - stale preload removal
  - Nginx caching/compression when home-hosted
  - HTTP/2 discussion/use
- Reported Lighthouse results:
  - mobile performance reached 90+
  - desktop performance reached about 99
  - SEO/accessibility/best-practices scores reached around 100 after fixes
- Configured/used Cloudflare:
  - DNS/proxy
  - SSL/TLS Full (strict) was recommended
  - Brotli/HTTP2/HTTP3 were discussed
  - Rocket Loader was recommended off
  - managed robots/content-signal injection caused an SEO/Lighthouse issue and was disabled
- Investigated Cloudflare robots/autoconfig/autodiscover issues.
- Discussed Google Business Profile/local SEO strategy.
- Discussed migration away from home hosting to Firebase Hosting or Google Cloud.

Do not assume every historical file still exists in the repo. Verify.

## Current known state

The latest known repository state is not directly available in this ChatGPT window except prior uploaded README snippets and project memory.

Known or likely files:

- `README.md`
- `index.html`
- `style.css`
- `script.js`
- `save-contact/index.html`
- `downloads/contact.vcf`
- `robots.txt`
- `sitemap.xml`
- `assets/` with real photos, generated images, logos, favicons, and possibly WebP variants
- possible prior generated zip packages and patches outside the repo

The README currently appears to be too technical/progress-oriented and should be rewritten for a public/employer/client audience.

A more detailed technical/project-history record should be moved to documentation files under `docs/`.

## Current user goals

The user wants to professionalize the project before the next design overhaul.

Completed foundation work:

- GitHub repository renamed to `rest-assured-afh-website`.
- README rewritten as a public project overview.
- Project documentation moved into `docs/`.
- AI memory files added under `docs/ai/`.
- Firebase Hosting configured for the static site.
- GitHub Actions/Firebase Hosting integration configured for PR previews and `main` deploys.
- `restassuredafh.com` connected to Firebase Hosting.
- `www.restassuredafh.com` redirects to `https://restassuredafh.com/`.
- Previous home-hosted setup is retained only as a fallback/rollback option.

Current priorities:

1. Finish post-migration cleanup.
2. Confirm Cloudflare SSL/TLS mode remains Full strict if proxying is re-enabled.
3. Decide whether to revoke the Firebase CLI GitHub OAuth authorization after setup.
4. Keep any home-server fallback runbook in private operational notes, not this public repository.
5. Review site follow-ups: "nurse-led" wording, non-numeric image heights, and `script.js` loading behavior.
6. Audit local SEO visibility and Google Business Profile.
7. Later implement local SEO improvements.
8. Later do V2 design overhaul.

## Recommended repository name

Current repo name appears to be based on the owner name and is not descriptive enough.

Recommended new repo name:

```text
rest-assured-afh-website
```

Alternative:

```text
rest-assured-afh-static-site
```

Preferred: `rest-assured-afh-website`.

## Current SEO concern

User observed that Google local/map results show the business with a red place marker for some terms, e.g.:

- `adult family home everett wa`
- `adult family home everett seattle` / similar

But visibility is weaker or missing for broader/adjacent terms, e.g.:

- `adult care everett`
- `adult care silver firs`
- `adult care seattle`
- possibly other senior-care and residential-care terms

The user wants SEO to be more aggressive so more relevant searches lead to the business.

Important caution: local map pack rankings cannot be directly forced. Work must focus on legitimate local SEO:

- relevance
- distance/location alignment
- prominence
- Google Business Profile completeness
- reviews and owner responses
- local content
- structured data
- consistent NAP citations
- service and location relevance

No spam tactics.

## Current deployment state

The site is now hosted on Firebase Hosting with GitHub-based deployment.

Current stack:

- GitHub is the source of truth.
- Pull requests create Firebase Hosting preview deployments.
- Merges to `main` deploy to the Firebase Hosting live channel.
- Firebase Hosting serves the static site.
- `restassuredafh.com` is the live custom domain.
- `www.restassuredafh.com` redirects to `https://restassuredafh.com/`.
- Cloudflare remains DNS provider.
- Firebase Hosting records are currently DNS-only in Cloudflare so Firebase can manage certificates directly.
- The previous home-hosted setup is fallback/rollback only, not the active production origin.

## Known risks

### SEO risks

- Keyword stuffing could hurt credibility.
- Fake or incentivized reviews would be unethical and risky.
- Thin duplicated city/location pages can become doorway pages.
- Local SEO results vary by location, personalization, device, and search history.
- Google Business Profile changes may take time to affect rankings.

### Deployment risks

- Switching DNS/domain without a tested Firebase deployment could cause downtime.
- Cloudflare settings can break robots.txt, SSL, redirects, or caching.
- Firebase preview/live channels must be configured carefully.
- GitHub Actions secrets must not leak.
- Old home-hosted content and new Firebase content can diverge.

### Documentation risks

- Current README is not portfolio-oriented.
- Important technical decisions are spread across chat history.
- Future Codex sessions lack context unless these docs are maintained.

### Content/legal risks

- Do not invent care guarantees, medical claims, staff qualifications, availability, pricing, or testimonials.
- All claims must be grounded in provided business facts.

## Known commands/tasks already discussed

Documentation setup:

```bash
mkdir -p docs
touch docs/TECHNICAL_DOCUMENTATION.md
touch docs/PROJECT_HISTORY.md
touch docs/DEPLOYMENT.md
touch docs/SEO_PLAN.md
touch docs/MAINTENANCE.md
touch docs/SECURITY.md
touch docs/TODO.md
```

Potential AI context setup:

```bash
mkdir -p docs/ai
touch AGENTS.md
touch docs/ai/HANDOFF.md
touch docs/ai/DECISIONS.md
touch docs/ai/NEXT_ACTIONS.md
```

No confirmed command execution in the repository is known from the chat for these exact files yet.

## Suggested next safe working order

1. Inspect repo state:
   - list files
   - read current README
   - inspect current `index.html`, `style.css`, `script.js`
   - inspect current `robots.txt`, `sitemap.xml`, structured data
2. Add AI context docs.
3. Rename repo on GitHub.
4. Update local Git remote if GitHub rename changes remote URL.
5. Rewrite README.
6. Move old README/progress content into `docs/PROJECT_HISTORY.md` or `docs/TECHNICAL_DOCUMENTATION.md`.
7. Create `docs/TODO.md` and `docs/SEO_PLAN.md`.
8. Perform SEO audit.
9. Evaluate Firebase Hosting.
10. Implement CI/CD.
11. Only after this: design V2.

## Handoff instruction for future AI/Codex

Do not make broad changes based only on this file.

Start by inspecting the actual repository. Then propose a small concrete change. If you update project state, update these docs.
