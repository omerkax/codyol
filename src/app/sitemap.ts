import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE_URL = 'https://codyol.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes: { path: string; priority: number }[] = [
    { path: '', priority: 1 },
    { path: '/services', priority: 0.9 },
    { path: '/projects', priority: 0.9 },
    { path: '/about', priority: 0.8 },
    { path: '/pricing', priority: 0.7 },
    { path: '/contact', priority: 0.8 },
    { path: '/privacy', priority: 0.3 },
    { path: '/terms-conditions', priority: 0.3 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority,
  }));
}
