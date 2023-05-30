import style from './Button.module.css'
const Button = ({children,backgroundColor}) => {
    const buttonStyle = {
    backgroundColor: backgroundColor
  };
  return (
    <button className={style.button} style={buttonStyle}>{children}</button>
  )
}

export default Button