import Button from "../UI/Button";
import "./cart.css";
import { useContext } from "react";
import CartItem from "./CartItem";
import CartContext from "../../context/cart-context";
const Cart = (props) => {
  const cart = useContext(CartContext);
  const hasItems = cart.items.length > 0;
  const totalAmount = `$${cart.totalAmount.toFixed(2)}`;
  return (
    <div>
      <ul>
        {cart.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            id = {item.id}
          />
        ))}
      </ul>
      {!hasItems && <p style={{textAlign: 'center'}}>Your cart is empty. Add some delicious food now!</p>}
      <div className="totals">
        <span style={{ fontWeight: "bolder" }}>Total Amount</span>
        <span style={{ fontWeight: "bolder" }}>{totalAmount}</span>
      </div>
      <div className="actions">
        <button className="closeBtn"
          onClick={() => {
            props.closeCart();
          }}
        >
          Close
        </button>
        {hasItems && <Button name="Order" />}
      </div>
    </div>
  );
};

export default Cart;
