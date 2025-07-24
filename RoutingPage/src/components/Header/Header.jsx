import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex bg-gray-400 py-4 justify-between px-5'>
        <div>
            <h1>Add Logo</h1>
        </div>
        <div className='flex justify-between w-[25%]'>
            <div >
                <NavLink to={''}>
                    Home
                </NavLink>
            </div>
            <div>
                <NavLink to={'about'}>
                    About
                </NavLink>
            </div>
            <div>
                <NavLink to={'contact'}>
                    Contact
                </NavLink>
            </div>
            <div>
                <NavLink to={'user/123'}>
                    User
                </NavLink>
            </div>
        </div>
        <div className='flex justify-between w-[10%]'>
            <div>
                <button>Login</button>
            </div>
            <div>
                <button>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Header