import './HeaderCartButton.css'
import CartIcon from '../cart/CartIcon'
const HeaderCartButton = (props)=>{

   

    return <button onClick={()=>{props.showCart()}} className='button'>
        <span className='icon'>
            <CartIcon/>
        </span>
        <span>
            Your Cart
        </span>
        <span className='badge'>
            3
        </span>
    </button>
}

export default HeaderCartButton