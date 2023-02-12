import Header from "./components/layout/Header";
import React from "react";
import Meals from "./components/meals/Meals";
import Modal from "./components/UI/Modal";
import Cart from "./components/cart/Cart";
import { useState } from "react";
function App() {

  const [displayCart, setDisplayCart] = useState(false)
  const openCartHandler = ()=>{
  
    setDisplayCart(true)
  }
  const closeCartHandler = ()=>{
    setDisplayCart(false)
  }
  return (
    <React.Fragment>
      
      <Header showCart={openCartHandler}/>
      <main>
        <Meals/>
        {displayCart && <Modal> <Cart closeCart= {closeCartHandler}/> </Modal>}
      </main>
      </React.Fragment>
  );
}

export default App;
