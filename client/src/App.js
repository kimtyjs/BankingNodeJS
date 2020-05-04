import React from 'react';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import HomeLayout from "./layouts/HomeLayout";
import AdminPage from "./layouts/AdminDashboard";
import AuthLayout from "./layouts/Authentication";

const hist = createBrowserHistory();

const App = () => {
    return(
        <Router history={ hist }>
           <Switch>
               <Route path="/home" render={ props => <HomeLayout { ...props } /> } />
               <Route path="/admin" component={ AdminPage } />
               <Route path="/auth" component={ AuthLayout } />

               <Redirect from="/" to="/home" />
           </Switch>
        </Router>
    );
};

export default App;
