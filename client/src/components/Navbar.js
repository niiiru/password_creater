import { NavLink } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export function MyAppNav() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {!isAuthenticated ? (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/profile">Profile</NavLink>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </nav>
  );
}
