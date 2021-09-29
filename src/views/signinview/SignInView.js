import { useState, useContext } from "react"
import { useHistory } from "react-router";
import { UserContext } from "../../shared/provider/UserProvider";

export const SignInView = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState ();
    const [age, setAge] = useState(25);
    const [authenticateduser, setAuthenticatedUser] = useContext (UserContext)
    const logIn =()=> {
        setAuthenticatedUser(username);
        history.push("/",{String: "Message from SignInView"});
        
    }
    const history = useHistory();
    return (
        <div>
            <h1>Sign in</h1>
            <h2>Username: {username}</h2>
            <input 
                placeholder="Enter name" 
                onChange={(event) => setUsername(event.target.value)}>
            </input> <br/>
            <input 
                type="password" 
                placeholder ="Enter password" 
                onChange={(event) => setPassword(event.target.value)}>
            </input> <br/>
            <button onClick={() =>setAge(age + 1)}>+</button>
            <button onClick={() => {if (age > 0)setAge(age - 1)}}>-</button>
            <span>Age: {age}</span><br/>
            <button onClick={() =>logIn()} >Sign in</button>
        </div>
    );
}
