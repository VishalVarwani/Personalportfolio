import { useState } from "react";
import { Check, Copy, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/profile";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <Section className="pt-16 pb-28 sm:pt-24">
      <Reveal>
        <p className="font-mono text-sm text-accent">Contact</p>
        <h1 className="mt-4 max-w-xl text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          Open to AI engineering roles across Germany, remote-friendly.
        </h1>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft">
          The fastest way to reach me is email. I'm generally quick to reply and happy to
          talk about a role, a project, or anything in between.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
        >
          <Mail size={16} />
          {profile.email}
          {copied ? <Check size={14} /> : <Copy size={14} className="opacity-60" />}
        </button>
      </Reveal>

      <Reveal delay={0.16} className="mt-4 flex flex-wrap gap-3">
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm text-ink-soft transition-colors hover:border-accent hover:text-accent"
        >
          <LinkedinIcon size={16} />
          LinkedIn
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm text-ink-soft transition-colors hover:border-accent hover:text-accent"
        >
          <GithubIcon size={16} />
          GitHub
        </a>
        <a
          href={profile.resumeUrl}
          download
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm text-ink-soft transition-colors hover:border-accent hover:text-accent"
        >
          <Download size={16} />
          Resume
        </a>
      </Reveal>

      <Reveal delay={0.22} className="mt-16 grid gap-6 border-t border-border pt-10 sm:grid-cols-2">
        <div>
          <p className="text-sm font-medium text-ink-faint">Location</p>
          <p className="mt-1 text-ink-soft">{profile.location}</p>
          <p className="mt-0.5 text-sm text-ink-faint">{profile.relocation}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-ink-faint">Currently</p>
          <p className="mt-1 text-ink-soft">{profile.currently}</p>
        </div>
      </Reveal>
    </Section>
  );
}
