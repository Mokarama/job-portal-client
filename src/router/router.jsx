import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register";
import SignIn from "../pages/signIn/SignIn";
import JobDetails from "../pages/jobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/jobApply/JobApply";
import MyApplication from "../pages/myApplication/MyApplication";


let router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    errorElement:<h2>Route not found</h2>,
    children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/jobs/:id',
          element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:4000/jobs/${params.id}`)
        },

        {
          path:'/jobApply/:id',
          element:<PrivateRoute><JobApply></JobApply></PrivateRoute>, 
        },
        {
          path:'/myApplications',
          element:<PrivateRoute><MyApplication></MyApplication></PrivateRoute>
        },

        {
            path:'register',
            element:<Register></Register>
        },

        {
          path:'signIn',
          element:<SignIn></SignIn>
        }
    ]
    
  },
]);


export default router;

