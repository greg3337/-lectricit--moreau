"use client";

import { motion } from "framer-motion";

const tarifs = [
  {
    service: "Dépannage urgence",
    fourchette: "À partir de 150 €",
    detail: "Déplacement + 1h d'intervention inclus. Majoration week-end/nuit.",
    tag: "Le plus rapide",
    featured: false,
  },
  {
    service: "Mise aux normes",
    fourchette: "À partir de 500 €",
    detail: "Diagnostic complet, rapport NF C 15-100, devis travaux détaillé.",
    tag: null,
    featured: false,
  },
  {
    service: "Installation électrique",
    fourchette: "À partir de 800 €",
    detail: "Tableau, câblage, prises et éclairage. Tarif selon surface et complexité.",
    tag: "Le plus demandé",
    featured: true,
  },
  {
    service: "Rénovation électrique",
    fourchette: "Sur devis",
    detail: "Étude personnalisée gratuite. Devis remis sous 48h après visite technique.",
    tag: null,
    featured: false,
  },
];

export default function Tarifs() {
  return (
    <section id="tarifs" className="bg-surface-2 py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(0,71,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-electric text-xs tracking-[0.3em] uppercase font-semibold mb-3">
            Transparence tarifaire
          </p>
          <h2
            className="font-display font-bold text-white tracking-tight leading-none mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Nos tarifs
          </h2>
          <p className="text-white/40 text-lg max-w-lg">
            Des fourchettes claires pour budgétiser votre projet.{" "}
            <span className="text-white/65">Devis gratuit et sans engagement</span> sur simple demande.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {tarifs.map((t, i) => (
            <motion.div
              key={t.service}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative flex flex-col rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-0.5 ${
                t.featured
                  ? "bg-electric border-electric/40 shadow-[0_8px_40px_rgba(0,71,255,0.25)]"
                  : "bg-surface-3 border-white/5 hover:border-white/12"
              }`}
            >
              {t.tag && (
                <div className="absolute -top-3.5 left-5">
                  <span
                    className={`text-[10px] tracking-[0.2em] uppercase font-bold px-3 py-1 rounded-full ${
                      t.featured
                        ? "bg-white text-electric"
                        : "bg-surface border border-white/10 text-white/60"
                    }`}
                  >
                    {t.tag}
                  </span>
                </div>
              )}

              <p
                className={`text-xs font-semibold tracking-widest uppercase mb-4 ${
                  t.featured ? "text-white/60" : "text-electric/70"
                }`}
              >
                {t.service}
              </p>

              <p
                className={`font-numbers text-4xl leading-none mb-1 ${
                  t.featured ? "text-white" : "text-white"
                }`}
              >
                {t.fourchette.startsWith("À") ? (
                  <>
                    <span
                      className={`text-base font-sans font-normal mr-1 ${
                        t.featured ? "text-white/70" : "text-white/45"
                      }`}
                    >
                      à partir de
                    </span>
                    <br />
                    {t.fourchette.replace("À partir de ", "")}
                  </>
                ) : (
                  t.fourchette
                )}
              </p>

              <div
                className={`h-px my-5 ${
                  t.featured ? "bg-white/20" : "bg-white/5"
                }`}
              />

              <p
                className={`text-sm leading-relaxed flex-1 ${
                  t.featured ? "text-white/75" : "text-white/40"
                }`}
              >
                {t.detail}
              </p>

              <a
                href="#contact"
                className={`mt-6 text-center text-xs font-semibold py-2.5 rounded-xl transition-colors tracking-wide ${
                  t.featured
                    ? "bg-white/15 hover:bg-white/25 text-white"
                    : "bg-white/5 hover:bg-white/10 text-white/60 hover:text-white border border-white/5 hover:border-white/10"
                }`}
              >
                Demander un devis
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center text-white/22 text-xs"
        >
          * Prix indicatifs HT, hors fournitures. Tarifs définitifs établis après visite technique gratuite.
        </motion.p>
      </div>
    </section>
  );
}
