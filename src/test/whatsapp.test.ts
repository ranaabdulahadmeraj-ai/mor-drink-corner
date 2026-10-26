import { describe, expect, it } from "vitest";
import { buildOrderMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { MENU_ITEMS } from "@/data/menu";

const zinger = MENU_ITEMS.find((i) => i.id === "zinger-burger")!;
const fries = MENU_ITEMS.find((i) => i.id === "french-fries")!;

const order = {
  lines: [
    { item: zinger, qty: 2 },
    { item: fries, qty: 1 },
  ],
  orderType: "takeaway" as const,
  name: "Ahad",
  phone: "0300 1234567",
  notes: "Extra ketchup",
};

describe("WhatsApp order generation", () => {
  it("targets the restaurant's WhatsApp click-to-chat number", () => {
    expect(
      buildWhatsAppUrl(order).startsWith("https://wa.me/923087266644?text="),
    ).toBe(true);
  });

  it("lists every item with its quantity plus order details", () => {
    const msg = buildOrderMessage(order);
    expect(msg).toContain("2× Zinger Burger");
    expect(msg).toContain("1× French Fries");
    expect(msg).toContain("Order type: Takeaway");
    expect(msg).toContain("Name: Ahad");
    expect(msg).toContain("Phone: 0300 1234567");
    expect(msg).toContain("Special instructions: Extra ketchup");
  });

  it("URL-encodes the generated message", () => {
    const url = buildWhatsAppUrl(order);
    expect(url).not.toMatch(/\s/);
    expect(decodeURIComponent(url.split("?text=")[1]!)).toBe(
      buildOrderMessage(order),
    );
  });

  it("shows 'Price on request' and never fabricates a total", () => {
    const msg = buildOrderMessage(order);
    expect(msg).toContain("Price on request");
    expect(msg.toLowerCase()).not.toMatch(/total\s*[:=]/);
    expect(msg).toContain("Please confirm the items and the final total");
  });
});
