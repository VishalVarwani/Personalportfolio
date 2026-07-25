import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { StatCounter } from "@/components/StatCounter";
import { HeroArt } from "@/components/HeroArt";
import { ExperiencePreview } from "@/components/ExperiencePreview";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

const homeProjects = ["jobflow-ai", "jobmate", "invoice-to-pay", "clutchtimeai"];
const featured = homeProjects
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

const stats = [
  { value: "1,000", label: "JobMate users" },
  { value: "88%", label: "RAG accuracy at e.Ray" },
  { value: "2", label: "hackathon podiums" },
  { value: "9", label: "shipped AI projects" },
];

export function Home() {
  return (
    <>
      <Section className="pt-16 pb-16 sm:pt-24">
        <div className="grid items-center gap-10 sm:grid-cols-[1.1fr_0.9fr] sm:gap-8">
          <div>
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
              className="mt-4 text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl"
            >
              {profile.tagline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 max-w-md text-base leading-relaxed text-ink-soft"
            >
              AI engineer working across RAG, LangGraph agents, and the infrastructure that
              keeps them running in production. Based in Germany.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/experience"
                className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
              >
                See my experience
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:border-accent hover:text-accent"
              >
                View projects
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto w-full max-w-[340px] sm:max-w-none"
          >
            <HeroArt />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <StatCounter key={s.label} value={s.value} label={s.label} />
          ))}
        </motion.div>
      </Section>

      <Section className="pb-28">
        <Reveal>
          <p className="font-mono text-sm text-accent">Experience</p>
          <h2 className="mt-3 text-2xl font-medium text-ink">
            Three companies, two years, one thread.
          </h2>
        </Reveal>
        <div className="mt-10">
          <ExperiencePreview />
        </div>
      </Section>

      <Section className="pb-28">
        <Reveal className="mb-8 flex items-end justify-between">
          <div>
            <p className="font-mono text-sm text-accent">Work</p>
            <h2 className="mt-3 text-2xl font-medium text-ink">Selected projects</h2>
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
    </>
  );
}
