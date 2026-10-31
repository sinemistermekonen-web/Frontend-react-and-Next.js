"use server";

import { processOrder } from "../lib/orders";

export async function submitOrder(_previousState, formData) {
  const rawItems = formData.get("items");
  let items;

  try {
    items = JSON.parse(typeof rawItems === "string" ? rawItems : "[]");
  } catch {
    return { success: false, errors: { items: "The submitted cart is invalid." }, message: "" };
  }

  const result = processOrder({
    name: formData.get("name"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    items,
  });

  if (!result.ok) {
    return { success: false, errors: result.errors, message: "Please correct the highlighted information." };
  }

  return {
    success: true,
    errors: {},
    message: `Your order has been validated. Total: ${result.order.total.toFixed(2)} ETB. This demo does not save or dispatch orders.`,
  };
}
