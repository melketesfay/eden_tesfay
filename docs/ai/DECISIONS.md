# Decisions — Rest Assured AFH Website

This file records known project decisions from prior work. Do not treat planned items as completed unless verified in the repository.

## Confirmed business/project decisions

### Project language

Decision: The website and project documentation should be in **English**.

Reason: The business and audience are US-facing.

### Site type

Decision: The site is a **static website**.

Reason: Current needs are informational: business presentation, contact, local SEO, photos, vCard/save-contact workflow, and hosting reliability. No backend is currently required for the core site.

### Business positioning

Decision: Position the business as a licensed, owner-led Adult Family Home in Everett, WA, with a warm, home-like, family-centered care environment.

Known claims allowed:

- licensed Adult Family Home
- License #758759
- owner-led care
- Eden Tesfay has 17+ years in healthcare
- Everett / Silver Firs local relevance
- personal care, medication assistance, memory care support, respite care, hospice support, meals/nutrition, housekeeping/laundry

Do not invent additional claims.

### Domain

Decision: Use `restassuredafh.com` as the public domain.

### QR targets

Decision:

- Main website QR should target: `https://restassuredafh.com/`
- Save contact QR should target: `https://restassuredafh.com/save-contact/`
- The save-contact page can then trigger or link to `downloads/contact.vcf`.

Reason: A direct QR to a `.vcf` file is less user-friendly and less brand-building than a dedicated save-contact page.

### Owner content

Decision: Include owner-led trust messaging around Eden Tesfay and 17+ years of healthcare experience.

Known prior owner-section direction:

- “Meet the Owner”
- “Experienced care, personally led.”
- calm, responsible, personal approach
- daily routines, communication with families, comfort, dignity, well-being
- quote concept: giving families peace of mind that loved ones are safe, respected, and cared for with patience and dignity

Do not invent a medical title or license for Eden unless provided.

## Technical decisions

### Static hosting direction

Decision: Evaluate/migrate to **Firebase Hosting** rather than Cloud Run for the current static site.

Reason:

- Current site is static.
- Firebase Hosting fits static assets, SSL, custom domain, preview channels, and GitHub integration.
- Cloud Run is better suited for containers, APIs, dynamic apps, or future backend services.

Cloud Run remains a possible future option if backend/API functionality is added.

### Deployment direction

Decision: Target CI/CD from GitHub.

Expected target:

- push or merge to `main` triggers production deploy
- pull requests can create preview deployments if configured
- deployment should be documented in `docs/DEPLOYMENT.md`

No confirmed Firebase/GitHub Actions implementation is known yet.

### Cloudflare

Decision: Use Cloudflare carefully as DNS/CDN/proxy layer where appropriate.

Known prior recommendations:

- SSL/TLS should be Full (strict), not Flexible.
- Brotli ON.
- HTTP/2 ON.
- HTTP/3 ON if available.
- Rocket Loader OFF unless specifically tested.
- Cache static assets.
- Do not cache HTML aggressively until the deployment model is clear.
- Avoid Cloudflare-managed robots/content-signal injection if it causes SEO validation issues.

Known issue: Cloudflare managed Content Signals previously inserted a robots/content-signal directive that Lighthouse flagged. Disabling it restored SEO score.

### Performance

Decision: Preserve prior performance work.

Known baseline from prior discussion:

- Mobile Lighthouse performance reached 90+ after image/server optimizations.
- Desktop performance reached about 99.
- SEO/accessibility/best-practices scores reached around 100 after fixes.

Decision: Future performance work should focus on hosting/CDN/cache/deployment rather than degrading visual quality further.

### Images

Decision: Use optimized image assets and preserve width/height/lazy loading patterns where possible.

Known prior work included:

- WebP conversion
- targeted hero image tuning
- real photo integration
- lightbox behavior
- favicon/logo optimization

### Repo name

Decision: Rename repository to a professional, descriptive name.

Recommended:

```text
rest-assured-afh-website
```

Current repo name appears to be owner-name based and is not descriptive enough for a GitHub portfolio.

## Documentation decisions

### README

Decision: Rewrite `README.md` as a public-facing project overview.

Audience:

- potential employers
- clients
- developers reviewing portfolio quality
- future maintainers

README should not be the full project diary.

### Technical/progress documentation

Decision: Move detailed implementation history, decisions, and operations notes into `docs/`.

Recommended docs:

```text
docs/TECHNICAL_DOCUMENTATION.md
docs/PROJECT_HISTORY.md
docs/DEPLOYMENT.md
docs/SEO_PLAN.md
docs/MAINTENANCE.md
docs/SECURITY.md
docs/TODO.md
```

### AI context

Decision: Add AI memory/handoff files:

```text
AGENTS.md
docs/ai/HANDOFF.md
docs/ai/DECISIONS.md
docs/ai/NEXT_ACTIONS.md
```

Reason: Future Codex/AI sessions in VS Code or on another machine need repository context without relying on this ChatGPT conversation.

## SEO decisions

### SEO before design V2

Decision: SEO and deployment/documentation should be handled before a larger V2 design overhaul.

Reason: Better design does not solve discoverability or operational quality. Local SEO and reliable deployment are higher priority.

### Local SEO approach

Decision: Use legitimate but assertive local SEO.

Allowed work:

- keyword research and tracking
- on-page SEO improvements
- title/meta improvements
- structured data
- service descriptions
- local landing page
- Google Business Profile audit
- photo/review strategy
- NAP consistency
- local citations

Not allowed:

- keyword stuffing
- fake reviews
- fake locations
- unsupported “best” claims
- duplicate doorway pages
- changing business name to keyword spam

### First local landing page

Decision/planned: Create one strong local landing page first:

```text
/adult-family-home-everett-wa/
```

Possible later page:

```text
/adult-family-home-silver-firs-wa/
```

Only create the second page if it can be substantially useful and not duplicate/thin.

## Current known unresolved decisions

These need verification or final choice:

1. Exact current GitHub repository name and new remote URL after rename.
2. Whether Firebase Hosting will become production host or just backup.
3. Whether Cloudflare remains proxy in front of Firebase.
4. Exact GitHub Actions workflow style:
   - Firebase auto-created workflow via `firebase init hosting:github`
   - or manually written workflow
5. Whether to create a separate SEO landing page before or after Firebase migration.
6. Current Google Business Profile category/service configuration.
7. Whether a Search Console property already exists.
8. Whether Analytics is desired.
9. Whether to use only Firebase Hosting or also preserve home-hosted fallback.
