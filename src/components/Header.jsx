import {Link} from "react-router-dom";
 
function Header( cart ){
    return (
        <header>
            <h1> Addis Eats</h1>
            

            <nav>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/checkout">Checkout ({cart.length})</Link>
            </nav>
        </header>
    );
}
export default Header;
