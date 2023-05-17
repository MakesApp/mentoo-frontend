import { useContext, useState } from "react";
import AppleseedsHeader from "./components/Headers";
import SelectRoleContainer from "./components/RoleSelect";
import AuthContext from "../../context/authContext";
function HomePage() {
  //! ---=== States ===---
  const { role, handleRoleSelection } = useContext(AuthContext);
  console.log("ha");
  return (
    <div>
      <AppleseedsHeader headerType={!role ? "main" : "page"} />{" "}
      <SelectRoleContainer handleRoleSelection={handleRoleSelection} />
    </div>
  );
}

export default HomePage;
