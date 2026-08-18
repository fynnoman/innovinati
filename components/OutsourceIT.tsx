"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const items = [
  {
    n: "01",
    t: "Betreuung von Webseiten & Online-Shops",
    d: "Wir übernehmen die kontinuierliche Pflege — von Content bis Core Web Vitals."
  },
  {
    n: "02",
    t: "Domains und Hosting",
    d: "IONOS, Vercel, AWS. Wir kümmern uns um DNS, TLS, Failover und Backups."
  },
  {
    n: "03",
    t: "Traffic Analytics & SEO",
    d: "GA4, Search Console, Attribution — mit klarem Blick auf Wachstum statt Vanity."
  },
  {
    n: "04",
    t: "First-Level-Support",
    d: "Kurze Wege, klare Antworten. Ihr habt eine Frage, wir eine Lösung — meist noch heute."
  }
];

export function OutsourceIT() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -2]);

  return (
    <section ref={ref} className="relative bg-ink-950">
      <div className="mx-auto max-w-[1240px] px-6 pt-32 md:px-10">
        <div className="mb-16 flex flex-col gap-4">
          <span className="eyebrow">02 · Outsource IT</span>
          <h2 className="display-tight text-balance text-[clamp(2.4rem,6vw,6rem)] font-light text-white">
            Fokussiert euch auf das,
            <br />
            <span className="italic text-white/70">was ihr am besten könnt.</span>
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-white/60">
            Wir planen, bauen, modernisieren und warten eure betriebliche IT-Landschaft —
            damit ihr eure Energie ins Kerngeschäft steckt.
          </p>
        </div>
      </div>

      <div className="grid gap-0 md:grid-cols-[1.1fr_1fr]">
        {/* Sticky image column */}
        <div className="relative h-[80vh] md:h-auto">
          <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
            <motion.div style={{ scale, y, rotate }} className="relative h-[70vh] w-[86%] overflow-hidden rounded-[36px]">
              <Image
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80"
                alt="Server rack close-up"
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(5,6,10,0.4) 0%, transparent 40%, rgba(5,6,10,0.6) 100%)"
                }}
              />
              {/* floating glass badge on image */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="glass glass-strong flex items-center gap-3 rounded-full px-4 py-2 text-[12px] text-white/80">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-glow-amber" />
                  <span className="font-mono tracking-[0.2em]">MONITORING · LIVE</span>
                </div>
                <div className="glass rounded-full px-4 py-2 font-mono text-[11px] tracking-[0.2em] text-white/70">
                  99.98% UPTIME
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll list */}
        <div className="relative px-6 pb-24 md:pl-4 md:pr-10">
          <ul className="space-y-6">
            {items.map((it, i) => (
              <motion.li
                key={it.n}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9, delay: i * 0.05, ease: [0.2, 0.7, 0.15, 1] }}
                className="glass rounded-3xl p-7"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[11px] tracking-[0.24em] text-glow-amber">
                    {it.n}
                  </span>
                  <h3 className="font-display text-[26px] font-light text-white">{it.t}</h3>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-white/65">{it.d}</p>
              </motion.li>
            ))}
          </ul>
          <div className="mt-10">
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm text-white/85 backdrop-blur-xl transition hover:bg-white/[0.08]"
            >
              Betreuung anfragen
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white text-ink-950 transition group-hover:rotate-45">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
