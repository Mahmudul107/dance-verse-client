import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MdHistory, MdManageAccounts } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  // const isAdmin = true;
  const isInstructor = true;
  const [isAdmin] = useAdmin()

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
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
        <h2 className="mb-20 text-5xl">Dance Verse</h2>
          {isAdmin ? (
            <>
              <li>
                <Link to="/dashboard/myEnrolledClass"><MdHistory/>  Manage Classes</Link>
              </li>
              <li>
                <Link to="/dashboard/manageUsers"><MdManageAccounts/> Manage User</Link>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <Link to="/dashboard/myEnrolledClass">Add a Class</Link>
              </li>
              <li>
                <Link to="/dashboard/manageUsers">My Classes</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard/myEnrolledClass">My Selected Classes</Link>
              </li>
              <li>
                <Link to="/dashboard/myClass">My Enrolled Classes</Link>
              </li>
            </>
          )}

          {/* Sidebar content here */}

          <div className="divider"></div>
          <li>
            <Link to="/"><FaHome/> Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
