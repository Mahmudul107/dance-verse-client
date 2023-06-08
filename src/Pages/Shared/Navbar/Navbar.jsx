import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from "../../../assets/dancing.png";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>Instructors</Link>
      </li>
      <li>
        <Link>Classes</Link>
      </li>
      <li>
        <Link>Dashboard</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar h-14 bg-gradient-to-r from-purple-300 to-red-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <CiMenuFries />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-xl"
            >
              {navOptions}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <img className="w-24 h-32 -mr-6" src={logo} alt="" />
            <Link className="btn btn-ghost normal-case text-3xl">
              Dance Verse
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">{navOptions}</ul>
        </div>
        
      <div className="navbar-end mr-10 text-lg">
        <Link to='/login'>Login</Link>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
