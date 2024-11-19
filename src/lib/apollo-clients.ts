import { ACCESS_TOKEN_KEY } from "@/configs/constants";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const inMemoryCache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  cache: inMemoryCache,
  uri: import.meta.env.VITE_API_URL,
  headers: { Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN_KEY)}` },
});

export const globalApolloClient = new ApolloClient({
  cache: inMemoryCache,
  uri: import.meta.env.VITE_GLOBAL_API_URL,
});
