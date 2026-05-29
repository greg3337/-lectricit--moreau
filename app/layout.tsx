import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans, Bebas_Neue } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-barlow",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Électricité Moreau — Électricien à Bordeaux",
  description:
    "Électricien certifié RGE à Bordeaux. Installation, dépannage urgence 24h/7j, mise aux normes et rénovation électrique en Gironde.",
  keywords: "électricien bordeaux, dépannage électrique, installation électrique, mise aux normes, gironde",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${dmSans.variable} ${barlowCondensed.variable} ${bebasNeue.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
