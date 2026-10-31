
import { Link, useSearchParams } from "react-router-dom";
import { dishes } from "../data";

function Menu( {addtocart}) { 

   const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category");

  const filteredDishes = category ? dishes.filter((dish) => dish.category === category) : dishes;

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
        <div>
            <button onClick={() => handleCategoryChange("all")}>All</button>
            <button onClick={() => handleCategoryChange("traditonal")}>Traditional</button>
            <button onClick={() => handleCategoryChange("vegetarian")}>Vegetarian</button>
            <button onClick={() => handleCategoryChange("meat")}>Meat</button>
            
        </div>

      {filteredDishes.map((dish) => (
        <article key={dish.id}>
          <h3>{dish.name}</h3>
          <p>{dish.description}</p>
          <p>{dish.price} ETB</p>

          <Link to={`/menu/${dish.id}`}>
            View Dish
          </Link>
          <button onClick={() => addtocart(dish)}> Add to Cart</button>
        </article>
      ))}
    </section>
  );
}

export default Menu;

