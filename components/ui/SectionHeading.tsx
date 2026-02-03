import * as React from "react";
import { classNames } from "./utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={classNames("mb-8", className)}>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 text-sm text-slate-300 sm:text-base">{subtitle}</p>
      ) : null}
    </div>
  );
}
