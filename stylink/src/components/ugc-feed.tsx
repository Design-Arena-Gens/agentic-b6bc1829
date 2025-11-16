import Image from "next/image";

const posts = [
  {
    creator: "Zoé Lnd",
    handle: "@zoe.lnk",
    avatar: "/ugc/zoe.svg",
    stat: "+38 paniers",
    caption:
      "Drop capsule « Soft Parisian » : hoodie ivoire, zip gunmetal et patch embossé.",
    palette: "#f8f6f2",
    preview: "/ugc/look-1.svg",
  },
  {
    creator: "Elliot Wave",
    handle: "@elliot.wave",
    avatar: "/ugc/elliot.svg",
    stat: "Taux conv. 4,8%",
    caption:
      "Preset « Neon Nights » pour la veste technique. Ultraviolet + cordons réfléchissants.",
    palette: "#6b21a8",
    preview: "/ugc/look-2.svg",
  },
  {
    creator: "Nora K",
    handle: "@norak.style",
    avatar: "/ugc/nora.svg",
    stat: "Panier moyen 214 €",
    caption:
      "Bundle « Urban Nomad » : hoodie sable + jogger custom cuir vegan caramel.",
    palette: "#c5a572",
    preview: "/ugc/look-3.svg",
  },
];

export function UGCFeed() {
  return (
    <section className="rounded-3xl border border-zinc-200/10 bg-white px-6 py-16 md:px-12">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.35em] text-fuchsia-500">
            Contenu généré par la communauté
          </p>
          <h2 className="text-3xl font-semibold text-zinc-900 md:text-4xl">
            Vos meilleurs looks deviennent des fiches produit personnalisables.
          </h2>
          <p className="text-zinc-600 md:text-lg">
            Chaque post importé sur StyleLink génère automatiquement une page
            sur signeedclub.com, trackée et optimisée pour la conversion. Les
            performances sont remontées en temps réel.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.handle}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 shadow-sm transition hover:shadow-lg"
            >
              <div className="relative h-52 w-full bg-zinc-200">
                <Image
                  src={post.preview}
                  alt={post.caption}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 90vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-center gap-3">
                  <div className="relative size-12 overflow-hidden rounded-full border border-zinc-200">
                    <Image
                      src={post.avatar}
                      alt={post.creator}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">
                      {post.creator}
                    </p>
                    <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                      {post.handle}
                    </p>
                  </div>
                  <span className="ml-auto rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold text-white">
                    {post.stat}
                  </span>
                </div>
                <p className="text-sm text-zinc-600">{post.caption}</p>
                <div className="mt-auto">
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <span
                      className="size-4 rounded-full border border-zinc-200"
                      style={{ backgroundColor: post.palette }}
                    />
                    Palette du post
                  </div>
                  <button className="mt-4 w-full rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:border-zinc-900 hover:bg-zinc-900 hover:text-white">
                    Voir la fiche personnalisable
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
