import React from "react";
import { useLocation } from 'react-router'
import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivatRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="h-screen flex justify-center items-center">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivatRoute;
