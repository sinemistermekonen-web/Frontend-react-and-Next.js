import useCartStore from "../store/Cartstore";
import OrderForm from "../components/Orderform";

function Checkout() {
  const items = useCartStore((state) => state.items);
  const clear = useCartStore((state) => state.clear);
  const remove = useCartStore((state) => state.remove);

  const total = items.reduce(
    (sum, dish) => sum + dish.price,
    0
  );

  function handlePlaceOrder(customer) {
    if (items.length === 0) return;

    alert(
      `Order placed successfully!

Name: ${customer.name}
Phone: ${customer.phone}
Delivery Area: ${customer.area}

Total: ${total} ETB`
    );

    clear();
  }

  return (
    <section>
      <h2>Checkout</h2>

      {items.length === 0 ? (
        <p>Your cart is empty. Add dishes before checking out.</p>
      ) : (
        <>
          <h3>Your Order</h3>

          {items.map((dish) => (
            <div key={dish.id}>
              <p>
                {dish.name} - {dish.price} ETB

                <button onClick={() => remove(dish.id)}>
                  Remove
                </button>
              </p>
            </div>
          ))}

          <h3>Total: {total} ETB</h3>

          <button onClick={clear}>
            Clear Cart
          </button>
        </>
      )}

      <OrderForm
        onPlaceOrder={handlePlaceOrder}
        disabled={items.length === 0}
      />
    </section>
  );
}

export default Checkout;