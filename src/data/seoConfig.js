export const siteUrl = 'https://www.gelisimteknikservis.com';

export const publicRoutes = [
  {
    path: '/',
    changefreq: 'weekly',
    priority: '1.0',
  },
  {
    path: '/buzdolabi-servisi/',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/camasir-makinesi-servisi/',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/bulasik-makinesi-servisi/',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/klima-servisi/',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/kombi-servisi/',
    changefreq: 'monthly',
    priority: '0.8',
  },
];

export const serviceRouteMap = {
  'BuzdolabÄ± Servisi': '/buzdolabi-servisi/',
  'Ã‡amaÅŸÄ±r Makinesi Servisi': '/camasir-makinesi-servisi/',
  'BulaÅŸÄ±k Makinesi Servisi': '/bulasik-makinesi-servisi/',
  'Klima Servisi': '/klima-servisi/',
  'Kombi Servisi': '/kombi-servisi/',
};

export function absoluteUrl(path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteUrl}${normalizedPath === '/' ? '' : normalizedPath}`;
}

export function canonicalPath(pathname = '/') {
  const normalize = (path) => (path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path);
  const normalizedPath = normalize(pathname);
  const route = publicRoutes.find((item) => normalize(item.path) === normalizedPath);
  return route?.path || '/';
}
