import { useState } from "react";

const OrderForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const phoneRegex = /^(?:\+251|0)9\d{8}$/;

  const validPhone = phoneRegex.test(form.phone);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validPhone) {
      return;
    }

    alert("Order submitted successfully");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Delivery Information</h2>

      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="TeleBirr phone number"
        value={form.phone}
        onChange={handleChange}
      />

      <input
        type="text"
        name="area"
        placeholder="Delivery area"
        value={form.area}
        onChange={handleChange}
      />

      {!validPhone && form.phone && (
        <p>Enter a valid TeleBirr number.</p>
      )}

      <button
        type="submit"
        disabled={!validPhone}
      >
        Place Order
      </button>
    </form>
  );
};

export default OrderForm;