import { PropsWithChildren } from "react";
import { ACCESS_TOKEN_KEY } from "@/configs/constants";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function GraphQLProvider({ children }: PropsWithChildren) {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: import.meta.env.VITE_API_URL,
    headers: { Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN_KEY)}` },
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
