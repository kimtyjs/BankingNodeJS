import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import AdminPage from "./layouts/AdminDashboard";
import { createBrowserHistory } from "history";

const hist = createBrowserHistory();

const App = () => {
    return(
        <Router history={ hist }>
            <Switch>
                <Route path="/admin" component={ AdminPage } />
            </Switch>
        </Router>
    );
};

export default App;
