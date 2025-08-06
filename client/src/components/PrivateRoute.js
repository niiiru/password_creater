import { Navigate } from "react-router";
import { useState, useEffect } from "react";

const PrivateRoute = ({ element: Component }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("tokenAuth");

    setIsAuthenticated(!!token);
    setLoading(false);
  }, []);
  if (isLoading) return null;

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
