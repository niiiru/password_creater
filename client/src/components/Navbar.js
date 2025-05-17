import { NavLink } from "react-router";

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
    </nav>
  );
}
