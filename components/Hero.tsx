import Image from "next/image";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  return (
    <section id="top" className="pb-12 pt-10">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 shadow-card">
          <Image
            src="/banner.png"
            alt="Banner background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f38]/85 via-[#0f1f38]/40 to-transparent" />
          <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-12">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Lewis Whitehill
            </h1>
            <p className="mt-3 max-w-2xl text-base text-slate-100 sm:text-lg">
              Backend-leaning software engineer building AI-powered tools and infrastructure.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow-soft hover:bg-white"
              >
                View projects
              </a>
              <a
                href="/resume.pdf"
                className="rounded-full border border-white/30 bg-slate-900/60 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-900/80"
                download
              >
                Download resume
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-[1.4fr_0.6fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200/80">
              Backend • AI • Infra
            </p>
            <p className="mt-3 text-sm text-slate-200 sm:text-base">
              I like turning messy real-world workflows into reliable systems with solid
              backends, LLMs, and good developer ergonomics.
            </p>
          </div>
          <div className="md:justify-self-end">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
