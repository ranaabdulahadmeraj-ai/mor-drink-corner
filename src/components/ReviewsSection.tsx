import { ExternalLink, Star } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SITE } from "@/data/site";

/**
 * 5-star row with a partial fill for fractional ratings (e.g. 3.4).
 * The rating itself comes from SITE.rating — update it there.
 */
function Stars({ value }: { value: number }) {
  const row = Array.from({ length: 5 }, (_, i) => (
    <Star key={i} className="h-7 w-7 fill-current" aria-hidden="true" />
  ));
  return (
    <div className="relative inline-flex" role="img" aria-label={`${value} out of 5 stars`}>
      <div className="flex gap-1 text-cream/20">{row}</div>
      <div
        className="absolute inset-0 flex gap-1 overflow-hidden text-lime"
        style={{ width: `${(value / 5) * 100}%` }}
      >
        {row}
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="scroll-mt-20 bg-charcoal py-20 text-cream sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <p className="mb-2 text-sm font-semibold text-lime">Customer Reviews</p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              What Visitors Say on Google
            </h2>

            <div className="mt-8">
              <p className="font-display text-6xl font-bold leading-none">
                {SITE.rating}
                <span className="text-2xl text-cream/50">/5</span>
              </p>
              <div className="mt-4 flex justify-center">
                <Stars value={SITE.rating} />
              </div>
              <p className="mt-3 text-sm text-cream/70">
                Based on {SITE.reviewCount} Google reviews
              </p>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-cream/60">
              We show our real Google rating — every review lives on Google,
              straight from the people who visited.
            </p>

            <a
              href={SITE.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 font-semibold text-charcoal transition-colors hover:bg-lime-deep"
            >
              Read Google Reviews
              <ExternalLink className="h-4.5 w-4.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
