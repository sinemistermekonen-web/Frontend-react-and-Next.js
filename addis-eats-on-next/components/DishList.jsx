"use client";

import { useMemo, useState } from "react";
import DishCard from "./DishCard";

const categories = ["All", "Traditional", "Vegetarian", "Meat"];

export default function DishList({ dishes }) {
  const [selected, setSelected] = useState("All");
  const filtered = useMemo(
    () => selected === "All" ? dishes : dishes.filter((dish) => dish.category === selected),
    [dishes, selected]
  );

  return (
    <section aria-label="Available dishes">
      <div className="category-bar" aria-label="Filter dishes by category">
        {categories.map((category) => (
          <button key={category} type="button" className={selected === category ? "category-button active" : "category-button"}
            aria-pressed={selected === category} onClick={() => setSelected(category)}>
            {category}
          </button>
        ))}
      </div>
      {filtered.length ? (
        <div className="dish-grid">{filtered.map((dish) => <DishCard key={dish.id} dish={dish} />)}</div>
      ) : <p>No dishes are available in this category right now.</p>}
    </section>
  );
}
