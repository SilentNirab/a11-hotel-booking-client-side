import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";
import Room from "../Pages/Room/Room";
import MyRoom from "../Pages/MyRoom/MyRoom";
import PrivetRoute from "../Providers/PrivetRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DetailsPage from "../Pages/Room/DetailsPage";
import UpdateBooking from "../Pages/Room/UpdateBooking";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/rooms',
                element: <Room></Room> 
            },
            {
                path: '/myroom',
                element: <PrivetRoute><MyRoom></MyRoom></PrivetRoute>
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
                path: 'rooms/details/:id',
                element: <DetailsPage></DetailsPage>,
                loader: ({params}) => fetch(`https://room-booking-server-eta.vercel.app/rooms/${params.id}`)
            },
            {
                path: 'myroom/:id',
                element: <UpdateBooking></UpdateBooking>,
                loader: ({params}) => fetch(`https://room-booking-server-eta.vercel.app/booking/${params.id}`)
            }
        ]
    }
])

export default router;