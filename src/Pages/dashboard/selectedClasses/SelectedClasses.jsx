import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import SelectedClassesCard from "./SelectedClassesCard";

const SelectedClasses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: selectedClass = [],refetch } = useQuery(['select-class'], async () => {
    const res = await fetch(`http://localhost:5000/select-class/${user?.email}`)
    return await res.json()
})

console.log(selectedClass)

  const handleRemoveClass = (id) => {
    axiosSecure
      .delete(`/select-class/${id}`)
      .then((res) => {
        if (res.data.deletedCount) {
          Swal.fire({
            icon: "success",
            title: "This class is already remove from selected classes",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="my-10">
      <div className="overflow-x-auto mt-10 w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-white">
              <th className="bg-[#FFB347]">#</th>
              <th className="bg-[#FFB347]">Photo</th>
              <th className="bg-[#FFB347]">Class Name</th>
              <th className="bg-[#FFB347]">Price</th>
              <th className="bg-[#FFB347]">Payment</th>
              <th className="bg-[#FFB347]">Remove</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {selectedClass.map((classData, index) => (
              <SelectedClassesCard
                key={classData._id}
                classData={classData}
                index={index}
                handleRemoveClass={handleRemoveClass}
              ></SelectedClassesCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClasses;
