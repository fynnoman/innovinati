"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.35]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const glassBlur = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const glassBg = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgba(6,7,15,0)", "rgba(6,7,15,0.35)"]
  );

  return (
    <section id="home" ref={ref} className="relative h-[180vh]">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background image */}
        <motion.div
          style={{ scale: imageScale, y: imageY }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=2400&q=80"
            alt="Abstract cloud infrastructure"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <motion.div
            style={{ backdropFilter: `blur(${glassBlur.get()}px)`, background: glassBg }}
            className="absolute inset-0"
            aria-hidden
          />
          <div
            className="absolute inset-0"
            aria-hidden
            style={{
              background:
                "radial-gradient(120% 80% at 50% 100%, rgba(5,6,10,0.9) 20%, rgba(5,6,10,0.3) 55%, transparent 80%), radial-gradient(80% 60% at 50% 0%, rgba(5,6,10,0.6), transparent 60%)"
            }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-10 mx-auto flex h-full max-w-[1240px] flex-col justify-end px-6 pb-24 md:px-10"
        >
          <div className="rise mb-8 flex items-center gap-3">
            <span className="chip"><span className="dot" /> IT-Agentur · seit 2019</span>
            <span className="chip hidden md:inline-flex">Köln · Remote-first</span>
          </div>

          <h1 className="display-tight rise text-balance text-[clamp(3.2rem,10vw,10rem)] font-light text-white">
            web works
            <br />
            <span className="italic text-white/80">with</span>{" "}
            <span className="relative inline-block">
              us
              <span className="absolute -right-4 top-2 h-3 w-3 rounded-full bg-glow-amber shadow-[0_0_28px_10px_rgba(245,194,107,0.35)]" />
            </span>
            .
          </h1>

          <div className="mt-10 grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-end">
            <p className="rise max-w-xl text-balance text-lg leading-relaxed text-white/70 md:text-xl">
              Wir sind Cloud Natives, Design Freaks und Softwarenerds.
              Wir bauen digitale Infrastruktur für Mittelstand und Startups —
              mit Sinn für Qualität und offene Kommunikation.
            </p>
            <div className="rise flex flex-wrap items-center gap-3 md:justify-end">
              <a
                href="#kontakt"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-ink-950 shadow-[0_20px_50px_-20px_rgba(255,255,255,0.5)] transition hover:-translate-y-0.5"
              >
                Anfrage senden
                <span className="grid h-6 w-6 place-items-center rounded-full bg-ink-950 text-white transition group-hover:rotate-45">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm text-white/85 backdrop-blur-xl transition hover:bg-white/[0.08]"
              >
                Was wir bauen
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom liquid glass ledge */}
        <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
          <div className="glass glass-strong flex items-center gap-6 rounded-full px-6 py-3 text-[12px] text-white/70">
            <span className="font-mono tracking-[0.2em] text-white/50">SCROLL</span>
            <span className="h-3 w-px bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-glow-amber opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-glow-amber" />
              </span>
              <span>web works — with us</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
