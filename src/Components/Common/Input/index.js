import React from 'react'
import './style.css'
const Input = ({label,setState,state,placeholder,type}) => {
  return (
    <div className='input-wrapper'>
      <p className='label-input'>{label}</p>
      <input type={type} value={state} onChange={(e)=>setState(e.target.value)} placeholder={placeholder} className='custom-input'/>
    </div>
  )
}

export default Input
