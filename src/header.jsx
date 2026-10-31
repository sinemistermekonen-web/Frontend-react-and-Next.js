import {Link } from "react-router-dom";
import useCartStore from "../store/cartStore";

function Header(){
    const items = useCartStore((state) => state.items
    );

    return (
        <header>
            <h1>Addis cafe</h1>

      <nav>
        <Link to= "/"> Home</Link>
        <Link to= "/menu"> Menu</Link>
        <Link to= "/checkout"> checkout ({items.length})</Link>

      </nav>
        </header>
    );
}
export default Header;
