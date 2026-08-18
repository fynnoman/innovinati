"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const news = [
  {
    tag: "Case Study",
    date: "August 2026",
    title: "Von der WordPress-Seite zum Next.js-Headless-Setup in 6 Wochen.",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1600&q=80"
  },
  {
    tag: "Insight",
    date: "Juli 2026",
    title: "AI Overviews verändern SEO — was Mittelstand jetzt tun sollte.",
    image:
      "https://images.unsplash.com/photo-1677691824079-fea7bf8b6c76?auto=format&fit=crop&w=1600&q=80"
  },
  {
    tag: "Launch",
    date: "Juni 2026",
    title: "Neuer AWS-Activate-Status: mehr Runway für unsere Startup-Kund:innen.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"
  }
];

export function News() {
  return (
    <section id="news" className="relative py-40">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">03 · Aktuelle News</span>
            <h2 className="display-tight mt-4 text-balance text-[clamp(2.4rem,5.5vw,5rem)] font-light text-white">
              Was gerade bei uns
              <br />
              <span className="italic text-white/70">so abgeht.</span>
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm text-white/80 backdrop-blur-xl transition hover:bg-white/[0.08]"
          >
            Alle Beiträge
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {news.map((n, i) => (
            <motion.article
              key={n.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.2, 0.7, 0.15, 1] }}
              className="group glass overflow-hidden rounded-[28px]"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={n.image}
                  alt={n.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  aria-hidden
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 50%, rgba(5,6,10,0.7) 100%)"
                  }}
                />
                <div className="absolute left-4 top-4 flex gap-2">
                  <span className="chip">{n.tag}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="font-mono text-[11px] tracking-[0.22em] text-white/40">
                  {n.date}
                </div>
                <h3 className="mt-3 font-display text-[22px] font-light leading-snug text-white/90">
                  {n.title}
                </h3>
                <div className="mt-6 flex items-center justify-between">
                  <a
                    href="#"
                    className="text-sm text-white/70 underline-offset-4 transition hover:text-white hover:underline"
                  >
                    Weiterlesen
                  </a>
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-white/70 transition group-hover:border-white/30 group-hover:text-white">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M7 17L17 7M9 7h8v8" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
