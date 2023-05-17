import { createContext, useState } from "react";

const AuthContext = createContext();

function Provider({ children }) {
  // State for the user - will hold a dummy user for now
  const [user, setUser] = useState(null);
  // State for the authentication - default is false, will change to true when the user is logged in so it will not need to log in again.
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // State for the role selection - volenteer or place
  const [role, setRole] = useState("");

  const dummyUser = {
    name: "ameer",
    email: "abc@example.com",
    password: "123456",
    role: "volenteer",
  };

  const handleRoleSelection = (role) => {
    setRole(role);
  };

  const valueToShare = {
    user,
    setUser,
    isAuthenticated,
    setIsAuthenticated,
    role,
    setRole,
    handleRoleSelection,
    dummyUser,
  };

  return (
    <AuthContext.Provider value={valueToShare}>{children}</AuthContext.Provider>
  );
}

export { Provider };
export default AuthContext;
