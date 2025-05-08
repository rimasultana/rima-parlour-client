import { NavLink } from "react-router";

const SlideBar = () => {
  return (
    <>
      <li>
        <NavLink
          to="/dashboard/adminhome"
          className={({ isActive }) => (isActive ? "text-red-700" : "")}
        >
          Admin Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/userlist"
          className={({ isActive }) => (isActive ? "text-red-700" : "")}
        >
          User List
        </NavLink>
      </li>
    </>
  );
};

export default SlideBar;
