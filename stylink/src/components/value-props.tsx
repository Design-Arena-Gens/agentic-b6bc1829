const personas = [
  {
    title: "Consommateurs",
    subtitle: "Personnalisez en direct",
    bullet: "Sélectionnez un look, changez couleur, matière et détails avant d’ajouter au panier.",
    pain: "Fin de la frustration « j’adore mais pas dans cette couleur ».",
  },
  {
    title: "Créateurs & Ambassadeurs",
    subtitle: "Monétisez votre style",
    bullet: "Taguez vos pièces, créez vos presets de customisation, suivez vos ventes en temps réel.",
    pain: "Plus besoin de codes promo : chaque vente personnalisée vous rémunère automatiquement.",
  },
  {
    title: "Marque Signeed Club",
    subtitle: "UGC qui convertit",
    bullet: "Agrégation du contenu authentique, analytics de conversion et intégration directe au funnel e-commerce.",
    pain: "Transformez les likes en commandes personnalisées traçables.",
  },
];

export function ValueProps() {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl border border-zinc-200/10 bg-zinc-900 px-6 py-14 md:px-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.18),_transparent_55%)]" />
      <div className="mx-auto max-w-5xl space-y-10 text-white">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Une plateforme pensée pour chaque acteur
          </h2>
          <p className="text-zinc-300 md:text-lg">
            StyleLink fusionne storytelling social et personnalisation produit
            afin d’activer consommateurs, créateurs et la marque dans une
            boucle de valeur à 360°.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {personas.map((persona) => (
            <article
              key={persona.title}
              className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:border-white/30 hover:bg-white/[0.09]"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-fuchsia-300/80">
                  {persona.title}
                </p>
                <h3 className="mt-4 text-xl font-semibold">{persona.subtitle}</h3>
                <p className="mt-4 text-sm text-zinc-300">{persona.bullet}</p>
              </div>
              <p className="mt-6 text-sm text-zinc-400">
                <span className="font-medium text-zinc-200">Pain killer :</span>{" "}
                {persona.pain}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

