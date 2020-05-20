import React, { useState, useEffect, useRef } from "react";
import { Switch } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
import Sidebar from "../components/sidebar/Sidebar";
import NavigationBar from "../components/Navbars/Navbar";
import Footer from "../components/Footer/Footer";
import FixedPlugin from "../components/FixedPlugin/FixedPlugin";

import routes from "../routes/routes";
import renderList from "../routes/renderList";

const AdminPage = props => {

    const [backgroundColor, setBackgroundColor] = useState("black");
    const [activeColor, setActiveColor] = useState("info");
    const mainPanel = useRef();

    useEffect(() => {   //similar to componentDidMount

        function returnPS() {
            if(navigator.platform.indexOf("Win") > -1) {
                let ps = new PerfectScrollbar(mainPanel.current);
                document.body.classList.toggle("perfect-scrollbar-on");
                return () => ps;
            }
        }
        returnPS();
    }, []);

    useEffect(() => {   //similar to componentWillUnMount

        function cleanPS() {
            if(navigator.platform.indexOf("Win") > -1) {
                let ps = new PerfectScrollbar(mainPanel.current);
                return () => ps.destroy();
            }
        }
        cleanPS();

    }, []);

    useEffect(() => {   //similar to componentDidUpdate
        if(props.history.action === "PUSH") {
            mainPanel.current.scrollTop = 0;
            document.scrollingElement.scrollTop = 0;
        }
    }, [props.history.action]);

    const handleActiveClick = color => {
        setActiveColor(color);
    };

    const handleBgClick = color => {
        setBackgroundColor(color);
    };

    const validateSidebarRoutes = routes => {
        return routes.filter(route => route.layout === "/admin");
    };

    return(
        <div className="wrapper">
            <Sidebar
                { ...props }
                routes = { validateSidebarRoutes(routes) }
                bgColor = { backgroundColor }
                activeColor = { activeColor }
            />
            <div className="main-panel" ref={ mainPanel }>
                <NavigationBar { ...props } />
                <Switch>
                    { renderList(routes, "/admin") }
                </Switch>
                <Footer  fluid/>
            </div>
            <FixedPlugin
                bgColor={ backgroundColor }
                activeColor={ activeColor }
                handleActiveClick = { handleActiveClick }
                handleBgClick={ handleBgClick }
            />

        </div>
    );
};
export default AdminPage;