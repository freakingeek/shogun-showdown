import { Link } from "react-router-dom";

export default function CopyRight() {
  return (
    <span className="w-80 text-sm mt-auto">
      By proceeding, you honor our{" "}
      <Link to="/" className="text-primary">
        realm’s rules
      </Link>{" "}
      and accept the{" "}
      <Link to="/" className="text-primary">
        community's terms
      </Link>
      .
    </span>
  );
}
