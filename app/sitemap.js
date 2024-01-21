import { getServices } from '@/lib/api';

const URL = 'https://carpetech.co.uk';

export default async function sitemap() {
  const services = await getServices(false);
  const servicesObject = services.map(({ slug, sys }) => ({
    url: `${URL}/service/${slug}`,
    lastModified: sys.publishedAt,
  }));

  const routes = ['', '/contact-us', '/freeQuote'].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...servicesObject];
}
