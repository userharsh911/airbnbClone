import React from 'react'

const Button = ({val,addToInp}) => {
  return (
    <button onClick={addToInp}>{val}</button>
  )
} 

export default Button