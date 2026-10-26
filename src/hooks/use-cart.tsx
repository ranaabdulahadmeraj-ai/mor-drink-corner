import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { MENU_ITEMS, type MenuItem } from "@/data/menu";

export type CartLine = { item: MenuItem; qty: number };

const STORAGE_KEY = "mor-cart-v1";

type CartContextValue = {
  lines: CartLine[];
  count: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  add: (id: string) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function readStoredQty(): Record<string, number> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, number>;
    return typeof parsed === "object" && parsed !== null ? parsed : {};
  } catch {
    return {};
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [isOpen, setIsOpen] = useState(false);
  // Load persisted cart after mount so SSR output stays consistent.
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setQuantities(readStoredQty());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(quantities));
    } catch {
      // Storage can be unavailable (private mode) — the cart still works in memory.
    }
  }, [quantities, hydrated]);

  const add = useCallback((id: string) => {
    setQuantities((q) => ({ ...q, [id]: (q[id] ?? 0) + 1 }));
  }, []);

  const remove = useCallback((id: string) => {
    setQuantities((q) => {
      const next = { ...q };
      const qty = (next[id] ?? 0) - 1;
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setQuantities((q) => {
      const next = { ...q };
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });
  }, []);

  const clear = useCallback(() => setQuantities({}), []);

  const lines = useMemo<CartLine[]>(
    () =>
      Object.entries(quantities)
        .filter(([, qty]) => qty > 0)
        .map(([id, qty]) => {
          const item = MENU_ITEMS.find((i) => i.id === id);
          return item ? { item, qty } : null;
        })
        .filter((l): l is CartLine => l !== null),
    [quantities],
  );

  const count = useMemo(() => lines.reduce((sum, l) => sum + l.qty, 0), [lines]);

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      count,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      add,
      remove,
      setQty,
      clear,
    }),
    [lines, count, isOpen, add, remove, setQty, clear],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
