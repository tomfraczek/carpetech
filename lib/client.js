// import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// let client = ApolloClient;

// export const getClient = () => {
//   if (!client || typeof window === 'undefined') {
//     client = new ApolloClient({
//       link: new HttpLink({
//         url: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
//       }),
//       cache: new InMemoryCache(),
//     });
//   }
//   return client;
// };
