import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../pages/Appointment/Appointment/Appointment";
import AllUsers from "../../pages/Dashboard/Dashboard/AllUsers/AllUsers";
// import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import MyAppointment from "../../pages/Dashboard/MyAppointment/MyAppointment";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import AddDoctor from "../../pages/Dashboard/AddDoctor/AddDoctor";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ManageDoctor from "../../pages/Dashboard/ManageDoctor/ManageDoctor";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addDoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/manageDoctor',
                element: <AdminRoute><ManageDoctor></ManageDoctor></AdminRoute>
            },
        ]
    }

])

export default router;
