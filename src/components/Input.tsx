import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps {
  label: string;
  multiline?: boolean;
}

type NativeInputProps = InputProps & InputHTMLAttributes<HTMLInputElement>;
type NativeTextareaProps = InputProps &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

const Input = ({
  label,
  multiline = false,
  ...props
}: NativeInputProps | NativeTextareaProps) => {
  const baseClasses =
    "rounded-lg px-3 py-2 border border-[#777777] text-sm placeholder:text-[#CCCCCC] focus:outline-none";

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id}>{label}</label>

      {multiline ? (
        <textarea
          className={twMerge(baseClasses, "min-h-[74px]")}
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          className={twMerge(baseClasses, "h-8")}
          {...(props as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </div>
  );
};

export default Input;
