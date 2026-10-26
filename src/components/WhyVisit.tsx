import {
  CupSoda,
  IceCreamBowl,
  Sandwich,
  ShoppingBag,
  UtensilsCrossed,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const FEATURES = [
  {
    icon: UtensilsCrossed,
    title: "Dine-in",
    text: "Sit down and enjoy your food and drinks with us.",
  },
  {
    icon: ShoppingBag,
    title: "Takeaway",
    text: "Grab your order and take it with you.",
  },
  {
    icon: CupSoda,
    title: "Drinks & Refreshments",
    text: "Fresh drinks, coolers, margaritas and milkshakes.",
  },
  {
    icon: IceCreamBowl,
    title: "Ice Cream & Desserts",
    text: "Scoops and sundaes from our dessert counter.",
  },
  {
    icon: Sandwich,
    title: "Fast-Food Menu",
    text: "Burgers, fries and loaded favorites.",
  },
];

export default function WhyVisit() {
  return (
    <section className="bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold text-orange">Why Visit MOR?</p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Everything at Our Corner
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              What you'll find on Khanewal Road, Multan — dine in or take away.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 sm:gap-5">
          {FEATURES.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 70}>
              <div className="flex h-full flex-col items-center gap-3 rounded-3xl border border-border bg-cream p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-lime text-charcoal">
                  <feature.icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="font-display text-sm font-semibold sm:text-base">
                  {feature.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {feature.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
