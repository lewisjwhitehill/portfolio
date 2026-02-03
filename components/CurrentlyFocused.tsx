import { SectionHeading } from "./ui/SectionHeading";

const focusAreas = [
  "AI tooling & evaluation",
  "Backend-heavy web apps",
  "Open-source contributions",
  "Expanding my skillset everyday",
];

export function CurrentlyFocused() {
  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <SectionHeading title="Currently focused on" />
        <p className="text-sm text-slate-300 sm:text-base">
          {focusAreas.join(" · ")}
        </p>
      </div>
    </section>
  );
}
