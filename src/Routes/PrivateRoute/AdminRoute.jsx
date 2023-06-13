import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../../providers/LoadingSpinner";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin()

  const location = useLocation();

  // Loading
  if (loading || isAdminLoading) {
    return (
      <LoadingSpinner/>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login"  replace></Navigate>;
};

export default AdminRoute;
