import { PropsWithChildren } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function GraphQLProvider({ children }: PropsWithChildren) {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: import.meta.env.VITE_API_URL,
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
