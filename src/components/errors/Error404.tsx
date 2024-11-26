import { Link } from "react-router";

export default function Error404() {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="text-9xl text-primary">404</span>

      <h1 className="text-lg font-bold mt-8">Lost in the Shadows</h1>

      <span className="text-sm text-secondary mt-1">
        This path leads nowhere, warrior. Return to the map and try again.
      </span>

      <Link to="/" className="text-primary mt-10">
        Back to the Main Map
      </Link>
    </div>
  );
}
