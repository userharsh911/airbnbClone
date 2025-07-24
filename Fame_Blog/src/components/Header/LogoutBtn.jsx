import React from 'react'
import authService from '../../services/authService'
import {useDispatch} from 'react-redux'
import { logout } from '../../features/authSlice'
const LogoutBtn = ({className=''}) => {
    const dispatch = useDispatch();
    const logoutHandler = ()=>{
        authService.logout()
        .then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button className={`${className}`} onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn