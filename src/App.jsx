import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Dish from "./pages/Dish";
import Checkout from "./pages/checkout";
import SignIn from "./Pages/SignIn";
import NotFound from "./Pages/NotFound";
import RequireAuth from "./RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="menu" element={<Menu />} />

        <Route path="menu/:id" element={<Dish />} />

        <Route path="signin" element={<SignIn />} />

        <Route
          path="checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;