import Link from "next/link";
import { notFound } from "next/navigation";
import { dishes, getDishById } from "../../../lib/dishes";
import AddToCartButton from "../../../components/AddToCartButton";

export const dynamicParams = true;
export function generateStaticParams() { return dishes.map((dish) => ({ id: String(dish.id) })); }

export async function generateMetadata({ params }) {
  const { id } = await params;
  const dish = getDishById(id);
  return dish ? { title: dish.name, description: dish.description } : { title: "Dish not found" };
}

export default async function DishDetailPage({ params }) {
  const { id } = await params;
  const dish = getDishById(id);
  if (!dish) notFound();
  return (
    <main className="page-container content-page">
      <Link className="text-link" href="/menu">← Back to menu</Link>
      <article className="detail-card">
        <span className="eyebrow">{dish.category}</span><h1>{dish.name}</h1>
        <p>{dish.description}</p>
        <p className="detail-price">{dish.price.toFixed(2)} ETB</p>
        <p className={dish.available ? "availability" : "unavailable"}>{dish.available ? "Available to order" : "Currently unavailable"}</p>
        <AddToCartButton dish={dish} />
      </article>
    </main>
  );
}
