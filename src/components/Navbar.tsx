import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import Logo from "@/components/Logo";
import { useCart } from "@/hooks/use-cart";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { count, openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-charcoal/95 text-cream backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#home" aria-label="MOR Drink Corner — back to top">
            <Logo />
          </a>

          <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-cream/80 transition-colors hover:text-lime"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={openCart}
              className="relative inline-flex items-center gap-2 rounded-full border border-cream/25 px-3.5 py-2 text-sm font-medium transition-colors hover:border-lime hover:text-lime"
              aria-label={`Open your order (${count} item${count === 1 ? "" : "s"})`}
            >
              <ShoppingBag className="h-4.5 w-4.5" />
              <span className="hidden sm:inline">Order</span>
              {count > 0 && (
                <span className="absolute -right-1.5 -top-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-lime px-1 text-[0.65rem] font-bold text-charcoal">
                  {count}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={openCart}
              className="hidden rounded-full bg-lime px-5 py-2 text-sm font-semibold text-charcoal transition-colors hover:bg-lime-deep md:inline-flex"
            >
              Order Now
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-full border border-cream/25 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-charcoal text-cream lg:hidden">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6">
            <Logo />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-full border border-cream/25"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav
            aria-label="Mobile"
            className="flex flex-1 flex-col justify-center gap-2 px-8"
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-4 font-display text-2xl font-semibold transition-colors hover:text-lime"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="p-8">
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                openCart();
              }}
              className="w-full rounded-full bg-lime py-3.5 font-semibold text-charcoal"
            >
              Order Now
            </button>
          </div>
        </div>
      )}
    </>
  );
}
