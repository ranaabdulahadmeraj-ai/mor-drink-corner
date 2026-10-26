/**
 * MOR Drink Corner — verified business information.
 * Update these values here and they change everywhere on the site.
 */
export const SITE = {
  name: "MOR Drink Corner",
  shortName: "MOR",
  description:
    "Fast food, fresh drinks, and ice cream on Khanewal Road, Multan.",
  // Phone
  phoneDisplay: "+92 308 7266644",
  phoneHref: "tel:+923087266644",
  // WhatsApp click-to-chat (international format, no "+")
  whatsappNumber: "923087266644",
  whatsappUrl: "https://wa.me/923087266644",
  // Location
  address:
    "6F5Q+VM9, Chowk Rasheedabad, Khanewal Road, Shamsabad Colony, Multan, Pakistan",
  addressLocality: "Multan",
  addressCountry: "PK",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=MOR+Drink+Corner%2C+6F5Q%2BVM9%2C+Multan%2C+Pakistan",
  mapEmbedUrl:
    "https://www.google.com/maps?q=MOR+Drink+Corner,+6F5Q%2BVM9,+Khanewal+Road,+Multan,+Pakistan&z=16&output=embed",
  // Reviews — update these two values when the Google rating changes.
  rating: 3.4,
  reviewCount: 20,
  reviewsUrl:
    "https://www.google.com/maps/search/MOR+Drink+Corner+6F5Q%2BVM9+Khanewal+Road+Multan+Pakistan",
  // Hours — only the reported closing time is verified.
  closingNote: "Reported closing time: 2:00 AM",
  services: ["Dine-in", "Takeaway"],
} as const;
