import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

export default function DishCard({ dish }) {
  return (
    <article className="dish-card">
      <div className="dish-card-top">
        <span className="eyebrow">{dish.category}</span>
        <span className="price">{dish.price.toFixed(2)} ETB</span>
      </div>
      <h2><Link href={`/menu/${dish.id}`}>{dish.name}</Link></h2>
      <p>{dish.description}</p>
      <div className="card-actions">
        <Link className="text-link" href={`/menu/${dish.id}`}>View details</Link>
        <AddToCartButton dish={dish} />
      </div>
    </article>
  );
}
