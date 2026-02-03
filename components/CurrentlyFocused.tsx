import { SectionHeading } from "./ui/SectionHeading";
import { Tag } from "./ui/Tag";

const focusAreas = [
  "AI tooling & evaluation",
  "Backend-heavy web apps",
  "Open-source contributions",
  "Infra that doesn't get in the way"
];

export function CurrentlyFocused() {
  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading title="Currently focused on" />
        <div className="flex flex-wrap gap-3">
          {focusAreas.map((item) => (
            <Tag
              key={item}
              className="border border-accent/20 bg-accent/10 text-accent"
            >
              {item}
            </Tag>
          ))}
        </div>
      </div>
    </section>
  );
}
