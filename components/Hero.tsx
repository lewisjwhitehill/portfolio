import { buttonClasses } from "./ui/Button";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  return (
    <section id="top" className="pb-24 pt-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
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
        </div>
        <SocialLinks />
      </div>
    </section>
  );
}
