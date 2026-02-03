import { Card } from "./ui/Card";
import { SectionHeading } from "./ui/SectionHeading";
import { Tag } from "./ui/Tag";
import { buttonClasses } from "./ui/Button";

export type Project = {
  title: string;
  description: string;
  stack: string[];
  codeUrl: string;
  demoUrl: string;
};

const projects: Project[] = [
  {
    title: "SignalTrace",
    description:
      "Observability dashboard for AI microservices with latency profiling and real-time alerts.",
    stack: ["Next.js", "FastAPI", "Postgres", "Prometheus"],
    codeUrl: "https://github.com/lewiswhitehill/signaltrace",
    demoUrl: "https://signaltrace-demo.vercel.app"
  },
  {
    title: "AgentOps Kit",
    description:
      "Toolkit for building robust agent workflows, including memory storage and tool orchestration.",
    stack: ["TypeScript", "LangChain", "Redis", "Docker"],
    codeUrl: "https://github.com/lewiswhitehill/agentops-kit",
    demoUrl: "https://agentops-kit.vercel.app"
  },
  {
    title: "InfraPulse",
    description:
      "Backend-heavy system that streams metrics from edge devices into a unified dashboard.",
    stack: ["Go", "Kafka", "ClickHouse", "Grafana"],
    codeUrl: "https://github.com/lewiswhitehill/infrapulse",
    demoUrl: "https://infrapulse.io"
  },
  {
    title: "Recall",
    description:
      "AI-assisted knowledge base with semantic search and audit-ready provenance tracking.",
    stack: ["Next.js", "Prisma", "Postgres", "OpenAI"],
    codeUrl: "https://github.com/lewiswhitehill/recall",
    demoUrl: "https://recall-ai.vercel.app"
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
                  {project.stack.map((tech) => (
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
