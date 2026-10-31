"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "addis-eats-cart";

export function Providers({ children }) {
  const [items, setItems] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          // Hydrate the browser-only cart after the initial server render.
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setItems(parsed);
        }
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (ready) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, ready]);

  const addItem = useCallback((dish) => {
    if (!dish || !Number.isSafeInteger(dish.id) || !dish.available) return;
    setItems((current) => {
      const found = current.find((item) => item.id === dish.id);
      if (found) {
        return current.map((item) => item.id === dish.id
          ? { ...item, quantity: Math.min(item.quantity + 1, 20) }
          : item);
      }
      return [...current, { id: dish.id, name: dish.name, price: dish.price, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((id) => setItems((current) => current.filter((item) => item.id !== id)), []);
  const updateQuantity = useCallback((id, quantity) => {
    const next = Math.max(1, Math.min(20, Number(quantity) || 1));
    setItems((current) => current.map((item) => item.id === id ? { ...item, quantity: next } : item));
  }, []);
  const clearCart = useCallback(() => setItems([]), []);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const value = useMemo(() => ({
    items, addItem, removeItem, updateQuantity, clearCart, total, ready,
  }), [items, addItem, removeItem, updateQuantity, clearCart, total, ready]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside Providers.");
  return context;
}
