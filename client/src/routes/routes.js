import HomePage from "../views/Frontend/Home";

//dashboard view
import DashboardHome from "../views/Dashboard/Dashboard";
import UserList from "../views/Dashboard/UserList";
import UserProfile from "../views/Dashboard/UserProfile";
import UserManagement from "../views/Dashboard/UserManagement";
import Typography from "../views/Dashboard/Typhography";

//auth view
import Register from "../views/Authentication/Register";
import Login from "../views/Authentication/Login";
import AboutPage from "../views/Frontend/About";
import TestVar from "../views/Test/Test";


const routes = [

    {
        path: "/",
        exact: true,
        component: HomePage,
        layout: "/home"
    },

    {
        path: "/about",
        name: "About-Page",
        component: AboutPage,
        layout: "/home"
    },

    {
        path: "/dashboard",
        name: "Dashboard-Page",
        icon: "nc-icon nc-bank",
        component: DashboardHome,
        layout: "/admin"
    },

    {
        path: "/list",
        name: "UserList",
        icon: "nc-icon nc-bell-55",
        component: UserList,
        layout: "/admin"
    },

    {
        path: "/profile",
        name: "UserProfile",
        component: UserProfile,
        layout: "/admin"
    },

    {
        path: "/manager",
        name: "General Management",
        component: UserManagement,
        layout: "/admin"
    },

    {
        path: "/typo",
        name: "Website Typography",
        component: Typography,
        layout: "/admin"
    },

    {
        path: "/register",
        name: "RegisterPage",
        component: Register,
        layout: "/auth"
    },

    {
        path: "/login",
        name: "LoginPage",
        component: Login,
        layout: "/auth"
    },

    {
        path: "/test",
        name: "Testing",
        component: TestVar,
        layout: "/auth"
    }



];
export default routes;
