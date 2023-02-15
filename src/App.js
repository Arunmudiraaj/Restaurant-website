import Header from "./components/layout/Header";
import React from "react";
import Meals from "./components/meals/Meals";
import Modal from "./components/UI/Modal";
import Cart from "./components/cart/Cart";
import { useState } from "react";
import CartProvider from "./context/CartProvider";
function App() {

  const [displayCart, setDisplayCart] = useState(false)
  const openCartHandler = ()=>{
  
    setDisplayCart(true)
  }
  const closeCartHandler = ()=>{
    setDisplayCart(false)
  }
  return (
    <CartProvider>
      
      <Header showCart={openCartHandler}/>
      <main>
        <Meals/>
        {displayCart && <Modal close= {closeCartHandler}> <Cart closeCart= {closeCartHandler}/> </Modal>}
      </main>
      </CartProvider>
  );
}

export default App;
