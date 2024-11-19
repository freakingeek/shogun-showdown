import { useRouteError } from "react-router-dom";
import Error404 from "@/components/errors/Error404";
import { NotFoundError } from "@/lib/exceptions/instances";

export default function GlobalErrorPage() {
  const error = useRouteError() as Error;

  if (error instanceof NotFoundError) {
    return (
      <div className="h-svh flex items-center justify-center">
        <Error404 />
      </div>
    );
  }

  return <h1>{error.message}</h1>;
}
