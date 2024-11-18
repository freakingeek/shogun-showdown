import { ApolloClient, useApolloClient } from "@apollo/client";

export default function useGlobalApolloClient() {
  const globalClient = new ApolloClient({
    uri: import.meta.env.VITE_GLOBAL_API_URL,
    cache: useApolloClient().cache,
  });

  return globalClient;
}
