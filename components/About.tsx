import { SectionHeading } from "./ui/SectionHeading";

const timeline = [
  {
    title: "2019–2025",
    detail: "B.S. Computer Science, UC Santa Cruz"
  },
  {
    title: "2024–now",
    detail: "Building AI & backend-focused side projects"
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
          <p className="text-sm text-muted sm:text-base">
            I specialize in designing backend systems that are pragmatic, reliable, and
            ready for production. Lately I have been deep in AI tooling and infrastructure,
            building workflows that blend LLMs with robust data services. I am based in
            Berkeley, CA and love turning messy operational problems into clean, observable
            systems.
          </p>
          <div className="space-y-4 rounded-xl border border-ink/10 bg-surface p-6 shadow-card">
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
