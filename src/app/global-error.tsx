import { useRouteError } from "react-router-dom";

export default function GlobalErrorPage() {
  const error = useRouteError() as Error;

  return <h1>{error.message}</h1>;
}
