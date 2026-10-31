import { dishes } from "../../lib/dishes";
import DishList from "../../components/DishList";

export const metadata = { title: "Menu", description: "Browse traditional Ethiopian dishes at Addis Eats." };

export default function MenuPage() {
  const availableDishes = dishes.filter((dish) => dish.available);
  return <main className="page-container content-page"><div className="section-heading"><div><span className="eyebrow">Made with love</span><h1>Our menu</h1><p>Choose something delicious from our Ethiopian kitchen.</p></div></div><DishList dishes={availableDishes} /></main>;
}
