import classNames from "classnames";
import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  inputClassName?: string;
};

export default function Input({
  label,
  className,
  inputClassName,
  ...rest
}: InputProps) {
  return (
    <div className={className}>
      <span className="block text-left pl-2">{label}</span>

      <input
        type="text"
        className={classNames(
          "w-full h-14 bg-black transition-colors border-2 border-secondary focus:border-primary outline-none rounded-2xl px-4 mt-1 placeholder:text-secondary",
          inputClassName
        )}
        {...rest}
      />
    </div>
  );
}