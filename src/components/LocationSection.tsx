import { Clock, MapPin, MessageCircle, Phone, UtensilsCrossed, ShoppingBag } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SITE } from "@/data/site";

export default function LocationSection() {
  return (
    <section id="location" className="scroll-mt-20 bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-orange">
              <span className="h-px w-8 bg-orange" /> Location &amp; Contact
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Find Us in Multan
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div
              id="contact"
              className="flex h-full scroll-mt-24 flex-col rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-9"
            >
              <h3 className="font-display text-xl font-bold">{SITE.name}</h3>

              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                  <span className="leading-relaxed">{SITE.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-orange" />
                  <a
                    href={SITE.phoneHref}
                    className="font-medium underline-offset-4 hover:underline"
                  >
                    {SITE.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-orange" />
                  <span>{SITE.closingNote} — call to confirm today's hours.</span>
                </li>
                <li className="flex flex-wrap gap-2 pt-1">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium">
                    <UtensilsCrossed className="h-3.5 w-3.5" /> Dine-in
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium">
                    <ShoppingBag className="h-3.5 w-3.5" /> Takeaway
                  </span>
                </li>
              </ul>

              {/* Opening hours: only the reported closing time is verified.
                  The owner can add a full weekly schedule later. */}
              <p className="mt-5 rounded-2xl bg-cream p-4 text-xs leading-relaxed text-muted-foreground">
                Weekly opening hours will be published once confirmed by the
                store — meanwhile, a quick call gets you today's timings.
              </p>

              <div className="mt-auto flex flex-wrap gap-3 pt-7">
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-charcoal transition-colors hover:bg-lime-deep"
                >
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <a
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:border-charcoal/40"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
                <a
                  href={SITE.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:border-charcoal/40"
                >
                  <MapPin className="h-4 w-4" /> Get Directions
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full overflow-hidden rounded-3xl border border-border shadow-sm">
              <iframe
                title={`Map showing ${SITE.name}, Multan`}
                src={SITE.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-[420px] w-full lg:h-full lg:min-h-[520px]"
              />
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Map not loading?{" "}
              <a
                href={SITE.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-foreground"
              >
                Open directions in Google Maps
              </a>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
