import { PropsWithChildren } from "react";
import { apolloClient } from "@/lib/apollo-clients";
import { ApolloProvider } from "@apollo/client/index.js";

export default function GraphQLProvider({ children }: PropsWithChildren) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
