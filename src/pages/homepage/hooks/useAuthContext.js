import { useContext } from "react";
import AuthContext from "../../../context/authContext";
// custom hook to use the context
function useAuthContext() {
  return useContext(AuthContext);
}

export default useAuthContext;
