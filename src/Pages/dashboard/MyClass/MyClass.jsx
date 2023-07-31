import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import MyClassesTable from "./MyClassesTable";

const MyClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const [isLoading, setIsLoading] = useState(true);
  const [classesData, setClassesData] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    axiosSecure
      .get(`/class/${user?.email}`)
      .then((res) => {
        console.log(res);
        setClassesData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [user]);

  return (
    <div className="my-20 ">
      <div className="overflow-x-auto mt-10 w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-white">
              <th className="bg-[#FFB347]">#</th>
              <th className="bg-[#FFB347]">Photo</th>
              <th className="bg-[#FFB347]">Class Name</th>
              <th className="bg-[#FFB347]">Enrolled Students</th>
              <th className="bg-[#FFB347]">Status</th>
              <th className="bg-[#FFB347]">Feedback</th>
              <th className="bg-[#FFB347]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {classesData.map((classData, index) => (
              <MyClassesTable
                key={classData.Id}
                classData={classData}
                index={index}
              ></MyClassesTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
