// import { SERVICES, HOMEPAGE, SERVICE } from '@/lib/queries';
export const HOMEPAGE = `
  {
  homepage(id: "1WdHdBja7O8iulUQTIpsMJ") {
    topSection{
      sectionTitle
      content{
        json
      }
      icon{
        title
        description
        width
        height
        url
      }
      image{
        title
        description
        width
        height
        url
      }
      imagePosition
      addReviewCards
      backgroundColour
    }
    middleSection{
      sectionTitle
      content{
        json
      }
      icon{
        title
        description
        width
        height
        url
      }
      image{
        title
        description
        width
        height
        url
      }
      imagePosition
      addReviewCards
      backgroundColour
    }
    fullWidthBar{
      category
      title
      image{
        title
        description
        width
        height
        url
      }
      url
    }
    bottomSection{
      sectionTitle
      content{
        json
      }
      icon{
        title
        description
        width
        height
        url
      }
      image{
        title
        description
        width
        height
        url
      }
      imagePosition
      addReviewCards
      backgroundColour
    }
  }
}
`;

export const SERVICES = `
  {
  pageCollection(where: { slug_exists: true }, preview:false){
    items{
      slug
      title
      thumbnail{
        url
        width
        height
        title
      }
    }
  }
}
`;

export const SERVICE = `
  slug
  title
  topSection {
      sectionTitle
      content {
        json
      }
      icon {
        title
        description
        width
        height
        url
      }
      image {
        title
        description
        width
        height
        url
      }
      imagePosition
      addReviewCards
    }
    middleSection {
      sectionTitle
      content {
        json
      }
      icon {
        title
        description
        width
        height
        url
      }
      image {
        title
        description
        width
        height
        url
      }
      imagePosition
      addReviewCards
    }
    bottomSection {
      sectionTitle
      content {
        json
      }
      icon {
        title
        description
        width
        height
        url
      }
      image {
        title
        description
        width
        height
        url
      }
      imagePosition
      addReviewCards
    }
    fullWidthBar{
        category
        title
        url
        image{
          title
          description
          width
          height
          url
        }
      }
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN
      }`,
    },
    body: JSON.stringify({ query }),
    next: { tags: ['posts'] },
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
