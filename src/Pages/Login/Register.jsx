import React, { useContext } from "react";
import Lottie from "lottie-react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import groovyWalkAnimation from "../../assets/groovyWalkAnimation.json";
import loginBg from "../../assets/loginbg.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {
  const { createUser, updateUserData } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        updateUserData(result.user, data.name ,data.photoUrl);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  return (
    <div
      className="-mb-10"
      style={{ backgroundImage: `url(${loginBg})`, backgroundSize: "cover" }}
    >
      <div className="flex items-center justify-center">
        <div className="w-1/2 pr-8">
          <Lottie
            animationData={groovyWalkAnimation}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div className="p-6 rounded-lg -ml-40">
          <h2 className="text-3xl text-white font-semibold mb-3 mt-12">
            Registration Here
          </h2>
          <h4 className="text-white font-semibold text-base mb-8">
            Sign Up to try our amazing services
          </h4>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-4 my-auto"
          >
            <h2 className="text-xl font-semibold">Name</h2>
            <input
              type="text"
              {...register("name", { required: "This Name field is required" })}
              placeholder="Enter Your name"
              className="w-[500px] p-3 border-2 border-gray-300 rounded-lg"
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}

            <h2 className="text-xl font-semibold text-white">Email Address</h2>
            <input
              type="email"
              {...register("email", { required: "This Email field is required" })}
              placeholder="Enter Your Email"
              className="w-[500px] p-3 border-2 border-gray-300 rounded-lg"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}

            <h2 className="text-xl font-semibold text-white">Password</h2>
            <input
              type="password"
              {...register("password", {
                required: "This Password field is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/,
                  message:
                    "Password must contain at least one uppercase letter, one special character, and one digit",
                },
              })}
              name="password"
              placeholder="Enter Password"
              className="w-[500px] p-3 border-2 border-gray-300 rounded-lg"
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}

            <h2 className="text-xl font-semibold text-white">
              Confirm Password
            </h2>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "This Confirm Password field is required",
                validate: (value) =>
                  value === getValues("password") ||
                  "Passwords do not match",
              })}
              placeholder="Confirm your Password"
              className="w-[500px] p-3 border-2 border-gray-300 rounded-lg"
            />
            {errors.confirmPassword && (
              <span className="text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}

            <h2 className="text-xl font-semibold text-white">Photo URL</h2>
            <input
              type="url"
              {...register("photoURL", { required: "This URL field is required" })}
              placeholder="Place your photo"
              className="w-[500px] p-3 border-2 border-gray-300 rounded-lg"
            />
            {errors.photoURL && (
              <span className="text-red-500">{errors.photoURL.message}</span>
            )}

            <button
              type="submit"
              className="bg-red-400 text-white py-3 px-10 rounded-lg shadow-md hover:bg-fuchsia-600 transition-colors duration-300"
            >
              Register
            </button>
          </form>
          <div className="mt-10 text-center">
            <p className="text-lg text-white">Or sign up using:</p>
            <div className="flex gap-4 justify-center mt-6">
              <button className="bg-red-400 hover:bg-fuchsia-500 border-none btn-circle flex items-center justify-center">
                <FaGoogle />
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
          Already have an account? Please{" "}
          <Link to="/login" className="text-gray-300 hover:underline font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
