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

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
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
          element: <Instructor/>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard/>,
      children: [
        {
          path: 'myClass',
          element: <MyClass/>
        },
        {
          path: 'myEnrolledClass',
          element: <EnrolledClass/>
        },
        {
          path: 'manageUsers',
          element: <ManageUsers/>
        },
      ]
    }
  ]);