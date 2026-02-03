import Image from "next/image";
import { Card } from "./ui/Card";
import { SectionHeading } from "./ui/SectionHeading";
import { Tag } from "./ui/Tag";
import { buttonClasses } from "./ui/Button";

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  codeUrl: string;
  demoUrl?: string;
  imageUrl?: string;
};

const projects: Project[] = [
  {
    title: "Calendo",
    description:
      "Natural-language calendar assistant that turns free-form text into structured Google Calendar events.",
    techStack: [
      "Next.js",
      "TypeScript",
      "NextAuth",
      "Google Calendar API",
      "OpenAI",
      "Vercel"
    ],
    codeUrl: "https://github.com/lewisjwhitehill/calendo",
    demoUrl: "https://calendo-demo.example.com",
    imageUrl: "/project_banners/calendo_banner.png"
  },
  {
    title: "AI Photobooth",
    description:
      "Backend for an AI-powered photobooth that applies style transformations to uploaded images and stores them on S3.",
    techStack: [
      "Node.js",
      "Express",
      "TypeScript",
      "AWS S3",
      "Prisma",
      "PostgreSQL",
      "Docker"
    ],
    codeUrl: "https://github.com/lewisjwhitehill/photobooth",
    demoUrl: "https://photobooth-demo.example.com",
    imageUrl: "/project_banners/photobooth_banner.png"
  },
  {
    title: "Weather Travel Assistant",
    description:
      "Trip-planning helper that combines forecast data with long-term climatology to explain what the weather will actually feel like for specific dates and locations.",
    techStack: ["Python", "FastAPI", "LangChain", "Open-Meteo API", "Docker"],
    codeUrl: "https://github.com/lewisjwhitehill/whatsitlike",
    demoUrl: "https://weather-travel-demo.example.com",
    imageUrl: "/project_banners/weather_banner.png"
  },
  {
    title: "Recipe Manager",
    description:
      "A full‑stack py4web application that lets users create, browse, and share recipes with an auto‑calorie engine, secure author‑only editing, and public JSON search APIs.",
    techStack: [
      "Python",
      "py4web",
      "PyDAL",
      "SQL",
      "Vue.js",
      "HTML"
    ],
    codeUrl: "https://github.com/ucsc2025-cse183/project-16",
    imageUrl: "/project_banners/recipe_banner.png"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <SectionHeading
          title="Projects"
          subtitle="A few recent builds focused on AI infrastructure and backend-heavy systems."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="flex h-full flex-col gap-5">
              <div className="relative h-36 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={`${project.title} banner`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_rgba(255,255,255,0)_70%)]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f38]/80 via-transparent to-transparent" />
                <div className="font-heading absolute bottom-4 left-4 text-lg font-semibold text-white">
                  {project.title}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-base leading-relaxed text-slate-200">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.codeUrl}
                  className={buttonClasses("ghost")}
                >
                  View code
                </a>
                <a
                  href={project.demoUrl}
                  className={buttonClasses("outline")}
                >
                  Live demo
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
