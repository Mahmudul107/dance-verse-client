import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import groovyWalkAnimation from "../../assets/groovyWalkAnimation.json";
import loginBg from "../../assets/loginbg.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signInUser, googleSign } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const onSubmit = data => {
    console.log(data)

    const { email, password } = data;

    signInUser(email, password)
    .then((result) => {
      Swal.fire({
        title: 'User Logged in Successfully',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      const loggedInUser = result.user;
      console.log(loggedInUser);
      setError("");
      navigate(from, {replace: true});
    })
    .catch((err) => {
      console.error(err);
      setError("Invalid Email or Password. Please try again.");
    });
  };

  // Google sign in with popup
  const handleGoogleSignIn = () => {
    googleSign()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate('/');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div
      className="-mb-10"
      style={{ backgroundImage: `url(${loginBg})`, backgroundSize: "cover" }}
    >
      <div className="flex items-center justify-center">
        <div className="w-1/2 pr-8">
          <Lottie
            animationData={groovyWalkAnimation}
            style={{ height: "80%", width: "80%" }}
          />
        </div>
        <div className="p-6 rounded-lg -ml-40">
          <h2 className="text-3xl text-white font-semibold mb-3 mt-12">Login Here</h2>
          <h4 className=" font-semibold  text-white text-base mb-8">
            Log In to try our amazing services
          </h4>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 my-auto">
            <h2 className="text-xl text-white font-semibold">Email Address</h2>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter Your Email"
              className="w-[500px] p-3 border-2 border-gray-300 rounded-lg"
              required
            />
            <h2 className="text-xl text-white font-semibold">Password</h2>
            <input
              type="password"
              {...register("password")}
              placeholder="Enter Password"
              className="w-[500px] p-3 border-2 border-gray-300 rounded-lg"
              required
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
            {error && <span className="text-red-500">{error}</span>}
            <button
              type="submit"
              className="bg-red-500 text-white py-3 px-10 rounded-lg shadow-md hover:bg-fuchsia-600 transition-colors duration-300"
            >
              Log in
            </button>
          </form>
          <div className="mt-10 text-center">
            <p className="text-lg text-white">Or sign up using:</p>
            <div className="flex gap-4 justify-center mt-6">
              <button className="bg-red-400 hover:bg-fuchsia-500 border-none btn-circle flex items-center justify-center">
                <FaGoogle onClick={handleGoogleSignIn}/>
              </button>
              <button className="bg-blue-600 hover:bg-fuchsia-500 border-none btn-circle flex items-center justify-center">
                <FaGithub />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white">
        <p className="text-lg my-10 font-bold text-center pb-8">
          Don't have an account? Please{" "}
          <Link
            to="/register"
            className="text-gray-300 hover:underline font-bold"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
