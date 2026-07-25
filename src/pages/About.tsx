import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Tag } from "@/components/Tag";
import { education, extracurricular, profile } from "@/data/profile";
import { skillGroups } from "@/data/skills";
import headshot from "@/assets/headshot.jpg";

export function About() {
  return (
    <>
      <Section className="pt-16 pb-20 sm:pt-24">
        <div className="grid gap-12 sm:grid-cols-[1fr_auto] sm:items-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-sm text-accent">About</p>
            <h1 className="mt-4 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              Data engineer by training, AI engineer by where the work kept pulling me.
            </h1>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
              <p>
                I started in data engineering: ETL pipelines, Airflow DAGs, warehouses that
                needed to survive 50 million records a month without anyone babysitting them.
                That's still the part of my brain that shows up first when I look at a new
                system. Does this hold up when the input is messy? What happens when the
                upstream source goes down at 3am?
              </p>
              <p>
                Then I moved into forecasting research and, eventually, into building the
                agents and retrieval systems that AI teams actually ship. What hasn't
                changed is the instinct from the data engineering side: an agent that
                hallucinates a number is a pipeline that produced bad data, and I treat it
                the same way, with schema enforcement, evaluation sets, and a habit of
                checking what the system does when something goes wrong instead of just
                when it goes right.
              </p>
              <p>
                Outside of client and coursework, I build things I'd actually use. JobFlow AI
                started because I was tired of manually screening job postings, and now it
                runs my own job search. ClutchTimeAI exists because generic interview
                question banks don't know what's actually on my resume.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="justify-self-center sm:justify-self-end"
          >
            <img
              src={headshot}
              alt={profile.name}
              className="h-40 w-40 rounded-2xl border border-border object-cover sm:h-48 sm:w-48"
            />
          </motion.div>
        </div>
      </Section>

      <Section className="pb-20">
        <Reveal>
          <h2 className="text-xl font-medium text-ink">Education</h2>
        </Reveal>
        <div className="mt-6 space-y-6">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.06}>
              <div className="flex flex-col gap-1 border-b border-border pb-6 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <p className="font-medium text-ink">{e.degree}</p>
                  <p className="mt-0.5 text-sm text-ink-soft">
                    {e.institution}, {e.location}
                  </p>
                  {"note" in e && e.note && (
                    <p className="mt-0.5 text-sm text-ink-faint">{e.note}</p>
                  )}
                </div>
                <p className="shrink-0 font-mono text-xs text-ink-faint">{e.period}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pb-20">
        <Reveal>
          <h2 className="text-xl font-medium text-ink">Skills</h2>
        </Reveal>
        <div className="mt-6 space-y-6">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.05}>
              <p className="mb-2.5 text-sm font-medium text-ink-soft">{group.label}</p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pb-28">
        <Reveal className="rounded-2xl border border-border bg-surface p-8">
          <p className="font-mono text-xs text-accent">{extracurricular.period}</p>
          <h3 className="mt-2 text-lg font-medium text-ink">{extracurricular.role}</h3>
          <p className="text-sm text-ink-faint">{extracurricular.location}</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{extracurricular.text}</p>
        </Reveal>
      </Section>
    </>
  );
}
