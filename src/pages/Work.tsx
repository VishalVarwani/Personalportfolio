import { useMemo, useState } from "react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "Agents", "RAG", "Data engineering", "Full-stack"] as const;

const filterMap: Record<(typeof FILTERS)[number], (slugs: string) => boolean> = {
  All: () => true,
  Agents: (slug) =>
    ["jobflow-ai", "invoice-to-pay", "supply-chain-monitoring", "clutchtimeai"].includes(slug),
  RAG: (slug) => ["knowledge-assistant", "document-intelligence"].includes(slug),
  "Data engineering": (slug) => ["streaming-pipeline"].includes(slug),
  "Full-stack": (slug) => ["jobmate", "ai4finance", "clutchtimeai"].includes(slug),
};

export function Work() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const filtered = useMemo(
    () => projects.filter((p) => filterMap[filter](p.slug)),
    [filter],
  );

  return (
    <Section className="pt-16 pb-28 sm:pt-24">
      <Reveal>
        <p className="font-mono text-sm text-accent">Work</p>
        <h1 className="mt-4 max-w-2xl text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          Nine projects, most of them agents and retrieval systems that had to survive
          real use.
        </h1>
      </Reveal>

      <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-sm transition-colors",
              filter === f
                ? "border-accent bg-accent-soft text-accent"
                : "border-border text-ink-soft hover:border-accent/40 hover:text-ink",
            )}
          >
            {f}
          </button>
        ))}
      </Reveal>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {filtered.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
