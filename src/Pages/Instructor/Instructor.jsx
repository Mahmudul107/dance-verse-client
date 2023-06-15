import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Instructor = () => {
  const instructors = useLoaderData();

  return (
    <div className='w-[1400px] mx-auto my-20'>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {instructors.map((instructor) => (
        <div
          key={instructor._id}
          className="bg-white rounded shadow p-4 flex flex-col items-center"
        >
          <img
            src={instructor.photoURL}
            alt="Instructor"
            className="w-72 h-72 rounded-full mb-4"
          />
          <h1 className="text-xl font-bold mb-2">{instructor.name}</h1>
          <p className="text-gray-600">{instructor.email}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Instructor;
