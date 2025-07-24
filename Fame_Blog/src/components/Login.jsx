import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import authService from '../services/authService'
import { login as authLogin, logout } from '../features/authSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Input from './Input'
import Button from './Button'

const Login = () => {
    const {register,handleSubmit} = useForm()
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const login = async (data)=>{
        setError('')
        try {
            const userData = await authService.loginAccount(data);
            if(userData){
                const currentUser = await authService.checkAuthStatus()
                if(currentUser){
                    dispatch(authLogin(data))
                    navigate("/")
                }else dispatch(logout)
            }
            else setError("don't have an account, please sign up first")
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div>
        <div>
            <h2>Login</h2>
        </div>
        <div>
            <p>{error && error}</p>
        </div>
        <div>
            <form onSubmit={handleSubmit(login)}>
                <Input
                    label='Email : '
                    type='email'
                    placeholder='johndoe@john.com'
                    className=''
                    {...register('email',{
                        required:true
                    })}
                />
                <Input
                    label='Password : '
                    type='password'
                    placeholder='Enter your password'
                    className=''
                    {...register('password',{
                        required:true
                    })}
                />
                <Button className='' type='submit'> 
                    Login
                </Button>
            </form>
        </div>
    </div>
  )
}

export default Login