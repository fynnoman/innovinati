export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-16">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-glow-amber to-glow-sky shadow-[0_0_24px_rgba(245,194,107,0.4)]">
              <span className="h-2 w-2 rounded-full bg-ink-950" />
            </span>
            <span className="font-mono text-[13px] tracking-[0.22em] text-white/90">INNOVINATI</span>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/50">
            IT-Agentur für Mittelstand und Startups. Wir bauen digitale Infrastruktur,
            die auch morgen noch skaliert.
          </p>
        </div>

        <div>
          <div className="eyebrow">Studio</div>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><a href="#agentur" className="hover:text-white">Agentur</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#news" className="hover:text-white">News</a></li>
            <li><a href="#kontakt" className="hover:text-white">Kontakt</a></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow">Partner</div>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>IONOS</li>
            <li>AWS Activate</li>
            <li>Vercel</li>
            <li>Cloudflare</li>
          </ul>
        </div>

        <div>
          <div className="eyebrow">Kontakt</div>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>hallo@innovinati.de</li>
            <li>+49 (0) 221 000 000</li>
            <li>Köln · Remote-first</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1240px] flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="font-mono text-[11px] tracking-[0.22em] text-white/30">
          © {new Date().getFullYear()} INNOVINATI · web works with us.
        </div>
        <div className="flex gap-4 font-mono text-[11px] tracking-[0.22em] text-white/40">
          <a href="#" className="hover:text-white/70">IMPRESSUM</a>
          <a href="#" className="hover:text-white/70">DATENSCHUTZ</a>
          <a href="#" className="hover:text-white/70">AGB</a>
        </div>
      </div>
    </footer>
  );
}
