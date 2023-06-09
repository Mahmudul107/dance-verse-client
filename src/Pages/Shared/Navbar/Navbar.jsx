import React, { useContext } from "react";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from "../../../assets/dancing.png";
import { AuthContext } from "../../../providers/AuthProviders";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const renderProfileButton = () => {
    if (user) {
      return (
        <button
          className="border-none btn-circle duration-500 mr-2"
          title={user.displayName}
        >
          {user?.photoURL ? (
            <img className="rounded-full" src={user.photoURL} alt="" />
          ) : (
            <FaUser />
          )}
        </button>
      );
    } else {
      return (
        <Link
          to="/login"
          className="bg-red-600 hover:bg-red-400 duration-700 ml-2 text-white font-bold py-2 px-4 rounded-3xl"
        >
          Login
        </Link>
      );
    }
  };


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
      {renderProfileButton()}
          {user && (
            <Link
              // onClick={handleLogout}
              className="bg-red-600 hover:bg-red-400 duration-700 ml-2 text-white font-bold py-2 px-4 rounded-3xl"
            >
              Logout
            </Link>
          )}
      </div>
      </div>
    </div>
  );
};

export default Navbar;
