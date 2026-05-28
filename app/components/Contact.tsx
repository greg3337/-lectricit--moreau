"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";

const contactInfo = [
  {
    icon: <PhoneIcon />,
    label: "Téléphone",
    value: "06 12 34 56 78",
    href: "tel:+33612345678",
  },
  {
    icon: <MailIcon />,
    label: "Email",
    value: "contact@electricite-moreau.fr",
    href: "mailto:contact@electricite-moreau.fr",
  },
  {
    icon: <MapPinIcon />,
    label: "Zone d'intervention",
    value: "Bordeaux & Gironde (33)",
    href: undefined,
  },
  {
    icon: <ClockIcon />,
    label: "Horaires",
    value: "Lun–Ven 7h–19h · Urgences 24h/7j",
    href: undefined,
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Erreur serveur");
      setSent(true);
    } catch {
      setError("Une erreur est survenue. Veuillez réessayer ou nous appeler directement.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-surface py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,71,255,0.07) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
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
            Prenons contact
          </p>
          <h2
            className="font-display font-bold text-white tracking-tight leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Demande de devis
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr,1.55fr] gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/45 text-base leading-relaxed mb-10">
              Un projet ou une urgence ? Contactez-moi directement ou remplissez le formulaire.
              Réponse sous{" "}
              <span className="text-white/75">24h</span> en jours ouvrés.
            </p>

            <div className="space-y-7">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-surface-2 border border-white/5 rounded-xl flex items-center justify-center flex-shrink-0 text-electric">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-white/30 text-xs mb-0.5 tracking-wide">{info.label}</div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white/80 hover:text-white transition-colors font-medium text-sm"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-white/75 text-sm">{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/5">
              <p className="text-white/25 text-[11px] uppercase tracking-widest mb-4">
                Certifications
              </p>
              <div className="flex flex-wrap gap-2">
                {["RGE", "Quali-Elec", "IRVE", "QualiPV"].map((cert) => (
                  <span
                    key={cert}
                    className="bg-surface-2 border border-white/8 text-white/50 text-xs px-3.5 py-1.5 rounded-lg font-medium"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-surface-2 border border-electric/25 rounded-2xl p-12 text-center"
              >
                <div className="w-16 h-16 bg-electric/12 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0047ff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-white font-display font-bold text-2xl mb-2">
                  Message envoyé !
                </h3>
                <p className="text-white/45 text-sm">
                  Nous vous recontactons sous 24 heures ouvrées.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/35 text-xs mb-1.5 tracking-wide">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.nom}
                      onChange={(e) => setForm({ ...form, nom: e.target.value })}
                      placeholder="Jean Dupont"
                      className="w-full bg-surface-2 border border-white/8 rounded-xl px-4 py-3 text-white text-sm outline-none placeholder:text-white/18 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/35 text-xs mb-1.5 tracking-wide">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      value={form.telephone}
                      onChange={(e) =>
                        setForm({ ...form, telephone: e.target.value })
                      }
                      placeholder="06 XX XX XX XX"
                      className="w-full bg-surface-2 border border-white/8 rounded-xl px-4 py-3 text-white text-sm outline-none placeholder:text-white/18 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/35 text-xs mb-1.5 tracking-wide">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jean@exemple.fr"
                    className="w-full bg-surface-2 border border-white/8 rounded-xl px-4 py-3 text-white text-sm outline-none placeholder:text-white/18 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white/35 text-xs mb-1.5 tracking-wide">
                    Service souhaité
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                    className="w-full bg-surface-2 border border-white/8 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors appearance-none"
                    style={{ color: form.service ? "white" : "rgba(255,255,255,0.18)" }}
                  >
                    <option value="" className="bg-surface-2">
                      Sélectionner un service...
                    </option>
                    <option value="installation" className="bg-surface-2">
                      Installation électrique
                    </option>
                    <option value="depannage" className="bg-surface-2">
                      Dépannage urgence
                    </option>
                    <option value="normes" className="bg-surface-2">
                      Mise aux normes
                    </option>
                    <option value="renovation" className="bg-surface-2">
                      Rénovation électrique
                    </option>
                    <option value="autre" className="bg-surface-2">
                      Autre demande
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/35 text-xs mb-1.5 tracking-wide">
                    Votre message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Décrivez votre projet ou votre besoin en quelques mots..."
                    className="w-full bg-surface-2 border border-white/8 rounded-xl px-4 py-3 text-white text-sm outline-none placeholder:text-white/18 transition-colors resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-400/80 text-xs text-center bg-red-500/8 border border-red-500/15 rounded-lg px-4 py-3">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="block mx-auto bg-electric hover:bg-electric-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 px-10 rounded-xl transition-colors text-sm tracking-wide flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                        <path d="M12 2a10 10 0 0 1 10 10" />
                      </svg>
                      Envoi en cours…
                    </>
                  ) : (
                    "Envoyer ma demande"
                  )}
                </button>

                <p className="text-white/22 text-xs text-center">
                  Devis gratuit et sans engagement · Réponse garantie sous 24h
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.16a16 16 0 006.93 6.93l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
