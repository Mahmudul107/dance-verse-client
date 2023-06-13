import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../../providers/LoadingSpinner";
import useAuth from "../../hooks/useAuth";
import useInstructor from "../../hooks/useInstructor";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isInstructor, isInstructorLoading] = useInstructor()

  const location = useLocation();

  // Loading
  if (loading || isInstructorLoading) {
    return (
      <LoadingSpinner/>
    );
  }

  if (user && isInstructor) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login"  replace></Navigate>;
};

export default InstructorRoute;
