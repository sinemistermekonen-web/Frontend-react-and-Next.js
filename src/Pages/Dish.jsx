import { Link,useParams } from "react-router-dom";
import { dishes} from "../data";
import useCartStore  from  "../store/Cartstore";

function Dish({}){
    const {id} = useParams();

    const addItem = useCartStore((state) => state.addItem);
    
    const dish = dishes.find((item) => item.id === id );
   

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
    <p> {dish.description}</p>
     <p>category {dish.category}</p> 
      <p> price:{dish.price} ETB</p>
       <button onClick={() => addItem(dish)}>  Add to Cart</button>
       
    <br />

    <Link to="/menu">
      Back to Menu
    </Link>

       </section>
       
 );
}
export default Dish;