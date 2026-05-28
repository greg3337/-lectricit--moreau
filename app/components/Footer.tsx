const services = [
  "Installation électrique",
  "Dépannage urgence",
  "Mise aux normes",
  "Rénovation électrique",
];

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface-2 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-[2fr,1fr,1fr] gap-8 mb-6">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 bg-electric rounded flex items-center justify-center">
                <svg width="12" height="16" viewBox="0 0 14 18" fill="none">
                  <path d="M8 1L1 10.5H6.5L5 17L13 7H7.5L8 1Z" fill="white" />
                </svg>
              </div>
              <div className="leading-tight">
                <div className="text-[10px] tracking-[0.25em] uppercase text-electric font-semibold">
                  Électricité
                </div>
                <div className="text-sm font-bold text-white tracking-wide font-display">
                  MOREAU
                </div>
              </div>
            </div>
            <p className="text-white/32 text-xs leading-relaxed max-w-xs mb-4">
              Électricien indépendant certifié RGE à Bordeaux. Votre sécurité
              électrique, notre priorité depuis 2009.
            </p>
            <div className="flex items-center gap-3 mb-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-electric/20 border border-white/8 hover:border-electric/30 flex items-center justify-center text-white/40 hover:text-electric transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <div className="flex gap-2 flex-wrap">
              {["RGE", "Quali-Elec", "IRVE"].map((c) => (
                <span
                  key={c}
                  className="text-[10px] text-white/35 border border-white/8 px-2 py-0.5 rounded font-medium"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white/25 text-[11px] uppercase tracking-widest mb-3">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-white/45 hover:text-white text-xs transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/25 text-[11px] uppercase tracking-widest mb-3">
              Contact
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="tel:+33612345678" className="text-white/45 hover:text-white transition-colors">
                  06 12 34 56 78
                </a>
              </li>
              <li>
                <a href="mailto:contact@electricite-moreau.fr" className="text-white/45 hover:text-white transition-colors">
                  contact@electricite-moreau.fr
                </a>
              </li>
              <li className="text-white/30">Bordeaux, Gironde (33)</li>
              <li className="text-white/30">Lun–Ven 7h–19h</li>
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/20 text-xs">
            © 2025 Électricité Moreau · SIRET 123 456 789 00012 · Bordeaux
          </p>
          <p className="text-white/20 text-xs">
            Conçu et développé par{" "}
            <span className="text-electric/60 hover:text-electric transition-colors cursor-default font-semibold">
              GregoDev
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
