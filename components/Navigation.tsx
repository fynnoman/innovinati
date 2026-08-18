"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "Agentur", href: "#agentur" },
  { label: "Services", href: "#services" },
  { label: "News", href: "#news" },
  { label: "Kontakt", href: "#kontakt" }
];

export function Navigation() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { scrollY } = useScroll();
  const pad = useTransform(scrollY, [0, 200], [22, 12]);
  const width = useTransform(scrollY, [0, 400], ["min(1180px, 92vw)", "min(880px, 92vw)"]);
  const bgOp = useTransform(scrollY, [0, 200], [0.35, 0.75]);

  if (!mounted) return null;

  return (
    <motion.header
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2"
      style={{ width }}
    >
      <motion.nav
        className="glass glass-strong flex items-center justify-between rounded-full"
        style={{ paddingLeft: pad, paddingRight: pad, paddingTop: 10, paddingBottom: 10, opacity: 1 }}
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{ background: `rgba(6,7,15,${bgOp.get()})` }}
        />
        <a href="#home" className="relative flex items-center gap-2 pl-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-glow-amber to-glow-sky shadow-[0_0_24px_rgba(245,194,107,0.5)]">
            <span className="h-2 w-2 rounded-full bg-ink-950" />
          </span>
          <span className="font-mono text-[13px] tracking-[0.22em] text-white/90">INNOVINATI</span>
        </a>
        <ul className="relative hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-[13px] text-white/70 transition hover:bg-white/[0.06] hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#kontakt"
          className="relative inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-[12.5px] font-medium text-ink-950 shadow-[0_10px_30px_-10px_rgba(255,255,255,0.35)] transition hover:bg-white"
        >
          Anfrage senden
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </motion.nav>
    </motion.header>
  );
}
