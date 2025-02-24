import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "default" | "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const DEFAULT_BUTTON_VARIANT: ButtonVariant = "primary";

export default function Button({
  children,
  variant = DEFAULT_BUTTON_VARIANT,
  ...props
}: ButtonProps) {
  return (
    <button
      // Using CVA (or similar) may be a good idea to compose classes and generate component variants,
      // but it's not necessary for now. 🐸
      className={`${styles.button} ${styles[`button--${variant}`]}`}
      {...props}
    >
      {children}
    </button>
  );
}
