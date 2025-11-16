const stages = [
  {
    title: "1. Inspiration",
    metric: "95% taux de complétion story",
    description:
      "Un look publié depuis l’app StyleLink renvoie automatiquement vers une fiche personnalisable.",
    highlight: "Import direct depuis Instagram/TikTok, ajout de tags en 30s.",
  },
  {
    title: "2. Customisation",
    metric: "62% choisissent un preset créateur",
    description:
      "Les followers manipulent couleurs et finitions sans quitter le flux social.",
    highlight:
      "Les créateurs verrouillent les presets recommandés pour garder leur signature.",
  },
  {
    title: "3. Commande",
    metric: "Marge assurée +12%",
    description:
      "Panier converti côté Signeed Club avec fabrication on-demand et suivi qualité.",
    highlight: "Intégration au back-office et production atelier déjà connectée.",
  },
  {
    title: "4. Reward",
    metric: "Reversement J+7",
    description:
      "Commissions automatiques créditées sur le wallet ambassadeur, exportables en facture.",
    highlight: "Dashboard temps réel avec projection de revenus et taux de retour.",
  },
];

export function RevenuePipeline() {
  return (
    <section className="rounded-3xl border border-zinc-200/10 bg-white px-6 py-16 text-zinc-900 shadow-xl md:px-12">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.35em] text-fuchsia-500">
            Boucle de valeur StyleLink
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Chaque action est traçable et rémunératrice.
          </h2>
          <p className="text-zinc-600 md:text-lg">
            De l’inspiration jusqu’au reversement des commissions, StyleLink
            connecte contenu, personnalisation et logistique Signeed Club dans
            un seul pipeline mesurable.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {stages.map((stage) => (
            <article
              key={stage.title}
              className="flex h-full flex-col justify-between rounded-2xl border border-zinc-200/80 bg-gradient-to-br from-white to-zinc-50 p-7 shadow-sm transition hover:shadow-lg"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-zinc-900">
                  {stage.title}
                </h3>
                <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                  {stage.metric}
                </p>
                <p className="text-sm text-zinc-600">{stage.description}</p>
              </div>
              <p className="mt-6 rounded-xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white">
                {stage.highlight}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

