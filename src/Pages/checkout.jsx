function Checkout({ cart}) {
  
    const total = cart.reduce(
  (sum, dish) => sum + dish.price,
  0);
   <p>Total: {total} ETB</p>
   
    return (
        <section>
            
            <h2>Checkout</h2>

            {cart.length ===0 ? ( <p>Your cart is empty.</p>) : (
                <>
                 <h3>Your order</h3>
                 {cart.map((dish) => 
                     ( <p key={dish.id}>
                    {dish.name} - {dish.price} ETB
                </p>))}
            
            </>
        )}
        </section>
    );
  
}
   
export default Checkout;