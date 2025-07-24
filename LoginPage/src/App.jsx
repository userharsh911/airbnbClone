import { useState } from 'react'
import UserProvider from './context/UserProvider'
import Home from './components/Home/Home'
import Login from './components/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserProvider>
        <Home/>
        <Login/>
      </UserProvider>      
    </>
  )
}

export default App
