import { PropsWithChildren } from "react";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "@/lib/apollo-clients";

export default function GraphQLProvider({ children }: PropsWithChildren) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
