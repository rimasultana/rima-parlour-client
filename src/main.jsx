import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./Route/router";
import { RouterProvider } from "react-router";
import AuthProvider from "./provider/AuthProvider";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster/>
    </AuthProvider>
  </StrictMode>
);
