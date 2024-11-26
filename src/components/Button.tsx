import { Link } from "react-router";
import classNames from "classnames";
import { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
  href?: string;
  className?: string;
  variant?: "primary" | "secondary";
  onClick?: VoidFunction;
}>;

export default function Button({
  href,
  children,
  className,
  variant = "primary",
  ...rest
}: ButtonProps) {
  const styles: Record<typeof variant, string> = {
    primary: "bg-primary border-primary text-white",
    secondary: "bg-black border-primary text-primary",
  };

  const mergedClassNames = classNames(
    "flex items-center justify-center h-12 font-bold rounded-lg border",
    styles[variant],
    className
  );

  if (href) {
    return (
      <Link to={href} className={mergedClassNames}>
        {children}
      </Link>
    );
  }

  return (
    <button {...rest} className={mergedClassNames}>
      {children}
    </button>
  );
}
