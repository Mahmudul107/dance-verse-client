import React, { useEffect, useState } from "react";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users/instructor")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setInstructors(data.slice(0, 6)); 
      });
  }, []);

  return (
    <div className="mx-auto py-8">
      <div className="w-[800px] mx-auto divider"></div>
      <i>
        <h2 className="text-6xl text-center font-bold">Popular Instructors</h2>
      </i>
      <div className="w-[800px] mx-auto divider mb-24"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {instructors.map((instructor) => (
          <div
            key={instructor._id}
            className="bg-white w-96 rounded shadow p-4 flex flex-col relative"
          >
            <img
              src={instructor.photoURL}
              alt={instructor.name}
              className="w-full object-cover rounded mb-4 flex-grow"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 hover:opacity-100">
              <h3 className="text-4xl font-semibold text-cyan-50 bg-red-400 p-4 rounded-md">
                {instructor.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
