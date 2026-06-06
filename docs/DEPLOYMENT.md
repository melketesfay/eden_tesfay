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
- `.firebaserc` is intentionally not committed yet because the real Firebase project ID is not confirmed.

When a Firebase project is selected, `.firebaserc` should be added with this shape:

```json
{
  "projects": {
    "default": "YOUR_FIREBASE_PROJECT_ID"
  }
}
```

Replace `YOUR_FIREBASE_PROJECT_ID` with the actual Firebase project ID before committing.

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

## Manual Setup Workflow

Run these only after the documentation branch is merged and a Firebase project is available.

1. Install Firebase CLI if it is not installed.

```bash
npm install -g firebase-tools
```

2. Sign in.

```bash
firebase login
```

3. Select or create a Firebase project in the Firebase Console.

4. Add `.firebaserc` with the confirmed project ID.

5. Test locally.

```bash
firebase emulators:start --only hosting
```

6. Deploy to a preview channel first.

```bash
firebase hosting:channel:deploy preview
```

7. Test the Firebase-generated preview URL before any production DNS change.

## GitHub Deployment Direction

Preferred CI/CD direction:

- Use Firebase Hosting GitHub integration.
- Pull requests create preview deployments.
- Merges to `main` deploy to the live Firebase Hosting channel.
- Deployment credentials are managed by Firebase/GitHub integration or GitHub Secrets.

Do not commit service account JSON files.

Expected setup command after Firebase CLI authentication:

```bash
firebase init hosting:github
```

Use the existing static-site answers:

- Public directory: `.`
- Configure as single-page app: `No`
- Set up automatic builds and deploys with GitHub: `Yes`

Review generated GitHub Actions workflows before committing them.

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

- Confirm whether a Firebase project already exists.
- Confirm current Cloudflare DNS records and SSL settings.
- Confirm whether the home-hosted setup remains as fallback or is retired.
- Add `.firebaserc` after the real Firebase project ID is known.
- Configure Firebase GitHub integration after the manual preview deployment works.
