import { useState, createContext } from "react";

export const UserContext = createContext(null);
export const UserProvider = (props) => {
    const [authenticateduser, setAuthenticatedUser] = useState(null)
    return (
        <UserContext.Provider value ={[authenticateduser,setAuthenticatedUser]}>
            {props.children}
        </UserContext.Provider>
    )
}

