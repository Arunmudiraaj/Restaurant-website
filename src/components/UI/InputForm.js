import './inputForm.css'
import Button from './Button';
const InputForm = ()=>{
    return (
        <div className='outer'>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span style={{fontWeight: 'bold'}}>Amount</span>
                <input className='input' type={'number'}/>
            </div>
            <Button className='marginAuto' name= '+ Add'/>
        </div>
    );
}

export default InputForm