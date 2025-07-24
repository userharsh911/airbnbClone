import React from 'react'
import userContext from '../../context/userContext'
import { useContext } from 'react'

const Home = () => {
    const {user} = useContext(userContext)
    if(!user){
        return <div>Please Login</div>
    }
    return(
        <div>
            {user.userName}
        </div>
    )
}

export default Home 