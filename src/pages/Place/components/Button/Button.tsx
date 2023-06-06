import style from './Button.module.css'
const Button = ({children,backgroundColor,handleOnClick}) => {
    const buttonStyle = {
    backgroundColor: backgroundColor
  };
  return (
    <button onClick={handleOnClick} className={style.button} style={buttonStyle}>{children}</button>
  )
}

export default Button