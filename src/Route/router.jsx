import { createBrowserRouter } from "react-router";
import ErrorPage from "../components/ErrorPage";
import MainLayOut from "../LayOut/MainLayOut";
import DashBoardLayout from "../LayOut/DashBoardLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ViewDetails from "../pages/ViewDetails";
import AddService from "../pages/Home/AddService";
import UserList from "../pages/Dashboard/UserList";
import PrivatRoute from "./PrivatRoute";
import AdminHome from "../pages/Dashboard/AdminHome";

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
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addservice",
        element: (
          <PrivatRoute>
            {" "}
            <AddService />
          </PrivatRoute>
        ),
      },

      {
        path: "/viewdetails/:id",
        element: (
          <PrivatRoute>
            <ViewDetails />
          </PrivatRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/items/${params.id}`),
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashBoardLayout />,
    children: [
      {
        path: "/dashboard/adminhome",
        element: <AdminHome />,
      },
      {
        path: "/dashboard/userlist",
        element: <UserList />,
      },
    ],
  },
]);
export default router;
