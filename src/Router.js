import React, { Suspense, lazy } from "react"
import { Router, Switch, Route } from "react-router-dom"
// import App from './App'
import Home from './pages/Home';
import ViewMovie from './pages/ViewMovie';
// import Consultation from './pages/Consultation'
// import Header from './pages/Header'
import {history} from './history'

export default function Routers() {

return (
    <Router history={history}>
       <main>
            <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/view/:id" component={ViewMovie}  /> 
            {/*<Route path="/catalogue" component={Catalogue}  />
            <Route path="/usercatalogue" component={userCatalogue} />
            <Route path="/consultation/:user_id" component={Consultation} />
             <Route path="/userlist" component={UserList} /> */}
           
            </Switch>
        </main>
    </Router>

)

}