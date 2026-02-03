import * as React from "react";
import { classNames } from "./utils";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={classNames(
        "rounded-xl border border-ink/10 bg-surface p-6 shadow-card",
        className
      )}
      {...props}
    />
  );
}
