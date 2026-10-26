import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  CheckCircle2,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  X,
} from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/data/menu";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function CartDrawer() {
  const { isOpen, closeCart, lines, count, setQty, remove, clear } = useCart();
  const [orderType, setOrderType] = useState<"dine-in" | "takeaway">("takeaway");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Lock page scroll while the drawer is open.
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  // Close on Escape.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (lines.length === 0) return;
    if (!name.trim() || !phone.trim()) {
      setError("Please add your name and phone number so we can confirm your order.");
      return;
    }
    const url = buildWhatsAppUrl({
      lines,
      orderType,
      name: name.trim(),
      phone: phone.trim(),
      notes: notes.trim() || undefined,
    });
    window.open(url, "_blank", "noopener,noreferrer");
    setError(null);
    setSent(true);
  };

  const reset = () => {
    setSent(false);
    closeCart();
  };

  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-charcoal/60 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Your order"
        className={`absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-card shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 className="flex items-center gap-2 font-display text-lg font-bold">
            <ShoppingBag className="h-5 w-5" />
            Your Order
            {count > 0 && (
              <span className="rounded-full bg-lime px-2 py-0.5 text-xs font-bold text-charcoal">
                {count}
              </span>
            )}
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={closeCart}
            className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:bg-muted"
            aria-label="Close order panel"
          >
            <X className="h-4.5 w-4.5" />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-cream">
              <ShoppingBag className="h-8 w-8 text-muted-foreground" />
            </span>
            <p className="font-display text-lg font-semibold">Your order is empty</p>
            <p className="text-sm text-muted-foreground">
              Browse the menu and add something delicious.
            </p>
            <a
              href="#menu"
              onClick={closeCart}
              className="rounded-full bg-lime px-6 py-3 text-sm font-semibold text-charcoal transition-colors hover:bg-lime-deep"
            >
              Browse the Menu
            </a>
          </div>
        ) : sent ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <CheckCircle2 className="h-14 w-14 text-lime-deep" />
            <p className="font-display text-lg font-semibold">Order ready in WhatsApp</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              WhatsApp should now be open with your order details — just press
              send there and the store will confirm your items and total.
            </p>
            <button
              type="button"
              onClick={reset}
              className="rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-cream"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="divide-y divide-border">
                {lines.map(({ item, qty }) => (
                  <li key={item.id} className="flex items-center gap-3 py-3">
                    <img
                      src={`/images/menu/${item.image}`}
                      alt=""
                      width={64}
                      height={64}
                      loading="lazy"
                      className="h-16 w-16 shrink-0 rounded-xl object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold">{item.name}</p>
                      <p className="text-xs text-orange">{formatPrice(item)}</p>
                      <div className="mt-1.5 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => remove(item.id)}
                          aria-label={`Decrease ${item.name} quantity`}
                          className="grid h-7 w-7 place-items-center rounded-full border border-border hover:bg-muted"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-5 text-center text-sm font-semibold" aria-live="polite">
                          {qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQty(item.id, qty + 1)}
                          aria-label={`Increase ${item.name} quantity`}
                          className="grid h-7 w-7 place-items-center rounded-full border border-border hover:bg-muted"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setQty(item.id, 0)}
                          aria-label={`Remove ${item.name} from order`}
                          className="ml-1 grid h-7 w-7 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={clear}
                className="mt-3 text-xs font-medium text-muted-foreground underline underline-offset-4 hover:text-destructive"
              >
                Clear order
              </button>

              <p className="mt-4 rounded-2xl bg-cream p-4 text-xs leading-relaxed text-muted-foreground">
                Prices shown are on request — the restaurant confirms the final
                total with you on WhatsApp before preparing the order.
              </p>

              <form onSubmit={handleSubmit} className="mt-4 space-y-4 pb-4">
                <fieldset>
                  <legend className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Order type
                  </legend>
                  <div className="grid grid-cols-2 gap-1 rounded-full border border-border bg-cream p-1">
                    {(["takeaway", "dine-in"] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setOrderType(type)}
                        aria-pressed={orderType === type}
                        className={`rounded-full py-2 text-sm font-medium transition-colors ${
                          orderType === type
                            ? "bg-charcoal text-cream"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {type === "takeaway" ? "Takeaway" : "Dine-in"}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label
                    htmlFor="order-name"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                  >
                    Your name
                  </label>
                  <input
                    id="order-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ahmed"
                    autoComplete="name"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring"
                  />
                </div>

                <div>
                  <label
                    htmlFor="order-phone"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                  >
                    Phone number
                  </label>
                  <input
                    id="order-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0300 1234567"
                    autoComplete="tel"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring"
                  />
                </div>

                <div>
                  <label
                    htmlFor="order-notes"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                  >
                    Special instructions{" "}
                    <span className="font-normal normal-case">(optional)</span>
                  </label>
                  <textarea
                    id="order-notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Anything we should know?"
                    rows={2}
                    className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring"
                  />
                </div>

                {error && (
                  <p role="alert" className="text-sm font-medium text-destructive">
                    {error}
                  </p>
                )}
              </form>
            </div>

            <div className="border-t border-border px-6 py-4">
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full rounded-full bg-lime py-3.5 font-semibold text-charcoal transition-colors hover:bg-lime-deep"
              >
                Send Order on WhatsApp
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
