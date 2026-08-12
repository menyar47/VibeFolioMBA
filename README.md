# VibeFolioMBA

SEO-friendly React portfolio built with Vite, Tailwind CSS, and static prerendering.

## Requirements

- Node.js 20+
- npm

Install dependencies:

```bash
npm install
```

## Development

Run the local Vite dev server:

```bash
npm run dev
```

The app runs on port `3000` by default.

## Production Build

Build the production site:

```bash
npm run build
```

The build command runs two steps:

1. `vite build`
   Compiles the React app, Tailwind CSS, JavaScript bundles, image assets, and Vite manifest into `dist/`.

2. `tsx scripts/generate-ssg.ts`
   Server-renders the React app into static HTML and injects it into `dist/index.html` for SEO crawlers.

## SEO Static Generation

The static generation script uses:

- [src/entry-server.tsx](src/entry-server.tsx) to render the React app to HTML.
- [src/data/portfolioData.ts](src/data/portfolioData.ts) as the source for portfolio/person/case study metadata.
- `dist/.vite/manifest.json` to rewrite local image references to hashed production asset paths.

Generated files:

- `dist/index.html` - production HTML with real prerendered page content.
- `dist/404.html` - GitHub Pages fallback using the same prerendered app shell.
- `dist/sitemap.xml` - sitemap pointing to the canonical site URL.
- `dist/robots.txt` - crawler rules and sitemap reference.
- `dist/.nojekyll` - disables Jekyll processing on GitHub Pages.

The HTML also includes JSON-LD structured data for:

- Person
- WebSite
- ItemList of case studies
- CreativeWork entries for each case study

## Site URL

The default canonical URL is:

```text
https://julianvance.design
```

To build for a different domain, set `SITE_URL` before running the build:

```bash
SITE_URL=https://example.com npm run build
```

On Windows PowerShell:

```powershell
$env:SITE_URL='https://example.com'; npm run build
```

## Validation

Type-check the project:

```bash
npm run lint
```

Preview the production build locally:

```bash
npm run preview
```

Useful checks after building:

- Open `dist/index.html` and confirm page content exists inside `<div id="root">`.
- Confirm `dist/sitemap.xml` uses the intended production domain.
- Confirm `dist/robots.txt` points to the sitemap.
- Confirm local project images use hashed paths like `./assets/...jpg`.

## Deployment

Deploy the contents of `dist/` to any static host, such as GitHub Pages, Netlify, Vercel, Cloudflare Pages, or an S3/static server.

For best SEO results, configure the production host to serve:

- `index.html` at `/`
- `404.html` as the fallback page
- `sitemap.xml` at `/sitemap.xml`
- `robots.txt` at `/robots.txt`

## Recommended Next SEO Step

The current build is strong for a single-page portfolio. For stronger search coverage, generate dedicated static URLs for each case study, for example:

```text
/case-studies/kinetix-mobility/
/case-studies/minimalia-monograph/
/case-studies/aetheria-packaging/
```

Dedicated case study pages can each have their own title, meta description, canonical URL, Open Graph metadata, and structured data.
