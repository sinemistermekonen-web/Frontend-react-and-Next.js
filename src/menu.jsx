import { useState } from "react";
import { dishes } from "./data";
import CategoryBar from "./CategoryBar";
import OrderForm from "./OrderForm";

const Menu = () => {
  const [category, setCategory] = useState("All");
  const [order, setOrder] = useState([]);

  const categories = [ "All",  ...new Set(dishes.map((dish) => dish.category))

   ];

  const filteredDishes =
    category === "All"? dishes :
       dishes.filter((dish) => dish.category === category);

  const addDish = (dish) => {
    setOrder([...order, dish]);
  };

  const total = order.reduce(
    (sum, dish) => sum + dish.price,0
  
  );

  return (
    <div>
      <h1>Addis Eats</h1>

      <CategoryBar
        categories={categories}
        selectedCategory={category}
        onSelect={setCategory}
      />

      <div>
        {filteredDishes.map((dish) => (
          <Dish
            key={dish.id}
            dish={dish}
            onAdd={addDish}
          />
        ))}
      </div>

      <h2>Order Total: {total} ETB</h2>

      <OrderForm />
    </div>
  );
};

function Dish({ dish, onAdd }) {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
    onAdd(dish);
  };

  return (
    <div className="dish">
      <h2>{dish.name}</h2>
      <p>{dish.price} ETB</p>
      <p>{dish.category}</p>

      {dish.spicy && <p>🌶️ Spicy</p>}

      <button onClick={handleAdd}>
        Add
      </button>

      <p>Quantity: {count}</p>
    </div>
  );
}

export default Menu;