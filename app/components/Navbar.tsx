"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/95 backdrop-blur-sm border-b border-white/5 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#accueil" className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-electric rounded flex items-center justify-center flex-shrink-0">
            <BoltIcon />
          </div>
          <div className="leading-tight">
            <div className="text-[10px] tracking-[0.25em] uppercase text-electric font-medium">
              Électricité
            </div>
            <div className="text-base font-bold text-white tracking-wide font-display">
              MOREAU
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/55 hover:text-white transition-colors duration-150 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2.5">
          <a
            href="tel:+33600000000"
            className="flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 border border-red-500/30 hover:border-red-400/50 px-3 py-1.5 rounded transition-all"
          >
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            Urgence 24h/7j
          </a>
          <a
            href="#contact"
            className="bg-electric hover:bg-electric-dark text-white text-sm font-semibold px-4 py-1.5 rounded transition-colors"
          >
            Devis gratuit
          </a>
        </div>

        <button
          className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-[5px]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`w-5 h-[1.5px] bg-white transition-all duration-200 ${
              menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
          />
          <span
            className={`w-5 h-[1.5px] bg-white transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-5 h-[1.5px] bg-white transition-all duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-surface-2 border-b border-white/5"
          >
            <nav className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/65 hover:text-white py-3 text-base border-b border-white/5 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href="tel:+33600000000"
                  className="text-center bg-red-600/80 hover:bg-red-600 text-white py-2.5 rounded text-sm font-medium transition-colors"
                >
                  Urgence : 06 00 00 00 00
                </a>
                <a
                  href="#contact"
                  className="text-center bg-electric hover:bg-electric-dark text-white py-2.5 rounded text-sm font-semibold transition-colors"
                >
                  Demander un devis
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function BoltIcon() {
  return (
    <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
      <path d="M8 1L1 10.5H6.5L5 17L13 7H7.5L8 1Z" fill="white" />
    </svg>
  );
}
