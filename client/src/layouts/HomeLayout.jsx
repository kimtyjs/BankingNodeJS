import React from "react";
import {Route, Switch, useRouteMatch} from "react-router-dom";

import routes from "../routes/routes";

const HomeLayout = () => {

    let { path } = useRouteMatch();

    let removedLayoutPath = (routes, routeLayout) => {
        return routes.map((prop, index) => {
            if(prop.layout === routeLayout) {
                return(
                    <Route
                        key={ index }
                        exact={ prop.exact }
                        path={ prop.layout + prop.path }
                        component={ prop.component }
                    />
                );
            }
            else return null;

        });
    };

    return(
        <div>
            <div> I am Nav  { path } </div>
            <input  type="text" name="name"/>
            <Switch>
                { removedLayoutPath(routes, path) }
            </Switch>
        </div>
    );
};

export default HomeLayout;