import { buttonClasses } from "./ui/Button";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  return (
    <section id="top" className="pb-14 pt-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <div className="pointer-events-none absolute right-0 top-0 -z-10 hidden h-80 w-80 md:block">
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_top_right,_rgba(76,175,80,0.22),_rgba(76,175,80,0.02)_70%)] blur-3xl" />
            <div className="absolute right-6 top-10 h-48 w-72 rotate-[-12deg] bg-gradient-to-bl from-emerald-200/30 via-emerald-200/10 to-transparent blur-2xl" />
          </div>
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Backend • AI • Infra
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Lewis Whitehill
            </h1>
            <p className="mt-4 text-lg font-medium text-ink">
              Backend-leaning software engineer building AI-powered tools and infrastructure.
            </p>
            <p className="mt-3 text-base text-muted sm:text-lg">
              I like turning messy real-world workflows into reliable systems with solid
              backends, LLMs, and good developer ergonomics.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className={buttonClasses("primary")}>
                View projects
              </a>
              <a
                href="/resume.pdf"
                className={buttonClasses("outline")}
                download
              >
                Download resume
              </a>
            </div>
            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>
          <div className="relative hidden md:flex items-center justify-center">
            <div className="w-full max-w-xs rounded-2xl border border-ink/10 bg-surface p-6 shadow-card">
              <div className="flex aspect-square items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-3xl font-semibold text-accent">
                LW
              </div>
              <p className="mt-4 text-sm text-muted">
                Photo placeholder — replace with a headshot when ready.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 h-px w-full max-w-2xl bg-neutral-300/60" />
      </div>
    </section>
  );
}
