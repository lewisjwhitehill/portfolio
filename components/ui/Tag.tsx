import * as React from "react";
import { classNames } from "./utils";

type TagProps = React.HTMLAttributes<HTMLSpanElement>;

export function Tag({ className, ...props }: TagProps) {
  return (
    <span
      className={classNames(
        "inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent",
        className
      )}
      {...props}
    />
  );
}
