import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { experience } from "@/data/experience";

export function ExperiencePreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.4"],
  });
  const lineProgress = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <div ref={containerRef} className="relative">
      <div className="absolute left-0 top-2 h-[calc(100%-8px)] w-px bg-border sm:left-1" />
      <motion.div
        className="absolute left-0 top-2 w-px origin-top bg-accent sm:left-1"
        style={{ scaleY: lineProgress, height: "calc(100% - 8px)" }}
      />

      <div className="space-y-10">
        {experience.map((entry, i) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="pl-7 sm:pl-9"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="font-medium text-ink">{entry.company}</h3>
                <p className="text-sm text-ink-faint">{entry.title}</p>
              </div>
              <p className="font-mono text-xs text-ink-faint">{entry.period}</p>
            </div>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
              {entry.highlight}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-8 pl-7 sm:pl-9"
      >
        <Link
          to="/experience"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
        >
          Full experience
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </motion.div>
    </div>
  );
}
