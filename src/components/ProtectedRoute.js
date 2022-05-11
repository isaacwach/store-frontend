import React from "react";
import { RedirectPath, Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
  user,
  RedirectPath = '/details',
  children,
}) => {
  if (!user) {
    return <Redirect to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
