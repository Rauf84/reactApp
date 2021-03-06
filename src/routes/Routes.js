import { BrowserRouter, Switch, Route } from "react-router-dom"
import {HomeView} from "../views/homeview/HomeView"
import { SignInView } from "../views/signinview/SignInView"
import RoutingPath from "./RoutingPath"

export const Routes = ({children}) => {
    return (
        <BrowserRouter>
            {children}
            <Switch>
                <Route exact path={RoutingPath.signInView} component={SignInView} />
                <Route path ={RoutingPath.homeView} component={HomeView} />
            </Switch>

        </BrowserRouter> )
}