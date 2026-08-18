"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.35]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  return (
    <section id="kontakt" ref={ref} className="relative py-32">
      <div className="relative mx-6 overflow-hidden rounded-[40px] md:mx-10">
        <motion.div style={{ scale, y }} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2400&q=80"
            alt="Mountain landscape at dusk"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(5,6,10,0.55) 0%, rgba(5,6,10,0.55) 40%, rgba(5,6,10,0.85) 100%)"
            }}
          />
        </motion.div>

        <div className="relative grid gap-10 p-8 md:min-h-[720px] md:grid-cols-[1.2fr_1fr] md:p-16">
          <div className="flex flex-col justify-between">
            <div>
              <span className="chip"><span className="dot" /> Lasst uns bauen</span>
              <h2 className="display-tight mt-8 text-balance text-[clamp(2.6rem,6vw,6.4rem)] font-light text-white">
                web works
                <br />
                <span className="italic text-white/70">— with us.</span>
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
                Erzählt uns von eurem Projekt. Wir antworten meist innerhalb eines Werktages
                und melden uns ehrlich zurück — auch, wenn wir nicht die Richtigen sind.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-6">
              <a
                href="mailto:hallo@innovinati.de"
                className="group flex items-center gap-3 text-white/80 transition hover:text-white"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[0.05] backdrop-blur-xl">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M3 7l9 6 9-6M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z" />
                  </svg>
                </span>
                <span className="font-mono text-sm tracking-wide">hallo@innovinati.de</span>
              </a>
              <a
                href="tel:+4922100000000"
                className="group flex items-center gap-3 text-white/80 transition hover:text-white"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[0.05] backdrop-blur-xl">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7 12.7 12.7 0 00.7 2.8 2 2 0 01-.4 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4 12.7 12.7 0 002.8.7 2 2 0 011.7 2z" />
                  </svg>
                </span>
                <span className="font-mono text-sm tracking-wide">+49 (0) 221 000 000</span>
              </a>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="glass glass-strong flex flex-col gap-4 rounded-[28px] p-6 md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="font-mono text-[11px] tracking-[0.2em] text-white/50">NAME</span>
                <input
                  type="text"
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-white/30 focus:bg-white/[0.08]"
                  placeholder="Wie heißt du?"
                />
              </label>
              <label className="block">
                <span className="font-mono text-[11px] tracking-[0.2em] text-white/50">FIRMA</span>
                <input
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-white/30 focus:bg-white/[0.08]"
                  placeholder="Optional"
                />
              </label>
            </div>
            <label className="block">
              <span className="font-mono text-[11px] tracking-[0.2em] text-white/50">E-MAIL</span>
              <input
                type="email"
                required
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-white/30 focus:bg-white/[0.08]"
                placeholder="du@firma.de"
              />
            </label>
            <label className="block">
              <span className="font-mono text-[11px] tracking-[0.2em] text-white/50">PROJEKT</span>
              <textarea
                rows={4}
                required
                className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-white/30 focus:bg-white/[0.08]"
                placeholder="Erzähl uns kurz, was du vorhast."
              />
            </label>
            <div className="mt-2 flex items-center justify-between gap-4">
              <span className="font-mono text-[11px] tracking-[0.2em] text-white/40">
                Antwort in ≤ 24 h
              </span>
              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-ink-950 shadow-[0_20px_50px_-20px_rgba(255,255,255,0.5)] transition hover:-translate-y-0.5"
              >
                Anfrage senden
                <span className="grid h-6 w-6 place-items-center rounded-full bg-ink-950 text-white transition group-hover:rotate-45">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
