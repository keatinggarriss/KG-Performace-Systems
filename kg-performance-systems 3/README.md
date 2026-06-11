# KG Performance Systems — Website

Next.js 14 (App Router) + Tailwind CSS + TypeScript. Dark, mobile-first,
conversion-focused coaching site.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy

Push to GitHub → import to [Vercel](https://vercel.com) → done. No env vars required.

## Pre-launch checklist

- Replace every `REPLACE` marker:
  - `lib/site.ts` — TikTok + Instagram handles
  - `components/Transformations.tsx` — client names/results + before/after photos
  - `components/Testimonials.tsx` — real quotes + avatars
  - `components/Coach.tsx` — coach photo
- Live integrations already wired:
  - Typeform application: `cxxrE2sD` (embedded at `/apply`)
  - Calendly: `https://calendly.com/keatinggarrissbusiness/10-30-min-call` (embedded at `/book-call`)
- Set your Typeform end screen to link qualified applicants to `/book-call` or the Calendly URL directly.
- Point TikTok/IG bio links to `/apply`.

## Structure

```
app/          pages (/, /coaching, /results, /about, /faq, /apply, /book-call)
components/   all sections — copy lives here
lib/site.ts   single source of truth for links/config
```
