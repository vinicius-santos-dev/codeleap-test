import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}> {label} </label>

      <input
        id={id}
        className={`h-8 rounded-lg px-3 py-2 border border-[#777777] text-sm placeholder:text-[#CCCCCC] placeholder:text-sm focus:outline-none`}
        {...props}
      />
    </div>
  );
};

export default Input;
