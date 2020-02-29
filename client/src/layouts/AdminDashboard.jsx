import React, { useState, useEffect, useRef } from "react";
import routes from "../routes/routes";
import { Switch, Route } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
import Sidebar from "../components/sidebar/Sidebar";
import NavigationBar from "../components/Navbars/Navbar";

const AdminPage = props => {

    let renderRoute = (routes) => {
        return routes.map((prop, key) => {
            if(prop.layout === "/admin") {
                return(
                    <Route
                        path = { prop.layout + prop.path }
                        component = { prop.component }
                        key = { key }
                    />
                );
            } else { return null; }
        })
    };

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

    return(
        <div className="wrapper">
            <Sidebar
                { ...props }
                routes = { routes }
                bgColor = { backgroundColor }
                activeColor = { activeColor }
            />
            <div className="main-panel" ref={ mainPanel }>
                <NavigationBar { ...props } />
                <Switch>
                    { renderRoute(routes)  }
                </Switch>
            </div>

        </div>
    );
};
export default AdminPage;