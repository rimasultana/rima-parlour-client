import { Outlet } from "react-router";
import SlideBar from "../pages/Dashboard/SlideBar";
const DashBoardLayout = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle " />
      <label
        htmlFor="my-drawer"
        className="btn bg-pink-700 font-bold text-white w-10 h-[100px] drawer-button "
      >
        Open drawer
      </label>
      <div className="drawer-content">
        <Outlet />
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <SlideBar />
        </ul>
      </div>
    </div>
  );
};

export default DashBoardLayout;
