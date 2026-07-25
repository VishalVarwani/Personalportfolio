import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

interface Item {
  label: string;
  sub?: string;
  to: string;
}

const pages: Item[] = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/work" },
  { label: "Experience", to: "/experience" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function CommandPalette({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const items: Item[] = useMemo(
    () => [
      ...pages,
      ...projects.map((p) => ({ label: p.name, sub: "Project", to: `/work/${p.slug}` })),
    ],
    [],
  );

  const filtered = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      (i) => i.label.toLowerCase().includes(q) || i.sub?.toLowerCase().includes(q),
    );
  }, [items, query]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  const go = (to: string) => {
    navigate(to);
    onClose();
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    }
    if (e.key === "Enter" && filtered[active]) {
      go(filtered[active].to);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-ink/20 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed left-1/2 top-24 z-50 w-[min(90vw,480px)] -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
            onKeyDown={handleKey}
          >
            <div className="flex items-center gap-2.5 border-b border-border px-4 py-3.5">
              <Search size={16} className="shrink-0 text-ink-faint" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to a page or project..."
                className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-faint"
              />
              <kbd className="shrink-0 font-mono text-[10px] text-ink-faint">esc</kbd>
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p className="px-3 py-6 text-center text-sm text-ink-faint">No matches</p>
              )}
              {filtered.map((item, i) => (
                <button
                  key={item.to}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onClick={() => go(item.to)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                    i === active ? "bg-paper-subtle text-ink" : "text-ink-soft",
                  )}
                >
                  <span>{item.label}</span>
                  {item.sub && <span className="font-mono text-xs text-ink-faint">{item.sub}</span>}
                </button>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
