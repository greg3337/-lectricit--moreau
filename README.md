# Électricité Moreau — Site Vitrine

Site vitrine professionnel pour **Électricité Moreau**, électricien indépendant certifié RGE à Bordeaux.

Réalisé par **GregoDev**.

---

## Stack technique

| Technologie | Version | Rôle |
|---|---|---|
| Next.js | 16 (App Router) | Framework React SSG |
| TypeScript | 5 | Typage statique |
| Tailwind CSS | v4 | Styles utilitaires |
| Framer Motion | latest | Animations et transitions |

**Fonts** (Google Fonts via `next/font`) :
- **Bebas Neue** — titres d'impact (hero, stats)
- **Barlow Condensed** — en-têtes de section
- **DM Sans** — corps de texte

---

## Structure du projet

```
app/
├── layout.tsx              # Fonts, metadata, lang="fr"
├── page.tsx                # Assemblage des sections
├── globals.css             # Thème Tailwind v4, dot-grid
└── components/
    ├── Navbar.tsx          # Navigation fixe, burger mobile
    ├── Hero.tsx            # Hero plein écran animé
    ├── Services.tsx        # 4 cartes de services
    ├── Tarifs.tsx          # Grille tarifaire
    ├── Realisations.tsx    # Portfolio filtrable (6 projets)
    ├── Contact.tsx         # Formulaire + coordonnées
    └── Footer.tsx          # Pied de page
```

---

## Sections

### Hero
- Titre monumental **MOREAU** en Bebas Neue
- Badge "Artisan RGE · Bordeaux"
- Règle bleue animée (Framer Motion)
- 4 stats : 15+ ans / 500+ clients / 24h / RGE
- CTA : devis + téléphone

### Services
- Installation électrique
- Dépannage urgence 24h/7j *(mis en avant)*
- Mise aux normes NF C 15-100
- Rénovation électrique
- Bandeau CTA "Bordeaux & toute la Gironde"

### Tarifs
- À partir de 150 € — Dépannage urgence
- À partir de 500 € — Mise aux normes
- À partir de 800 € — Installation électrique *(featured)*
- Sur devis — Rénovation électrique

### Réalisations
- 6 projets fictifs avec filtre par catégorie (Résidentiel / Commercial / Industriel)
- Fonds dégradés avec décorations SVG circuit

### Contact
- Formulaire : nom, téléphone, email, service, message
- Coordonnées : téléphone, email, zone, horaires
- Certifications : RGE, Quali-Elec, IRVE, QualiPV

---

## Palette de couleurs

```css
--electric:      #0047FF   /* Bleu électrique principal */
--electric-dark: #0030CC   /* Hover */
--surface:       #07070F   /* Fond sombre principal */
--surface-2:     #0D0D1C   /* Fond cartes */
--surface-3:     #151527   /* Fond sections alternées */
--cream:         #F4F6FF   /* Fond section Services */
```

---

## Lancer le projet

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

```bash
npm run build   # Build de production
npm start       # Serveur de production
```

---

## Déploiement

Compatible **Vercel** (zéro configuration requise).

```bash
npx vercel        # Preview
npx vercel --prod # Production
```

---

## Personnalisation client

Les données à adapter se trouvent directement dans chaque composant :

| Fichier | Données à modifier |
|---|---|
| `app/layout.tsx` | Titre, description SEO |
| `components/Navbar.tsx` | Numéro téléphone urgence |
| `components/Hero.tsx` | Téléphone, zone d'intervention |
| `components/Services.tsx` | Descriptions des services |
| `components/Tarifs.tsx` | Fourchettes de prix |
| `components/Realisations.tsx` | Projets du portfolio |
| `components/Contact.tsx` | Email, téléphone, horaires |
| `components/Footer.tsx` | SIRET, adresse, réseaux sociaux |

---

*Projet livré par **GregoDev** — 2025*
