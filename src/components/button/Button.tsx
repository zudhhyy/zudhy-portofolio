import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant: "fill" | "text";
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = "fill",
  type = "button",
  className,
  disabled,
  isLoading,
}) => {
  const variantStyles = {
    fill: "bg-primary text-white",
    text: "underline",
  };

  const styles = `cursor-pointer hover:opacity-50 ${variantStyles[variant]}`;

  return (
    <button
      type={type}
      className={`${styles} ${className ? className : ""}`}
      disabled={disabled ?? isLoading}
    >
      {children}
    </button>
  );
};

export default Button;
