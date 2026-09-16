import {Link} from "react-router-dom";

function Home(){
    return(
        <section>
            <h2>Welcome to Addis Eats</h2>

            <p>
                Discover delicious Ethiopian dishes and place your order with ease.

            </p>
            <Link to="/menu">Explore the menu </Link>

        </section>

    );

}
export default Home;