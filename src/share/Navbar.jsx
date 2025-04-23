import { GiFlowerEmblem } from "react-icons/gi";

const Navbar = () => {
  const links = (
    <>
      <li>
        <a href="">Home</a>
      </li>
      <li>
        <a>Parent</a>
      </li>
      <li>
        <a>Item 3</a>
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
        <div className="navbar-end">
          <a className="btn bg-pink-700 text-white font-bold">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
