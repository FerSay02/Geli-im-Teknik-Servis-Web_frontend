import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { absoluteUrl, publicRoutes } from '../src/data/seoConfig.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const indexPath = path.join(distDir, 'index.html');
const indexHtml = await readFile(indexPath, 'utf8');

function withCanonical(html, routePath) {
  const canonical = `<link rel="canonical" href="${absoluteUrl(routePath)}" />`;

  if (html.includes('rel="canonical"')) {
    return html.replace(/<link rel="canonical" href="[^"]*" \/>/, canonical);
  }

  return html.replace('</head>', `    ${canonical}\n  </head>`);
}

await Promise.all(
  publicRoutes
    .filter((route) => route.path !== '/')
    .map(async (route) => {
      const routeDir = path.join(distDir, route.path.slice(1));
      await mkdir(routeDir, { recursive: true });
      await writeFile(path.join(routeDir, 'index.html'), withCanonical(indexHtml, route.path), 'utf8');
    }),
);

await writeFile(indexPath, withCanonical(indexHtml, '/'), 'utf8');

console.log('Generated static HTML entry files for configured public routes');
