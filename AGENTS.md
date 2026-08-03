## Setup And Verification

- Use Node.js `>=22.12.0` and `npm`; `package-lock.json` is the dependency source of truth.
- Run `npm run build` for full verification. No lint, test, formatter, or standalone typecheck script is configured.
- Start persistent development with `npm run astro -- dev --background`; manage it with `npm run astro -- dev status`, `npm run astro -- dev logs`, and `npm run astro -- dev stop`.

## Architecture

- This is a static Astro 7 site. English routes live at `/`; Indonesian mirrors live under `/id` because `prefixDefaultLocale` is disabled in `astro.config.mjs`.
- Route files in `src/pages/` are thin wrappers. Shared page markup lives in `src/components/SitePage.astro`; product-family markup lives in `src/components/ProductFamilyPage.astro`; global shell, tokens, navigation, SEO links, and GSAP behavior live in `src/layouts/BaseLayout.astro`.
- Keep English and Indonesian route wrappers paired. Dynamic family routes in both locales derive `getStaticPaths()` from `families` in `src/data/products.ts`.
- Shared translations and locale-aware page URLs belong in `src/data/ui.ts`. Product families, variants, slugs, and asset URLs belong in `src/data/products.ts`.

## Assets And UI

- Product asset URLs are served directly from `public/images/products`. Folder names and filenames contain spaces, mixed case, commas, and existing misspellings; preserve exact casing and spelling when referencing them.
- Components use scoped `<style>` blocks; shared CSS variables and global rules belong in `BaseLayout.astro`.
- GSAP animation runs only under `prefers-reduced-motion: no-preference`; keep new motion inside that guard and preserve usable no-animation rendering.
- Contact form has no backend: client script converts submission into a `mailto:` URL.
