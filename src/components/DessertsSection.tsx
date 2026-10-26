import Reveal from "@/components/Reveal";
import dessertsImage from "@/assets/desserts.jpg";

export default function DessertsSection() {
  return (
    <section id="desserts" className="scroll-mt-20 bg-secondary py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <img
            src={dessertsImage}
            alt="Ice cream sundae with chocolate sauce and strawberry scoops"
            width={1536}
            height={1024}
            loading="lazy"
            className="w-full rounded-[2rem] object-cover shadow-lg"
          />
        </Reveal>

        <Reveal delay={120}>
          <div>
            <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-orange">
              <span className="h-px w-8 bg-orange" /> Ice Cream &amp; Desserts
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Make Room for Something Sweet.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              Scoops, sundaes and shakes — our freezer keeps something sweet
              waiting. Ask us on WhatsApp what's in it today.
            </p>
            <a
              href="#menu"
              className="mt-8 inline-flex rounded-full bg-orange px-7 py-3.5 font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Explore Desserts
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
