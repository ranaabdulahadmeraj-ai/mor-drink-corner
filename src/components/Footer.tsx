import Logo from "@/components/Logo";
import { CATEGORIES } from "@/data/menu";
import { SITE } from "@/data/site";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Location", href: "#location" },
];

const EXTERNAL_LINKS = [
  { label: "WhatsApp Us", href: SITE.whatsappUrl },
  { label: "Get Directions", href: SITE.directionsUrl },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal pb-28 pt-16 text-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              {SITE.description} Dine in or take away at Chowk Rasheedabad,
              Khanewal Road.
            </p>
          </div>

          <nav aria-label="Footer quick links">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-lime">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream/70 transition-colors hover:text-lime"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Menu categories">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-lime">
              Menu
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#menu"
                    className="text-cream/70 transition-colors hover:text-lime"
                  >
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-lime">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/70">
              <li>
                <a href={SITE.phoneHref} className="transition-colors hover:text-lime">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="leading-relaxed">{SITE.address}</li>
              {EXTERNAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-lime"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-cream/50 sm:flex-row">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p>Dine-in &amp; Takeaway · Multan, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
