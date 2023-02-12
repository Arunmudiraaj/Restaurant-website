import Header from "./components/layout/Header";
import React from "react";
import Meals from "./components/meals/Meals";
import Modal from "./components/UI/Modal";
import Cart from "./components/cart/Cart";
function App() {
  return (
    <React.Fragment>
      
      <Header/>
      <main>
        <Meals/>
        <Modal> <Cart/> </Modal>
      </main>
      </React.Fragment>
  );
}

export default App;
