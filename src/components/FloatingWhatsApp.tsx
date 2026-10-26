import { MessageCircle } from "lucide-react";
import { SITE } from "@/data/site";

/**
 * Floating WhatsApp shortcut. Sits above the footer's bottom padding so it
 * never covers content; the cart panel (z-50) takes priority when open.
 */
export default function FloatingWhatsApp() {
  return (
    <a
      href={SITE.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with MOR Drink Corner on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-lime text-charcoal shadow-lg shadow-charcoal/40 transition-transform hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2} />
    </a>
  );
}
