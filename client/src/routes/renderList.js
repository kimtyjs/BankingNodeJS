import React from "react";
import { Route } from "react-router-dom";

export default (routes, routeLayout) => {

    return routes.map((prop, index) => {
        if(prop.layout === routeLayout) {
            return(
                <Route
                    key={ index }
                    path={ prop.layout + prop.path }
                    component={ prop.component }
                />
            );
        } else return null;

    });
};