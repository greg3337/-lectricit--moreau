const services = [
  "Installation électrique",
  "Dépannage urgence",
  "Mise aux normes",
  "Rénovation électrique",
];

export default function Footer() {
  return (
    <footer className="bg-surface-2 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-[2fr,1fr,1fr] gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-electric rounded flex items-center justify-center">
                <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
                  <path d="M8 1L1 10.5H6.5L5 17L13 7H7.5L8 1Z" fill="white" />
                </svg>
              </div>
              <div className="leading-tight">
                <div className="text-[10px] tracking-[0.25em] uppercase text-electric font-semibold">
                  Électricité
                </div>
                <div className="text-base font-bold text-white tracking-wide font-display">
                  MOREAU
                </div>
              </div>
            </div>
            <p className="text-white/32 text-sm leading-relaxed max-w-xs mb-5">
              Électricien indépendant certifié RGE à Bordeaux. Votre sécurité
              électrique, notre priorité depuis 2009.
            </p>
            <div className="flex gap-2 flex-wrap">
              {["RGE", "Quali-Elec", "IRVE"].map((c) => (
                <span
                  key={c}
                  className="text-[10px] text-white/35 border border-white/8 px-2.5 py-1 rounded font-medium"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white/25 text-[11px] uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/25 text-[11px] uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+33612345678"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  06 12 34 56 78
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@electricite-moreau.fr"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  contact@electricite-moreau.fr
                </a>
              </li>
              <li className="text-white/35">Bordeaux, Gironde (33)</li>
              <li className="text-white/35">Lun–Ven 7h–19h</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/22 text-xs">
            © 2025 Électricité Moreau · SIRET 123 456 789 00012 · Bordeaux
          </p>
          <p className="text-white/22 text-xs">
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
