import Link from "next/link";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black px-6 py-16 shadow-2xl md:px-12">
      <div className="absolute inset-x-0 -top-24 -z-10 flex justify-center blur-3xl">
        <div className="h-60 w-[480px] rotate-12 bg-gradient-to-r from-fuchsia-500/40 via-sky-400/30 to-emerald-400/40 opacity-70" />
      </div>
      <div className="mx-auto max-w-5xl text-center text-balance">
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-white/80">
          StyleLink by Signeed Club
        </span>
        <h1 className="mt-8 text-4xl font-semibold text-white md:text-6xl">
          Transform every outfit share into a customizable shopping experience.
        </h1>
        <p className="mt-6 text-lg text-zinc-300 md:text-xl">
          StyleLink relie l’inspiration à la personnalisation. Taguez un look,
          laissez vos abonnés modifier couleurs et finitions, et touchez une
          commission à chaque commande personnalisée sur{" "}
          <span className="font-semibold text-white">signeedclub.com</span>.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#demo"
            className="w-full rounded-full bg-white px-8 py-3 text-center text-sm font-semibold uppercase tracking-wide text-zinc-900 transition hover:bg-zinc-200 sm:w-auto"
          >
            Explorer le Tag-to-Customize
          </Link>
          <Link
            href="#ambassadeurs"
            className="w-full rounded-full border border-white/20 px-8 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white/40 hover:text-white sm:w-auto"
          >
            Devenir Ambassadeur
          </Link>
        </div>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur"
          >
            <p className="text-sm uppercase tracking-wide text-zinc-300">
              {metric.label}
            </p>
            <p className="mt-3 text-3xl font-semibold text-white">
              {metric.value}
            </p>
            <p className="mt-3 text-sm text-zinc-400">{metric.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const metrics = [
  {
    label: "Conversion boosters",
    value: "x3",
    description:
      "Les looks interactifs convertissent trois fois plus que les posts sociaux classiques.",
  },
  {
    label: "Ambassadeurs Rewardés",
    value: "12%",
    description:
      "Commission moyenne versée aux créateurs à chaque article personnalisé vendu.",
  },
  {
    label: "Temps de personnalisation",
    value: "<45s",
    description:
      "Les clients passent de l’inspiration à la commande personnalisée en moins d’une minute.",
  },
];

