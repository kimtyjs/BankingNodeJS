import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Nav } from "reactstrap";
import PerfectScrollbar from "perfect-scrollbar";
import logo from "../../assets/img/logo.svg";

const Sidebar = (props) => {

    const activeRoute = (routeName) => {
        return props.location.pathname.indexOf(routeName) >
            1 ? "active" : "";
    };

    const [sidebar] = useState(React.createRef());



    return(
        <div
            className="sidebar"
            data-color={ props.bgColor }
            data-active-color={ props.activeColor }
        >
            <div className="logo">
                <Link to="https://www.creative-tim.com"
                      className="simple-text logo-mini"
                >
                    <div className="logo-img">
                        <img src={ logo } alt="react-logo"/>
                    </div>
                </Link>
                <Link
                    to="https://www.creative-tim.com"
                    className="simple-text logo-normal"
                >
                    Creative Tim
                </Link>
            </div>
            <div className="sidebar-wrapper" ref={ sidebar }>
                <Nav>
                    {
                        props.routes.map((prop, key) => {
                            return(
                                <li
                                    className={ activeRoute(prop.path) +
                                    (prop.pro ? " active-pro" : "")}
                                    key={ key }
                                >
                                    <NavLink
                                        to={ prop.layout + prop.path }
                                        className="nav-link"
                                        activeClassName="active"
                                    >
                                        <i className={prop.icon} />
                                        <p>{prop.name}</p>
                                    </NavLink>
                                    
                                </li>
                            );
                        })
                    }
                </Nav>

            </div>

        </div>
    );
};

export default Sidebar;