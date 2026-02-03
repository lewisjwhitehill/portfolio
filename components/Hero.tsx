import { buttonClasses } from "./ui/Button";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  return (
    <section id="top" className="pb-14 pt-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Backend • AI • Infra
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Lewis Whitehill
          </h1>
          <p className="mt-4 text-lg font-medium text-ink">
            Backend-leaning software engineer focused on AI tooling &amp; infra
          </p>
          <p className="mt-3 text-base text-muted sm:text-lg">
            Building backend-heavy apps and AI tooling for real-world workflows.
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
          <div className="relative hidden md:block">
            <div className="absolute right-6 top-1/2 h-56 w-56 -translate-y-1/2 rounded-[40%] bg-[radial-gradient(circle_at_top,_rgba(76,175,80,0.18),_rgba(76,175,80,0.02)_70%)] blur-2xl" />
            <div className="absolute right-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-3xl border border-accent/15 bg-accent/5 shadow-soft" />
            <div className="relative h-56 w-full" />
          </div>
        </div>
        <div className="mt-10 flex items-center gap-4 text-xs text-muted">
          <span className="h-px flex-1 bg-ink/10" />
          <span className="whitespace-nowrap">Selected work ↓</span>
          <span className="h-px flex-1 bg-ink/10" />
        </div>
      </div>
    </section>
  );
}
