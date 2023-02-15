import "./cart-context";
import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartContext = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotal =
      state.totalAmount + action.item.price * action.item.amount;

    const alreadyExistingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const alreadyExistingItem = state.items[alreadyExistingItemIndex];
    let updatedItems;
    if (alreadyExistingItem) {
      const updatedItem = {
        ...alreadyExistingItem,
        amount: alreadyExistingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items]
      updatedItems[alreadyExistingItemIndex] = updatedItem
    } else {
      updatedItems = state.items.concat(action.item)
     
    }
    return {
        items : updatedItems,
        totalAmount : updatedTotal
    }
  }
  if (action.type === "REMOVE") {
  }
  return defaultCartContext;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartContext
  );
  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {" "}
      {props.children}{" "}
    </CartContext.Provider>
  );
};
export default CartProvider;
