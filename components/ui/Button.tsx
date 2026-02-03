import * as React from "react";
import { classNames } from "./utils";

type ButtonVariant = "primary" | "ghost" | "outline";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const baseClasses =
  "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-base";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-accent text-white shadow-soft hover:bg-accent/90",
  ghost: "text-ink hover:text-accent hover:bg-accent/10",
  outline:
    "border border-ink/10 text-ink hover:border-accent/30 hover:text-accent hover:bg-accent/10"
};

export function buttonClasses(variant: ButtonVariant = "primary") {
  return classNames(baseClasses, variantClasses[variant]);
}

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(buttonClasses(variant), className)}
      {...props}
    />
  );
}
