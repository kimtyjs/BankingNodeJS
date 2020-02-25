import React, { useState, useEffect } from "react";
import routes from "../routes/routes";
import { Switch, Route } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
import Sidebar from "../components/sidebar/Sidebar";


const AdminPage = (props) => {

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

    const [backgroundColor, setBackgroundColor] = useState({ backgroundColor: "black"});
    const [activeColor, setActiveColor] = useState({ activeColor: "info" });
    const [mainPanel] = useState(React.createRef());



    const handleActiveClick = color => {
        setActiveColor({ activeColor: color });
    };

    const handleBgClick = color => {
        setBackgroundColor({ backgroundColor: color });
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
                <Switch>
                    { renderRoute(routes)  }
                </Switch>
            </div>

        </div>
    );
};
export default AdminPage;