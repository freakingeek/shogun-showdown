import { useRouteError } from "react-router-dom";
import Error404 from "@/components/errors/Error404";
import { NotFoundError } from "@/lib/exceptions/instances";

export default function GlobalErrorPage() {
  const error = useRouteError() as Error;

  if (error instanceof NotFoundError) {
    return <Error404 />;
  }

  return <h1>{error.message}</h1>;
}
