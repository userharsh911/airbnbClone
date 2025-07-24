import { useState } from "react";
import userContext from "./userContext";

const userProvider = ({children})=>{
    
    const [user,setUser] = useState(null)
    return(
        <userContext.Provider value={{user,setUser}}>
            {children}
        </userContext.Provider>
    )
}
export default userProvider;