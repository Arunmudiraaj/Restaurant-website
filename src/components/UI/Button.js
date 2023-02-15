import './button.css'

const Button = (props)=>{
    const classes = `${props.className} btn`
    return <button onClick={()=>{props.onClick()}} className={classes}>{props.name}</button>
}

export default Button