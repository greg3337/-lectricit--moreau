"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Installation électrique",
    description:
      "Conception et installation complète de vos équipements électriques, du tableau principal au point lumineux. Câblage propre, mise en service soignée, finitions impeccables.",
    icon: <PlugIcon />,
    tags: ["Neuf", "Rénovation", "Tableau principal"],
    featured: false,
  },
  {
    number: "02",
    title: "Dépannage urgence",
    description:
      "Intervention rapide 24h/7j pour vos pannes électriques. Coupure de courant, court-circuit, disjoncteur déclenché — nous intervenons quand vous en avez besoin.",
    icon: <ZapIcon />,
    tags: ["24h/7j", "Intervention rapide", "Diagnostic inclus"],
    featured: true,
  },
  {
    number: "03",
    title: "Mise aux normes",
    description:
      "Audit complet et mise en conformité de votre installation selon la norme NF C 15-100. Rapport détaillé, travaux certifiés, idéal avant vente ou location.",
    icon: <ShieldIcon />,
    tags: ["NF C 15-100", "Diagnostic", "Rapport certifié"],
    featured: false,
  },
  {
    number: "04",
    title: "Rénovation électrique",
    description:
      "Rénovation totale ou partielle de votre installation. Remplacement de tableaux vétustes, mise à jour du câblage, modernisation des équipements existants.",
    icon: <WrenchIcon />,
    tags: ["Habitat ancien", "Tableau divisionnaire", "Câblage"],
    featured: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-electric text-xs tracking-[0.3em] uppercase font-semibold mb-3">
            Ce que nous faisons
          </p>
          <h2
            className="font-display font-bold text-surface tracking-tight mb-4 leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Nos services
          </h2>
          <p className="text-surface/45 text-lg max-w-lg">
            Tous les travaux électriques, par un artisan local certifié et expérimenté.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative bg-white rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-0.5 ${
                s.featured
                  ? "border-electric/30 shadow-[0_0_0_1px_rgba(0,71,255,0.15),0_8px_32px_rgba(0,71,255,0.08)]"
                  : "border-surface/8 hover:border-electric/20 hover:shadow-xl hover:shadow-surface/5"
              }`}
            >
              {s.featured && (
                <div className="absolute -top-3.5 left-7">
                  <span className="bg-electric text-white text-[10px] tracking-[0.2em] uppercase font-bold px-3 py-1 rounded-full shadow-lg shadow-electric/30">
                    Urgence 24h/7j
                  </span>
                </div>
              )}

              <div className="flex items-start justify-between mb-6">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    s.featured
                      ? "bg-electric text-white"
                      : "bg-electric/8 text-electric group-hover:bg-electric/12"
                  } transition-colors`}
                >
                  {s.icon}
                </div>
                <span className="font-numbers text-5xl text-surface/7 group-hover:text-electric/12 transition-colors leading-none">
                  {s.number}
                </span>
              </div>

              <h3 className="font-display font-bold text-surface text-xl mb-2.5 tracking-tight">
                {s.title}
              </h3>
              <p className="text-surface/50 text-sm leading-relaxed mb-5">
                {s.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-surface/40 bg-surface/5 px-2.5 py-0.5 rounded-full border border-surface/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 bg-electric rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <p className="text-white/70 text-xs tracking-widest uppercase mb-1">Zone d&apos;intervention</p>
            <p className="text-white font-display font-bold text-2xl md:text-3xl">
              Bordeaux & toute la Gironde
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-white text-electric font-bold text-sm px-6 py-3 rounded-xl hover:bg-white/90 transition-colors tracking-wide"
          >
            Demander un devis gratuit →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function PlugIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8H6a2 2 0 00-2 2v3a6 6 0 0012 0v-3a2 2 0 00-2-2z" />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
