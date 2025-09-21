import fs from 'fs';
import path from 'path';

const baseUrl = 'https://sekeranaokulu.com';

const pages = [
  '/',
  '/hakkimizda',
  '/aktiviteler',
  '/bultenler',
  '/iletisim',
  '/sss',
  '/cerez',
  '/gizlilik',
  '/kullanim',
  // Add other static pages here
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => {
    return `
    <url>
      <loc>${baseUrl}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
    `;
  }).join('')}
</urlset>`;

  fs.writeFileSync(path.resolve('./public/sitemap.xml'), sitemap);
  console.log('sitemap.xml generated!');
};

generateSitemap();
