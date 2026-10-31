
import { dishes } from "./dishes";
import { validateOrder } from "./validation";

export function processOrder(input) {
  const validation = validateOrder(input);

  if (!validation.valid) {
    return {
      ok: false,
      status: 400,
      errors: validation.errors,
    };
  }

  const verifiedItems = [];

  for (const item of input.items) {
    const dish = dishes.find((candidate) => candidate.id === item.id);

    if (!dish || !dish.available) {
      return {
        ok: false,
        status: 400,
        errors: {
          items: `Dish ${item.id} is unavailable or does not exist.`,
        },
      };
    }

    if (
      typeof dish.price !== "number" ||
      !Number.isFinite(dish.price) ||
      dish.price < 0
    ) {
      return {
        ok: false,
        status: 500,
        errors: {
          order: "A dish has an invalid configured price.",
        },
      };
    }

    verifiedItems.push({
      id: dish.id,
      name: dish.name,
      quantity: item.quantity,
      unitPrice: dish.price,
      subtotal: dish.price * item.quantity,
    });
  }

  const total = verifiedItems.reduce(
    (sum, item) => sum + item.subtotal,
    0
  );

  return {
    ok: true,
    order: {
      customer: {
        name: input.name.trim(),
        phone: input.phone.trim(),
        address: input.address.trim(),
      },
      items: verifiedItems,
      total,
      currency: "ETB",
      status: "validated",
    },
  };
}
