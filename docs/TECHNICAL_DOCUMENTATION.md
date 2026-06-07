# Technical Documentation

## Current Verified State

- The website is a static HTML/CSS/JavaScript site.
- Core production files include `index.html`, `404.html`, `style.css`, `script.js`, `robots.txt`, `sitemap.xml`, `save-contact/index.html`, and `downloads/contact.vcf`.
- Image and brand assets are stored under `assets/`.
- Business card and QR assets are stored under `business_card/`.

## Architecture

- The homepage is served from `index.html`.
- Missing routes are handled by the branded `404.html` page on Firebase Hosting.
- The save-contact workflow is served from `save-contact/index.html`.
- The downloadable contact card is stored at `downloads/contact.vcf`.
- Shared styling is primarily in `style.css`.
- Shared interaction behavior is in `script.js`.
- Static SEO files are `robots.txt` and `sitemap.xml`.

## Current Features

- Responsive static website for Rest Assured AFH.
- Real home photo gallery with lightbox behavior.
- Save-contact page for QR workflows.
- Branded visitor-facing 404 page.
- vCard download for Eden Tesfay and Rest Assured AFH.
- Basic local SEO metadata, structured data, sitemap, and robots file.
- Business card QR assets for the website and save-contact page.
- Optimized and responsive image assets where currently implemented.

## Asset Notes

- Real home photos use `assets/real-*` naming.
- Logo and favicon assets are split between top-level `assets/` files and `assets/logo/`.
- Owner portrait assets are stored under `assets/owner/`.
- Older PNG/JPG files are still present for safety; current HTML generally prefers optimized WebP files where available.

## Known Cleanup Items

- Nurse-led wording is approved based on client confirmation that Eden Tesfay is a licensed nurse with a degree.
- Do not remove nurse-led positioning unless the client changes this direction.
- Do not specify an exact credential type or degree name, such as RN, LPN, BSN, or another title, until the exact credential wording is provided.
- Replace any non-numeric image `height` attributes when site-code cleanup is approved.
- Confirm whether homepage script loading should use `defer` to match prior performance notes.

## Pending Documentation

- Document exact image optimization workflow.
