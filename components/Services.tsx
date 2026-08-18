"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

type Service = {
  index: string;
  title: string;
  copy: string;
  image: string;
  chips: string[];
};

const services: Service[] = [
  {
    index: "S · 01",
    title: "Web · App · Interface",
    copy:
      "Websites, Web-Apps und Online-Shops, die schnell laden, gut aussehen und die richtigen Menschen konvertieren. Von der Idee bis zum Deploy.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=80",
    chips: ["Next.js", "React", "Design Systems", "E-Commerce"]
  },
  {
    index: "S · 02",
    title: "Cloud · Infrastruktur",
    copy:
      "AWS, IONOS, Vercel. Wir planen und betreiben eure Infrastruktur — von der ersten Domain bis zum Multi-Region-Setup mit CI/CD und Monitoring.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80",
    chips: ["AWS Activate", "IONOS Partner", "IaC", "CI / CD"]
  },
  {
    index: "S · 03",
    title: "SEO · Analytics · Growth",
    copy:
      "Traffic Analytics, technisches SEO und Content-Strategie. Wir bringen euch dahin, wo eure Kund:innen tatsächlich suchen — und messen, was wirkt.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80",
    chips: ["Technical SEO", "GA4", "Content Ops", "AI Overviews"]
  }
];

function RailDot({
  progress,
  step,
  index,
  label
}: {
  progress: MotionValue<number>;
  step: number;
  index: number;
  label: string;
}) {
  const opacity = useTransform(
    progress,
    [index * step, index * step + 0.02, (index + 1) * step - 0.02, (index + 1) * step],
    [0.3, 1, 1, 0.3]
  );
  return (
    <li className="flex items-center gap-3">
      <motion.span
        style={{ opacity }}
        className="h-1.5 w-1.5 rounded-full bg-glow-amber shadow-[0_0_14px_var(--glow-amber)]"
      />
      <motion.span
        style={{ opacity }}
        className="font-mono text-[10px] tracking-[0.24em] text-white/60"
      >
        {label}
      </motion.span>
    </li>
  );
}

function ServiceCard({
  service,
  progress,
  range
}: {
  service: Service;
  progress: MotionValue<number>;
  range: [number, number, number, number];
}) {
  const opacity = useTransform(progress, range, [0, 1, 1, 0]);
  const scale = useTransform(progress, range, [0.96, 1, 1, 0.96]);
  const y = useTransform(progress, range, [40, 0, 0, -40]);
  const imgOpacity = useTransform(progress, range, [0, 1, 1, 0]);
  const imgScale = useTransform(progress, range, [1.15, 1, 1, 1.15]);

  return (
    <>
      <motion.div
        style={{ opacity: imgOpacity, scale: imgScale }}
        className="pointer-events-none absolute inset-0"
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            background:
              "linear-gradient(180deg, rgba(5,6,10,0.75) 0%, rgba(5,6,10,0.35) 40%, rgba(5,6,10,0.75) 100%)"
          }}
        />
      </motion.div>

      <motion.div
        style={{ opacity, scale, y }}
        className="pointer-events-auto absolute inset-0 flex items-center"
      >
        <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-6 md:grid-cols-[1fr_1.1fr] md:items-center md:px-10">
          <div className="glass glass-strong rounded-[32px] p-8 md:p-12">
            <div className="font-mono text-[11px] tracking-[0.28em] text-glow-amber">
              {service.index}
            </div>
            <h3 className="display-tight mt-6 text-[clamp(2rem,4.5vw,4.4rem)] font-light text-white">
              {service.title}
            </h3>
            <p className="mt-6 max-w-lg text-[15.5px] leading-relaxed text-white/70">
              {service.copy}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {service.chips.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] tracking-[0.12em] text-white/70"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="hidden md:block" />
        </div>
      </motion.div>
    </>
  );
}

export function Services() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  // Spring-smooth the raw scroll progress so all downstream transforms feel silky.
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.6,
    restDelta: 0.0005
  });

  const step = 1 / services.length;
  // Wider crossfade zones = softer, slower service transitions.
  const fade = 0.14;
  const ranges: [number, number, number, number][] = services.map((_, i) => [
    Math.max(0, i * step - fade),
    i * step + fade,
    (i + 1) * step - fade,
    Math.min(1, (i + 1) * step + fade)
  ]);

  return (
    <section id="services" ref={ref} className="relative h-[380vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0" style={{ background: "rgba(5,6,10,0.6)" }} aria-hidden />

        {/* index rail */}
        <div className="absolute left-6 top-1/2 z-30 hidden -translate-y-1/2 md:block">
          <div className="glass rounded-full px-3 py-4">
            <ul className="flex flex-col items-center gap-4">
              {services.map((s, i) => (
                <RailDot
                  key={s.index}
                  progress={progress}
                  step={step}
                  index={i}
                  label={s.index}
                />
              ))}
            </ul>
          </div>
        </div>

        {services.map((service, i) => (
          <ServiceCard
            key={service.index}
            service={service}
            progress={progress}
            range={ranges[i]}
          />
        ))}

        {/* Section header */}
        <div className="pointer-events-none absolute left-1/2 top-10 z-20 -translate-x-1/2">
          <div className="chip"><span className="dot" /> Services</div>
        </div>
      </div>
    </section>
  );
}
