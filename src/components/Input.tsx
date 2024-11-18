import classNames from "classnames";
import { forwardRef, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  inputClassName?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(function (
  { label, error = "", className, inputClassName, ...rest },
  ref
) {
  return (
    <div className={className}>
      <span className="block text-left pl-2">{label}</span>

      <input
        ref={ref}
        type="text"
        className={classNames(
          "w-full h-14 bg-black transition-colors border-2 border-secondary focus:border-primary outline-none rounded-2xl px-4 mt-1 placeholder:text-secondary",
          inputClassName
        )}
        {...rest}
      />

      <span className="block text-left text-xs text-primary pl-2 mt-2">
        {error}
      </span>
    </div>
  );
});

Input.displayName = "Input";

export default Input;
