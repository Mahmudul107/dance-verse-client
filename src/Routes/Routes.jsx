import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Instructor from "../Pages/Instructor/Instructor";
import MyClass from "../Pages/dashboard/MyClass/MyClass";
import Dashboard from "../Layout/Dashboard";
import EnrolledClass from "../Pages/dashboard/EnrolledClass/EnrolledClass";
import ManageUsers from "../Pages/dashboard/ManageUsers/ManageUsers";
import AddaClass from "../Pages/dashboard/addClass/AddaClass";
import SelectedClasses from "../Pages/dashboard/selectedClasses/SelectedClasses";
import ErrorPage from "../providers/ErrorPage";
import ManageClasses from "../Pages/dashboard/manageClasses/ManageClasses";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: 'login',
            element: <Login/>
        },
        {
            path: 'register',
            element: <Register/>
        },
        {
          path: 'instructors',
          element: <Instructor/>,
          loader: ()=> fetch('https://dance-school-server-eight.vercel.app/users/instructor')
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard/></PrivateRoute>,
      children: [
        {
          path: 'myEnrolledClass',
          element: <EnrolledClass/>
        },
        {
          path: 'selectedClasses',
          element: <SelectedClasses/>
        },
        
        // Instructor
        {
          path: 'addClasses',
          element: <AddaClass/>
        },
        {
          path: 'myClasses',
          element: <MyClass/>
        },

        // Admin
        {
          path: 'manageClasses',
          element: <ManageClasses/>
        },
        {
          path: 'manageUsers',
          element: <ManageUsers/>
        },
      ]
    }
  ]);