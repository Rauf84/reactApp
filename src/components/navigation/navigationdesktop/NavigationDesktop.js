import React, {useContext} from 'react'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath';
import { UserContext } from '../../../shared/provider/UserProvider';
import { Profile } from '../../profile/Profile';

export const NavigationDesktop = () => {
    const [authenticateduser, setAuthenticatedUser] = useContext(UserContext)
    const history = useHistory();
    const renderLogin = () => {
        if (authenticateduser) 
            return ( 
                <span>
                    <Profile>

                    </Profile>
                </span>
            )
        else 
            return(
                <button onClick={()=> history.push(RoutingPath.signInView)}>Sign in</button>
            )
    }
    return (
        <nav>
            <button onClick={()=> history.push(RoutingPath.homeView,)}>Home</button>
            {renderLogin()}
        </nav>
    )
}
