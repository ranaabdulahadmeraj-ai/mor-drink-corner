/**
 * MOR Drink Corner — menu data.
 *
 * IMPORTANT: These are proposed sample items, not a confirmed official menu.
 * No prices are configured yet, so every item shows "Price on request".
 * To set a real price, add `price: 350` (in PKR) to an item — the card and
 * the WhatsApp order will then show the actual price and calculate totals.
 */

export type CategoryId =
  | "fresh-drinks"
  | "margaritas"
  | "milkshakes"
  | "ice-cream"
  | "fast-food";

export type Category = { id: CategoryId; label: string };

export const CATEGORIES: Category[] = [
  { id: "fresh-drinks", label: "Fresh Drinks" },
  { id: "margaritas", label: "Margaritas" },
  { id: "milkshakes", label: "Milkshakes" },
  { id: "ice-cream", label: "Ice Cream" },
  { id: "fast-food", label: "Fast Food" },
];

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  /** A single item can appear under more than one category filter. */
  categories: CategoryId[];
  /** File name inside /public/images/menu/ — replace with real product photos. */
  image: string;
  /** Price in PKR, or null to show "Price on request". */
  price: number | null;
};

export const MENU_ITEMS: MenuItem[] = [
  // Fresh Drinks
  {
    id: "fresh-lime",
    name: "Fresh Lime",
    description: "Chilled lime drink served over ice.",
    categories: ["fresh-drinks"],
    image: "fresh-lime.jpg",
    price: null,
  },
  {
    id: "fresh-juice",
    name: "Fresh Juice",
    description: "Seasonal fruit juice, served cold.",
    categories: ["fresh-drinks"],
    image: "fresh-juice.jpg",
    price: null,
  },
  {
    id: "mint-margarita",
    name: "Mint Margarita",
    description: "Classic mint margarita topped with crushed ice.",
    categories: ["fresh-drinks", "margaritas"],
    image: "mint-margarita.jpg",
    price: null,
  },
  {
    id: "lemon-mint-cooler",
    name: "Lemon Mint Cooler",
    description: "Lemon and mint cooler over crushed ice.",
    categories: ["fresh-drinks", "margaritas"],
    image: "lemon-mint-cooler.jpg",
    price: null,
  },
  // Milkshakes
  {
    id: "shake-chocolate",
    name: "Chocolate Milkshake",
    description: "Creamy chocolate milkshake, blended and served chilled.",
    categories: ["milkshakes"],
    image: "shake-chocolate.jpg",
    price: null,
  },
  {
    id: "shake-vanilla",
    name: "Vanilla Milkshake",
    description: "Smooth vanilla milkshake, blended and served chilled.",
    categories: ["milkshakes"],
    image: "shake-vanilla.jpg",
    price: null,
  },
  {
    id: "shake-strawberry",
    name: "Strawberry Milkshake",
    description: "Creamy strawberry milkshake, blended and served chilled.",
    categories: ["milkshakes"],
    image: "shake-strawberry.jpg",
    price: null,
  },
  {
    id: "shake-oreo",
    name: "Oreo Shake",
    description: "Cookies-and-cream milkshake blended with chocolate cookies.",
    categories: ["milkshakes"],
    image: "shake-oreo.jpg",
    price: null,
  },
  // Ice Cream
  {
    id: "ice-vanilla",
    name: "Vanilla Ice Cream",
    description: "Vanilla ice cream, served in scoops.",
    categories: ["ice-cream"],
    image: "ice-vanilla.jpg",
    price: null,
  },
  {
    id: "ice-chocolate",
    name: "Chocolate Ice Cream",
    description: "Chocolate ice cream, served in scoops.",
    categories: ["ice-cream"],
    image: "ice-chocolate.jpg",
    price: null,
  },
  {
    id: "ice-strawberry",
    name: "Strawberry Ice Cream",
    description: "Strawberry ice cream, served in scoops.",
    categories: ["ice-cream"],
    image: "ice-strawberry.jpg",
    price: null,
  },
  {
    id: "ice-sundae",
    name: "Special Ice Cream Sundae",
    description: "Ice cream sundae layered with sauces and toppings.",
    categories: ["ice-cream"],
    image: "ice-sundae.jpg",
    price: null,
  },
  // Fast Food
  {
    id: "zinger-burger",
    name: "Zinger Burger",
    description: "Crispy fried chicken burger in a toasted bun.",
    categories: ["fast-food"],
    image: "zinger-burger.jpg",
    price: null,
  },
  {
    id: "chicken-burger",
    name: "Chicken Burger",
    description: "Grilled chicken burger with fresh lettuce.",
    categories: ["fast-food"],
    image: "chicken-burger.jpg",
    price: null,
  },
  {
    id: "french-fries",
    name: "French Fries",
    description: "Golden fried potato fries, served hot.",
    categories: ["fast-food"],
    image: "french-fries.jpg",
    price: null,
  },
  {
    id: "loaded-fries",
    name: "Loaded Fries",
    description: "Fries topped with cheese sauce and jalapeños.",
    categories: ["fast-food"],
    image: "loaded-fries.jpg",
    price: null,
  },
  {
    id: "roast-chicken-rice",
    name: "Roast Chicken with Rice",
    description: "Whole roasted chicken served over spiced rice.",
    categories: ["fast-food"],
    image: "roast-chicken-rice.jpg",
    price: null,
  },
  {
    id: "kabab-stuffed-pizza",
    name: "Kabab Stuffed Pizza",
    description: "Stuffed-crust pizza topped with seek kabab and creamy sauce.",
    categories: ["fast-food"],
    image: "kabab-stuffed-pizza.jpg",
    price: null,
  },
];

export function formatPrice(item: MenuItem): string {
  return item.price === null ? "Price on request" : `Rs ${item.price}`;
}
