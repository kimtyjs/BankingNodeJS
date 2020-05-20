import React, { useState } from "react";
import {Link, Switch, useRouteMatch} from "react-router-dom";

import routes from "../routes/routes";
import renderList from "../routes/renderList";
import NavbarFrontend from "../components/Navbars/NavbarFrontend";

import logo from "../assets/img/logo/logo.png";

const HomeLayout = () => {

    let { path } = useRouteMatch();


    const [menuOpen, setMenuOpen ] = useState("");
    const [sideBarShow, setSidebarShow] = useState(false);

    const gettingMenuClass = menu => {
        setMenuOpen(menu);
        setSidebarShow(true);
    };

    const resetMenuClass = () => {

        setMenuOpen("");
        setSidebarShow(false);
    };

    const showSidebar = () => {

        if(sideBarShow) {
            return(
                <div className="categories-side-menu">
                    <div id="sideMenuClose" onClick={ resetMenuClass }>
                        <i className="fa fa-times"/>
                    </div>
                    <div className="nav-side-menu">
                        <div className="menu-list">
                            <h6> Categories </h6>
                            <ul id="menu-content" className="menu-content">
                                <li><Link to="/home"> Home </Link></li>
                                <li><Link to="/home/about"> Home </Link></li>
                                <li><Link to="/home"> Home </Link></li>
                                <li><Link to="/home"> Home </Link></li>
                                <li><Link to="/home"> Home </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }
    };

    return(
        <>
            { showSidebar() }
            <div id="content-wrapper" className={ menuOpen }>
                <NavbarFrontend logo={ logo } menuClass={ gettingMenuClass } />
                <Switch>
                    { renderList(routes, path) }
                </Switch>
            </div>
        </>
    );
};

export default HomeLayout;