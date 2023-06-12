import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageUsers = () => {
    // manage users as admin and instructors
    const {data: users =[], refetch} = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })

    return (
        <div>
            <h3>Manage Users Page</h3>
            {users.length}
        </div>
    );
};

export default ManageUsers;