import AuthContext from "context/authContext";
import { useContext, useEffect } from "react";
import { useNavigate, Route } from "react-router-dom";

const ProtectedRoute = ({ roles, ...props }) => {
  const { isAuthenticated, role } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !isAuthenticated ||
      (roles && roles.length > 0 && !roles.includes(role))
    ) {
      navigate("/login");
    }
  }, [isAuthenticated, role, roles, navigate]);

  return isAuthenticated &&
    (!roles || roles.length === 0 || roles.includes(role)) ? (
    <Route {...props} />
  ) : null;
};

export default ProtectedRoute;
