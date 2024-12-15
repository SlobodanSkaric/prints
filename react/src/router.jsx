import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import Dashbord from "./views/Dashbord";
import User from "./views/User";
import Gusetlayout from "./components/Gusetlayout";
import Login from "./views/Login";
import SingUp from "./views/SingUp";
import Tickets from "./views/Tickets";
import History from "./views/History";
import Pass from "./views/Pass";
import UsersEdit from "./views/UsersEdit";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        children: [
            {
                path: "/",
                element: <Navigate to="/dashbord"/>
            },
            {
                path: "/dashbord",
                element: <Dashbord/>
            },
            {
                path: "/user",
                element: <User/>
            },
            {
                path:"/tickets",
                element: <Tickets/>
            },
            {
                path: "/history",
                element: <History/>
            },
            {
                path:"/pass",
                element: <Pass/>
            },
            {
                path:"/usersedit",
                element: <UsersEdit/>
            }
        ]
    },
    {
        path: "/",
        element: <Gusetlayout/>,
        children: [
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/signup",
                element: <SingUp/>
            }
        ]
    }
]);

export default router;
