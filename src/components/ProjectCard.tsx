import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { Tag } from "@/components/Tag";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        to={`/work/${project.slug}`}
        className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_12px_32px_-16px_rgba(0,0,0,0.15)]"
      >
        <div>
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-medium text-ink">{project.name}</h3>
            <ArrowUpRight
              size={18}
              className="mt-1 shrink-0 text-ink-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
            />
          </div>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{project.tagline}</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
          {project.stack.length > 4 && <Tag>+{project.stack.length - 4}</Tag>}
        </div>
      </Link>
    </motion.div>
  );
}
