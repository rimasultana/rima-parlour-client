import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/users").then((res) => {
      setUsers(res?.data);
    });
  }, [axiosSecure]);
  const hanDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      axiosSecure.delete(`/users/${id}`).then((res) => {
        if (res?.data?.acknowledged) {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        }
      });
    });
  };

  return (
    <div className="p-4 md:p-8 bg-gradient-to-br from-pink-100 via-white to-purple-100 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-pink-600">
        Total Users: {users.length}
      </h1>
      <div className="overflow-x-auto w-full rounded-lg shadow-md bg-white">
        <table className="table w-full text-sm md:text-base">
          <thead className="bg-gradient-to-r from-pink-400 to-purple-500 text-white">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className={`${
                  index % 2 === 0 ? "bg-pink-50" : "bg-purple-50"
                } hover:bg-pink-100 transition-all`}
              >
                <td className="font-semibold text-purple-800">{index + 1}</td>
                <td className="text-gray-800">{user.name}</td>
                <td>
                  {user.role === "admin" ? (
                    <span className="text-sm bg-purple-200 text-purple-800 px-2 py-1 rounded-full font-medium">
                      Admin
                    </span>
                  ) : (
                    <FaUsers className="text-pink-500 text-lg" />
                  )}
                </td>
                <td>
                  <MdDelete
                    onClick={() => hanDeleteUser(user._id)}
                    className="text-red-500 text-xl cursor-pointer hover:text-red-700 transition-colors"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
