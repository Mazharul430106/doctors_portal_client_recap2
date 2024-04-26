import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Home from "../Home/Home/Home";
import Appointment from "../Appointment/Appointment/Appointment";
import PrivateRoutes from "./PrivateRoutes";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyAppointment from "../Dashboard/MyAppointment/MyAppointment";
import AllUsers from "../Dashboard/AllUsers/AllUsers";
import AdminRoutes from "./AdminRoutes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/appointment',
                element: <PrivateRoutes><Appointment></Appointment></PrivateRoutes>
            }
        ],

    },

    {
        path: '/dashboard',
        element:<PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [

            {
                path:'/dashboard',
                element:<MyAppointment></MyAppointment>
            },
            {
                path:'/dashboard/allUsers',
                element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
        ]
    },

    {
        path: '*',
        element: <div>Data Not Found</div>
    }
    
]);
