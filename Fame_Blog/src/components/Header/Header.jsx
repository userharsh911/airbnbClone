import React from 'react'
import {Link, useNavigate, NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'
import LogoutBtn from './LogoutBtn'

const Header = () => {
    const authStatus = useSelector(state=> state.isLoggedIn);
    console.log("auth status ",authStatus)
    const navigate = useNavigate()
    const navItems = [
        {
            name:'Home',
            navTo:'/',
            active : true
        },
        {
            name : "Add Post",
            navTo : '/addBlog',
            active:authStatus
        },
        {
            name : "All Post",
            navTo : '/allPost',
            active:authStatus
        },
        {
            name : "Login",
            navTo : '/login',
            active: !authStatus
        },
        {
            name : "Signup",
            navTo : '/signup',
            active: !authStatus
        },
    ]
  return (
    <header className="bg-white shadow-lg">
        <main className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
                <div className="flex-shrink-0">
                    <Link 
                        to='/' 
                        className="text-2xl font-bold text-blue-600 hover:text-blue-700"
                    >
                        Logo
                    </Link>
                </div>
                <div className="flex items-center">
                    <ul className="flex space-x-4">
                        {navItems.map((item)=>(
                            item.active ? (
                                <li key={item.name}>
                                    <button 
                                        onClick={()=>navigate(item.navTo)}
                                        className="px-4 py-2 text-gray-700 hover:text-blue-600 rounded-md hover:bg-gray-100 transition-colors duration-300"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        ))}
                        {authStatus && (
                            <li>
                                <LogoutBtn className="px-4 py-2 text-gray-700 hover:text-blue-600 rounded-md hover:bg-gray-100 transition-colors duration-300" />
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </main>
    </header>
  )
}

export default Header