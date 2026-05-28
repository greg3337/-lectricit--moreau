# Électricité Moreau — Site Vitrine

Site vitrine professionnel pour **Électricité Moreau**, électricien indépendant certifié RGE à Bordeaux.

Réalisé par **GregoDev**.

---

## Stack technique

| Technologie | Version | Rôle |
|---|---|---|
| Next.js | 16 (App Router) | Framework React SSG + Route Handlers |
| TypeScript | 5 | Typage statique |
| Tailwind CSS | v4 | Styles utilitaires |
| Framer Motion | latest | Animations et transitions |
| Resend | latest | Envoi d'emails (formulaire de contact) |

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
├── api/
│   └── contact/
│       └── route.ts        # Route Handler POST — envoi email via Resend
└── components/
    ├── Navbar.tsx          # Navigation fixe, burger mobile
    ├── Hero.tsx            # Hero plein écran animé
    ├── Services.tsx        # 4 cartes de services
    ├── Tarifs.tsx          # Grille tarifaire
    ├── Realisations.tsx    # Portfolio filtrable (6 projets)
    ├── Avis.tsx            # Témoignages clients (4 avis)
    ├── Contact.tsx         # Formulaire fonctionnel + coordonnées
    └── Footer.tsx          # Pied de page 3 colonnes
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

### Avis clients
- 4 témoignages fictifs avec note 5 étoiles, nom, ville et service
- Score global 4.9/5 · +120 avis affiché en en-tête
- Référence Google My Business

### Contact
- Formulaire fonctionnel : nom, téléphone, email, service, message
- Envoi réel par email via Resend (voir [Configuration email](#configuration-email))
- Loading state + gestion d'erreur réseau
- Coordonnées : téléphone, email, zone, horaires
- Certifications : RGE, Quali-Elec, IRVE, QualiPV

### Footer
- 3 colonnes : logo + description + réseaux sociaux / services / contact
- Badges de certification (RGE, Quali-Elec, IRVE)
- Copyright + crédit GregoDev

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

## Configuration email

Le formulaire de contact envoie les demandes par email via [Resend](https://resend.com).

### 1. Créer un compte Resend

Inscription gratuite sur [resend.com](https://resend.com) (100 emails/jour offerts).

### 2. Obtenir une clé API

Dashboard Resend → **API Keys** → **Create API Key**.

### 3. Ajouter la variable d'environnement

**En local** — créer un fichier `.env.local` à la racine :

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```

**Sur Vercel** — Dashboard → projet → **Settings** → **Environment Variables** :

| Nom | Valeur |
|---|---|
| `RESEND_API_KEY` | `re_xxxxxxxxxxxxxxxxxxxx` |

### 4. Configurer l'adresse de réception

Dans `app/api/contact/route.ts`, modifier le champ `to` :

```ts
to: ["votre-email@domaine.fr"],
```

> **Sans clé API** : le formulaire fonctionne visuellement (loading, succès) mais les messages sont uniquement logués en console serveur.

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
| `app/api/contact/route.ts` | Adresse email de réception |
| `components/Navbar.tsx` | Liens de navigation, numéro téléphone |
| `components/Hero.tsx` | Téléphone, zone d'intervention |
| `components/Services.tsx` | Descriptions des services |
| `components/Tarifs.tsx` | Fourchettes de prix |
| `components/Realisations.tsx` | Projets du portfolio |
| `components/Avis.tsx` | Témoignages et notes clients |
| `components/Contact.tsx` | Téléphone, email, horaires |
| `components/Footer.tsx` | SIRET, adresse, réseaux sociaux |

---

*Projet livré par **GregoDev** — 2025*
