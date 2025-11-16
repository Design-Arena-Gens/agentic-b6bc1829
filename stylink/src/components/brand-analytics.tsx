const analytics = [
  {
    label: "Attribution claire",
    value: "Source UGC → commande → preset",
    detail:
      "Chaque commande est liée au post, à l’ambassadeur et à la configuration choisie.",
  },
  {
    label: "Insights produit",
    value: "Top couleurs & finitions",
    detail:
      "Identifiez les combinaisons qui performent pour orienter vos futures collections.",
  },
  {
    label: "Pistes actionnables",
    value: "+18% rétention clients",
    detail:
      "Les clients reviennent pour débloquer de nouveaux presets créateurs et mises à jour.",
  },
];

export function BrandAnalytics() {
  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black px-6 py-16 text-white shadow-2xl md:px-12">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">
            Dashboard Marque Signeed Club
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Un cockpit décisionnel en temps réel.
          </h2>
          <p className="text-zinc-300 md:text-lg">
            Visualisez l’impact de chaque créateur, optimisez la production et
            pilotez vos campagnes autour des presets les plus performants.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            {analytics.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-white/70">
                  {item.label}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {item.value}
                </h3>
                <p className="mt-2 text-sm text-zinc-300">{item.detail}</p>
              </article>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-inner">
            <p className="text-xs uppercase tracking-[0.35em] text-fuchsia-300/80">
              Snapshot Analytics
            </p>
            <div className="mt-6 space-y-6">
              <div>
                <div className="flex items-center justify-between text-sm text-zinc-300">
                  <span>Revenu généré par UGC (30j)</span>
                  <span className="font-semibold text-white">62 480 €</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-white/10">
                  <div className="h-2 rounded-full bg-fuchsia-500" style={{ width: "68%" }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-sm text-zinc-300">
                  <span>Taux de personnalisation</span>
                  <span className="font-semibold text-white">74%</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-white/10">
                  <div className="h-2 rounded-full bg-emerald-400" style={{ width: "74%" }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-sm text-zinc-300">
                  <span>Temps moyen custom → panier</span>
                  <span className="font-semibold text-white">42s</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-white/10">
                  <div className="h-2 rounded-full bg-cyan-400" style={{ width: "52%" }} />
                </div>
              </div>
            </div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">
                Suggestion automatique
              </p>
              <p className="mt-2 text-sm text-zinc-300">
                Lancez une campagne « Neon Nights » : +32% de conversions sur la
                cible Gen-Z, faible taux de retour.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

