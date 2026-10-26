import { MessageCircle } from "lucide-react";
import { SITE } from "@/data/site";
import heroImage from "@/assets/hero.jpg";

const LABELS = [
  "Drinks & Refreshments",
  "Ice Cream & Desserts",
  "Fast-Food Favorites",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-20 overflow-hidden bg-charcoal pb-16 pt-28 text-cream sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-40"
    >
      {/* soft lime glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(closest-side, var(--lime) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <div className="mb-6 flex flex-wrap gap-2">
            {LABELS.map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-lime/40 px-3 py-1.5 text-xs font-medium text-lime"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                {label}
              </span>
            ))}
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Your Cravings.
            <br />
            Your Kind of <span className="text-lime">Refreshment.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/70 sm:text-lg">
            From refreshing drinks and creamy ice cream to satisfying
            fast-food favorites, discover your next craving at{" "}
            {SITE.name}, Multan.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="rounded-full bg-lime px-7 py-3.5 font-semibold text-charcoal transition-colors hover:bg-lime-deep"
            >
              Explore Our Menu
            </a>
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 font-semibold text-cream transition-colors hover:border-lime hover:text-lime"
            >
              <MessageCircle className="h-5 w-5" />
              Order on WhatsApp
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src={heroImage}
            alt="Cold drinks, milkshake, ice cream sundae, crispy burger and fries at MOR Drink Corner"
            width={1536}
            height={1024}
            fetchPriority="high"
            className="w-full rounded-[2rem] border border-white/10 object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
