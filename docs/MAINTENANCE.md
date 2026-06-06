# Maintenance

## Routine Checks

- Confirm the homepage loads.
- Confirm the save-contact page loads.
- Confirm phone, email, and address links are correct.
- Confirm `downloads/contact.vcf` downloads correctly.
- Confirm `robots.txt` and `sitemap.xml` are reachable.
- Review Google Business Profile and Search Console if access is available.

## Monthly Checks

- Test the main contact buttons.
- Test the save-contact page from a phone if possible.
- Confirm the vCard opens or downloads correctly.
- Review Search Console for indexing or crawl issues.
- Review Google Business Profile details and photos.
- Check SSL/certificate status on the production domain.

## Quarterly Checks

- Run a Lighthouse check on production.
- Review service descriptions for accuracy.
- Review image quality and file sizes after any content changes.
- Check for broken links.
- Confirm NAP consistency across major local listings.

## Content Updates

- Keep business name, phone numbers, email, address, and license number consistent across the site.
- Update `downloads/contact.vcf` whenever contact details change.
- Update visible contact details in both the homepage and save-contact page.
- Update `sitemap.xml` when adding public pages.

## Image Updates

- Prefer optimized WebP assets where the site already uses WebP.
- Preserve `width`, `height`, `loading`, and `decoding` attributes where appropriate.
- Avoid replacing real home photos with generic stock-style imagery.
- Re-test layout after image changes.

## Before Major Changes

- Commit current work before changing production-facing files.
- Test locally.
- Back up production if using a direct server deployment.
- Smoke-test the homepage, save-contact page, vCard, robots file, and sitemap after deployment.

## Pending Documentation

- Add a detailed deployment checklist after the final hosting workflow is chosen.
- Add an image optimization recipe after the preferred tooling is confirmed.
- Add Lighthouse testing notes after the next production test.
