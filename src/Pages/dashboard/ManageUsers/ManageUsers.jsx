import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch('http://localhost:5000/users');
    return res.json();
  });

  const [selectedUser, setSelectedUser] = useState(null);

  const makeInstructor = (user) => {
    // Implementation to make the user an instructor
    // ...

    // Example implementation:
    // ...
  };

  const makeAdmin = (user) => {
    // Implementation to make the user an admin
    // ...

    // Example implementation:
    // ...
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Manage Users Page</h3>
      {users.length > 0 ? (
        <table className="w-[900px] border border-gray-300">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-300 px-4 py-2 border-l">Image</th>
              <th className="border-b-2 border-gray-300 px-4 py-2 border-l">Name</th>
              <th className="border-b-2 border-gray-300 px-4 py-2 border-l border-r">Email</th>
              <th className="border-b-2 border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className={`${
                  index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                } hover:bg-slate-100`}
              >
                <td className="border-b border-gray-300 px-4 py-2 border-l">
                  <img src={user.photoURL} alt="User" className="w-10 h-10 rounded-full" />
                </td>
                <td className="border-b border-gray-300 px-4 py-2 border-l">{user.name}</td>
                <td className="border-b border-gray-300 px-4 py-2 border-l border-r">{user.email}</td>
                <td className="border-b border-gray-300 px-4 py-2">
                  <button
                    onClick={() => makeInstructor(user)}
                    className="text-sm px-4 py-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600"
                  >
                    Make Instructor
                  </button>
                  <button
                    onClick={() => makeAdmin(user)}
                    className="text-sm px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 ml-2"
                  >
                    Make Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default ManageUsers;
