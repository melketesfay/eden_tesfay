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
