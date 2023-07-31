import React, { useState, useEffect } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import ManageClassTable from "./ManageClassTable";

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axiosSecure.get("/all-class");
      setClasses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleApproved = (id) => {
    axiosSecure.patch(`/class-status/${id}?status=Approved`).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire({
          icon: "success",
          title: `You have successfully approved the class`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };
  const handleDeny = (id) => {
    axiosSecure.patch(`/class-status/${id}?status=Denied`).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire({
          icon: "success",
          title: `You have successfully denied the class`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };

  // const handleSendFeedback = (classId) => {
  //   // Implement the logic to open the modal and send feedback
  //   // You can use a state variable to control the modal visibility
  //   // and another state variable to store the feedback message
  // };

  return (
    <div className="my-10">
      <div className="overflow-x-auto mt-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="bg-[#FFB347]">#</th>
              <th className="bg-[#FFB347]">Class Photo</th>
              <th className="bg-[#FFB347]">Class Name</th>
              <th className="bg-[#FFB347]">Intructor Info</th>
              <th className="bg-[#FFB347]">Seats</th>
              <th className="bg-[#FFB347]">Price</th>
              <th className="bg-[#FFB347]">Status</th>
              <th className="bg-[#FFB347]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {classes.map((classData, index) => (
              <ManageClassTable
                key={classData._id}
                classData={classData}
                index={index}
                handleApproved={handleApproved}
                handleDeny={handleDeny}
              ></ManageClassTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
