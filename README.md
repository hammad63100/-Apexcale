# Apexcale — React + TypeScript

The Apexcale Amazon-growth-agency website rebuilt as a modern **React 18 + TypeScript + Vite**
application. All of the premium motion is preserved: 3D hero scene with mouse parallax,
scroll-triggered reveals, animated counters, animated chart, testimonial slider, FAQ accordion,
sticky glass nav, scroll progress, and `prefers-reduced-motion` support.

## Quick start

```bash
npm install
npm run dev        # start dev server (http://localhost:5173)
npm run build      # type-check (tsc) + production build → dist/
npm run preview    # preview the production build
npm run typecheck  # run tsc alone
```

## Project structure

```
apexcale-react/
├── index.html                 # Vite entry (meta tags, favicon)
├── vite.config.ts
├── tsconfig.json
├── public/
│   └── img/                   # photos (hero, problem, services, why, process, cta)
└── src/
    ├── main.tsx               # React root
    ├── App.tsx                # page composition
    ├── styles.css             # full design system + animations
    ├── data/
    │   └── content.ts         # ★ all site copy + types (edit content here)
    ├── hooks/
    │   ├── useInView.ts       # IntersectionObserver + scroll fallback
    │   ├── useTilt.ts         # 3D tilt on hover
    │   └── useCountUp.ts      # animated number counting
    └── components/
        ├── Reveal.tsx         # scroll-triggered reveal wrapper
        ├── Tilt.tsx           # tilt wrapper
        ├── icons.tsx          # typed inline SVG icon library (IconName union)
        ├── Hero.tsx           # hero + 3D scene + mouse parallax
        ├── Nav.tsx / Preloader.tsx / ScrollProgress.tsx / ToTop.tsx
        ├── Marquee.tsx / Problem.tsx / QuoteBand.tsx / Services.tsx
        ├── Why.tsx / Process.tsx / Results.tsx / Testimonials.tsx
        ├── Faq.tsx / FinalCta.tsx / Footer.tsx
```

## Editing content

Everything lives in `src/data/content.ts` — typed interfaces (`Service`, `WhyFeature`,
`ProcessStep`, `Counter`, `Testimonial`, `Faq`, …) so changing copy is type-safe.

- **Animated counters** (Results): edit the `counters` array. `value` is the count target;
  `prefix` / `suffix` handle `$`, `+`, `%`, `M+`. Values are SAMPLE placeholders — swap in
  real client performance data when available (noted in the source).
- **Growth chart**: edit `chartMonths` / `chartValues` (percentages).
- **Testimonials**: edit the `testimonials` array (quote, name, category, initials, gradient).
- **Services / Why / Process / FAQ / nav / marquee**: edit the matching arrays.
- **Headline & hero copy** that contains styled JSX spans lives in the section components
  (`Hero.tsx`, `Problem.tsx`, `Results.tsx`, `FinalCta.tsx`).

## Styling & animation notes

- Design tokens (colors, radii, shadows, easings) are CSS custom properties at the top of
  `src/styles.css`.
- `Reveal` variants: `up | down | left | right | zoom | flip`, with an optional `delay` (ms).
- Icons: add new icons in `components/icons.tsx` and extend the `IconName` union —
  `<Icon name="globe" size={18} />` is fully type-checked.
- Photos: drop JPEGs into `public/img/` with the existing names (or update the `src` paths in
  components and the `url(...)` refs in `styles.css` for the band/CTA backgrounds).

## Deploy

`npm run build` outputs a static site in `dist/` — deploy it to Netlify, Vercel, Cloudflare
Pages, S3/CloudFront, etc. (standard Vite SPA deployment).
