import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import ClassesCard from "./ClassesCard";

const Classes = () => {
  const [axiosSecure] = useAxiosSecure();
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();
  const [classData, setClassData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setClassData(data);
      });
  }, []);

  const handleSelectClass = (data) => {
    const { _id, classImage, className, email, price, availableSeats } = data;

    if (!user) {
      Swal.fire({
        icon: "success",
        title: "To select the class you need to login first",
        showConfirmButton: false,
        timer: 1500,
      });
      return navigate("/login");
    }

    const selectedClassInfo = {
      class_id: _id,
      classImage,
      className,
      availableSeats,
      price,
      email,
    };
    console.log(selectedClassInfo);
    
      axiosSecure.post('/select-class', selectedClassInfo)
      .then((res) => {
        if (res.data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "You have successfully selected the class",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="my-container grid md:grid-cols-2 gap-8 mt-10">
        {classData.map((data) => (
          <ClassesCard
            key={data._id}
            data={data}
            handleSelectClass={handleSelectClass}
          ></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
