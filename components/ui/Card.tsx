import * as React from "react";
import { classNames } from "./utils";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={classNames(
        "rounded-2xl border border-white/10 bg-[#223B5E] p-6 shadow-card",
        className
      )}
      {...props}
    />
  );
}
