import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";

export function MyAppNav() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/login" end>
        Login
      </NavLink>
      <NavLink to="/register" end>
        Register
      </NavLink>
      <PrivateLink>
        <LogOut />
      </PrivateLink>
    </nav>
  );
}

const PrivateLink = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("tokenAuth");

    setIsAuthenticated(!!token);
    setLoading(false);
  }, []);
  if (isLoading) return null;
  return isAuthenticated ? children : null;
};

const LogOut = () => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("tokenAuth");
    navigate("/login");
  };
  return <a onClick={logOut}>Log out</a>;
};
