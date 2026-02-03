import { Card } from "./ui/Card";
import { SectionHeading } from "./ui/SectionHeading";
import { Tag } from "./ui/Tag";
import { buttonClasses } from "./ui/Button";

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  codeUrl: string;
  demoUrl: string;
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
    codeUrl: "https://github.com/lewiswhitehill/calendo",
    demoUrl: "https://calendo-demo.example.com"
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
    codeUrl: "https://github.com/lewiswhitehill/ai-photobooth",
    demoUrl: "https://photobooth-demo.example.com"
  },
  {
    title: "Weather Travel Assistant",
    description:
      "Trip-planning helper that combines forecast data with long-term climatology to explain what the weather will actually feel like for specific dates and locations.",
    techStack: ["Python", "FastAPI", "LangChain", "Open-Meteo API", "Docker"],
    codeUrl: "https://github.com/lewiswhitehill/weather-travel-assistant",
    demoUrl: "https://weather-travel-demo.example.com"
  },
  {
    title: "Spot2AppVL",
    description:
      "Playlist converter that lets users move playlists between Spotify, Apple Music, and YouTube.",
    techStack: [
      "React",
      "Vite",
      "TypeScript",
      "Vercel Functions",
      "Spotify API",
      "YouTube API"
    ],
    codeUrl: "https://github.com/lewiswhitehill/spot2appvl",
    demoUrl: "https://spot2appvl-demo.example.com"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          title="Projects"
          subtitle="A few recent builds focused on AI infrastructure and backend-heavy systems."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="flex h-full flex-col">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-ink">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted">
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
