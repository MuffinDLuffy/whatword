import { promises as fs } from 'fs';
import path from 'path';

const SITE_URL = process.env.SITE_URL || 'https://example.com';
const projectRoot = process.cwd();
const pagesDir = path.join(projectRoot, 'src', 'pages');
const outDir = path.join(projectRoot, 'public');

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const ent of entries) {
    if (ent.name.startsWith('.')) continue;
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name.startsWith('_')) continue; // skip private folders
      files.push(...(await walk(full)));
    } else {
      if (/\.(astro|html|md)$/i.test(ent.name)) files.push(full);
    }
  }
  return files;
}

function fileToRoute(filePath) {
  const rel = path.relative(pagesDir, filePath).split(path.sep).join('/');
  if (!rel) return null;
  if (rel.startsWith('_')) return null;
  if (rel.includes('[')) return null; // skip dynamic routes

  let route = rel.replace(/\.(astro|html|md)$/i, '');
  // remove trailing /index
  if (route.endsWith('/index')) route = route.slice(0, -'/index'.length);
  if (route === 'index' || route === '') return '/';
  return '/' + route;
}

async function main() {
  try {
    const files = await walk(pagesDir);
    const routes = files.map(fileToRoute).filter(Boolean);
    const uniq = Array.from(new Set(routes)).sort();

    const base = SITE_URL.replace(/\/$/, '');
    const urls = uniq.map(r => `${base}${r}`);

    const sitemapItems = urls.map(u => `  <url>\n    <loc>${u}</loc>\n    <changefreq>daily</changefreq>\n    <priority>0.8</priority>\n  </url>`).join('\n');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapItems}\n</urlset>`;

    await fs.mkdir(outDir, { recursive: true });
    await fs.writeFile(path.join(outDir, 'sitemap.xml'), sitemap, 'utf8');

    const robots = `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`;
    await fs.writeFile(path.join(outDir, 'robots.txt'), robots, 'utf8');

    console.log('Wrote public/sitemap.xml and public/robots.txt (SITE_URL=' + base + ')');
  } catch (err) {
    console.error('Failed to generate sitemap:', err);
    process.exit(1);
  }
}

main();
