import React, { useEffect, useState } from 'react';

const PopularClass = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('popularClass.json');
        const data = await response.json();
        setClasses(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto py-8">
      <h2 className="text-6xl text-center font-bold mb-24">Learn a Variety Dance Classes</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {classes.map((danceClass, index) => (
          <div key={index} className="bg-white rounded shadow p-4">
            <img
              src={danceClass.image}
              alt={danceClass.className}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-semibold">{danceClass.className}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
