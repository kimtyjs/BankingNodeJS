import DashboardHome from "../views/Dashboard";
import UserList from "../views/UserList";
import UserProfile from "../views/UserProfile";
import UserManagement from "../views/UserManagement";
import Typography from "../views/Typhography";

const routes = [

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
    }

];
export default routes;