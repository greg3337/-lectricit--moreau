"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Villa contemporaine",
    location: "Mérignac",
    category: "Résidentiel",
    type: "Installation complète",
    description:
      "Installation électrique neuve sur 240 m², tableau général + 3 tableaux divisionnaires, GTL conforme, VMC et bornes IRVE.",
    from: "#0f2a6e",
    to: "#1a4bb5",
    year: "2024",
  },
  {
    id: 2,
    title: "Restaurant Le Dôme",
    location: "Bordeaux Centre",
    category: "Commercial",
    type: "Mise aux normes",
    description:
      "Audit complet et mise en conformité NF C 15-100, remplacement du tableau vétuste, éclairage LED de salle et cuisine.",
    from: "#0d1b4a",
    to: "#0047ff",
    year: "2024",
  },
  {
    id: 3,
    title: "Appartement Les Chartrons",
    location: "Bordeaux",
    category: "Résidentiel",
    type: "Rénovation électrique",
    description:
      "Réfection totale du câblage d'un T4 haussmannien, pose de gaines encastrées, nouveau tableau Legrand.",
    from: "#1a1a3e",
    to: "#3b2f8a",
    year: "2023",
  },
  {
    id: 4,
    title: "Entrepôt logistique",
    location: "Lormont",
    category: "Industriel",
    type: "Installation complète",
    description:
      "Alimentation tri-phasée, éclairage industriel LED haute baie, prises de force et système de sécurité incendie.",
    from: "#0f1c2e",
    to: "#1e3a5f",
    year: "2023",
  },
  {
    id: 5,
    title: "Boutique Mode & Co",
    location: "Rue Sainte-Catherine",
    category: "Commercial",
    type: "Dépannage + rénovation",
    description:
      "Intervention d'urgence suite à court-circuit, puis rénovation complète de l'installation du local commercial.",
    from: "#082a3a",
    to: "#065e7c",
    year: "2024",
  },
  {
    id: 6,
    title: "Maison de maître",
    location: "Bègles",
    category: "Résidentiel",
    type: "Mise aux normes",
    description:
      "Diagnostic et travaux sur bâtiment de 1923, passage à la norme actuelle en préservant le cachet architectural.",
    from: "#12082a",
    to: "#2a1060",
    year: "2023",
  },
];

const categories = ["Tous", "Résidentiel", "Commercial", "Industriel"];

export default function Realisations() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filtered =
    activeFilter === "Tous"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="realisations" className="bg-surface-3 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <p className="text-electric text-xs tracking-[0.3em] uppercase font-semibold mb-3">
              Notre portfolio
            </p>
            <h2
              className="font-display font-bold text-white tracking-tight leading-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Nos réalisations
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-xs font-medium px-4 py-1.5 rounded-full border transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-electric border-electric text-white"
                    : "border-white/12 text-white/45 hover:text-white hover:border-white/25"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group rounded-2xl overflow-hidden border border-white/5 hover:border-white/12 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-black/40"
            >
              <div
                className="relative h-48 overflow-hidden"
                style={{
                  background: `linear-gradient(145deg, ${project.from}, ${project.to})`,
                }}
              >
                <svg
                  className="absolute inset-0 w-full h-full opacity-[0.08]"
                  viewBox="0 0 320 200"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <line x1="0" y1="60" x2="90" y2="60" stroke="white" strokeWidth="1" />
                  <line x1="90" y1="60" x2="90" y2="110" stroke="white" strokeWidth="1" />
                  <line x1="90" y1="110" x2="170" y2="110" stroke="white" strokeWidth="1" />
                  <circle cx="170" cy="110" r="4" fill="white" />
                  <line x1="170" y1="110" x2="240" y2="110" stroke="white" strokeWidth="1" />
                  <line x1="240" y1="110" x2="240" y2="60" stroke="white" strokeWidth="1" />
                  <line x1="240" y1="60" x2="320" y2="60" stroke="white" strokeWidth="1" />
                  <circle cx="90" cy="60" r="3" fill="white" />
                  <circle cx="240" cy="60" r="3" fill="white" />
                  <line x1="30" y1="150" x2="130" y2="150" stroke="white" strokeWidth="1" />
                  <line x1="130" y1="150" x2="190" y2="90" stroke="white" strokeWidth="1" />
                  <circle cx="190" cy="90" r="3" fill="white" />
                  <line x1="190" y1="90" x2="290" y2="90" stroke="white" strokeWidth="1" />
                  <circle cx="130" cy="150" r="3" fill="white" />
                </svg>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="bg-black/35 backdrop-blur-sm text-white/80 text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 font-numbers text-5xl text-white/10 leading-none">
                  {project.year}
                </div>
              </div>

              <div className="bg-surface-2 p-5">
                <div className="text-[10px] text-electric tracking-[0.2em] uppercase font-medium mb-2">
                  {project.type}
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-1">{project.title}</h3>
                <p className="text-white/30 text-xs mb-3 flex items-center gap-1.5">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  {project.location}
                </p>
                <p className="text-white/45 text-sm leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
