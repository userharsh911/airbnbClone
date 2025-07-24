import React from 'react'
import { useState, useContext } from 'react'
import userContext from '../../context/userContext'
const Login = () => {
    const [userName,setUserName] = useState()
    const [userPassword,setUserPassword] = useState()
    const {setUser} = useContext(userContext)
    const handleClick = ()=>{
        setUser({userName,userPassword})
    }
  return (
    <div>
        <input 
            type="text"
            placeholder='Enter your name'
            onChange={(e)=> setUserName(e.target.value)}
         /> <br />
         <input 
            type="password"
            placeholder='Enter your password'
            onChange={(e)=> setUserPassword(e.target.value)}
         /> <br />
         <input type="submit" onClick={handleClick}/>
    </div>
  )
}

export default Login