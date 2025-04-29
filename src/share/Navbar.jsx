import { GiFlowerEmblem } from "react-icons/gi";
import { NavLink, Link } from "react-router";
import useAuth from "../hooks/useAuth";
import { BiSolidUserCircle } from "react-icons/bi";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "hover:text-pink-800 font-bold" : "text-gray-600"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addservice"
          className={({ isActive }) =>
            isActive ? "hover:text-pink-800 font-bold" : "text-gray-600"
          }
        >
         Add Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/userlist"
          className={({ isActive }) =>
            isActive ? "hover:text-pink-800 font-bold" : "text-gray-600"
          }
        >
          user List
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "hover:text-pink-800 font-bold" : "text-gray-600"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="w-full bg-[#FFF8F5] py-2">
      <div className="navbar  w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            ></div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <h3 className="btn btn-ghost text-2xl">
            {" "}
            <GiFlowerEmblem className="text-3xl text-pink-600" />
            Rima Parlour
          </h3>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex items-center gap-2">
          {user?.email ? (
            <>
              {user?.photoURL ? (
                <img
                  className="h-10 rounded-full w-10 mr-2"
                  src={user?.photoURL}
                  title={user?.displayName || "User"}
                  alt="User"
                />
              ) : (
                <BiSolidUserCircle className="text-2xl " />
              )}
              <button onClick={logOut} className="btn btn-success">
                LogOut
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-accent">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
