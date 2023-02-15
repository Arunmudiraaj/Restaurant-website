import "./HeaderCartButton.css";
import CartIcon from "../cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../context/cart-context";
const HeaderCartButton = (props) => {
  const cart = useContext(CartContext);
  console.log(cart.items)
  const totalNumberOfItems = cart.items.reduce((cur, item) => { 
    return cur + item.amount; 
  }, 0);

  return (
    <button
      onClick={() => {
        props.showCart();
      }}
      className="button"
    >
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{totalNumberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
