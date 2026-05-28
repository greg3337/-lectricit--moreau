"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Ans d'expérience" },
  { value: "500+", label: "Clients satisfaits" },
  { value: "24h", label: "Dépannage urgence" },
  { value: "RGE", label: "Certifié Quali-Elec" },
];

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-surface"
    >
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 15% 55%, rgba(0,71,255,0.11) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 right-0 w-[45vw] h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, transparent 40%, rgba(0,71,255,0.04) 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-electric" />
          <span className="text-xs text-electric tracking-[0.3em] uppercase font-medium">
            Artisan RGE · Bordeaux, Gironde
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr,200px] gap-10 lg:gap-16 items-center">
          <div>
            <div className="overflow-hidden mb-1">
              <motion.p
                initial={{ y: 40 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="text-white/35 text-lg md:text-2xl tracking-[0.18em] uppercase font-display font-semibold"
              >
                Électricité
              </motion.p>
            </div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="font-numbers leading-[0.85] text-white"
                style={{ fontSize: "clamp(5.5rem, 17vw, 13.5rem)" }}
              >
                MOREAU
              </motion.h1>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, delay: 0.5, ease: "easeOut" }}
              style={{ originX: 0 }}
              className="h-[2px] bg-gradient-to-r from-electric via-electric/40 to-transparent max-w-[380px] mt-5 mb-7"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.52 }}
              className="text-white/50 text-lg leading-relaxed max-w-[440px] mb-9"
            >
              Électricien indépendant certifié à Bordeaux.{" "}
              <span className="text-white/75">
                Installations, rénovations et dépannages
              </span>{" "}
              dans toute la Gironde.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.62 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="bg-electric hover:bg-electric-dark text-white text-sm font-semibold px-7 py-3.5 rounded transition-colors tracking-wide"
              >
                Demander un devis
              </a>
              <a
                href="tel:+33612345678"
                className="flex items-center gap-2.5 border border-white/15 hover:border-white/30 text-white/65 hover:text-white text-sm font-medium px-6 py-3.5 rounded transition-all"
              >
                <PhoneIcon />
                06 12 34 56 78
              </a>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.value}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.28 + i * 0.08 }}
                className="bg-surface-2 border border-white/5 rounded-xl p-4 hover:border-electric/25 transition-colors"
              >
                <div className="font-numbers text-[2.2rem] leading-none text-electric mb-0.5">
                  {s.value}
                </div>
                <div className="text-white/38 text-xs leading-tight">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <motion.a
        href="#services"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/22 hover:text-white/45 transition-colors"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase">Découvrir</span>
        <ChevronDownIcon />
      </motion.a>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.16a16 16 0 006.93 6.93l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
