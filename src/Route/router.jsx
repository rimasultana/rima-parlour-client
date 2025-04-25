import { createBrowserRouter } from "react-router";
import ErrorPage from "../components/ErrorPage";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }
    ],
  },
]);
export default router;
