import * as React from "react";
import { classNames } from "./utils";

type TagProps = React.HTMLAttributes<HTMLSpanElement>;

export function Tag({ className, ...props }: TagProps) {
  return (
    <span
      className={classNames(
        "inline-flex items-center rounded-full border border-slate-400/40 bg-slate-900/40 px-3 py-1 text-xs font-medium text-slate-200",
        className
      )}
      {...props}
    />
  );
}
