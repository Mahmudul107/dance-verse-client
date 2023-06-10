import React, { useEffect, useState } from 'react';

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('popularInstructors.json');
        const data = await response.json();
        setInstructors(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto py-8">
      <h2 className="text-6xl text-center font-bold mb-24">Popular Instructors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {instructors.map((instructor, index) => (
          <div key={index} className="bg-white rounded shadow p-4 flex flex-col">
            <img
              src={instructor.image}
              alt={instructor.instructorName}
              className="w-full h-auto object-cover rounded mb-4 flex-grow"
            />
            <h3 className="text-lg font-semibold">{instructor.instructorName}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
