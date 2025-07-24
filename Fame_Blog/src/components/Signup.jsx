import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import authService from '../services/authService'
import { login as authLogin } from '../features/authSlice'
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import Input from './Input'
import Button from './Button'
const Signup = () => {
    const {register,handleSubmit} = useForm();
    const [error, setError] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signup = async (data)=>{
        setError('');
        console.log("signup data ",data)
        try {
            const userData = await authService.createAccount(data)
            if(userData){
                const currentUser = await authService.checkAuthStatus();
                if(currentUser){ 
                    dispatch(authLogin(data))
                    navigate('/')
                }else Navigate('/login')
            }
        } catch (error) {
            setError(error.message)
        }
    }
return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-6">Sign Up</h1>
        </div>
        <div className="mt-2 text-center">
            {error && <p className="text-red-600">{error}</p>}
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" onSubmit={handleSubmit(signup)}>
                    <Input 
                        label="Name : "
                        placeholder="Enter your name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        {...register("name",{
                            required:true
                        })}
                    />
                    <Input
                        label="Email : "
                        type='email'
                        placeholder="johndoe@john.com"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        {...register('email',{
                            required:true,
                            validate:{
                                matchPatern: (value)=> /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || "Email address must me valid"
                            }
                        })}
                    />
                    <Input 
                        label="Password : "
                        type='password'
                        placeholder="password"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        {...register("name",{
                            required:true
                        })}
                    />
                    <Button
                        type='submit'
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Sign up
                    </Button>
                </form>
            </div>
        </div>
    </div>
)
}

export default Signup