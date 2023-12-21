import React from 'react'
import './style.css';

const Button_signup = ({text,onClick,blue}) => {
  return (
    <div className={blue?'blue-btnn btnn':'btnn'} onClick={onClick}>
      {text}
    </div>
  )
}

export default Button_signup
