import { CupSoda } from "lucide-react";

/**
 * MOR Drink Corner wordmark: lime tile with a drink icon plus stacked
 * "MOR / DRINK CORNER" typography. Used on dark surfaces (navbar, footer).
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-lime">
        <CupSoda className="h-6 w-6 text-charcoal" strokeWidth={2.25} />
      </span>
      <span className="leading-none">
        <span className="block font-display text-xl font-bold tracking-tight text-cream">
          MOR
        </span>
        <span className="mt-1 block text-[0.58rem] font-semibold uppercase tracking-[0.32em] text-lime">
          Drink Corner
        </span>
      </span>
    </span>
  );
}
