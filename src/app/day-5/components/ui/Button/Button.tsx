import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`${styles.mainBtn} ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
