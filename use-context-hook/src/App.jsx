import { createContext,useState } from "react"
import "./app.css"
import ChildA from "./childA"

const UserContext = createContext()
function App() {
  const [user, setUser] = useState({name:"Rohit"})
  return (
      <>
        <UserContext.Provider value={user}>
          <ChildA/>
        </UserContext.Provider>
      </>
  )
}

export default App
export {UserContext}
