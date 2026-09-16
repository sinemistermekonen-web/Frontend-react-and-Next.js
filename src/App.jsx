import {useState} from "react";
import {Routes,Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Pages/Home";
import Menu from "./Pages/menu";
import Dish from "./Pages/Dish";
import Checkout from "./Pages/Checkout";
import SignIn from "./Pages/SignIn";
import NotFound from "./Pages/NotFound";
import RequireAuth from "./RequireAuth";

function App() {
  const [isAuthenticated,setAuthenticated] = useState(false);
  const [cart,setcart] = useState([]);

  function handleSignIn(){
    setAuthenticated(true);
  }
  function addtocart(dish){
  setcart((currentcart) => [...currentcart,dish]);

}
  return (
    <Routes>
      <Route path="/" element={<Layout cart={cart}/>}>
      
      <Route index element={<Home/>}/>

      <Route path="menu" element={<Menu addtocart={addtocart}/>}/>

      <Route path="menu/:id" element={<Dish addtocart={addtocart}/>}/>

      <Route path="signin" element={<SignIn onSignIn={handleSignIn}/>}

      />
       <Route path="checkout" element={<RequireAuth isAuthenticated={isAuthenticated}>
        <Checkout cart={cart}/>
        </RequireAuth>}
       />
  
       
      <Route path="*" element={<NotFound/>}/>
      
      </Route>
    </Routes>
  );
}
export default App;

