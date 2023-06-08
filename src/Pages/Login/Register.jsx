import React from "react";
import Lottie from "lottie-react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import groovyWalkAnimation from "../../assets/groovyWalkAnimation.json";
import loginBg from "../../assets/loginbg.png";

const Register = () => {
  return (
    <div className="-mb-10" style={{ backgroundImage: `url(${loginBg})`, backgroundSize: 'cover' }}>
      <div className="flex items-center justify-center" >
        <div className="w-1/2 pr-8">
          <Lottie
            animationData={groovyWalkAnimation}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div className="p-6 rounded-lg text-white -ml-40">
          <h2 className="text-3xl font-semibold mb-3 mt-12">Registration Here</h2>
          <h4 className=" font-semibold text-base mb-8">
            Sign Up to try our amazing services
          </h4>
          <form className="flex flex-col space-y-4 my-auto">
            <h2 className="text-xl font-semibold">Name</h2>
            <input
              type="name"
              name="name"
              placeholder="Enter Your name"
              className="w-[500px] p-3 border-2 border-gray-300 rounded-lg"
              required
            />
            <h2 className="text-xl font-semibold">Email Address</h2>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="w-[500px] p-3 border-2 border-gray-300 rounded-lg"
              required
            />
            <h2 className="text-xl font-semibold">Password</h2>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="w-[500px] p-3 border-2 border-gray-300 rounded-lg"
              required
            />
            <h2 className="text-xl font-semibold">Confirm Password</h2>
            <input
              type="confirm password"
              name="confirmPassword"
              placeholder="Confirm your Password"
              className="w-[500px] p-3 border-2 border-gray-300 rounded-lg"
              required
            />
            <h2 className="text-xl font-semibold">Photo URL</h2>
            <input
              type="photoUrl"
              name="photoUrl"
              placeholder="Place your photo"
              className="w-[500px] p-3 border-2 border-gray-300 rounded-lg"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-10 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
            >
              Log in
            </button>
          </form>
          <div className="mt-10 text-center">
            <p className="text-lg">Or sign up using:</p>
            <div className="flex gap-4 justify-center mt-6">
              <button className="bg-red-400 border-none btn-circle flex items-center justify-center">
                <FaGoogle />
              </button>
              <button className="bg-blue-600 border-none btn-circle flex items-center justify-center">
                <FaGithub />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white">
        <p className="text-lg my-10 font-bold text-center pb-8">
          Already have an account? Please{" "}
          <Link
            to="/login"
            className="text-gray-300 hover:underline font-bold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
