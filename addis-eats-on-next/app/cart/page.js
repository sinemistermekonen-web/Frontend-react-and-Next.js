"use client";

import Link from "next/link";
import { useCart } from "../../components/Providers";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, total, ready } = useCart();
  if (!ready) return <main className="page-container content-page"><h1>Your cart</h1><p>Loading your cart…</p></main>;
  return (
    <main className="page-container content-page">
      <span className="eyebrow">Almost yours</span><h1>Your cart</h1>
      {items.length === 0 ? <div className="empty-state"><h2>Your cart is waiting</h2><p>Add a few delicious dishes to get started.</p><Link className="button button-primary" href="/menu">Browse menu</Link></div> : <>
        <div className="cart-list">{items.map((item) => <article className="cart-item" key={item.id}>
          <div><h2>{item.name}</h2><p>{item.price.toFixed(2)} ETB each</p></div>
          <label className="quantity-label">Qty <input aria-label={`Quantity for ${item.name}`} type="number" min="1" max="20" value={item.quantity} onChange={(event) => updateQuantity(item.id, event.target.value)} /></label>
          <strong>{(item.price * item.quantity).toFixed(2)} ETB</strong>
          <button className="button button-quiet" type="button" onClick={() => removeItem(item.id)}>Remove</button>
        </article>)}</div>
        <div className="cart-summary"><button className="button button-quiet" type="button" onClick={clearCart}>Clear cart</button><h2>Total: {total.toFixed(2)} ETB</h2><Link className="button button-primary" href="/checkout">Continue to checkout →</Link></div>
      </>}
    </main>
  );
}
