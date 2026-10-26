import { useState } from "react";
import { Check, Plus } from "lucide-react";
import {
  CATEGORIES,
  MENU_ITEMS,
  formatPrice,
  type CategoryId,
  type MenuItem,
} from "@/data/menu";
import { useCart } from "@/hooks/use-cart";
import Reveal from "@/components/Reveal";

function ProductCard({ item }: { item: MenuItem }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    add(item.id);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1300);
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="overflow-hidden">
        <img
          src={`/images/menu/${item.image}`}
          alt={item.name}
          width={512}
          height={512}
          loading="lazy"
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="font-display text-base font-semibold sm:text-lg">
          {item.name}
        </h3>
        <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {item.description}
        </p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-3">
          <span className="text-xs font-semibold text-orange sm:text-sm">
            {formatPrice(item)}
          </span>
          <button
            type="button"
            onClick={handleAdd}
            aria-label={`Add ${item.name} to your order`}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold transition-colors ${
              added
                ? "bg-charcoal text-cream"
                : "bg-primary text-primary-foreground hover:bg-lime-deep"
            }`}
          >
            {added ? (
              <>
                <Check className="h-3.5 w-3.5" /> Added
              </>
            ) : (
              <>
                <Plus className="h-3.5 w-3.5" /> Add to Order
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}

export default function MenuSection() {
  const [active, setActive] = useState<CategoryId | "all">("all");
  const filtered =
    active === "all"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.categories.includes(active));

  return (
    <section id="menu" className="scroll-mt-20 bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-10 max-w-2xl">
            <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-orange">
              <span className="h-px w-8 bg-orange" /> Our Menu
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Pick Your Favorites
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Sample menu items shown — prices are on request until the
              official menu is confirmed. Message us on WhatsApp for today's
              availability.
            </p>
          </div>
        </Reveal>

        <div
          role="tablist"
          aria-label="Menu categories"
          className="mb-4 flex flex-wrap gap-2"
        >
          <button
            type="button"
            role="tab"
            aria-selected={active === "all"}
            onClick={() => setActive("all")}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === "all"
                ? "border-transparent bg-charcoal text-cream"
                : "border-border bg-card text-foreground hover:border-charcoal/40"
            }`}
          >
            All Items
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={active === cat.id}
              onClick={() => setActive(cat.id)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === cat.id
                  ? "border-transparent bg-charcoal text-cream"
                  : "border-border bg-card text-foreground hover:border-charcoal/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <p className="mb-8 text-sm text-muted-foreground" aria-live="polite">
          Showing {filtered.length} of {MENU_ITEMS.length} items
        </p>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
          {filtered.map((item, index) => (
            <Reveal key={item.id} delay={(index % 4) * 60}>
              <ProductCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
