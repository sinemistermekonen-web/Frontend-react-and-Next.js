import { useState } from "react";

function OrderForm({ onPlaceOrder, disabled }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
  });

  const phoneRegex = /^(?:\+251|0)9\d{8}$/;

  const validPhone = phoneRegex.test(form.phone.trim());
  const validName = form.name.trim() !== "";

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validName || !validPhone || !form.area.trim()) {
      return;
    }

    onPlaceOrder(form);

    setForm({
      name: "",
      phone: "",
      area: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Delivery Information</h2>

      <label>Full Name</label>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <label>Phone Number</label>
      <input
        type="tel"
        name="phone"
        placeholder="09XXXXXXXX"
        value={form.phone}
        onChange={handleChange}
        required
      />

      {!validPhone && form.phone && (
        <p>Enter a valid Ethiopian phone number.</p>
      )}

      <label>Delivery Area</label>
      <input
        type="text"
        name="area"
        placeholder="Enter your delivery area"
        value={form.area}
        onChange={handleChange}
        required
      />

      <button
        type="submit"
        disabled={disabled || !validName || !validPhone || !form.area.trim()}
      >
        Place Order
      </button>
    </form>
  );
}

export default OrderForm;