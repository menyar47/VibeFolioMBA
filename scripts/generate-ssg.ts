import fs from 'fs';
import path from 'path';

// Pre-render static HTML for SEO & SSG
async function generateSSG() {
  console.log('🚀 [SSG] Starting Static Site Generation & SEO Prerendering...');

  const distDir = path.resolve(process.cwd(), 'dist');
  const indexPath = path.join(distDir, 'index.html');

  if (!fs.existsSync(indexPath)) {
    console.error('❌ Error: dist/index.html not found. Run `vite build` first.');
    process.exit(1);
  }

  let indexHtml = fs.readFileSync(indexPath, 'utf-8');

  // Pre-rendered semantic HTML markup for Search Engine Crawlers (Googlebot, Bing, LinkedIn, Twitter)
  const prerenderedStaticBody = `
    <header id="main-navbar" class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100 py-4">
      <div class="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#hero" className="font-black text-2xl tracking-tighter text-neutral-900">
          JULIAN VANCE<span class="text-blue-600">.</span>
        </a>
        <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
          <a href="#about" class="hover:text-neutral-900">About</a>
          <a href="#work" class="hover:text-neutral-900">Selected Work</a>
          <a href="#skills" class="hover:text-neutral-900">Skills</a>
          <a href="#contact" class="hover:text-neutral-900">Contact</a>
        </nav>
      </div>
    </header>

    <main>
      <!-- Hero Section -->
      <section id="hero" class="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-6 md:px-12 bg-white text-center">
        <div class="max-w-5xl mx-auto flex flex-col items-center">
          <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-700 uppercase tracking-wide mb-6">
            Graphic & Visual Systems Designer
          </span>
          <h1 class="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-neutral-900 uppercase leading-[0.9] mb-6">
            JULIAN VANCE<span class="text-blue-600">.</span>
          </h1>
          <p class="text-lg sm:text-xl md:text-2xl text-neutral-600 max-w-3xl font-medium leading-relaxed mb-10">
            Crafting memorable visual identities, Swiss typography, and timeless design systems for visionary brands.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" class="bg-blue-600 text-white font-bold text-base px-8 py-4 rounded-md shadow-lg">
              Contact for Work
            </a>
            <a href="#work" class="bg-white text-neutral-900 font-bold text-base px-8 py-4 rounded-md border-2 border-neutral-900">
              View Selected Work
            </a>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="py-24 px-6 md:px-12 bg-white border-b border-neutral-100">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div class="lg:col-span-7 space-y-6">
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900">
              Design is the art of eliminating unnecessary noise.
            </h2>
            <p class="text-lg text-neutral-700 leading-relaxed">
              With over eight years of experience operating at the intersection of brand strategy, publication layout, and digital design systems, I help ambitious companies translate complex ideas into clear, iconic visual identities. My methodology is rooted in structural grids, intentional typography, and bold minimal contrast.
            </p>
          </div>
          <div class="lg:col-span-5 space-y-4 bg-neutral-50 p-6 rounded-xl border border-neutral-200">
            <h3 class="text-xs font-mono font-bold tracking-widest uppercase text-neutral-400 border-b border-neutral-200 pb-3">CAREER HIGHLIGHTS</h3>
            <div class="space-y-4">
              <div>
                <div class="text-4xl font-black text-neutral-900">8+</div>
                <div class="text-base font-bold text-neutral-800">Years of Experience</div>
                <p class="text-xs text-neutral-500">Designing brand & visual identities across Europe and North America.</p>
              </div>
              <div>
                <div class="text-4xl font-black text-neutral-900">140+</div>
                <div class="text-base font-bold text-neutral-800">Projects Completed</div>
                <p class="text-xs text-neutral-500">Delivered brand guidelines, editorial monographs, and packaging systems.</p>
              </div>
              <div>
                <div class="text-4xl font-black text-neutral-900">50+</div>
                <div class="text-base font-bold text-neutral-800">Clients Worked With</div>
                <p class="text-xs text-neutral-500">Partnered with tech innovators, luxury brands, and cultural institutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Selected Case Studies Section -->
      <section id="work" class="py-24 px-6 md:px-12 bg-white border-b border-neutral-100">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 mb-8">
            Selected <span class="text-blue-600">Design Works</span>.
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article class="p-6 bg-white rounded-2xl border border-neutral-200">
              <span class="text-xs font-mono text-neutral-400">Brand & Visual Identity • 2025</span>
              <h3 class="text-2xl font-black text-neutral-900 mt-2">Kinetix Identity System</h3>
              <p class="text-sm text-neutral-600 mt-2">A complete dynamic brand architecture and visual language for a high-tech EV mobility research lab.</p>
            </article>
            <article class="p-6 bg-white rounded-2xl border border-neutral-200">
              <span class="text-xs font-mono text-neutral-400">Editorial & Print • 2024</span>
              <h3 class="text-2xl font-black text-neutral-900 mt-2">Minimalia Architectural Journal</h3>
              <p class="text-sm text-neutral-600 mt-2">Sleek editorial monograph and publication layout celebrating minimalist brutalist architecture across Europe.</p>
            </article>
            <article class="p-6 bg-white rounded-2xl border border-neutral-200">
              <span class="text-xs font-mono text-neutral-400">Packaging & Systems • 2024</span>
              <h3 class="text-2xl font-black text-neutral-900 mt-2">Aetheria Botanical Packaging</h3>
              <p class="text-sm text-neutral-600 mt-2">Sustainable luxury cosmetics packaging system crafted with recycled stone paper and minimalist debossed typography.</p>
            </article>
            <article class="p-6 bg-white rounded-2xl border border-neutral-200">
              <span class="text-xs font-mono text-neutral-400">Digital & UI Systems • 2023</span>
              <h3 class="text-2xl font-black text-neutral-900 mt-2">Nexus Visual Framework</h3>
              <p class="text-sm text-neutral-600 mt-2">A unified digital design system and graphic guideline for enterprise developer documentation and web portals.</p>
            </article>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section id="skills" class="py-24 px-6 md:px-12 bg-white border-b border-neutral-100">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 mb-8">
            Design <span class="text-blue-600">Competencies</span>.
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="p-6 border border-neutral-200 rounded-xl">
              <h3 class="font-bold text-xl text-neutral-900 mb-2">Brand & Identity Strategy</h3>
              <p class="text-sm text-neutral-600">Brand Systems, Logo Architecture, Guidelines, Visual Directions.</p>
            </div>
            <div class="p-6 border border-neutral-200 rounded-xl">
              <h3 class="font-bold text-xl text-neutral-900 mb-2">Editorial & Print Design</h3>
              <p class="text-sm text-neutral-600">Swiss Typography, Monograph Layout, Packaging, Print Pre-press.</p>
            </div>
            <div class="p-6 border border-neutral-200 rounded-xl">
              <h3 class="font-bold text-xl text-neutral-900 mb-2">Digital & Graphic Systems</h3>
              <p class="text-sm text-neutral-600">UI Design Systems, Custom Iconography, Motion Graphics, Art Direction.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-24 px-6 md:px-12 bg-white text-center">
        <div class="max-w-4xl mx-auto space-y-6">
          <h2 class="text-4xl sm:text-5xl font-black text-neutral-900">
            Let's build something <span class="text-blue-600">iconic</span>.
          </h2>
          <p class="text-lg text-neutral-600">
            Available for brand identity, editorial publication, and packaging design projects.
          </p>
          <div class="flex justify-center gap-6 pt-4 font-bold text-sm text-neutral-900">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance</a>
            <a href="mailto:hello@julianvance.design">hello@julianvance.design</a>
          </div>
        </div>
      </section>
    </main>
  `;

  // Inject pre-rendered static content into <div id="root"></div>
  indexHtml = indexHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${prerenderedStaticBody}</div>`
  );

  fs.writeFileSync(indexPath, indexHtml, 'utf-8');
  console.log('✅ [SSG] Successfully pre-rendered static HTML content into dist/index.html');

  // Generate 404.html for GitHub Pages SPA routing fallback
  const path404 = path.join(distDir, '404.html');
  fs.writeFileSync(path404, indexHtml, 'utf-8');
  console.log('✅ [SSG] Generated dist/404.html for GitHub Pages fallback');

  // Generate .nojekyll for GitHub Pages
  const pathNoJekyll = path.join(distDir, '.nojekyll');
  fs.writeFileSync(pathNoJekyll, '', 'utf-8');
  console.log('✅ [SSG] Generated dist/.nojekyll');

  // Generate sitemap.xml for SEO
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://julianvance.design/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://julianvance.design/#about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://julianvance.design/#work</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://julianvance.design/#skills</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://julianvance.design/#contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  console.log('✅ [SSG] Generated dist/sitemap.xml');

  // Generate robots.txt
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://julianvance.design/sitemap.xml`;

  fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt, 'utf-8');
  console.log('✅ [SSG] Generated dist/robots.txt');

  console.log('🎉 [SSG] Static Site Generation & GitHub Pages build artifacts complete!');
}

generateSSG().catch((err) => {
  console.error('❌ SSG Generation failed:', err);
  process.exit(1);
});
