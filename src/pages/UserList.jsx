import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get("/users").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);
  return (
    <div>
      <h1>User{users.length}</h1>
    </div>
  );
};

export default UserList;
