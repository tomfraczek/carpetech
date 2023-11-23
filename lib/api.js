import { SERVICES, HOMEPAGE, SERVICE } from '@/lib/queries';

async function fetchGraphQL(query, preview = false) {
  return fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN
      }`,
    },
    body: JSON.stringify({ query }),
  }).then((response) => response.json());
}

function extractPage(fetchResponse) {
  return fetchResponse?.data?.homepage;
}

function extractPageEntries(fetchResponse) {
  return fetchResponse?.data?.pageCollection?.items;
}

export async function getHomepage(isDraftMode) {
  const entries = await fetchGraphQL(`query ${HOMEPAGE}`, isDraftMode);
  return extractPage(entries);
}

export async function getServices(isDraftMode) {
  const entries = await fetchGraphQL(`query ${SERVICES}`, isDraftMode);
  return extractPageEntries(entries);
}

export async function getPage(slug, isDraftMode) {
  const entries = await fetchGraphQL(
    `query {
      pageCollection(where: {slug: "${slug}"}) {
        items {
          ${SERVICE}
        }
      }
    }`
  );
  return extractPageEntries(entries);
}
