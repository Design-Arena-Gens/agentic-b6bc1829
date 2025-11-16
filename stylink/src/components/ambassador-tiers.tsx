const tiers = [
  {
    name: "Starter",
    volume: "0 - 25 ventes/mois",
    perks: [
      "10% commission par article personnalisé",
      "Bibliothèque de presets Signeed Club",
      "Tracking via lien StyleLink unique",
    ],
  },
  {
    name: "Signature",
    volume: "25 - 100 ventes/mois",
    perks: [
      "12% commission + bonus drop exclusif",
      "Co-création de palettes limitée",
      "Accès au showroom digital Signeed Club",
    ],
  },
  {
    name: "Couture Labs",
    volume: "100+ ventes/mois",
    perks: [
      "15% commission + royalties collection capsule",
      "Production on-demand prioritaire",
      "Équipe support dédiée & studios de tournage",
    ],
  },
];

export function AmbassadorTiers() {
  return (
    <section
      id="ambassadeurs"
      className="rounded-3xl border border-white/10 bg-zinc-950 px-6 py-16 text-white md:px-12"
    >
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.35em] text-emerald-300/80">
            Programme Ambassadeurs Rémunéré
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Passez du bouche-à-oreille à un revenu récurrent.
          </h2>
          <p className="text-zinc-300 md:text-lg">
            Les micro-influenceurs et clients fidèles deviennent partenaires
            officiels avec un dashboard transparent, des reversements rapides et
            un accompagnement pour faire grossir leur communauté.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
            >
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.35em] text-white/70">
                  {tier.volume}
                </p>
                <h3 className="text-2xl font-semibold text-white">
                  {tier.name}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="leading-6">
                      • {perk}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-6 w-full rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/10">
                Rejoindre ce palier
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

