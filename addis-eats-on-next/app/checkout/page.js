"use client";

import { useActionState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "../../components/Providers";
import { submitOrder } from "../actions";

const initialState = { success: false, errors: {}, message: "" };

export default function CheckoutPage() {
  const { items, total, clearCart, ready } = useCart();
  const [state, formAction, pending] = useActionState(submitOrder, initialState);

  useEffect(() => { if (state.success) clearCart(); }, [state.success, clearCart]);

  if (!ready) return <main className="page-container content-page"><p>Loading checkout…</p></main>;
  if (state.success) return <main className="page-container content-page"><div className="empty-state" role="status"><span className="eyebrow">Order checked</span><h1>Thank you!</h1><p>{state.message}</p><p>This is a coursework demo: no payment, delivery, or permanent order storage is connected.</p><Link className="button button-primary" href="/menu">Back to menu</Link></div></main>;

  return (
    <main className="page-container content-page checkout-layout">
      <section><span className="eyebrow">One last step</span><h1>Checkout</h1>
        {items.length === 0 ? <div className="empty-state"><p>Your cart is empty. Add dishes before checkout.</p><Link className="button button-primary" href="/menu">Browse menu</Link></div> : <>
          <form className="checkout-form" action={formAction}>
            <input type="hidden" name="items" value={JSON.stringify(items.map(({ id, quantity }) => ({ id, quantity })))} />
            <label htmlFor="name">Full name</label><input id="name" name="name" autoComplete="name" required minLength={2} maxLength={80} />{state.errors?.name && <p className="field-error">{state.errors.name}</p>}
            <label htmlFor="phone">Ethiopian mobile number</label><input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="0912345678" required />{state.errors?.phone && <p className="field-error">{state.errors.phone}</p>}
            <label htmlFor="address">Delivery address</label><textarea id="address" name="address" autoComplete="street-address" required minLength={3} maxLength={200} rows={3} />{state.errors?.address && <p className="field-error">{state.errors.address}</p>}
            {state.errors?.items && <p className="field-error">{state.errors.items}</p>}{state.errors?.order && <p className="field-error">{state.errors.order}</p>}
            <button className="button button-primary" type="submit" disabled={pending || items.length === 0}>{pending ? "Checking order…" : "Validate order"}</button>
          </form>
        </>}
      </section>
      {items.length > 0 && <aside className="order-summary"><h2>Order summary</h2>{items.map((item) => <p key={item.id}>{item.name} × {item.quantity}<strong>{(item.price * item.quantity).toFixed(2)} ETB</strong></p>)}<hr /><h3>Total <strong>{total.toFixed(2)} ETB</strong></h3></aside>}
    </main>
  );
}
