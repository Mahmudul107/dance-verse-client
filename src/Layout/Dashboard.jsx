import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { MdHistory, MdManageAccounts } from "react-icons/md";
import { FaAccessibleIcon, FaAddressCard, FaAdjust, FaHome } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import './dashboard.css'
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const location = useLocation();
  const {user} = useAuth()
  console.log(user);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-red-200 text-base-content">
          <h2 className="text-5xl font-semibold text-fuchsia-400 text-center">Dance Verse</h2>
          <p className="mb-20 text-center font-semibold mt-2">Feel your body with music</p>
          {isAdmin ? (
            <>
              <li>
                <Link
                  to="/dashboard/manageClasses"
                  className={
                    location.pathname === "/dashboard/manageClasses"
                      ? "text-primary bg-blue-300 font-bold"
                      : ""
                  }
                >
                  <MdHistory /> Manage Classes
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/manageUsers"
                  className={
                    location.pathname === "/dashboard/manageUsers"
                      ? "text-primary bg-blue-300 font-bold"
                      : ""
                  }
                >
                  <MdManageAccounts /> Manage User
                </Link>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <Link
                  to="/dashboard/addClasses"
                  className={
                    location.pathname === "/dashboard/addClasses"
                      ? "text-primary bg-blue-300 font-bold"
                      : ""
                  }
                >
                 <FaAddressCard/> Add a Class
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/myClasses"
                  className={
                    location.pathname === "/dashboard/myClasses"
                      ? "text-primary bg-blue-300 font-bold"
                      : ""
                  }
                >
                 <FaAdjust/> My Classes
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/dashboard/selectedClasses"
                  className={
                    location.pathname === "/dashboard/selectedClasses"
                      ? "text-primary bg-blue-300 font-bold"
                      : ""
                  }
                >
                <FaAddressCard/>  My Selected Classes
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/myEnrolledClass"
                  className={
                    location.pathname === "/dashboard/myEnrolledClass"
                      ? "text-primary bg-blue-300 font-bold"
                      : ""
                  }
                >
                 <FaAccessibleIcon/> My Enrolled Classes
                </Link>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "text-primary font-bold" : ""}
            >
              <FaHome /> Home
            </Link>
          </li>
          <p className="mt-60"><span className="font-bold">User:</span> <span className="text-indigo-600 ml-2">{user.email}</span></p>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
