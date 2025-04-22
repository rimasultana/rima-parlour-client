import Footer from "../share/Footer";
import Navbar from "../share/Navbar";
import { Outlet } from "react-router";

const MainLayOut = () => {
  return (
    <>
      <Navbar className="w-4/5 mx-auto"></Navbar>
      <div className="min-h-screen">
      <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayOut;
