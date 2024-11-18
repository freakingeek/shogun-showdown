import AuthProvider from "./AuthProvider";
import { PropsWithChildren } from "react";

export default function Providers({ children }: PropsWithChildren) {
  return <AuthProvider>{children}</AuthProvider>;
}
