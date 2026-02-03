import * as React from "react";
import { classNames } from "./utils";

type ButtonVariant = "primary" | "ghost" | "outline";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#203354]";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-slate-100 text-slate-900 shadow-soft hover:bg-slate-200",
  ghost: "text-slate-100 hover:bg-white/10",
  outline:
    "border border-slate-400/50 text-slate-100 hover:border-slate-200 hover:bg-white/10"
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
