import { authLink, httpLink } from "./apollo-links";
import { ApolloClient, InMemoryCache } from "@apollo/client/index.js";

const inMemoryCache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  cache: inMemoryCache,
  link: authLink.concat(httpLink),
});

export const globalApolloClient = new ApolloClient({
  cache: inMemoryCache,
  uri: import.meta.env.VITE_GLOBAL_API_URL,
});
