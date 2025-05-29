import type { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "secondary" | "outline" | "destructive";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary hover:bg-[#5f7ed8]",
  secondary: "bg-secondary hover:bg-[#3ca653]",
  destructive: "bg-tertiary hover:bg-[#c53030]",
  outline: "bg-white border border-[#999999] text-black hover:bg-gray-100"
};

const Button = ({
  children,
  className,
  variant = "primary",
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "h-8 rounded-lg px-4 flex text-white items-center justify-center font-bold hover:cursor-pointer transition duration-300",
        variantStyles[variant],
        className,
        disabled ? "cursor-not-allowed opacity-70" : ""
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
