import Button from "../UI/Button"
import './cart.css'
const Cart = props =>{
    return <div>
        cart Items
        <div className="totals">
            <span style={{fontWeight: 'bolder'}}>Total Amount</span>
            <span style={{fontWeight: 'bolder'}}>12.56</span>
        </div>
        <div className="actions">
            <button>Close</button>
            <Button name='Order'/>
        </div>
    </div>
}

export default Cart