import { createBrowserRouter } from "react-router";
import ErrorPage from "../components/ErrorPage";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import ViewDetails from "../pages/ViewDetails";
import AddService from "../pages/Home/AddService";
import UserList from "../pages/UserList";

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
        element: <AddService />,
      },

      {
        path: "/userlist",
        element: <UserList />,
      },
      {
        path: "/viewdetails/:id",
        element: <ViewDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/items/${params.id}`),
      },
    ],
  },
]);
export default router;
