import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal, RevealGroup, revealItem } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { StatCounter } from "@/components/StatCounter";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

const homeProjects = ["jobflow-ai", "jobmate", "invoice-to-pay", "clutchtimeai"];
const featured = homeProjects
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

const stats = [
  { value: "1,000", label: "JobMate users, zero paid marketing" },
  { value: "88%", label: "RAG query accuracy at e.Ray" },
  { value: "2", label: "hackathon podium finishes" },
  { value: "9", label: "shipped AI projects" },
];

export function Home() {
  return (
    <>
      <Section className="pt-20 pb-24 sm:pt-28 sm:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-accent"
        >
          Hi, I'm {profile.name.split(" ")[0]}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl"
        >
          {profile.tagline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg"
        >
          I'm an AI engineer working across RAG, LangGraph agents, and the unglamorous
          infrastructure that keeps them running in production.
          <br className="hidden sm:block" /> Currently: {profile.currently}.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Link
            to="/work"
            className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
          >
            See the work
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </Link>
        </motion.div>
      </Section>

      <Section className="pb-24">
        <RevealGroup className="grid grid-cols-2 gap-8 border-y border-border py-10 sm:grid-cols-4">
          {stats.map((s) => (
            <motion.div key={s.label} variants={revealItem}>
              <StatCounter value={s.value} label={s.label} />
            </motion.div>
          ))}
        </RevealGroup>
      </Section>

      <Section className="pb-28">
        <Reveal className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-medium text-ink">Selected work</h2>
            <p className="mt-1.5 text-sm text-ink-faint">
              A few of the systems I've built, end to end.
            </p>
          </div>
          <Link
            to="/work"
            className="hidden items-center gap-1 text-sm text-ink-soft transition-colors hover:text-accent sm:inline-flex"
          >
            View all
            <ArrowUpRight size={14} />
          </Link>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
        <Reveal className="mt-6 sm:hidden">
          <Link
            to="/work"
            className="inline-flex items-center gap-1 text-sm text-ink-soft transition-colors hover:text-accent"
          >
            View all work
            <ArrowUpRight size={14} />
          </Link>
        </Reveal>
      </Section>

      <Section className="pb-28">
        <Reveal className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
          <p className="text-lg leading-relaxed text-ink-soft sm:text-xl">
            Most of what I build sits between a model and the parts of a system that have to
            not break: retrieval that's actually grounded, agents that stop and ask before doing
            something expensive, pipelines that survive a bad day of upstream data.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
            >
              More about me
              <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
