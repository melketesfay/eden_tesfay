# Security

## Repository Rules

- Do not commit `.env` files.
- Do not commit API keys, credentials, private client data, or service account JSON files.
- Store deployment credentials in GitHub Secrets or through the Firebase/GitHub integration.
- Keep the public repository free of private infrastructure details.
- Keep deployment and infrastructure credentials outside committed documentation.

## Static Site Risk Profile

- The current website is static, which keeps the application attack surface small.
- Future forms, CMS features, or backend APIs would increase security requirements and should be planned separately.

## Hosting and DNS Notes

- Cloudflare SSL should remain Full (strict) where Cloudflare is used.
- Do not weaken SSL/DNS settings to make deployment easier.
- Do not expose home-hosted services directly if a static hosting provider can serve production.
- Test production redirects, `robots.txt`, `sitemap.xml`, and the save-contact workflow after DNS or hosting changes.

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

- Verify current production hosting and Cloudflare configuration.
- Document the final DNS and deployment rollback plan.
- Add security header recommendations after hosting is confirmed.
- Define backup and recovery steps for future production changes.
