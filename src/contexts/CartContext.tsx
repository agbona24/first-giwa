"use client";

import { createContext, useContext, useState, useCallback } from "react";

interface CartContextType {
  cart: string[];
  toggleCart: (name: string) => void;
  removeFromCart: (name: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<string[]>([]);

  const toggleCart = useCallback((name: string) => {
    setCart((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  }, []);

  const removeFromCart = useCallback((name: string) => {
    setCart((prev) => prev.filter((n) => n !== name));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  return (
    <CartContext.Provider value={{ cart, toggleCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
