import './inputForm.css'
import Button from './Button';
import { useRef } from 'react';
import { useState } from 'react';
const InputForm = (props)=>{
    const number = useRef()
    const [isValid, setIsValid] = useState(true)
    const addItem = ()=>{
        const amount = Number(number.current.value)
        if (amount>5 || amount<1 || number.current.value.trim().length===0){
            setIsValid(false)
            return
        }
        setIsValid(true)
        props.addItem(amount)
        

    }
    return (
        <div className='outer'>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span style={{fontWeight: 'bold'}}>Amount</span>
                <input ref={number} className='input' type={'number'} defaultValue='1' min='1' max='5'/>
            </div>
            {!isValid&&<p style={{color: 'red'}}>Enter values between 1-5</p>}
            <Button onClick={addItem} className='marginAuto' name= '+ Add'/>
        </div>
    );
}

export default InputForm