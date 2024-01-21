import { getServices } from '@/lib/api';

const URL = 'https://carpetech.co.uk';

export default async function sitemap() {
  const services = await getServices(false);
  const servicesObject = services.map(({ slug, sys }) => ({
    url: `/service/${slug}`,
    lastModified: sys.publishedAt,
  }));

  const routes = ['', '/contact-us', '/freeQuote'].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...servicesObject];
}

// import { getSortedPostsData } from '../lib/posts';

// const URL = 'https://claritydev.net';

// export default async function sitemap() {
//   const posts = getSortedPostsData.map(({ id, date }) => ({
//     url: `${URL}/blog/${id}`,
//     lastModified: date,
//   }));

//   const routes = ['', '/portfolio', '/blog'].map((route) => ({
//     url: `${URL}${route}`,
//     lastModified: new Date().toISOString(),
//   }));

//   return [...routes, ...posts];
// }

// const contentful = require('contentful');

// const client = contentful.createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
// });

// async function generateSitemap() {
//   const staticPages = [
//     // Add the paths of your static pages here
//     '/',
//     '/freeQuote',
//     '/contact-us',
//     // ...
//   ];

//   // Fetch slugs from Contentful
//   const slugs = await client.getEntries({
//     content_type: 'yourContentType', // Replace with your Contentful content type
//   });

//   const dynamicSlugs = slugs.items.map((item) => `/dynamic-page/${item.fields.slug}`);

//   const allPaths = [...staticPages, ...dynamicSlugs];

//   // Generate the XML content for the sitemap
//   const sitemapContent = `
//     <?xml version="1.0" encoding="UTF-8"?>
//     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//       ${allPaths
//         .map(
//           (path) => `
//           <url>
//             <loc>https://carpetech.co.uk${path}</loc>
//           </url>
//         `
//         )
//         .join('')}
//     </urlset>
//   `;

//   // Write the sitemap to a file
//   fs.writeFileSync('./public/sitemap.xml', sitemapContent, 'utf8');

//   console.log('Sitemap generated successfully!');
// }

// generateSitemap();
