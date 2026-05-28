const services = [
  { label: "Installation électrique", href: "#services" },
  { label: "Dépannage urgence", href: "#services" },
  { label: "Mise aux normes", href: "#services" },
  { label: "Rénovation électrique", href: "#services" },
];

const contact = [
  { label: "06 00 00 00 00", href: "tel:+33600000000" },
  { label: "contact@electricite-moreau.fr", href: "mailto:contact@electricite-moreau.fr" },
  { label: "Bordeaux, Gironde (33)", href: null },
  { label: "Lun–Ven 7h–19h · Urgences 24h/7j", href: null },
];

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface-2 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Colonne 1 — Logo + description + socials */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 bg-electric rounded flex items-center justify-center flex-shrink-0">
                <svg width="12" height="16" viewBox="0 0 14 18" fill="none">
                  <path d="M8 1L1 10.5H6.5L5 17L13 7H7.5L8 1Z" fill="white" />
                </svg>
              </div>
              <div className="leading-tight">
                <div className="text-[10px] tracking-[0.25em] uppercase text-electric font-semibold">Électricité</div>
                <div className="text-sm font-bold text-white tracking-wide font-display">MOREAU</div>
              </div>
            </div>
            <p className="text-white/35 text-xs leading-relaxed mb-4">
              Électricien indépendant certifié RGE à Bordeaux. Votre sécurité électrique, notre priorité depuis 2009.
            </p>
            <div className="flex items-center gap-2 mb-4">
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
                <span key={c} className="text-[10px] text-white/30 border border-white/8 px-2 py-0.5 rounded font-medium">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Colonne 2 — Services */}
          <div>
            <h4 className="text-white/25 text-[11px] uppercase tracking-widest mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-white/45 hover:text-white text-xs transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Contact */}
          <div>
            <h4 className="text-white/25 text-[11px] uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-2.5">
              {contact.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a href={item.href} className="text-white/45 hover:text-white text-xs transition-colors">
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-white/30 text-xs">{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2">
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
