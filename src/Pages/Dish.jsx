import { Link,useParams } from "react-router-dom";
import { dishes} from "../data";

function Dish({addtocart}){
    const {id} = useParams();
    const dish = dishes.find((item) => item.id === id );
    <button onClick={() => addtocart(dish)}>  Add to Cart</button>

 if (!dish){
    return (
        <section>
            <h2>Dish not Found</h2>
            <Link to='/menu'>Back to Menu</Link>

        </section>
    );
 }
 return (
    <section>
    <h2>{dish.name}</h2>
    <p> {dish.descirption}</p>
     <p>category {dish.category}</p> 
      <p> price:\{dish.price} ETB</p>
       </section>
 );
}
export default Dish;