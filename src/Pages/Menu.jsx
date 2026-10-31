
import { Link, useSearchParams } from "react-router-dom";
import { dishes } from "../data";
import useCartStore from "../store/Cartstore";
import CategoryBar from "../components/CategoryBar";

function Menu() {

  const addItem = useCartStore((state) => state.addItem);

  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category");

  const categories = ["all", "traditional", "vegetarian", "meat"];

  const filteredDishes = category

    ? dishes.filter((dish) => dish.category === category)

    : dishes;

  function handleCategoryChange(newCategory) {

    if (newCategory === "all") {

      setSearchParams({});

    } else {
      
      setSearchParams({ category: newCategory });

    }
  }

  return (
    <section>
      <h2>Our Menu</h2>

      <CategoryBar
        categories={categories}
        selectedCategory={category || "all"}
        onSelect={handleCategoryChange}
      />

      {filteredDishes.map((dish) => (
        <article key={dish.id}>
          <h3>{dish.name}</h3>

          <p>{dish.description}</p>

          <p>{dish.price} ETB</p>

          <Link to={`/menu/${dish.id}`}>
            View Dish
          </Link>

          <button onClick={() => addItem(dish)}>
            Add to Cart
          </button>
        </article>
      ))}
    </section>
  );
}

export default Menu;
