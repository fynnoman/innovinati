"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function AgentureIntro() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section id="agentur" ref={ref} className="relative py-40">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-start">
          <div className="md:sticky md:top-32">
            <span className="eyebrow">01 · Agentur</span>
            <p className="mt-4 font-mono text-sm text-white/50">
              Ein kreativer Mix aus Informatik, Marketing und Design.
            </p>
          </div>
          <motion.div style={{ y }}>
            <h2 className="display-tight text-balance text-[clamp(2.4rem,5.5vw,5.6rem)] font-light text-white">
              Wir helfen{" "}
              <span className="italic text-white/70">mittelständischen</span>{" "}
              Unternehmen und Startups dabei, im digitalen Zeitalter{" "}
              <span className="relative">
                erfolgreich
                <svg
                  className="absolute -bottom-3 left-0 w-full"
                  height="14"
                  viewBox="0 0 300 14"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2 8 C 80 2, 160 12, 298 6"
                    stroke="url(#g)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0" stopColor="#f5c26b" />
                      <stop offset="1" stopColor="#8ec5ff" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{" "}
              zu sein.
            </h2>
            <div className="mt-12 flex flex-wrap gap-8 text-sm text-white/60">
              <div className="max-w-xs">
                <div className="font-mono text-[11px] tracking-[0.2em] text-white/40">01</div>
                <div className="mt-2 text-white/80">Cloud Natives</div>
                <p className="mt-2 leading-relaxed">
                  AWS, IONOS, Vercel. Wir denken Systeme skalierbar, sicher und wartbar.
                </p>
              </div>
              <div className="max-w-xs">
                <div className="font-mono text-[11px] tracking-[0.2em] text-white/40">02</div>
                <div className="mt-2 text-white/80">Design Freaks</div>
                <p className="mt-2 leading-relaxed">
                  Interfaces, die sich wie Software anfühlen — nicht wie ein Poster.
                </p>
              </div>
              <div className="max-w-xs">
                <div className="font-mono text-[11px] tracking-[0.2em] text-white/40">03</div>
                <div className="mt-2 text-white/80">Softwarenerds</div>
                <p className="mt-2 leading-relaxed">
                  Vom Rendering-Pipeline-Detail bis zum CI-Setup — wir kümmern uns.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
