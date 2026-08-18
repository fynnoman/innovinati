"use client";

const partners = [
  { name: "IONOS", tag: "Offizieller Partner" },
  { name: "AWS Activate", tag: "Startup-Programm" },
  { name: "Vercel", tag: "Deployment Partner" },
  { name: "Cloudflare", tag: "Edge · Security" },
  { name: "Google Cloud", tag: "Analytics · AI" },
  { name: "Stripe", tag: "Payments" }
];

export function Partners() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <span className="eyebrow">Partner · Zertifiziert</span>
            <h3 className="mt-3 font-display text-3xl font-light text-white/85">
              Wir stehen auf soliden Schultern.
            </h3>
          </div>
          <div className="hidden font-mono text-[11px] tracking-[0.2em] text-white/40 md:block">
            {partners.length} × Partnerschaften
          </div>
        </div>
      </div>

      <div className="glass mx-6 overflow-hidden rounded-[32px] md:mx-10">
        <div className="relative flex overflow-hidden">
          <div className="marquee-track flex min-w-max shrink-0 items-center gap-16 px-10 py-10">
            {[...partners, ...partners].map((p, i) => (
              <div key={`${p.name}-${i}`} className="flex items-baseline gap-4 whitespace-nowrap">
                <span className="font-display text-3xl font-light tracking-tight text-white/85">
                  {p.name}
                </span>
                <span className="font-mono text-[10px] tracking-[0.24em] text-white/40">
                  {p.tag}
                </span>
                <span className="ml-6 h-1 w-1 rounded-full bg-white/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
