import React from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const AddaClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  console.log(user)

  const onSubmit = (data) => {
    // console.log(data);

    const { className, classImage, availableSeats, price } = data;
    // console.log(data);

    const newClasses = {
      name: user.displayName,
      email: user.email,
      photoURL: classImage,
      className,
      classImage,
      availableSeats: parseFloat(availableSeats),
      price: parseFloat(price),
      status: 'pending'
    };
    console.log(newClasses);

    axiosSecure.post("/class", newClasses).then((data) => {
      console.log(data.data);
      if(data.data.insertedId){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your created class has been saved successfully',
            showConfirmButton: false,
            timer: 1500
          })
          reset()
      }
    });
  };

  return (
    <div>
      <h2 className="text-center text-4xl">Add Classes Instructor</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="py-4 px-6 w-[700px] bg-white rounded-md  mx-auto"
      >
        <div className="mb-4">
          <label
            htmlFor="className"
            className="block text-gray-700 font-semibold mb-2"
          >
            Class name
          </label>
          <input
            type="text"
            id="className"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            {...register("className", { required: true })}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="classImage"
            className="block text-gray-700 font-semibold mb-2"
          >
            Class Image
          </label>
          <input
            type="text"
            id="classImage"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            {...register("classImage", { required: true })}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="instructorName"
            className="block text-gray-700 font-semibold mb-2"
          >
            Instructor name
          </label>
          <input
            type="text"
            id="instructorName"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            value={user?.displayName}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="instructorEmail"
            className="block text-gray-700 font-semibold mb-2"
          >
            Instructor email
          </label>
          <input
            type="text"
            id="instructorEmail"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            value={user?.email}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="availableSeats"
            className="block text-gray-700 font-semibold mb-2"
          >
            Available seats
          </label>
          <input
            type="number"
            id="availableSeats"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            {...register("availableSeats", { required: true })}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-700 font-semibold mb-2"
          >
            Price $
          </label>
          <input
            type="number"
            id="price"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            {...register("price", { required: true })}
          />
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddaClass;
