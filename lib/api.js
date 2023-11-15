const Homepage = `
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
    }
  }
}
`;

const Page = `
  {
  page(id: "7pEVsSxJBAUQOLTvCc6E43") {
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
    }
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

export async function getHomepage(isDraftMode) {
  const entries = await fetchGraphQL(`query ${Homepage}`, isDraftMode);
  return extractPage(entries);
}

export async function getPage(isDraftMode) {
  const entries = await fetchGraphQL(`query ${Page}`, isDraftMode);
  return extractPage(entries);
}
