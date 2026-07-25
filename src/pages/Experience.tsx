import { Trophy } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { experience } from "@/data/experience";
import { achievements } from "@/data/achievements";

function ExperienceCard({
  entry,
  index,
}: {
  entry: (typeof experience)[number];
  index: number;
}) {
  return (
    <Reveal delay={index * 0.08} className="border-b border-border py-10 first:pt-0 last:border-b-0">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="text-xl font-medium text-ink">{entry.company}</h3>
          <p className="mt-0.5 text-sm text-ink-soft">{entry.title}</p>
        </div>
        <div className="shrink-0 text-left sm:text-right">
          <p className="font-mono text-xs text-ink-faint">{entry.period}</p>
          <p className="text-xs text-ink-faint">{entry.location}</p>
        </div>
      </div>

      <ul className="mt-5 space-y-3">
        {entry.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {bullet}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export function Experience() {
  return (
    <Section className="pt-16 pb-28 sm:pt-24">
      <Reveal>
        <p className="font-mono text-sm text-accent">Experience</p>
        <h1 className="mt-4 max-w-2xl text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          Two years, three companies, one thread: making AI systems boring enough to trust.
        </h1>
      </Reveal>

      <div className="mt-6">
        {experience.map((entry, i) => (
          <ExperienceCard key={entry.id} entry={entry} index={i} />
        ))}
      </div>

      <div className="mt-16">
        <Reveal>
          <h2 className="text-xl font-medium text-ink">Achievements</h2>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {achievements.map((a, i) => (
            <Reveal key={a.id} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6">
                <div className="flex items-center gap-2 text-accent">
                  <Trophy size={16} />
                  <span className="font-mono text-xs">{a.date}</span>
                </div>
                <h3 className="mt-3 font-medium text-ink">{a.title}</h3>
                <p className="mt-0.5 text-xs text-ink-faint">{a.location}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
