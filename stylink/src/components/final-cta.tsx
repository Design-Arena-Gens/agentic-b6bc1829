import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-500 px-6 py-14 text-white shadow-2xl md:px-12">
      <div className="mx-auto max-w-4xl text-center space-y-8">
        <h2 className="text-3xl font-semibold md:text-4xl">
          Prêt à connecter vos looks à des ventes personnalisées ?
        </h2>
        <p className="text-lg text-white/80">
          Lancez votre premier drop ambassadeur et laissez StyleLink gérer la
          personnalisation, l’attribution et la rémunération avec la production
          Signeed Club.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="https://signeedclub.com"
            className="w-full rounded-full bg-white px-8 py-3 text-center text-sm font-semibold uppercase tracking-wide text-zinc-900 transition hover:bg-zinc-200 sm:w-auto"
          >
            Planifier une démo
          </Link>
          <Link
            href="#"
            className="w-full rounded-full border border-white/70 px-8 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 sm:w-auto"
          >
            Recevoir le kit ambassadeur
          </Link>
        </div>
      </div>
    </section>
  );
}

