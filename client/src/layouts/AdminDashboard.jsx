import React from "react";
import routes from "../routes/routes";
import { Switch, Route } from "react-router-dom";

const AdminPage = () => {

    //let renderRoute = (routes) => {};

    return(
        <div>
            <Switch>
                {
                    routes.map((prop, key) => {
                        return(
                            <Route
                                path = { prop.layout + prop.path }
                                component = { prop.component }
                                key = { key }
                            />
                        );
                    })
                }
            </Switch>
        </div>
    );
};
export default AdminPage;