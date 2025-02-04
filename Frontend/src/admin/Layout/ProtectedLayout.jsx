import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { getCookie } from "../../Utils/cookie";
import Loader from "../../Components/loader/Loader";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate(); // Use useNavigate for redirects

  useEffect(() => {
    const token = getCookie("token");
    if (!token) {
      navigate("/"); // Redirect to home if no token
    } else {
      setIsAuthenticated(true); // Set authenticated to true if token exists
    }
  }, [navigate]); // Add navigate to dependency array

  if (!isAuthenticated) {
    return <Loader />; // Return null or a loading spinner while checking authentication
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
