import fs from 'fs/promises';
import path from 'path';
import {createServer} from 'vite';

type Manifest = Record<string, {file: string}>;

type DesignerInfo = {
  name: string;
  role: string;
  shortBio: string;
  aboutBio: string;
  socials: {
    linkedin: string;
    behance: string;
    email: string;
    location: string;
  };
};

type Project = {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  summary: string;
  coverImage: string;
  tags: string[];
  problem: string;
  outcome: {
    summary: string;
    metrics: string[];
  };
};

const siteUrl = (process.env.SITE_URL || 'https://julianvance.design').replace(/\/$/, '');
const distDir = path.resolve(process.cwd(), 'dist');
const indexPath = path.join(distDir, 'index.html');

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function replaceRoot(indexHtml: string, appHtml: string) {
  return indexHtml.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${appHtml}</div>`,
  );
}

function replaceJsonLd(indexHtml: string, schema: unknown) {
  const json = JSON.stringify(schema).replace(/</g, '\\u003c');
  const script = `<script type="application/ld+json">${json}</script>`;

  if (/<script type="application\/ld\+json">[\s\S]*?<\/script>/.test(indexHtml)) {
    return indexHtml.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, script);
  }

  return indexHtml.replace('</head>', `    ${script}\n  </head>`);
}

function rewriteAssetPaths(html: string, manifest: Manifest) {
  let output = html;

  for (const [sourcePath, entry] of Object.entries(manifest)) {
    if (!sourcePath.startsWith('src/assets/')) continue;

    const devPath = `/${sourcePath.replace(/\\/g, '/')}`;
    const buildPath = `./${entry.file}`;
    output = output.split(`="${devPath}"`).join(`="${buildPath}"`);
  }

  return output;
}

function revealServerRenderedMotion(html: string) {
  return html.replace(/\sstyle="opacity:0(?:;transform:[^"]*)?"/g, '');
}

function buildSchema(designerInfo: DesignerInfo, projects: Project[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: designerInfo.name,
        jobTitle: designerInfo.role,
        description: designerInfo.shortBio,
        url: `${siteUrl}/`,
        email: `mailto:${designerInfo.socials.email}`,
        address: designerInfo.socials.location,
        sameAs: [designerInfo.socials.linkedin, designerInfo.socials.behance],
        knowsAbout: [
          'Brand identity',
          'Visual systems',
          'Swiss typography',
          'Editorial design',
          'Packaging design',
          'UI design systems',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: `${designerInfo.name} Portfolio`,
        description: designerInfo.shortBio,
        publisher: {'@id': `${siteUrl}/#person`},
      },
      {
        '@type': 'ItemList',
        '@id': `${siteUrl}/#case-studies`,
        name: 'Selected design case studies',
        itemListElement: projects.map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'CreativeWork',
            '@id': `${siteUrl}/#${project.id}`,
            name: project.title,
            genre: project.category,
            about: project.problem,
            description: project.summary,
            datePublished: project.year,
            author: {'@id': `${siteUrl}/#person`},
            keywords: project.tags.join(', '),
          },
        })),
      },
    ],
  };
}

async function writeCrawlerFiles() {
  const today = new Date().toISOString().slice(0, 10);
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${escapeXml(`${siteUrl}/`)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

  await fs.writeFile(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  await fs.writeFile(path.join(distDir, 'robots.txt'), robotsTxt, 'utf-8');
  await fs.writeFile(path.join(distDir, '.nojekyll'), '', 'utf-8');
}

async function generateSSG() {
  const indexHtml = await fs.readFile(indexPath, 'utf-8');
  const manifestPath = path.join(distDir, '.vite', 'manifest.json');
  const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf-8')) as Manifest;

  const vite = await createServer({
    appType: 'custom',
    logLevel: 'error',
    server: {middlewareMode: true},
  });

  try {
    const {render} = await vite.ssrLoadModule('/src/entry-server.tsx');
    const {designerInfo, caseStudies} = await vite.ssrLoadModule('/src/data/portfolioData.ts') as {
      designerInfo: DesignerInfo;
      caseStudies: Project[];
    };

    const renderedHtml = rewriteAssetPaths(revealServerRenderedMotion(render()), manifest);
    const schema = buildSchema(designerInfo, caseStudies);
    const htmlWithRoot = replaceRoot(indexHtml, renderedHtml);
    const htmlWithSchema = replaceJsonLd(htmlWithRoot, schema);

    await fs.writeFile(indexPath, htmlWithSchema, 'utf-8');
    await fs.writeFile(path.join(distDir, '404.html'), htmlWithSchema, 'utf-8');
    await writeCrawlerFiles();

    console.log('[SSG] Static HTML, schema, sitemap, robots, and GitHub Pages files generated.');
  } finally {
    await vite.close();
  }
}

generateSSG().catch((error) => {
  console.error('[SSG] Generation failed:', error);
  process.exit(1);
});
