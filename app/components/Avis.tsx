"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sophie Marchand",
    location: "Mérignac",
    service: "Installation électrique",
    rating: 5,
    initials: "SM",
    color: "#1a3a8f",
    text: "Intervention rapide et soignée pour l'installation complète de notre maison neuve. M. Moreau a pris le temps d'expliquer chaque étape, tableau impeccable. Je recommande sans hésiter.",
  },
  {
    id: 2,
    name: "Karim Benali",
    location: "Bordeaux Centre",
    service: "Dépannage urgence",
    rating: 5,
    initials: "KB",
    color: "#0f2a6e",
    text: "Panne totale un dimanche soir, rappelé en 20 minutes et intervention en moins d'une heure. Tarif honnête malgré l'heure. Professionnel au top, je garde son numéro en favoris.",
  },
  {
    id: 3,
    name: "Marie-Claire Fontaine",
    location: "Pessac",
    service: "Mise aux normes",
    rating: 5,
    initials: "MF",
    color: "#1a1a5e",
    text: "Notre installation datait des années 70, M. Moreau a tout remis aux normes en respectant notre budget. Travail propre, délais respectés. Le diagnostique préalable était très détaillé.",
  },
  {
    id: 4,
    name: "Thomas Girard",
    location: "Lormont",
    service: "Rénovation électrique",
    rating: 5,
    initials: "TG",
    color: "#0a2840",
    text: "Rénovation complète de notre local commercial. M. Moreau a su s'adapter aux contraintes de planning pour ne pas interrompre notre activité. Résultat nickel, équipe très pro.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill={i < count ? "#0047ff" : "none"}
          stroke={i < count ? "#0047ff" : "rgba(255,255,255,0.2)"}
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Avis() {
  return (
    <section id="avis" className="bg-surface py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,71,255,0.05) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
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
            Ce qu&apos;ils disent
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2
              className="font-display font-bold text-white tracking-tight leading-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Avis clients
            </h2>
            <div className="flex items-center gap-3 sm:mb-1">
              <div className="flex flex-col items-end">
                <div className="text-white font-bold text-2xl leading-none font-numbers">4.9</div>
                <div className="text-white/30 text-xs mt-0.5">sur 5</div>
              </div>
              <div className="h-10 w-px bg-white/8" />
              <div className="flex flex-col">
                <Stars count={5} />
                <div className="text-white/30 text-xs mt-1">+120 avis vérifiés</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-surface-2 border border-white/5 hover:border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30 flex flex-col gap-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-white text-sm font-bold"
                    style={{ background: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-white/35 text-xs mt-0.5 flex items-center gap-1">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      {t.location}
                    </div>
                  </div>
                </div>
                <Stars count={t.rating} />
              </div>

              <p className="text-white/55 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-electric/70 text-[10px] tracking-[0.2em] uppercase font-medium">
                  {t.service}
                </span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <div key={j} className="w-1 h-1 rounded-full bg-white/12" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-white/25 text-xs">
            Avis collectés sur Google My Business · Dernière mise à jour : mai 2025
          </p>
        </motion.div>
      </div>
    </section>
  );
}
