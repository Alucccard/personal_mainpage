import React from "react";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  variant = "primary",
  size = "medium",
  children,
  className = "",
  onClick,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-colors duration-200 rounded";

  const variantStyles = {
    primary: "bg-custom-primary text-white hover:bg-blue-700",
    secondary:
      "bg-custom-accent text-white border border-blue-600 hover:bg-blue-50",
  };

  const sizeStyles = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-2 text-base",
    large: "px-12 py-3 text-[15px]",
  };

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};
