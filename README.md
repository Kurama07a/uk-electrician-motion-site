# UK Electrician Motion Site

A reusable electrician website starter inspired by the supplied layout: crisp white/black/orange visual system, split hero, fast quote strip, trust cards, services, process, reviews, FAQ and conversion-focused contact section.

## Stack

- React 18 + Vite
- JavaScript / JSX (no TypeScript required)
- Responsive CSS with custom properties and breakpoints
- Framer Motion for reveal, carousel, counters and menu motion
- Lucide React icons

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Rebrand in one place

Edit `src/data/siteData.js` to change:

- Brand name and strapline
- Phone number, email and service area
- Hero / about image URLs
- Services
- Trust/value cards
- Process steps
- Stats
- Reviews
- FAQs

## Make the form live

Set `siteConfig.formEndpoint` in `src/data/siteData.js` to a Formspree endpoint or your own JSON API URL. When it is blank, the form deliberately runs in demo mode and shows a success state without sending personal data anywhere.

## Before launch

Replace all demo business details. Only display NICEIC, NAPIT, TrustMark, insurance, guarantees or other credentials that the actual business holds and can substantiate. Replace sample reviews with genuine reviews for the business.

For UK SEO, also tailor the page title, meta description, service area wording and FAQ answers to the electrician’s real location and services. Add LocalBusiness/Electrician structured data once the real company name, address/service area and contact details are known.

## Images

The starter references two Unsplash images remotely to keep the source project lightweight. See `ATTRIBUTION.md`. For production, self-host appropriately licensed, optimised WebP/AVIF images whenever possible.
