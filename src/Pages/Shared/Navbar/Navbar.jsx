import React, { useContext, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from "../../../assets/dancing.png";
import { AuthContext } from "../../../providers/AuthProviders";
import { FaMoon, FaSun, FaUser } from "react-icons/fa";
import { useEffect } from "react";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState('light');


  useEffect( () => {
    if(isDarkTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
    else{
      document.documentElement.classList.remove('dark');
    }
  })

  const handleThemeSwitch = () => {
    setIsDarkTheme(isDarkTheme === 'dark'? 'light' : 'dark');
  }

  const handleLogout = () => {
    logOutUser()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          className="btn hover:bg-red-400 duration-700 ml-2 text-black hover:text-white font-bold py-2 px-4 rounded-3xl"
        >
          Login
        </Link>
      );
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navOptions = (
    <>
      <li>
        <Link to='/' onClick={toggleMenu}>Home</Link>
      </li>
      <li>
        <Link to='/instructors' onClick={toggleMenu}>Instructors</Link>
      </li>
      <li>
        <Link to='/classes' onClick={toggleMenu}>Classes</Link>
      </li>
      <li>
        <Link to='/dashboard' onClick={toggleMenu}>Dashboard</Link>
      </li>
    </>
  );

  return (
    <div className=" z-20 w-full">
      <div className="navbar h-14 bg-gradient-to-r from-purple-300 to-red-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              onClick={toggleMenu}
            >
              <CiMenuFries />
            </label>
            {isMenuOpen && (
              <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-xl">
                {navOptions}
              </ul>
            )}
          </div>
          <div className="flex items-center justify-center">
            <img className="w-24 h-32 -mr-6" src={logo} alt="" />
            <Link className="hidden lg:block btn btn-ghost normal-case text-3xl">
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
              onClick={handleLogout}
              className="btn hover:bg-red-400 duration-700 ml-2 text-black hover:text-white font-bold py-2 px-4 rounded-3xl"
            >
              Logout
            </Link>
          )}
        </div>
      </div>
      <button
        onClick={handleThemeSwitch}
        className={`fixed bottom-5 right-5 p-3 rounded-full bg-gray-300 text-gray-800 ${isDarkTheme ? "dark:bg-gray-800 dark:text-white" : ""}`}
        title={`Toggle ${isDarkTheme ? "Light" : "Dark"} Theme`}
      >
        {isDarkTheme ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default Navbar;
