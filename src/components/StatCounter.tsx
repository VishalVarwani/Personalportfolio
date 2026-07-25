import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatCounterProps {
  value: string;
  label: string;
}

export function StatCounter({ value, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  const numericMatch = value.match(/[\d,.]+/);
  const numeric = numericMatch ? parseFloat(numericMatch[0].replace(/,/g, "")) : null;
  const prefix = numericMatch ? value.slice(0, numericMatch.index) : "";
  const suffix = numericMatch
    ? value.slice((numericMatch.index ?? 0) + numericMatch[0].length)
    : "";

  useEffect(() => {
    if (!inView || numeric === null) {
      if (inView) setDisplay(value);
      return;
    }
    const duration = 900;
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(numeric * eased);
      setDisplay(current.toLocaleString("en-US"));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div ref={ref}>
      <div className="font-mono text-3xl font-medium text-ink sm:text-4xl">
        {prefix}
        {display}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-ink-faint">{label}</div>
    </div>
  );
}
