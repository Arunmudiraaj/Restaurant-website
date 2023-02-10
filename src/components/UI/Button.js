import './button.css'

const Button = (props)=>{
    const classes = `${props.className} btn`
    return <button className={classes}>{props.name}</button>
}

export default Button