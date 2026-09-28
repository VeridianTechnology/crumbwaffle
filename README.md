# CrumbWaffle

Responsive React/Vinext concept launch site for private, upgradeable AI hardware.

## Run locally

Use Node 22.13 or newer. `.node-version` and `.nvmrc` pin the Node 22 line.

With fnm installed:

```sh
fnm install 22
fnm use 22
npm install
npm run dev
```

If your current terminal still uses an older Node, this one-command alternative works without changing its default:

```sh
npx --yes --package=node@22 -c 'npm run dev'
```

`npm run build` creates the production bundle. `npx tsc --noEmit --incremental false` checks TypeScript.

## Content

- `app/page.tsx`: homepage.
- `app/models/[slug]/page.tsx`: four model detail pages.
- `lib/products.ts`: shared proposed prices, hardware specifications, and FAQ.
- `components/crumbwaffle/`: shared layout, galleries, FAQ, prototype form, and motion.
- `app/globals.css`: responsive styles and reduced-motion behavior.
- `public/products/`: supplied technical reference images.
- `public/images/`: generated family portrait, upgrade study, and lifestyle triptych.
- `IMAGE-PROMPTS.json`: exact prompts for the three built-in image-generation assets.

The same family portrait supplies all exterior crops to keep model shapes consistent. Home is the smallest enclosure. Technical plates are supplied concept references; written specifications in `lib/products.ts` are the authoritative proposed configurations.

## Prototype limitations

This is a fictional launch concept. No checkout, orders, stock, delivery dates, benchmark claims, or announced integrations. Prices are proposed USD prices. One-year hardware warranty and basic support are proposed inclusions; additional services are explicitly paid and unpriced.

The waitlist form validates an email locally and displays an honest demo response. It does not make a request, store the address, or add a subscriber. Connect an endpoint with consent/privacy handling before making it a live waitlist.

## Validation

Production compilation, TypeScript, and HTTP route/content checks are used. Browser visual/interaction QA was not performed. The site is primarily a reading/navigation experience; no WebMCP action surface is necessary for its non-submitting prototype form.
