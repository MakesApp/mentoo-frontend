import { useContext } from "react";
import AuthContext from "./authContext";
// custom hook to use the context
function useAuthContext() {
  return useContext(AuthContext);
}

export default useAuthContext;
