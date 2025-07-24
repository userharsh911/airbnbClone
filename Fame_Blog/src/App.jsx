import { useDispatch } from "react-redux"
import { login, logout} from "./features/authSlice"
import { useEffect, useState } from "react"
import authService from "./services/authService"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { Outlet } from "react-router-dom"
function App() {
  const [loading,setLoding] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.checkAuthStatus()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData})) 
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>{
      setLoding(false)
    })
  },[])

  if(!loading){
    return(
      <div className="min-h-screen flex flex-col w-[90vw] mx-auto bg-gray-50">
        <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Outlet/>
          </main>
        <Footer/>
      </div>
    )
  }
  else null
}

export default App
