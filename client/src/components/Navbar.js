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
