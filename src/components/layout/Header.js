import './header.css'
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
import { Fragment } from 'react'
const Header = (props)=>{
  
    return <Fragment>
        <header className='header'>
            <h1>ReactMeals</h1>
            <HeaderCartButton showCart={()=>{props.showCart()}}/>
        </header>
        <div className='main-image'>
            <img src={mealsImage} alt='A  table of delicious food'/>
        </div>
       
    </Fragment>
}

export default Header