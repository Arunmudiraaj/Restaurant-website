import './cartItem.css'
import Button from '../UI/Button'
import CartContext from '../../context/cart-context'
import { useContext } from 'react'
const CartItem = props =>{
    const cart = useContext(CartContext)
    const increment = ()=>{
        const item = {
            name : props.name,
            amount : 1,
            price : props.price,
            id : props.id
        }
        cart.addItem(item)
    }

    const decrement = ()=>{
        cart.removeItem(props.id)
    }
    return <div className='cartItemContainer'>
        <div className='cartItemInfo'>
            <span>{props.name}</span>
            <div className='priceNamount'>
                <span style={{color: '#8a2b06', fontWeight: 'bold'}}>${props.price.toFixed(2)}</span>
                <span>{props.amount}X</span>
            </div>
            
            
        </div>
        <div className='twoButtons'>
            <Button onClick={decrement} className='updateBtn' name= '-'/>
            <Button onClick={increment} className='updateBtn' name= '+'/>
        </div>
    </div>

}

export default CartItem