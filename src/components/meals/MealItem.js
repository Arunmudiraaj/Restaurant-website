import './mealItem.css'
import InputForm from '../UI/InputForm';
import { useContext } from 'react';
import CartContext from '../../context/cart-context';
const MealItem = (props)=>{
    const cart = useContext(CartContext)
    const addItemHandler = number=>{
        
        const item = {
            name : props.name,
            amount : Number(number),
            price : props.price,
            id : props.id
        }
        cart.addItem(item)
       
    }
    return (
        <div className='mealContainer'>
            <div className='meal'>
                <span style={{fontSize: 20, fontFamily: 'sans-serif', fontWeight: 'bold'}}>{props.name}</span>
                <span style={{fontFamily: 'cursive'}}>{props.description}</span>
                <span style={{color: '#8a2b06', fontWeight: 'bold'}}> ${props.price}</span>
                
            </div>
            <InputForm addItem = {addItemHandler}/>
        </div>
    );
}

export default MealItem