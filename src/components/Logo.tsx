import { Link } from "react-router";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link to="/" className={className}>
      <img src="/assets/images/logo.png" alt="Logo" />
    </Link>
  );
}
