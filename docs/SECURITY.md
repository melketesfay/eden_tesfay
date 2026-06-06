# Security

## Repository Rules

- Do not commit `.env` files.
- Do not commit API keys, credentials, private client data, or service account JSON files.
- Store deployment credentials in GitHub Secrets or through the Firebase/GitHub integration.
- Keep the public repository free of private infrastructure details.
- Keep deployment and infrastructure credentials outside committed documentation.
- Do not commit Firebase service account JSON files.
- Do not paste Firebase tokens into scripts, markdown, or workflow files.

## Static Site Risk Profile

- The current website is static, which keeps the application attack surface small.
- Future forms, CMS features, or backend APIs would increase security requirements and should be planned separately.

## Hosting and DNS Notes

- Cloudflare SSL should remain Full (strict) if Cloudflare proxying is used.
- Do not weaken SSL/DNS settings to make deployment easier.
- Do not expose home-hosted services directly if a static hosting provider can serve production.
- Treat the old home-hosted setup as a fallback only; do not publish private IPs, credentials, tunnel details, or local network details in this public repository.
- Test production redirects, `robots.txt`, `sitemap.xml`, and the save-contact workflow after DNS or hosting changes.

## Firebase Deployment Secrets

Preferred options:

- Use Firebase Hosting GitHub integration, which configures the required GitHub secret automatically.
- If writing GitHub Actions manually, store credentials only in GitHub Secrets.

Current GitHub secret created by Firebase CLI:

```text
FIREBASE_SERVICE_ACCOUNT_REST_ASSURED_AFH_WEBSITE
```

Rules:

- Never commit `serviceAccount*.json`.
- Never commit `.env`.
- Never commit Firebase refresh tokens.
- Never expose project billing or private infrastructure details in public docs.
- Review generated GitHub Actions before committing them.
- Revoke the Firebase CLI GitHub OAuth authorization after setup if it is no longer needed.

## Cloudflare Security

- Keep SSL/TLS mode on Full (strict) when Cloudflare proxies the production domain.
- Do not switch to Flexible SSL.
- Keep Firebase-required TXT records in DNS when using Firebase custom domains.
- Test HTTPS redirects, canonical host behavior, `robots.txt`, and `sitemap.xml` after DNS changes.
- The Firebase Hosting records for `restassuredafh.com` and `www.restassuredafh.com` are currently DNS-only so Firebase can manage certificates directly.
- Do not re-enable Cloudflare proxying for Firebase Hosting records without retesting HTTPS certificates, redirects, caching, and contact/vCard routes.

## Server Hardening Notes

These apply if any home-hosted or VPS-based setup remains in use:

- Use SSH keys only.
- Disable root SSH login.
- Keep OS and Nginx packages updated.
- Use a firewall that allows only required ports.
- Keep the Git repository outside the public web root.
- Do not expose `.git`, `.env`, backups, or hidden files publicly.
- Use Fail2ban or equivalent SSH protection where appropriate.

## Security Headers To Evaluate

Add only after testing on the final hosting setup:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` with unnecessary browser features disabled

Do not add a strict Content Security Policy blindly because the site uses Google Fonts and Google Maps.

## Pending Security Work

- Confirm Cloudflare SSL/TLS mode remains Full strict if proxying is re-enabled.
- Add security header recommendations after hosting is confirmed.
- Define backup and recovery steps for future production changes.
- Keep any home-server fallback activation runbook in private operational notes, not in this public repository.
- Confirm GitHub Actions logs do not expose secrets during routine future deploy reviews.
