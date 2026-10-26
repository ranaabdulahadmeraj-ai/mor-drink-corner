import { createFileRoute } from "@tanstack/react-router";
import { CartProvider } from "@/hooks/use-cart";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import DrinksShowcase from "@/components/DrinksShowcase";
import DessertsSection from "@/components/DessertsSection";
import WhyVisit from "@/components/WhyVisit";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { SITE } from "@/data/site";

const SEO_TITLE = "MOR Drink Corner | Drinks, Ice Cream & Fast Food in Multan";
const SEO_DESCRIPTION =
  "Explore drinks, ice cream, and fast-food offerings at MOR Drink Corner on Khanewal Road, Multan. Contact us for menu details and ordering.";

// Local business structured data — verified details only.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: SITE.name,
  description: SITE.description,
  telephone: SITE.phoneDisplay,
  servesCuisine: ["Fast food", "Beverages", "Desserts"],
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "6F5Q+VM9, Chowk Rasheedabad, Khanewal Road, Shamsabad Colony",
    addressLocality: SITE.addressLocality,
    addressCountry: SITE.addressCountry,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE.rating,
    reviewCount: SITE.reviewCount,
    bestRating: 5,
    worstRating: 1,
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SEO_TITLE },
      { name: "description", content: SEO_DESCRIPTION },
      { property: "og:title", content: SEO_TITLE },
      { property: "og:description", content: SEO_DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <CartProvider>
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <DrinksShowcase />
        <DessertsSection />
        <WhyVisit />
        <AboutSection />
        <ReviewsSection />
        <LocationSection />
      </main>
      <Footer />
      <CartDrawer />
      <FloatingWhatsApp />
    </CartProvider>
  );
}
