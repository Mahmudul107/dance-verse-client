import React from "react";
import { Navigate, useLocation } from "react-router-dom";
// import LoadingSpinner from "../../providers/LoadingSpinner";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  const location = useLocation();

  // Loading
  if (loading) {
    return (
      <p>...Loading</p>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login"  replace></Navigate>;
};

export default PrivateRoute;
