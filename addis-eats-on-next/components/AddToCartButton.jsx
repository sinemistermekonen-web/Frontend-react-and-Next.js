"use client";

import { useCart } from "./Providers";

export default function AddToCartButton({ dish }) {
  const { addItem } = useCart();
  return (
    <button className="button button-primary" type="button" onClick={() => addItem(dish)} disabled={!dish.available}>
      {dish.available ? "Add to cart" : "Unavailable"}
    </button>
  );
}
