import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import Dashbord from "./views/Dashbord";
import User from "./views/User";
import Gusetlayout from "./components/Gusetlayout";
import Login from "./views/Login";
import SingUp from "./views/SingUp";

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
