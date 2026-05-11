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
