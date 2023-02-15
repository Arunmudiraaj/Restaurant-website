import Button from "../UI/Button"
import './cart.css'
import { useContext } from "react"
import CartContext from "../../context/cart-context"
const Cart = props =>{
    const cart = useContext(CartContext)
    const hasItems = cart.items.length>0
    const totalAmount = `$${cart.totalAmount.toFixed(2)}`
    return <div>
        <ul>
            {cart.items.map(item=> <li key={`${item.name}${item.amount}`}>{item.name} of {item.amount} units with price {item.price}</li>)}
        </ul>
        <div className="totals">
            <span style={{fontWeight: 'bolder'}}>Total Amount</span>
            <span style={{fontWeight: 'bolder'}}>{totalAmount}</span>
        </div>
        <div className="actions">
            <button onClick={()=>{props.closeCart()}}>Close</button>
            {hasItems&&<Button name='Order'/>}
        </div>
    </div>
}

export default Cart