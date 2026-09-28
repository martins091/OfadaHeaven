# Ofada Heaven — landing page

Next.js (App Router) landing page for Ofada Heaven, 62 Adeniran Ogunsanya Street, Surulere, Lagos.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

- `app/page.tsx` — all sections (hero, menu, karaoke, reviews, visit, footer)
- `app/page.module.css` — styles; brand tokens live in `app/globals.css` (light + dark via `prefers-color-scheme`)
- `app/components/CopyPhone.tsx` — copy-number button (the only client component)

## Photos (`public/images/`)
All photos are real, taken from the Ofada Heaven Google Maps listing gallery (Food & drink, Vibe, Milkshake):
ofada-rice-plate, oreo-milkshake, ofada-platter, ofada-sauce, ofada-sauce-closeup, bar-neon, dining-room, storefront-24hrs.
Confirm usage rights with the owner before launch — these are user/owner uploads on Google Maps.

There is no public photo of Chicken and Chips, so that card is typographic. Drop a real shot into `public/images/` and swap it in when the owner provides one.
