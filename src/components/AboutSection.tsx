import { MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SITE } from "@/data/site";
import aboutImage from "@/assets/about.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-cream py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <img
            src={aboutImage}
            alt="Inside MOR Drink Corner — counter with drinks and ice cream display"
            width={1536}
            height={1024}
            loading="lazy"
            className="w-full rounded-[2rem] object-cover shadow-lg"
          />
        </Reveal>

        <Reveal delay={120}>
          <div>
            <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-orange">
              <span className="h-px w-8 bg-orange" /> About Us
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              A Local Stop for Your Food &amp; Drink Cravings.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              {SITE.name} is located on Khanewal Road in Shamsabad Colony,
              Multan. Explore our drinks, ice cream, and fast-food offerings,
              and contact us to confirm today's menu and prices.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#menu"
                className="rounded-full bg-charcoal px-7 py-3.5 font-semibold text-cream transition-opacity hover:opacity-90"
              >
                View Menu
              </a>
              <a
                href={SITE.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 font-semibold text-foreground transition-colors hover:border-charcoal/40"
              >
                <MapPin className="h-5 w-5" />
                Get Directions
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
