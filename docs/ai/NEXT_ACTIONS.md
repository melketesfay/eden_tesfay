# Next Actions — Rest Assured AFH Website

This file lists concrete next actions for the project. Keep it short and actionable. Move completed work into `docs/PROJECT_HISTORY.md` or the relevant documentation file.

## Immediate priorities

### 1. Inspect current repository state

Before making changes, run:

```bash
pwd
git status
git remote -v
find . -maxdepth 3 -type f | sort
```

Read:

```bash
sed -n '1,220p' README.md
sed -n '1,220p' index.html
sed -n '1,220p' style.css
sed -n '1,220p' script.js
```

Also inspect if present:

```bash
cat robots.txt
cat sitemap.xml
find save-contact -maxdepth 2 -type f -print
find downloads -maxdepth 2 -type f -print
find assets -maxdepth 3 -type f | sort | head -100
```

Goal: verify actual repo state instead of relying only on chat history.

---

### 2. Add AI context files

Create/update:

```text
AGENTS.md
docs/ai/HANDOFF.md
docs/ai/DECISIONS.md
docs/ai/NEXT_ACTIONS.md
```

This action is currently being prepared from the ChatGPT context.

---

### 3. Rename GitHub repository

Recommended new repo name:

```text
rest-assured-afh-website
```

After renaming on GitHub, update/check local remote:

```bash
git remote -v
git remote set-url origin git@github.com:<YOUR_GITHUB_USERNAME>/rest-assured-afh-website.git
git remote -v
```

Use HTTPS remote instead if that is how the repo is configured:

```bash
git remote set-url origin https://github.com/<YOUR_GITHUB_USERNAME>/rest-assured-afh-website.git
```

Do not run blindly. Replace `<YOUR_GITHUB_USERNAME>`.

---

### 4. Rework README

Current problem: README is too technical/progress-focused.

New README should be portfolio/client-facing.

Recommended structure:

```md
# Rest Assured AFH Website

## Overview
## Live Site
## Project Goals
## Key Features
## Tech Stack
## SEO and Local Search
## Performance
## Accessibility
## Deployment
## Repository Structure
## Documentation
## Status / Roadmap
```

Keep it concise. Move long history to docs.

---

### 5. Create documentation structure

Create:

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

If current README contains useful history, preserve it before replacing:

```bash
cp README.md docs/PROJECT_HISTORY.md
```

Then rewrite README.

---

## SEO next actions

### 6. Create initial SEO tracking matrix

Create/update `docs/SEO_PLAN.md`.

Initial keyword matrix:

```md
| Keyword | Intent | Current local result | Website result | Priority | Notes / Action |
|---|---|---|---|---|---|
| adult family home everett wa | local high-intent | visible per user | unknown | high | maintain/improve |
| adult family home everett seattle | local broad | visible per user | unknown | medium | wording may be awkward; check real search demand |
| adult care everett | broad local | weak per user | unknown | high | improve content relevance |
| adult care silver firs | broad local | weak per user | unknown | high | improve local relevance |
| adult care seattle | broad regional | weak per user | unknown | medium | likely harder due distance/competition |
| senior care everett wa | local high-intent | unknown | unknown | high | audit |
| residential care home everett wa | local high-intent | unknown | unknown | high | audit |
| memory care support everett | service intent | unknown | unknown | medium | add service relevance |
| respite care everett wa | service intent | unknown | unknown | medium | add service relevance |
| hospice support everett wa | service intent | unknown | unknown | medium | add service relevance |
```

Do not claim rankings without testing.

---

### 7. Audit Google Business Profile

Need human/browser verification.

Checklist:

- Primary category
- Secondary categories
- Services
- Business description
- Address and map pin
- Phone and website URL
- Hours
- Photos
- Owner/real photos
- Reviews and responses
- Q&A
- NAP consistency
- Whether profile name is clean and not keyword-stuffed

Document in `docs/SEO_PLAN.md`.

---

### 8. Plan first local landing page

Planned URL:

```text
/adult-family-home-everett-wa/
```

Purpose:

- rank for Everett adult family home searches
- explain services and location relevance
- link to main contact section
- support Google Business Profile relevance

Do not create many thin pages yet.

Possible outline:

```md
# Adult Family Home in Everett, WA

- intro
- Rest Assured AFH overview
- who the home is for
- services
- Everett/Silver Firs local relevance
- owner-led care
- license/contact
- FAQ
```

Need final copy later.

---

## Deployment next actions

### 9. Evaluate Firebase Hosting

Goal: move away from home-hosted production if practical.

Actions:

1. Create or select Google/Firebase project.
2. Confirm billing/free-tier constraints.
3. Install Firebase CLI if needed.
4. Run local init in repo after inspection:

```bash
firebase init hosting
```

Potential choices:

- public directory likely repo root or a `public/` directory, depending current structure
- configure as single-page app: likely **No**, unless site uses SPA routing
- set up GitHub deploys: likely **Yes**, after repo is clean

Do not switch live domain until test deployment works.

---

### 10. Add CI/CD

Preferred target:

- pull requests create preview deployments
- merge/push to `main` deploys to live Firebase Hosting

Possible command:

```bash
firebase init hosting:github
```

This may create GitHub Actions workflows and required secrets.

Document final workflow in `docs/DEPLOYMENT.md`.

---

## Security/ops next actions

### 11. Create `docs/SECURITY.md`

Include:

- no secrets in repo
- no `.env`
- no service account JSON committed
- GitHub Secrets for CI/CD
- Cloudflare SSL strict/full
- DNS change checklist
- rollback plan
- contact/vCard privacy check

---

### 12. Create `docs/MAINTENANCE.md`

Include:

- how to update text
- how to replace images
- how to update contact info
- how to update vCard/contact QR flow
- how to update sitemap
- how to test Lighthouse
- how to deploy

---

## Known blocked/needs-confirmation items

- Exact current GitHub repo name.
- Current current README content.
- Current deployment host and exact Cloudflare DNS state.
- Whether Firebase project already exists.
- Whether Search Console is already configured.
- Whether Google Business Profile access is available.
- Whether the client has approved any new SEO copy.
- Whether all current phone/email/address data is final.

## Priority order

Do not start full design V2 yet.

Recommended order:

1. AI context docs
2. Repo rename
3. README rewrite
4. `docs/` structure
5. SEO plan/TODO
6. Firebase Hosting test deploy
7. GitHub Actions deployment
8. Local SEO implementation
9. V2 design overhaul
