import { PropsWithChildren } from "react";
import AuthProvider from "./AuthProvider";
import GraphQLProvider from "./GraphQLProvider";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <GraphQLProvider>
      <AuthProvider>{children}</AuthProvider>;
    </GraphQLProvider>
  );
}
