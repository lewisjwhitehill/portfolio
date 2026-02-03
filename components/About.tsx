import { SectionHeading } from "./ui/SectionHeading";

const timeline = [
  {
    title: "2019-2025",
    detail: "B.S. in Computer Science, UC Santa Cruz"
  },
  {
    title: "2024-now",
    detail:
      "Building backend-heavy apps and AI tooling (Calendo, AI Photobooth, Weather Travel Assistant)"
  },
  {
    title: "Ongoing",
    detail:
      "Exploring open-source contributions and infrastructure that makes AI easier to use"
  }
];

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          title="About"
          subtitle="Backend-leaning engineer with a focus on AI tooling, data pipelines, and infra reliability."
        />
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4 text-sm text-muted sm:text-base">
            <p>
              I'm Lewis Whitehill, a backend-leaning software engineer based in Berkeley,
              CA. I enjoy building systems around AI models, data, and developer tooling -
              especially when they make other people's workflows simpler.
            </p>
            <p>
              Outside of coding, I'm into basketball, hiking around the Bay, and learning
              more about data-driven environmental science.
            </p>
          </div>
          <div className="space-y-3 rounded-xl border border-ink/10 bg-surface p-6 shadow-card">
            {timeline.map((item) => (
              <div key={item.title}>
                <p className="text-sm font-semibold text-ink">{item.title}</p>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
