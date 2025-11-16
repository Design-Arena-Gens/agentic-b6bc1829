"use client";

import { useMemo, useState } from "react";

type PaletteKey = "noir" | "ivoire" | "sable" | "corail" | "ultraviolet";

const palettes: Record<
  PaletteKey,
  { name: string; hex: string; secondary: string; description: string }
> = {
  noir: {
    name: "Noir Signature",
    hex: "#111111",
    secondary: "#3f3f46",
    description: "Minimaliste, parfait pour un drop capsule ultra chic.",
  },
  ivoire: {
    name: "Ivoire Calm",
    hex: "#f8f6f2",
    secondary: "#e4ded0",
    description: "Teinte douce inspirée des looks effortless parisiens.",
  },
  sable: {
    name: "Sable Urbain",
    hex: "#c5a572",
    secondary: "#9c8360",
    description: "Référence street couture, mixe textures suédées & métalliques.",
  },
  corail: {
    name: "Corail Pop",
    hex: "#ff6f61",
    secondary: "#ffb6a3",
    description: "Accent vibrant pour les collection drops ambassadeurs estivaux.",
  },
  ultraviolet: {
    name: "Ultraviolet",
    hex: "#6b21a8",
    secondary: "#c084fc",
    description: "Palette futuriste pensée pour les créateurs digitaux.",
  },
};

const trims = [
  {
    id: "zip-gunmetal",
    label: "Zip Gunmetal",
    description: "Finition métallique sombre au rendu premium.",
  },
  {
    id: "patch-embosse",
    label: "Patch embossé",
    description: "Logo signeedclub embossé ton sur ton.",
  },
  {
    id: "cordelette-contrast",
    label: "Cordelette contrastée",
    description: "Cordons tressés bicolores pour un look sport-chic.",
  },
];

export function TagCustomizer() {
  const [selectedPalette, setSelectedPalette] = useState<PaletteKey>("noir");
  const [selectedTrim, setSelectedTrim] = useState(trims[0].id);

  const presetTitle = useMemo(() => {
    switch (selectedPalette) {
      case "ivoire":
        return "Preset « Soft Parisian »";
      case "sable":
        return "Preset « Urban Nomad »";
      case "corail":
        return "Preset « Sunset Drop »";
      case "ultraviolet":
        return "Preset « Neon Nights »";
      default:
        return "Preset « Noir Minimal »";
    }
  }, [selectedPalette]);

  return (
    <section
      id="demo"
      className="relative overflow-hidden rounded-3xl border border-zinc-100/10 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 px-6 py-16 md:px-12"
    >
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6 text-white">
            <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.4em] text-white/80">
              Tag-to-Customize™
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Donnez le pouvoir de personnaliser directement depuis un post.
            </h2>
            <p className="text-zinc-300 md:text-lg">
              Les followers choisissent une palette, ajustent les finitions et
              ajoutent au panier sans quitter la story ou le feed. Vous gardez
              la main sur les presets et prix, Signeed Club gère la production
              on-demand.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-zinc-300">
                  {palettes[selectedPalette].description}
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-emerald-300/90">
                  {presetTitle}
                </p>
                <p className="mt-2 text-lg font-semibold">
                  +12% de conversion sur les drops créateurs
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/90">
                  Reward instantané
                </p>
                <p className="mt-2 text-lg font-semibold">
                  18,40 € de commission
                </p>
                <p className="mt-3 text-sm text-zinc-300">
                  Calculée automatiquement sur cette configuration hoodie
                  premium.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-300">
                      Hoodie Signeed Club
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold text-white">
                      {palettes[selectedPalette].name}
                    </h3>
                  </div>
                  <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-zinc-200">
                    189 €
                  </span>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-[minmax(0,_1fr)]">
                  <div className="grid grid-cols-5 gap-3">
                    {(Object.keys(palettes) as PaletteKey[]).map((key) => (
                      <button
                        key={key}
                        onClick={() => setSelectedPalette(key)}
                        className="group relative flex h-16 items-center justify-center rounded-xl border border-transparent transition hover:scale-[1.03]"
                        aria-label={palettes[key].name}
                      >
                        <span
                          className="absolute inset-0 rounded-xl border border-white/10"
                          style={{
                            borderColor:
                              selectedPalette === key
                                ? "rgba(236, 72, 153, 0.7)"
                                : "rgba(255, 255, 255, 0.12)",
                          }}
                        />
                        <span
                          className="h-10 w-10 rounded-full border border-black/10 shadow-inner shadow-black/20"
                          style={{ backgroundColor: palettes[key].hex }}
                        />
                      </button>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.35em] text-zinc-300">
                      Finitions
                    </p>
                    <div className="mt-3 space-y-2">
                      {trims.map((trim) => (
                        <label
                          key={trim.id}
                          className={`flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 transition ${
                            selectedTrim === trim.id
                              ? "border-fuchsia-400/60 bg-fuchsia-500/10"
                              : "border-white/10 bg-white/[0.03] hover:bg-white/10"
                          }`}
                        >
                          <input
                            type="radio"
                            name="trims"
                            value={trim.id}
                            checked={selectedTrim === trim.id}
                            onChange={() => setSelectedTrim(trim.id)}
                            className="mt-1 size-4 accent-fuchsia-500"
                          />
                          <div>
                            <p className="text-sm font-medium text-white">
                              {trim.label}
                            </p>
                            <p className="text-xs text-zinc-400">
                              {trim.description}
                            </p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <p className="text-sm text-zinc-300">
                    Livré en 10 jours avec personnalisation atelier Signeed Club.
                  </p>
                  <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200">
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
            <div
              className="absolute -bottom-10 -left-6 hidden w-52 rounded-2xl border border-white/10 bg-white/10 p-4 text-xs text-zinc-200 shadow-lg lg:block"
              style={{
                background: `linear-gradient(135deg, ${
                  palettes[selectedPalette].hex
                } 0%, ${palettes[selectedPalette].secondary} 100%)`,
              }}
            >
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/70">
                Preview
              </p>
              <p className="mt-2 font-medium text-white">
                Hoodie personnalisé, rendu 3D temps réel affiché au swipe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

