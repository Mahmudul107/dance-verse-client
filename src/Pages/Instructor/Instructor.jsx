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
            className="bg-gradient-to-r from-red-100 to-slate-200 rounded-xl shadow p-4 flex flex-col items-center"
          >
            <img
              src={instructor.photoURL}
              alt="Instructor"
              className="w-72 h-72 rounded-full mb-4"
            />
            <h1 className="text-xl font-bold mb-2">
              <span className="text-purple-600 text-lg">Name: </span> {instructor.name}
            </h1>
            <p className="text-gray-600">
              <span className="text-green-600">Email: </span> {instructor.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
