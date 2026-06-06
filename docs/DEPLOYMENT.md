# Deployment

## Current Status

Deployment details still need production verification before this file is treated as final runbook documentation.

Known context:

- The website is a static HTML/CSS/JavaScript site.
- The site has been discussed as home-hosted behind Cloudflare.
- Firebase Hosting is the preferred planned target for static hosting.
- Cloud Run is not needed for the current static site.
- The repository should remain the source of truth for production files.

## Firebase Hosting Direction

Use classic Firebase Hosting for the current site.

Official references:

- Firebase Hosting quickstart: `https://firebase.google.com/docs/hosting/quickstart`
- Firebase Hosting GitHub integration: `https://firebase.google.com/docs/hosting/github-integration`
- Firebase Hosting custom domain setup: `https://firebase.google.com/docs/hosting/custom-domain`

Current repo preparation:

- `firebase.json` is present at the repository root.
- `hosting.public` is set to `.` because production files currently live at the repo root.
- `cleanUrls` and `trailingSlash` are enabled.
- No single-page-app rewrite is configured.
- `.firebaserc` links the repository to the Firebase project `rest-assured-afh-website`.
- Preview channel `setup-preview` has been deployed and validated.

Current `.firebaserc` shape:

```json
{
  "projects": {
    "default": "rest-assured-afh-website"
  }
}
```

## Firebase Config Behavior

The current `firebase.json` is configured to deploy only public site assets from the root while excluding project and documentation files.

Excluded from public deployment:

- Git metadata and local editor files.
- `docs/**`.
- `business_card/**`.
- `README.md`.
- `AGENTS.md`.
- Firebase local state and debug logs.

Caching approach:

- `/assets/**` uses long-lived immutable caching.
- `style.css` and `script.js` use short caching because filenames are not content-hashed.
- HTML, `robots.txt`, `sitemap.xml`, and `downloads/contact.vcf` use conservative revalidation.

Validated preview URL:

```text
https://rest-assured-afh-website--setup-preview-yw7ylqac.web.app/
```

Preview channel expiration:

```text
2026-06-13 21:00:02
```

Validated preview checks:

- `/` returns `200`.
- `/save-contact/` returns `200`.
- `/downloads/contact.vcf` returns `200`.
- `/robots.txt` returns `200`.
- `/sitemap.xml` returns `200`.
- `docs/TODO.md`, `README.md`, `business_card/website_qr.svg`, `firebase.json`, and `.firebaserc` return `404`.
- Homepage, gallery/lightbox, save-contact page, contact buttons, and vCard download were manually checked in browser.

The Firebase preview response includes `x-robots-tag: noindex`, which is appropriate for a temporary test URL.

## Manual Setup Workflow

Run these after the Firebase CLI is available.

1. Install Firebase CLI if it is not installed.

```bash
npm install -g firebase-tools
```

2. Sign in.

```bash
firebase login
```

3. Confirm the selected Firebase project:

```bash
firebase use
```

Expected project:

```text
rest-assured-afh-website
```

4. Test locally.

```bash
firebase emulators:start --only hosting
```

5. Deploy to a preview channel first.

```bash
firebase hosting:channel:deploy preview
```

6. Test the Firebase-generated preview URL before any production DNS change.

Note: The preview deploy may warn that it cannot sync Firebase Auth domains if Firebase Authentication is not configured. That warning is acceptable for this static site because it does not use Firebase Auth.

## GitHub Deployment Direction

CI/CD is configured through Firebase Hosting GitHub integration.

Generated workflow files:

- `.github/workflows/firebase-hosting-pull-request.yml`
- `.github/workflows/firebase-hosting-merge.yml`

Workflow behavior:

- Pull requests from this repository create Firebase Hosting preview deployments.
- Pushes to `main` deploy to the Firebase Hosting live channel.
- No build step runs because this is a static site without a build system.
- Deployment credentials are stored in GitHub as `FIREBASE_SERVICE_ACCOUNT_REST_ASSURED_AFH_WEBSITE`.
- No service account JSON file is committed to the repository.

Firebase CLI setup command used:

```bash
firebase init hosting:github
```

The Firebase CLI GitHub OAuth authorization can be revoked here after setup if desired:

```text
https://github.com/settings/connections/applications/89cf50f02ac6aaed3484
```

## Custom Domain Migration

Do not start this step until the Firebase preview URL works.

Target domain:

```text
restassuredafh.com
```

Migration checklist:

- Add the custom domain in Firebase Hosting.
- Follow the DNS records shown by Firebase.
- Keep Cloudflare SSL/TLS mode on Full (strict).
- Keep Firebase's required verification TXT records in DNS.
- Do not remove the old production route until the Firebase-hosted site has been tested.
- Expect DNS and certificate provisioning to take time.

Post-migration smoke checks:

```bash
curl -I https://restassuredafh.com/
curl -I https://restassuredafh.com/save-contact/
curl -I https://restassuredafh.com/downloads/contact.vcf
curl -I https://restassuredafh.com/robots.txt
curl -I https://restassuredafh.com/sitemap.xml
```

Also verify in a browser:

- Homepage loads.
- Real photos and logo assets load.
- Save-contact page works.
- vCard download works.
- Map and external links still behave correctly.
- Canonical URLs still point to `https://restassuredafh.com/`.

## Cloudflare Direction

Cloudflare may remain responsible for DNS, CDN, and edge security.

Official reference:

- Cloudflare Full strict SSL mode: `https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full-strict/`

Recommended settings to preserve or verify:

- SSL/TLS mode: Full (strict).
- Always Use HTTPS enabled if tested.
- Brotli enabled.
- HTTP/2 enabled.
- HTTP/3 enabled if available and tested.
- Rocket Loader off unless specifically tested.
- Do not aggressively cache HTML until deployment behavior is proven.

## Rollback Plan

Before changing DNS, record the current production DNS records and hosting route.

If Firebase custom-domain migration fails:

- Revert Cloudflare DNS records to the previous production origin.
- Purge Cloudflare cache if needed.
- Confirm `/`, `/save-contact/`, `robots.txt`, `sitemap.xml`, and `downloads/contact.vcf` return `200`.
- Leave Firebase preview/live site intact for debugging unless it is actively causing a conflict.

## Pending Setup

- Firebase project exists: `rest-assured-afh-website`.
- Confirm current Cloudflare DNS records and SSL settings.
- Confirm whether the home-hosted setup remains as fallback or is retired.
- Install and authenticate the Firebase CLI.
- Run a local Firebase Hosting preview.
- Deploy to a Firebase preview channel.
- Confirm GitHub Actions PR preview workflow after opening the next pull request.
- Confirm GitHub Actions live deploy workflow after merging to `main`.
