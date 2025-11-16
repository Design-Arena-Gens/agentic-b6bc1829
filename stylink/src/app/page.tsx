import { AmbassadorTiers } from "@/components/ambassador-tiers";
import { BrandAnalytics } from "@/components/brand-analytics";
import { FinalCTA } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { RevenuePipeline } from "@/components/revenue-pipeline";
import { TagCustomizer } from "@/components/tag-customizer";
import { UGCFeed } from "@/components/ugc-feed";
import { ValueProps } from "@/components/value-props";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-zinc-100 via-white to-zinc-200">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-14 px-6 py-16 md:gap-16 md:px-8 lg:px-12">
        <Hero />
        <ValueProps />
        <TagCustomizer />
        <RevenuePipeline />
        <UGCFeed />
        <BrandAnalytics />
        <AmbassadorTiers />
        <FinalCTA />
      </div>
    </main>
  );
}
