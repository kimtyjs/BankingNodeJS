import React from "react";
import { Switch, useRouteMatch} from "react-router-dom";

import routes from "../routes/routes";
import renderList from "../routes/renderList";
import NavbarFrontend from "../components/Navbars/NavbarFrontend";

import logo from "../assets/img/logo/logo.png";
import FooterFrontend from "../components/Footer/FooterFrontend";

const HomeLayout = () => {

    let { path } = useRouteMatch();

    return(
        <>

            <div id="content-wrapper">
                <NavbarFrontend logo={ logo }/>
                <Switch>
                    { renderList(routes, path) }
                </Switch>
                <FooterFrontend />
            </div>
        </>
    );
};

export default HomeLayout;