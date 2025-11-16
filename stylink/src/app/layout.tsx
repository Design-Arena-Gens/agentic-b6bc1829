import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StyleLink · Signeed Club",
  description:
    "Le réseau social Tag-to-Customize qui rémunère les ambassadeurs et connecte l’inspiration à la personnalisation produit.",
  openGraph: {
    title: "StyleLink · Signeed Club",
    description:
      "Un réseau social de mode où chaque look devient une fiche produit personnalisable et tracked.",
    url: "https://agentic-b6bc1829.vercel.app",
    siteName: "StyleLink",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StyleLink · Signeed Club",
    description:
      "Tag-to-Customize : monétisez votre style, accélérez la personnalisation, boostez vos ventes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-gradient-to-br from-zinc-100 via-white to-zinc-200 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
