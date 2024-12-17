import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  color?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  color = "primary",
  size = "medium",
  children,
  onClick,
  className,
  disabled = false,
}) => {
  const baseStyles =
    "font-medium rounded focus:outline-none focus:border-none  transition";

  const colorStyles = {
    primary: "bg-primary text-white hover:bg-primary-dark ",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  const sizeStyles = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";

  const classes = twMerge(
    baseStyles,
    colorStyles[color],
    sizeStyles[size],
    disabled && disabledStyles,
    className
  );

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
