import React from "react";
import { Switch } from "react-router-dom";

import routes from "../routes/routes";
import renderList from "../routes/renderList";

const AuthLayout = () => {
    return(
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <Switch>
                        { renderList(routes, "/auth") }
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;