import React, { FC, ReactNode, CSSProperties, MouseEventHandler } from 'react';
import style from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
  backgroundColor: string;
  handleOnClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({
  children,
  backgroundColor,
  handleOnClick,
}) => {
  const buttonStyle: CSSProperties = {
    backgroundColor: backgroundColor,
  };

  return (
    <button
      onClick={handleOnClick}
      className={style.button}
      style={buttonStyle}
    >
      {children}
    </button>
  );
};

export default Button;
