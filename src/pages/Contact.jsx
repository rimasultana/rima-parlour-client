/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Contact = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const axiosSecure = useAxiosSecure();

  const fetchUsers = async () => {
    try {
      const res = await axiosSecure.get("/users");
      setData(res.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await axiosSecure.delete(`/users/${id}`);
        await fetchUsers();
        Swal.fire("Deleted!", "User has been deleted.", "success");
      }
    } catch (err) {
      Swal.fire("Error!", "Failed to delete user.", "error");
    }
  };

  const handleMakeAdmin = async (user) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You want to make this user an admin?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, make admin!"
      });

      if (result.isConfirmed) {
        await axiosSecure.patch(`/users/admin/${user._id}`);
        await fetchUsers();
        Swal.fire("Success!", "User has been made admin.", "success");
      }
    } catch (err) {
      Swal.fire("Error!", "Failed to make user admin.", "error");
    }
  };

  if (loading) return <div className="text-center p-8">Loading...</div>;
  if (error) return <div className="text-center text-red-500 p-8">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">User List</h2>
      <div className="overflow-x-auto">
        <table className="table  w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user._id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role || "User"}</td>
                <td className="px-4 py-2">
                  {user.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-sm btn-primary mr-2"
                    >
                      Make Admin
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;
