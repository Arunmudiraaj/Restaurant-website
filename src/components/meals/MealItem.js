import './mealItem.css'

const MealItem = (props)=>{
    return (
        <div className='meal'>
            <span style={{fontSize: 20, fontFamily: 'sans-serif', fontWeight: 'bold'}}>{props.name}</span>
            <span style={{fontFamily: 'cursive'}}>{props.description}</span>
            <span style={{color: '#8a2b06', fontWeight: 'bold'}}> ${props.price}</span>
        </div>
    );
}

export default MealItem