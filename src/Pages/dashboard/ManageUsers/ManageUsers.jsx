import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const [selectedUser, setSelectedUser] = useState(null);

  const makeInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
        method: 'PATCH'
    })
    .then( res => res.json())
    .then(data=> {
        if(data.modifiedCount) {
            refetch()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Instructor now!`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  };

  const makeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
        method: 'PATCH'
    })
    .then( res => res.json())
    .then(data=> {
        if(data.modifiedCount) {
            refetch()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Admin now!`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Manage Users Page</h3>
      {users.length > 0 ? (
        <table className="w-[900px] border border-gray-300">
          <thead className="bg-red-100">
            <tr>
              <th className="border-b-2 border-gray-300 px-4 py-2 border-l">
                Image
              </th>
              <th className="border-b-2 border-gray-300 px-4 py-2 border-l">
                Name
              </th>
              <th className="border-b-2 border-gray-300 px-4 py-2 border-l border-r">
                Email
              </th>
              <th className="border-b-2 border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-slate-100`}
              >
                <td className="border-b border-gray-300 px-4 py-2 border-l">
                  <img
                    src={user.photoURL}
                    alt="User"
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="border-b border-gray-300 px-4 py-2 border-l">
                  {user.name}
                </td>
                <td className="border-b border-gray-300 px-4 py-2 border-l border-r">
                  {user.email}
                </td>
                <td className="border-b border-gray-300 px-4 py-2 text-end flex justify-between mt-1">
                  {user.role === "instructor" ? (
                    <p className="py-2 px-4 bg-indigo-100 rounded-md">Instructor</p>
                  ) : (
                    <button
                      onClick={() => makeInstructor(user)}
                      className="text-sm px-4 py-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600"
                    >
                      Make Instructor
                    </button>
                  )}
                  {user.role === "admin" ? (
                    <p className="py-2 px-4 bg-indigo-100 rounded-md">Admin</p>
                  ) : (
                    <button
                      onClick={() => makeAdmin(user)}
                      className="text-sm px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 ml-2"
                    >
                      Make Admin
                    </button>
                  )}
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
