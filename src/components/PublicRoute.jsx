import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  // if already logged in → redirect to dashboard
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  // not logged in → show the page (login/register)
  return children;
};

export default PublicRoute;