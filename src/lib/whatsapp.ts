import { SITE } from "@/data/site";
import type { CartLine } from "@/hooks/use-cart";
import { formatPrice } from "@/data/menu";

export type OrderDetails = {
  lines: CartLine[];
  orderType: "dine-in" | "takeaway";
  name: string;
  phone: string;
  notes?: string;
};

/**
 * Builds the WhatsApp order message. When an item has no configured price it
 * is listed as "Price on request" and NO total is calculated — the restaurant
 * confirms the final total in the chat.
 */
export function buildOrderMessage(order: OrderDetails): string {
  const itemLines = order.lines.map(
    (line) => `• ${line.qty}× ${line.item.name} — ${formatPrice(line.item)}`,
  );

  const hasAllPrices = order.lines.every((line) => line.item.price !== null);

  const parts = [
    `Hi ${SITE.name}! I'd like to place an order:`,
    "",
    ...itemLines,
    "",
    `Order type: ${order.orderType === "dine-in" ? "Dine-in" : "Takeaway"}`,
    `Name: ${order.name}`,
    `Phone: ${order.phone}`,
  ];

  if (order.notes) parts.push(`Special instructions: ${order.notes}`);

  parts.push(
    hasAllPrices
      ? "Please confirm my order. Thank you!"
      : "Please confirm the items and the final total. Thank you!",
  );

  return parts.join("\n");
}

/** Correct WhatsApp click-to-chat URL, URL-encoded, for the restaurant's number. */
export function buildWhatsAppUrl(order: OrderDetails): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    buildOrderMessage(order),
  )}`;
}
