import React, { useState, useEffect } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axiosSecure.get('/classes');
      setClasses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleApprove = async (classId) => {
    try {
      await axiosSecure.put(`/classes/${classId}`, { status: 'approved' });
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Class has been approved',
        showConfirmButton: false,
        timer: 1500,
      });
      fetchClasses();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeny = async (classId) => {
    try {
      await axiosSecure.put(`/classes/${classId}`, { status: 'denied' });
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Class has been denied',
        showConfirmButton: false,
        timer: 1500,
      });
      fetchClasses();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSendFeedback = (classId) => {
    // Implement the logic to open the modal and send feedback
    // You can use a state variable to control the modal visibility
    // and another state variable to store the feedback message
  };

  return (
    <div>
      <h2 className="text-center text-4xl">Manage Classes Admin</h2>
      {classes.length > 0 ? (
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Class Image</th>
              <th className="border p-2">Class name</th>
              <th className="border p-2">Instructor name</th>
              <th className="border p-2">Instructor email</th>
              <th className="border p-2">Available seats</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem) => (
              <tr key={classItem._id}>
                <td className="border p-2">
                  <img src={classItem.classImage} alt={classItem.className} className="w-20" />
                </td>
                <td className="border p-2">{classItem.className}</td>
                <td className="border p-2">{classItem.name}</td>
                <td className="border p-2">{classItem.email}</td>
                <td className="border p-2">{classItem.availableSeats}</td>
                <td className="border p-2">{classItem.price}</td>
                <td className="border p-2">{classItem.status}</td>
                <td className="border p-2">
                  {classItem.status === 'pending' ? (
                    <>
                      <button
                        onClick={() => handleApprove(classItem._id)}
                        className="mr-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md focus:outline-none"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleDeny(classItem._id)}
                        className="mr-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md focus:outline-none"
                      >
                        Deny
                      </button>
                      <button
                        onClick={() => handleSendFeedback(classItem._id)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none"
                      >
                        Send Feedback
                      </button>
                    </>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No classes found.</p>
      )}
    </div>
  );
};

export default ManageClasses;
