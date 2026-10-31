
export function validateOrder(input) {
  const errors = {};

  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return {
      valid: false,
      errors: { order: "Invalid order data." },
    };
  }

  const name =
    typeof input.name === "string" ? input.name.trim() : "";

  const phone =
    typeof input.phone === "string" ? input.phone.trim() : "";

  const address =
    typeof input.address === "string" ? input.address.trim() : "";

  if (name.length < 2 || name.length > 80) {
    errors.name = "Name must be between 2 and 80 characters.";
  }

  if (!/^(?:\+251|0)9\d{8}$/.test(phone)) {
    errors.phone = "Enter a valid Ethiopian mobile number.";
  }

  if (address.length < 3 || address.length > 200) {
    errors.address = "Enter a valid delivery address.";
  }

  if (!Array.isArray(input.items) || input.items.length === 0) {
    errors.items = "Your cart is empty.";
  } else if (input.items.length > 50) {
    errors.items = "Too many items in one order.";
  } else {
    const seen = new Set();

    for (const item of input.items) {
      if (
        !item ||
        !Number.isSafeInteger(item.id) ||
        !Number.isInteger(item.quantity) ||
        item.quantity < 1 ||
        item.quantity > 20
      ) {
        errors.items = "Invalid dish ID or quantity.";
        break;
      }

      if (seen.has(item.id)) {
        errors.items = "Each dish must appear only once in the order.";
        break;
      }

      seen.add(item.id);
    }
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
