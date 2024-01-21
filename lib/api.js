import { TOPBAR, SERVICES, HOMEPAGE, SERVICE } from '@/lib/queries';

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

function extractHomepage(fetchResponse) {
  return fetchResponse?.data?.homepage;
}

function extractTopBarEntries(fetchResponse) {
  return fetchResponse?.data?.homepage.topSubHeader;
}

function extractPageEntries(fetchResponse) {
  return fetchResponse?.data?.pageCollection?.items;
}

export async function getHomepage(isDraftMode) {
  const entries = await fetchGraphQL(`query ${HOMEPAGE}`, isDraftMode);
  return extractHomepage(entries);
}

export async function getServices(isDraftMode) {
  const entries = await fetchGraphQL(`query ${SERVICES}`, isDraftMode);
  return extractPageEntries(entries);
}

export async function getTopBar(isDraftMode) {
  const entries = await fetchGraphQL(`query ${TOPBAR}`, isDraftMode);
  return extractTopBarEntries(entries);
}

export async function getPage(slug, isDraftMode) {
  const entries = await fetchGraphQL(
    `query {
      pageCollection(where: {slug: "${slug}"}, limit: 10) {
        items {
          ${SERVICE}
        }
      }
    }`
  );
  return extractPageEntries(entries);
}

// Specify the URL of the API you want to fetch data from
const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${process.env.GOOGLE_MAPS_PLACE_ID}&fields=reviews&key=${process.env.GOOGLE_MAPS_API_KEY}`;

// Use the fetch function to make a GET request
export async function getMap() {
  fetch(apiUrl)
    .then((response) => {
      // Check if the request was successful (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the JSON response
      return response.json();
    })
    .then((data) => {
      // Handle the data from the API
      console.log('Data from API:', data);
    })
    .catch((error) => {
      // Handle errors during the fetch operation
      console.error('Fetch error:', error);
    });
}
