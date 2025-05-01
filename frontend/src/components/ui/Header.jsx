import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary-600">
          Task Zero
        </Link>
        <nav className="flex items-center space-x-6">
          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                className="text-gray-700 hover:text-primary-600"
              >
                Dashboard
              </Link>
              <Link
                to="/profile"
                className="text-gray-700 hover:text-primary-600"
              >
                Profile
              </Link>
              <button
                onClick={logout}
                className="text-gray-700 hover:text-primary-600"
              >
                Logout
              </button>
              <span className="text-gray-700">{user.name}</span>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-700 hover:text-primary-600"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-gray-700 hover:text-primary-600"
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
