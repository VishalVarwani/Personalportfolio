import { motion, useReducedMotion } from "framer-motion";

interface Node {
  id: string;
  x: number;
  y: number;
  r: number;
  accent?: boolean;
}

const nodes: Node[] = [
  { id: "a", x: 40, y: 80 },
  { id: "b", x: 40, y: 220 },
  { id: "c", x: 40, y: 340 },
  { id: "d", x: 190, y: 150 },
  { id: "e", x: 190, y: 290 },
  { id: "f", x: 330, y: 100, accent: true, r: 8 },
  { id: "g", x: 330, y: 230, accent: true, r: 8 },
  { id: "h", x: 370, y: 340 },
].map((n) => ({ r: 5, ...n }));

const edges: [string, string][] = [
  ["a", "d"],
  ["b", "d"],
  ["b", "e"],
  ["c", "e"],
  ["d", "f"],
  ["d", "g"],
  ["e", "g"],
  ["f", "h"],
  ["g", "h"],
];

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

export function HeroArt() {
  const reduceMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 410 420"
      className="h-full w-full"
      role="img"
      aria-label="Abstract diagram of connected nodes, representing an agent pipeline"
    >
      {edges.map(([from, to], i) => {
        const a = byId[from];
        const b = byId[to];
        return (
          <motion.line
            key={`${from}-${to}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="var(--color-border)"
            strokeWidth={1.5}
            strokeDasharray="4 5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              reduceMotion
                ? { pathLength: 1, opacity: 1 }
                : { pathLength: 1, opacity: 1, strokeDashoffset: [0, -18] }
            }
            transition={{
              pathLength: { duration: 1, delay: i * 0.08, ease: "easeOut" },
              opacity: { duration: 0.6, delay: i * 0.08 },
              strokeDashoffset: {
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: 1 + i * 0.08,
              },
            }}
          />
        );
      })}

      {nodes.map((n, i) => (
        <g key={n.id}>
          {n.accent && !reduceMotion && (
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth={1}
              initial={{ opacity: 0.5, scale: 1 }}
              animate={{ opacity: [0.5, 0, 0.5], scale: [1, 2.4, 1] }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeOut",
                delay: i * 0.3,
              }}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            />
          )}
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={n.accent ? "var(--color-accent)" : "var(--color-surface)"}
            stroke={n.accent ? "var(--color-accent)" : "var(--color-ink-faint)"}
            strokeWidth={1.5}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
          />
        </g>
      ))}
    </svg>
  );
}
