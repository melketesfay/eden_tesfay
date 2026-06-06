# Deployment

## Current Status

Deployment details need verification before this file is treated as operational documentation.

Known or previously discussed context:

- The site has been discussed as home-hosted behind Cloudflare.
- Firebase Hosting is the preferred planned target for a static-site deployment.
- Cloud Run is not currently needed for the static website.
- The repository should remain the source of truth for production files.

## Planned Target Workflow

- GitHub repository remains the source of truth.
- Push or merge to `main` triggers deployment.
- Firebase Hosting serves the static site.
- Cloudflare may remain as DNS/CDN/proxy layer if configured safely.
- `restassuredafh.com` remains the production domain.

## Firebase Hosting Direction

- Use Firebase Hosting for the static site if evaluation confirms it fits the project.
- Configure production and preview deployments through Firebase GitHub integration or GitHub Actions.
- Deploy to a Firebase test URL before changing production DNS.
- Do not configure the site as a single-page app unless routing changes require it.
- Keep Cloud Run reserved for future backend/API features.

## Cloudflare Direction

- Cloudflare may remain responsible for DNS, CDN, and edge security.
- SSL/TLS should remain Full (strict) where Cloudflare is used.
- Brotli, HTTP/2, and HTTP/3 can be enabled if tested.
- Avoid aggressive HTML caching until cache invalidation is clearly understood.
- Static assets such as `/assets/*`, `style.css`, and `script.js` can use longer cache rules after deployment is stable.

## Pending Setup

- Confirm whether a Firebase project already exists.
- Decide Firebase Hosting production site and preview-channel setup.
- Configure GitHub Actions or Firebase GitHub integration.
- Test a Firebase preview URL before any DNS change.
- Document rollback steps after the final hosting approach is chosen.
- Confirm whether the home-hosted setup remains as fallback or is retired.

## Deployment Safety Notes

- Do not commit secrets, `.env` files, or service account JSON files.
- Store CI/CD credentials in GitHub Secrets or through Firebase's GitHub integration.
- Do not change DNS for production until the new deployment has been tested.
- After deployment changes, smoke-test `/`, `/save-contact/`, `/downloads/contact.vcf`, `robots.txt`, and `sitemap.xml`.
