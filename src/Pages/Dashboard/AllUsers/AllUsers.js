import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin = id => {
        console.log(id);
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin Successfully');
                    refetch();
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Delate</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, i) => <tr key={user._id}>

                            <td>{i + 1}</td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user?.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>{user?.email}</td>

                            <th>
                                {
                                    user?.role ==  'admin' ? <button disabled onClick={() => handleMakeAdmin(user?._id)} className="btn btn-info btn-xs">Make Admin</button>
                                        :
                                        <button onClick={() => handleMakeAdmin(user?._id)} className="btn btn-info btn-xs">Make Admin</button>
                                }

                            </th>
                            <th>
                                <button className="btn btn-error btn-xs">Delate</button>
                            </th>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;