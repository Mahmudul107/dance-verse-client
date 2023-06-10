import React, { useEffect, useState } from 'react';

const Instructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('instructors.json');
        const data = await response.json();
        setInstructors(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex flex-wrap justify-center'>
      {/* Render the instructors data */}
      {instructors.map((instructor, index) => (
        <div key={index} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4'>
          <div className='bg-white rounded-lg shadow p-4 h-full'>
            <img
              src={instructor.image}
              alt={instructor.instructorName}
              className='w-full h-72 object-cover rounded-md mb-4'
            />
            <h4 className='text-xl font-semibold mb-2'>{instructor.instructorName}</h4>
            <p className='mb-2'>Email: {instructor.email}</p>
            {instructor.numberOfClasses && (
              <p className='mb-2'>Number of Classes: {instructor.numberOfClasses}</p>
            )}
            {instructor.classNames && (
              <p className='mb-2'>Classes Taken: {instructor.classNames.join(', ')}</p>
            )}
            {instructor.seeClassesLink && (
              <a href={instructor.seeClassesLink} className='text-blue-500 hover:underline'>
                See Classes
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Instructor;
