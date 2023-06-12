import React, { useEffect, useState } from "react";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("instructors.json")
      .then((response) => response.json())
      .then((data) => {
        const popularInstructors = data.filter(
          (instructor) => instructor.category === "Popular"
        );
        setInstructors(popularInstructors);
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
            key={instructor.id}
            className="bg-white rounded shadow p-4 flex flex-col relative"
          >
            <img
              src={instructor.image}
              alt={instructor.instructorName}
              className="w-full object-cover rounded mb-4 flex-grow"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 hover:opacity-100">
              <h3 className="text-4xl font-semibold text-cyan-50 bg-red-400 p-4 rounded-md">
                {instructor.instructorName}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
