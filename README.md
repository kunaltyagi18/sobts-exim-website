# SOBTS EXIM

Production-ready Next.js website for Shree Om Balaji Traders & Suppliers (SOBTS EXIM), Ghaziabad. The site presents oil seals as the primary product focus, followed by hydraulic and pneumatic seals, hydraulic hoses and fittings, JCB parts and tractor spare parts.

## Stack

- Next.js App Router
- TypeScript and TSX
- Tailwind CSS v4
- Lucide icons
- Static product and catalogue data

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Verify for production

```bash
npm run lint
npm run build
npm run start
```

## Site features

- Responsive home, about, products, industries, catalogues and contact pages
- Dynamic product detail routes under `/products/[slug]`
- Product search and category filtering
- WhatsApp enquiry links with prefilled messages
- Click-to-call and email links
- Downloadable PDF catalogues
- SEO metadata, sitemap and robots route
- Optimized images through `next/image`

## Project structure

```text
src/app/       App Router pages and metadata
src/components Reusable UI components
src/data/      Product, industry and catalogue content
src/lib/       Site constants and helpers
src/types/     Shared TypeScript types
public/images/ Website imagery
public/catalogues/ Downloadable PDF catalogues
```

Contact details are maintained in `src/lib/site.ts` and product/catalogue content in `src/data/`.
