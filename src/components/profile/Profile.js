import {useContext} from 'react'
import { UserContext } from '../../shared/provider/UserProvider'

export const Profile = () => {
    const [authenticateduser, setAuthenticatedUser] = useContext(UserContext);
    return (
        <div>
            {authenticateduser}
        </div>
    )
}
