import { createBrowserRouter } from "react-router";
import ErrorPage from "../components/ErrorPage";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../pages/Home/Home";
import Login from "../share/Login";

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
    ],
  },
]);
export default router;
