import Reveal from "@/components/Reveal";
import { SITE } from "@/data/site";

const SHOWCASE = [
  { name: "Mint Margarita", image: "mint-margarita.jpg" },
  { name: "Fresh Lemon Drink", image: "fresh-lime.jpg" },
  { name: "Colorful Fruit Drink", image: "fresh-juice.jpg" },
  { name: "Creamy Milkshake", image: "shake-vanilla.jpg" },
];

export default function DrinksShowcase() {
  return (
    <section
      id="drinks"
      className="scroll-mt-20 bg-charcoal py-20 text-cream sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold text-lime">
              Signature Drinks
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Sip Something Refreshing.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-cream/70 sm:text-base">
              Cold, colorful and freshly made — from crushed-ice margaritas to
              creamy shakes, our counter keeps the good stuff flowing.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {SHOWCASE.map((drink, index) => (
            <Reveal key={drink.name} delay={index * 80}>
              <figure className="group">
                <div className="overflow-hidden rounded-3xl border border-white/10">
                  <img
                    src={`/images/menu/${drink.image}`}
                    alt={drink.name}
                    width={512}
                    height={512}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="mt-3 text-center font-display text-sm font-semibold sm:text-base">
                  {drink.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#menu"
            className="inline-flex rounded-full bg-lime px-7 py-3.5 font-semibold text-charcoal transition-colors hover:bg-lime-deep"
          >
            Find Your Favorite Drink
          </a>
          <p className="mt-3 text-xs text-cream/50">
            Questions about a drink? WhatsApp us at {SITE.phoneDisplay}.
          </p>
        </div>
      </div>
    </section>
  );
}
