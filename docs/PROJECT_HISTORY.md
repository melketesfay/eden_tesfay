# Project History

This file preserves implementation history that is too detailed for the public README.

## Verified Repository State

- The repository contains a static website for Rest Assured AFH.
- The public README has been rewritten as a concise project overview.
- Detailed implementation notes have been moved into `docs/`.
- AI context files are stored under `docs/ai/`.

## Business and Contact Foundation

- Business name: Rest Assured AFH.
- Domain: `restassuredafh.com`.
- Location: 5417 133rd St SE, Everett, WA 98208.
- License: #758759.
- Owner: Eden Tesfay.
- Phone: +1 (425) 332-3455.
- Mobile: +1 (206) 403-3838.
- Email: `restassuredafh@gmail.com`.

## Completed Website Work

- Static homepage created.
- Real home photos integrated into the page and gallery.
- Lightweight real-photo lightbox implemented.
- Owner section added for Eden Tesfay.
- Owner portrait assets added under `assets/owner/`.
- Save-contact page added at `/save-contact/`.
- vCard download added at `/downloads/contact.vcf`.
- Business card QR assets added under `business_card/`.
- Favicon, Apple touch icon, and logo assets added.

## SEO and Contact Workflow History

- Homepage title, meta description, canonical URL, and Open Graph metadata added.
- Save-contact page canonical and social metadata added.
- `LocalBusiness` structured data added to the homepage.
- `ContactPage` structured data added to the save-contact page.
- `robots.txt` and `sitemap.xml` added.
- Main website QR target selected as `https://restassuredafh.com/`.
- Save-contact QR target selected as `https://restassuredafh.com/save-contact/`.
- Direct public QR-to-vCard was avoided because the dedicated save-contact page is more user-friendly and brand-supportive.

## Performance History

- Large image assets were converted or supplemented with WebP versions.
- Responsive image variants were added for key above-the-fold images.
- `width`, `height`, `loading`, and `decoding` attributes were added where appropriate.
- The hero image was marked as high priority.
- Google Fonts loading was adjusted to a preload pattern with a `noscript` fallback.
- Further frontend image compression was intentionally deprioritized where it would reduce brand or photo quality.

## Infrastructure History

- The site has been discussed as home-hosted behind Cloudflare.
- Prior production tuning discussed or used Nginx caching/compression and HTTP/2.
- Firebase Hosting is now the preferred planned static-hosting direction.
- Cloud Run was discussed but is not currently needed for the static website.

## Migrated Documentation Notes

The former top-level roadmap document was folded into the `docs/` files during repository cleanup. Future long-form notes should be added to the relevant document instead of creating new top-level README variants.
