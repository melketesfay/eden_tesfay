# Rest Assured AFH - V2.3 Deploy Package

Deploy-ready static website package.

## Public details included

- Area: Everett / Silver Fir, Washington
- License number: 758759
- Home phone: (425) 332-3455
- Mobile phone: (206) 403-3838
- Email: restassuredafh@gmail.com

## Real photos added

- `real-bedroom-guest-room.jpg` from `WhatsApp Image 2026-05-01 at 18.29.30 (1).jpeg` size (1800, 1012)
- `real-bathroom-accessible-wide.jpg` from `WhatsApp Image 2026-05-01 at 18.29.30 (2).jpeg` size (1800, 1012)
- `real-bedroom-care-bed.jpg` from `WhatsApp Image 2026-05-01 at 18.29.30.jpeg` size (1800, 1012)
- `real-exterior-front.jpg` from `WhatsApp Image 2026-05-01 at 18.29.31 (1).jpeg` size (1435, 906)
- `real-bedroom-guest-room-alt.jpg` from `WhatsApp Image 2026-05-01 at 18.29.31 (2).jpeg` size (1800, 1012)
- `real-kitchen-wide.jpg` from `WhatsApp Image 2026-05-01 at 18.29.31 (3).jpeg` size (1800, 1012)
- `real-bathroom-accessible-portrait.jpg` from `WhatsApp Image 2026-05-01 at 18.29.31.jpeg` size (1152, 2048)
- `real-welcome-tray-wide.jpg` from `WhatsApp Image 2026-05-01 at 18.29.32 (1).jpeg` size (1800, 1012)
- `real-living-room.jpg` from `WhatsApp Image 2026-05-01 at 18.29.32.jpeg` size (1800, 1012)
- `real-dining-wide.jpg` from `WhatsApp Image 2026-05-01 at 18.29.33.jpeg` size (1800, 1012)
- `real-open-floor-dining-kitchen.jpg` from `WhatsApp Image 2026-05-01 at 18.29.35 (1).jpeg` size (1800, 1012)
- `real-dining-shelf.jpg` from `WhatsApp Image 2026-05-01 at 18.29.35 (2).jpeg` size (1800, 1012)
- `real-dining-close.jpg` from `WhatsApp Image 2026-05-01 at 18.29.35 (3).jpeg` size (1800, 1012)
- `real-patio-deck.jpg` from `WhatsApp Image 2026-05-01 at 18.29.35 (4).jpeg` size (1800, 1012)
- `real-welcome-tray-portrait.jpg` from `WhatsApp Image 2026-05-01 at 18.29.35.jpeg` size (1152, 2048)

## Note

The Google Maps embed uses the Everett / Silver Fir area, not an exact street address.

## V2.3 updates

- Reintroduced the preferred emblem logo in the header and as favicon.
- Added the full branded logo below the hero section.
- Corrected all contact email references to restassuredafh@gmail.com.

## V2.4 updates

- Added a lightweight lightbox for all real photos using filenames that contain `real-`.
- Real photos can be opened larger by click/tap.
- Lightbox closes via X button, outside click, or Escape key.
- No asset changes required for this patch.

## QR code decision update

The business card QR codes should use URL targets, not a full embedded vCard QR.

### Website QR

Target URL:

```text
https://restassuredafh.com/
```

### Save Contact QR

Target URL:

```text
https://restassuredafh.com/save-contact/
```

Reason: the previous full vCard QR was too dense for a small business-card layout. The save-contact landing page is easier to scan, works better across browsers, and avoids confusing direct `.vcf` download behavior.

The actual `.vcf` file can still stay available at:

```text
https://restassuredafh.com/downloads/contact.vcf
```

but it should be triggered from the save-contact page, not used as the main QR target.

## Corrected QR files in this package

- `website_qr_rest_assured_afh.svg`
- `website_qr_rest_assured_afh.png`
- `save_contact_page_qr_rest_assured_afh.svg`
- `save_contact_page_qr_rest_assured_afh.png`

## V2.6 updates - SEO and performance foundation

This patch adds a zero-cost local SEO and performance foundation for the static website.

### SEO changes

- Added/updated homepage title and meta description.
- Added canonical URL for the homepage.
- Added Open Graph / social preview metadata.
- Added `LocalBusiness` JSON-LD structured data.
- Added canonical and social metadata for `/save-contact/`.
- Added `ContactPage` JSON-LD structured data for `/save-contact/`.
- Added `robots.txt`.
- Added `sitemap.xml`.
- Improved alt text for real home photos.

### Performance changes

- Generated optimized `.webp` copies for large image assets.
- Updated HTML image references to use WebP where available.
- Added explicit `width` and `height` attributes to images to reduce layout shift.
- Added `loading="lazy"` to non-critical images.
- Added `decoding="async"` to images.
- Marked the main hero image as eager and high priority.
- Added preload for the hero image.

### Important deployment files

```text
index.html
style.css
script.js
robots.txt
sitemap.xml
save-contact/index.html
assets/*.webp
```

### Post-deployment checks

```bash
curl -I https://restassuredafh.com/
curl -I https://restassuredafh.com/robots.txt
curl -I https://restassuredafh.com/sitemap.xml
curl -I https://restassuredafh.com/save-contact/
```

Expected:

```text
HTTP/1.1 200 OK
```

After deployment, submit this sitemap in Google Search Console:

```text
https://restassuredafh.com/sitemap.xml
```

### Image optimization note

The original PNG/JPG files were kept in the repository for safety, but the HTML now prefers WebP versions. For an even cleaner future repository, unused old generated PNGs can be removed after verifying the deployed website.

## V2.6.1 update - Layout fix after image optimization

The first SEO/performance pass exposed two issues:

- Large logo WebP files were still too heavy because they were exported losslessly.
- Image `width` / `height` attributes combined with existing CSS caused visible distortion/layout problems in the hero and save-contact pages.

### Changes

- Added smaller optimized logo assets:
  - `assets/logo-v23-full-small.webp`
  - `assets/logo-v23-emblem-small.webp`
- Updated `index.html` and `save-contact/index.html` to use these smaller logo assets.
- Added CSS overrides to keep logo images proportional with `height: auto`.
- Replaced the hero image sizing with fixed responsive height + `object-fit: cover`.
- Added a missing map iframe `title` for accessibility.

### Lighthouse note

Run Lighthouse in Incognito or with browser extensions disabled. The previous Lighthouse report included JavaScript from a Chrome extension, which can affect diagnostics even if the site itself is static.

## V2.6.2 update - Responsive image and font loading tuning

This patch targets the remaining Lighthouse findings after V2.6.1.

### Changes

- Added smaller responsive image variants for above-the-fold assets:
  - `real-exterior-front-640.webp`
  - `real-exterior-front-960.webp`
  - `real-open-floor-dining-kitchen-480.webp`
  - `real-open-floor-dining-kitchen-760.webp`
  - `logo-v23-full-400.webp`
  - `logo-v23-emblem-80.webp`
- Added `srcset` and `sizes` to let the browser choose smaller images on mobile-sized viewports.
- Changed Google Fonts stylesheet loading to a non-render-blocking preload pattern with a `<noscript>` fallback.

### Lighthouse interpretation notes

- `Document request latency: No compression applied` appears when testing with local development servers such as VS Code Live Server. Configure gzip/Brotli on Nginx for the real domain instead.
- `Pages with WebSocket cannot enter back/forward cache` is caused by the local dev server live-reload WebSocket and does not apply to the static production deployment.
- Run Lighthouse in Incognito or with extensions disabled for cleaner results.

## V2.6.3 update - Visual regression and lightbox fix

This patch fixes visual regressions introduced during aggressive image optimization.

### Changes

- Replaced the overly compressed hero/showcase logo with a higher-quality display WebP:
  - `assets/logo-v23-full-display.webp`
- Replaced the overly compressed header emblem with a higher-quality display WebP:
  - `assets/logo-v23-emblem-display.webp`
- Restored the preferred header emblem overflow/oval feel with CSS overrides.
- Fixed the lightbox to use `data-full-src` when available, so responsive thumbnail images open as full-size images.
- Fixed the open dining/kitchen image lightbox source to use the full image instead of the small responsive variant.
- Adjusted the hero preload to target the responsive hero image instead of preloading the old full-size image unnecessarily.

### Production performance notes

The current Lighthouse result is mostly limited by production server configuration, not only frontend files:

- cache headers are missing for static assets
- site is served over HTTP/1.1 instead of HTTP/2
- CSS is still render-blocking
- browser extension scripts appeared in the Lighthouse diagnostics

Recommended server-side follow-up:

- enable HTTP/2 in Nginx SSL listen directives
- add long cache headers for images/fonts
- add gzip or Brotli compression for CSS/JS/HTML
- run Lighthouse in Incognito with extensions disabled

## V2.6.4 update - Lighthouse mobile 90 attempt

This patch targets the remaining mobile Lighthouse image delivery warnings without degrading the preferred logo visuals.

### Changes

- Added responsive caregiver image variants:
  - `assets/caregiver-support-480.webp`
  - `assets/caregiver-support-760.webp`
- Updated the caregiver image to use `srcset`/`sizes` and keep the full-size image only for lightbox use via `data-full-src`.
- Adjusted the hero image `srcset` so Lighthouse/mobile no longer chooses the 960px variant when the 640px version is sufficient.
- Removed the accidental normal Google Fonts stylesheet link while keeping the async preload pattern and noscript fallback.
- Added `defer` to the local `script.js` tag.

### Notes

The logo images were intentionally not aggressively recompressed again because the previous aggressive compression visibly degraded the brand presentation.

## V2.7 current production status

The current website is considered launch-ready.

### Current production goals reached

- Static website deployed for `https://restassuredafh.com/`
- Save-contact page available at `https://restassuredafh.com/save-contact/`
- Contact vCard available at `https://restassuredafh.com/downloads/contact.vcf`
- SEO basics added:
  - title and meta description
  - canonical URLs
  - Open Graph metadata
  - `LocalBusiness` JSON-LD
  - `ContactPage` JSON-LD
  - `robots.txt`
  - `sitemap.xml`
- Real home photos integrated.
- Real-photo lightbox implemented.
- Owner section added for Eden Tesfay.
- Owner portrait planned/in progress.
- Performance optimized through:
  - WebP image versions
  - responsive image variants
  - width/height attributes
  - lazy loading
  - high-priority hero image
  - Nginx cache headers
  - gzip compression
  - HTTP/2
- Current production Lighthouse target:
  - Mobile Performance: 90+
  - Desktop Performance: around 99
  - Accessibility: 100
  - Best Practices: 100
  - SEO: 100
  - CLS: 0
  - TBT: 0

### Important decision

Frontend performance optimization is considered complete for now. Further image compression should not reduce brand quality or photo quality just to chase marginal Lighthouse points.

Future performance work should focus on:

- CDN / edge delivery
- cache strategy
- server hardening
- real-user monitoring
- production observability

## Immediate next tasks

### 1. Owner portrait integration

The owner portrait should replace the temporary emblem/logo placeholder in the `Meet the Owner` section.

Recommended workflow:

```text
assets/owner/original/eden-tesfay-portrait-original.jpg
assets/owner/generated/eden-tesfay-owner-720x900.webp
assets/owner/generated/eden-tesfay-owner-720x900.jpg
```

Recommended ImageMagick command:

```bash
magick assets/owner/original/eden-tesfay-portrait-original.jpg \
  -auto-orient \
  -resize 720x900^ \
  -gravity center \
  -extent 720x900 \
  -strip \
  -quality 82 \
  assets/owner/generated/eden-tesfay-owner-720x900.webp
```

Optional JPEG fallback:

```bash
magick assets/owner/original/eden-tesfay-portrait-original.jpg \
  -auto-orient \
  -resize 720x900^ \
  -gravity center \
  -extent 720x900 \
  -strip \
  -interlace JPEG \
  -sampling-factor 4:2:0 \
  -quality 84 \
  assets/owner/generated/eden-tesfay-owner-720x900.jpg
```

Recommended HTML:

```html
<picture>
  <source
    srcset="assets/owner/generated/eden-tesfay-owner-720x900.webp"
    type="image/webp"
  />
  <img
    src="assets/owner/generated/eden-tesfay-owner-720x900.jpg"
    alt="Eden Tesfay, owner of Rest Assured AFH"
    class="owner-portrait"
    width="720"
    height="900"
    loading="lazy"
    decoding="async"
  />
</picture>
```

### 2. Logo/favicon cleanup

Current temporary logo assets should eventually be cleaned up.

Recommended final structure:

```text
assets/logo/rest-assured-emblem-master.png
assets/logo/generated/rest-assured-emblem-header.webp
assets/logo/generated/rest-assured-emblem-owner.webp
assets/favicon-32x32.png
assets/apple-touch-icon.png
assets/favicon-512x512.png
```

Use:

- header logo: `rest-assured-emblem-header.webp`
- owner placeholder if no portrait: `rest-assured-emblem-owner.webp`
- browser favicon: `favicon-32x32.png`
- Apple/iPhone home icon: `apple-touch-icon.png`

Keep the master transparent PNG. Do not overwrite it.

### 3. Google Search Console

- Verify the domain property for `restassuredafh.com`.
- Submit sitemap:

```text
https://restassuredafh.com/sitemap.xml
```

- Inspect and request indexing for:
  - `https://restassuredafh.com/`
  - `https://restassuredafh.com/save-contact/`

### 4. Google Business Profile

This is critical for appearing in Google Maps and local search.

Owner should create or claim:

```text
Rest Assured AFH
5417 133rd St SE
Everett, WA 98208
+1 (425) 332-3455
https://restassuredafh.com/
```

Primary category should be the closest legally accurate option available, ideally:

```text
Adult family home
```

If not available, use the closest accurate category such as:

```text
Assisted living facility
Residential care home
Home health care service
Senior care
```

Avoid inaccurate categories.

Add:

- business description
- license number
- real exterior/interior photos
- logo
- service list
- opening/contact hours if applicable
- website URL
- appointment/tour contact instructions

### 5. Local map and citation presence

Set up or review:

- Google Business Profile
- Apple Business Connect / Apple Maps
- Bing Places
- Yelp
- Facebook Page
- Nextdoor if relevant
- local senior-care directories
- Washington/Everett care directories if appropriate

Important rule:

```text
NAP consistency = Name, Address, Phone
```

Use the exact same business data everywhere.

## Cloudflare / CDN plan

Because the origin server is in Europe and the audience is in Washington / US West, Cloudflare Free is a practical next infrastructure improvement.

### Goals

- reduce latency for US visitors
- cache static assets closer to Everett / Seattle / Portland users
- improve repeat visits
- add a basic security layer
- simplify HTTPS edge delivery
- prepare for future traffic growth

### Cloudflare setup checklist

1. Add `restassuredafh.com` to Cloudflare.
2. Change nameservers at the registrar.
3. Proxy these DNS records through Cloudflare:
   - `restassuredafh.com`
   - `www.restassuredafh.com`
4. Use SSL/TLS mode:

```text
Full (strict)
```

5. Keep the origin Let's Encrypt certificate valid.
6. Enable:
   - HTTP/2
   - HTTP/3 if available
   - Brotli
   - Always Use HTTPS
   - Automatic HTTPS Rewrites if needed
7. Cache static assets.
8. Do not aggressively cache HTML until cache invalidation is understood.
9. Retest:
   - homepage
   - save-contact page
   - contact.vcf download
   - QR codes
   - Lighthouse production mobile/desktop
   - GTmetrix or WebPageTest from a US region

### Conservative Cloudflare cache strategy

Static assets:

```text
/assets/*
/style.css
/script.js
```

Can be cached longer.

HTML:

```text
/
 /save-contact/
```

Should either not be cached at first or should have short cache duration.

Reason: for a small static site, incorrect cached HTML can create confusion after deployments.

## Server hardening and industry-standard infrastructure

The current website has a small application attack surface because it is static. However, the server itself still needs professional hardening.

### Immediate server security checklist

- Keep OS packages updated.
- Keep Nginx updated.
- Use SSH keys only.
- Disable password login for SSH.
- Disable root SSH login.
- Use a non-root deploy user.
- Use `sudo` only where required.
- Configure UFW or equivalent firewall:
  - allow 22/tcp only from trusted IPs if possible
  - allow 80/tcp
  - allow 443/tcp
  - deny everything else
- Install and configure Fail2ban for SSH.
- Confirm automatic security updates if appropriate.
- Ensure `.git`, `.env`, backups and hidden files are not publicly accessible.
- Keep the Git repo outside the public web root.
- Use `/var/www/restassured.com/repo` for source and `/var/www/restassured.com/html` for deployed files.
- Deploy with `rsync --delete`, excluding `.git`.
- Keep regular backups before large deployments.

### Nginx security headers to consider

Add carefully and test after each change:

```nginx
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;
```

Potential future CSP:

```nginx
Content-Security-Policy
```

CSP should not be added blindly because the site uses:

- Google Fonts
- Google Maps iframe
- possibly external assets later

A broken CSP can break fonts/maps. Implement CSP in report-only mode first.

### TLS / HTTPS standards

Check with:

```text
SSL Labs Server Test
securityheaders.com
Mozilla Observatory
```

Future goals:

- strong TLS configuration
- HTTP/2 or HTTP/3
- HSTS after confirming HTTPS is stable
- no mixed content
- valid certificate renewal
- correct redirects from HTTP to HTTPS
- one canonical host, preferably `https://restassuredafh.com/`

### Logging and monitoring

Minimal but professional monitoring plan:

- Nginx access/error logs enabled.
- Simple weekly log review.
- Use GoAccess or similar lightweight log analyzer.
- Monitor:
  - 404s
  - bot probes
  - suspicious paths such as `/wp-admin`
  - traffic by country
  - most visited pages
  - referrers
- Add uptime monitoring:
  - UptimeRobot
  - Better Stack free tier
  - Healthchecks.io
- Configure email notification if the server/site goes down.
- Optional: monitor certificate expiry.

## Deployment workflow improvement

Current workflow:

```text
local development → Git → main branch → server pull → deploy
```

Recommended professional structure:

```text
/var/www/restassured.com/repo
/var/www/restassured.com/html
```

The Git repo should not live inside the public web root.

Recommended deploy commands:

```bash
cd /var/www/restassured.com/repo
git fetch origin
git checkout main
git pull origin main

sudo rsync -av --delete \
  --exclude ".git" \
  --exclude ".DS_Store" \
  ./ /var/www/restassured.com/html/

sudo nginx -t
sudo systemctl reload nginx
```

Long-term:

- make GitHub repo private
- use a GitHub deploy key
- or deploy through GitHub Actions over SSH/rsync
- avoid making the repo public just so the server can pull

## Future feature roadmap

The goal is to keep the project minimalistic, maintainable and professional. Avoid unnecessary complexity.

### Phase 1 - Static professional site

Current phase.

Features:

- static HTML/CSS/JS
- fast loading
- real photos
- owner section
- save-contact page
- local SEO basics
- Google Business Profile support
- Cloudflare CDN
- server hardening

This is enough for launch.

### Phase 2 - Design polish / V3

Planned design improvements:

- more refined modern layout
- smoother but subtle animations
- improved image grid and gallery layout
- reduced excessive border radius where it feels outdated
- more spacious mobile image layouts
- better owner section with real portrait
- improved contact/location section
- stronger CTA hierarchy
- more consistent section rhythm
- better handling of real photos
- no heavy animation that hurts accessibility or performance

Animation standards:

- respect `prefers-reduced-motion`
- no heavy parallax on mobile
- no gimmicky scroll effects
- subtle reveal/opacity/slide only
- animation must support trust, not distract from care-business credibility

### Phase 3 - Thin custom CMS

A future lightweight CMS could allow the owner to manage content without editing code.

Potential CMS features:

- login-protected admin page
- edit homepage text sections
- edit owner bio
- edit service descriptions
- add/remove gallery images
- change contact details
- edit FAQ entries
- publish/unpublish sections
- simple image upload with automatic optimization
- automatic WebP generation
- automatic alt-text field
- backup before changes
- small audit log:
  - who changed what
  - when it changed
- preview before publishing

Recommended technical approach:

- keep the public site static
- generate static files from CMS data
- avoid a large database-driven system unless necessary
- simple SQLite or file-based JSON storage can be enough
- admin area must be protected strongly
- image upload must validate file type, size and dimensions

Security requirements if CMS is added:

- HTTPS only
- strong password policy
- rate limiting
- CSRF protection
- secure sessions
- input validation
- output escaping
- file upload validation
- no direct execution of uploaded files
- admin route not indexed
- backups
- audit logs

A CMS increases the attack surface. It should only be built if the owner genuinely needs regular edits.

### Phase 4 - Analytics and insights

Minimal privacy-friendly analytics options:

- Cloudflare Web Analytics
- Plausible
- Umami
- GoAccess from Nginx logs

Track:

- page views
- traffic sources
- device types
- most visited pages
- contact button clicks if privacy-compliant
- QR page visits
- 404 errors

Avoid heavy tracking stacks unless there is a clear business need.

### Phase 5 - Communication features

Possible future additions:

- contact form
- tour request form
- availability inquiry form
- spam-protected email form
- email notifications to owner
- automatic reminder if form submission fails
- optional auto-reply to families
- downloadable brochure
- printable referral PDF

Security note: adding forms increases attack surface and requires spam protection, validation and mail deliverability setup.

### Phase 6 - Content and local SEO expansion

Possible additions:

- FAQ page
- "What is an Adult Family Home?" page
- "Care in Everett / Silver Firs" page
- "Schedule a Tour" page
- testimonials/reviews section if legally and ethically appropriate
- updated professional photos
- short owner introduction video
- downloadable one-page brochure

Content must remain accurate and compliant. Avoid unsupported medical claims.

## Practical local SEO checklist for the owner

Owner should do:

- create/verify Google Business Profile
- add real photos
- add accurate category
- add service list
- add business description
- add license number where appropriate
- add website URL
- add contact phone
- ask legitimate families/clients for reviews over time
- reply professionally to reviews
- keep address/phone/hours accurate
- add Apple Maps and Bing Places
- check Google Search Console monthly
- tell developer if contact info changes

Owner should not do:

- buy fake reviews
- use inaccurate categories
- keyword-stuff the business name
- create duplicate Google profiles
- use stock/fake owner photos
- make unsupported medical claims

## Maintenance checklist

Monthly:

- verify website loads
- test contact links
- test save-contact page
- test vCard download
- check Google Business Profile
- check Search Console
- check server disk space
- review logs for obvious problems
- verify SSL renewal status

Quarterly:

- update photos if needed
- review service descriptions
- check Lighthouse once
- check security headers
- review backup/deployment process
- verify all directory listings still match NAP

Before major changes:

- backup current web root
- commit all changes to Git
- test locally
- deploy with rsync
- reload Nginx
- test production
- run smoke checks

## Professional principle

Keep the site minimal, fast and trustworthy.

For this type of business, trust matters more than technical showmanship. Every feature should support one of these goals:

- help families understand the home
- help families trust the owner
- make contact easy
- improve local search visibility
- keep the site secure and reliable
- reduce maintenance burden
