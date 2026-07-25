import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Download } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Section } from "@/components/Section";
import { Reveal, RevealGroup, revealItem } from "@/components/Reveal";
import { Tag } from "@/components/Tag";
import { getProject, projects } from "@/data/projects";
import { motion } from "framer-motion";

export function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug ?? "");

  if (!project) return <Navigate to="/work" replace />;

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <Section className="pt-16 pb-28 sm:pt-24">
      <Reveal>
        <Link
          to="/work"
          className="inline-flex items-center gap-1.5 text-sm text-ink-faint transition-colors hover:text-accent"
        >
          <ArrowLeft size={14} />
          All work
        </Link>
      </Reveal>

      <Reveal delay={0.06} className="mt-6">
        <p className="font-mono text-sm text-accent">{project.period}</p>
        <h1 className="mt-3 max-w-2xl text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          {project.name}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
          {project.tagline}
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-6 flex flex-wrap items-center gap-3">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm text-ink-soft transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon size={15} />
            Source
          </a>
        )}
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm text-ink-soft transition-colors hover:border-accent hover:text-accent"
          >
            <ArrowUpRight size={15} />
            Live
          </a>
        )}
        {project.links.download && (
          <a
            href={project.links.download}
            className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
          >
            <Download size={15} />
            Download for Windows
          </a>
        )}
      </Reveal>

      {project.metric && (
        <Reveal delay={0.14} className="mt-10 border-y border-border py-6">
          <div className="font-mono text-3xl font-medium text-ink">{project.metric.value}</div>
          <div className="mt-1 text-sm text-ink-faint">{project.metric.label}</div>
        </Reveal>
      )}

      <div className="mt-10 grid gap-10 sm:grid-cols-[1fr_220px]">
        <div>
          <Reveal>
            <h2 className="text-lg font-medium text-ink">Overview</h2>
          </Reveal>
          <div className="mt-4 space-y-3">
            {project.summary.map((s, i) => (
              <Reveal key={i} delay={0.04 * i}>
                <p className="leading-relaxed text-ink-soft">{s}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-10">
            <h2 className="text-lg font-medium text-ink">How it works</h2>
          </Reveal>
          <RevealGroup className="mt-4 space-y-3">
            {project.highlights.map((h, i) => (
              <motion.div
                key={i}
                variants={revealItem}
                className="flex gap-3 rounded-xl border border-border bg-surface p-4"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <p className="text-sm leading-relaxed text-ink-soft">{h}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>

        <div>
          <Reveal delay={0.1}>
            <h2 className="text-sm font-medium text-ink-faint">Stack</h2>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.1} className="mt-20 border-t border-border pt-8">
        <p className="text-xs uppercase tracking-wide text-ink-faint">Next</p>
        <Link
          to={`/work/${next.slug}`}
          className="group mt-2 inline-flex items-center gap-2 text-xl font-medium text-ink transition-colors hover:text-accent"
        >
          {next.name}
          <ArrowUpRight
            size={18}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </Reveal>
    </Section>
  );
}
