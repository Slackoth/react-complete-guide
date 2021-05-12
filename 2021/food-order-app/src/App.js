import React, {useState } from "react";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
import Header from "./components/Layout/Header/Header";
import { CartContextProvider } from "./store/cart-context";

function App() {
  const [toggleCart, setToggleCart] = useState(false);

  const openCartHandler = () => {
    setToggleCart(true);
  };

  const closeCartHandler = () => {
    setToggleCart(false);
  };

  return (
    <CartContextProvider>
      {toggleCart && <Cart onClose={closeCartHandler}/>}
      <Header onOpenCart={openCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartContextProvider>
  );
}

export default App;
