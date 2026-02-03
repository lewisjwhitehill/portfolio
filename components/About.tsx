import Image from "next/image";
import { SectionHeading } from "./ui/SectionHeading";

const timeline = [
  {
    title: "2021-2025",
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
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <SectionHeading
          title="About"
        />
        <div className="grid gap-10 md:grid-cols-2 md:items-stretch">
          <div className="text-sm text-slate-300 sm:text-base">
            <div className="relative float-right mb-4 ml-6 hidden h-32 w-32 overflow-hidden rounded-full border border-white/20 bg-slate-900/40 md:flex">
              <Image
                src="/pfp.jpg"
                alt="Lewis Whitehill portrait"
                fill
                sizes="128px"
                className="object-cover"
              />
            </div>
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
          <div className="flex h-full flex-col justify-between space-y-3 rounded-2xl border border-white/10 bg-[#223B5E] p-6 shadow-card">
            {timeline.map((item) => (
              <div key={item.title}>
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-sm text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
