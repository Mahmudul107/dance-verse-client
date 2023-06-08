import React from "react";
import { FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../../../assets/dancing.png";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-gray-300 text-gray-800 py-8 font-[Lato] mr-">
      <div className="container mx-auto px-4">
        <div className="flex justify-center ml-40">
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0 mr-10">
            <div className="flex items-center space-x-0">
              <img className="w-24 h-24" src={logo} alt="" />
              <h3 className="text-2xl font-extrabold mb-2">Dance Verse</h3>
            </div>
            <p className="text-lg -mt-4">
              Experience the rhythm of life through dance.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Contact</h4>
            <div className="divider w-20"></div>
            <p className="text-lg">Phone: +1 123-456-7890</p>
            <p className="text-lg">Email: info@danceverse.com</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Address</h4>
            <div className="divider w-20"></div>
            <p className="text-lg">1234 Main Street</p>
            <p className="text-lg">City, State, ZIP Code</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Social Media</h4>
            <div className="divider w-28"></div>
            <div className="flex space-x-4">
              <Link className="text-red-400 hover:text-white">
                <FaGoogle />
              </Link>
              <Link className="text-red-400 hover:text-white">
                <FaInstagram />
              </Link>
              <Link className="text-red-400 hover:text-white">
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <p className="text-center text-base">
          © {new Date().getFullYear()} Dance Verse. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
