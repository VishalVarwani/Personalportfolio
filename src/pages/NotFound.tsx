import { Link } from "react-router-dom";
import { Section } from "@/components/Section";

export function NotFound() {
  return (
    <Section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-2xl font-medium text-ink">This page doesn't exist.</h1>
      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm text-ink-soft transition-colors hover:border-accent hover:text-accent"
      >
        Back home
      </Link>
    </Section>
  );
}
