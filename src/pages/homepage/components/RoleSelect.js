// just for test, to be modified or removed on next commit
import * as S from "../HomePage.Style";
import place from "assets/images/Place.svg";
import volenteer from "assets/images/Volenteer.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "context/authContext";
import { routes } from "routes/constants";

const SelectRoleContainer = ({ handleRoleSelection }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <S.SelectRoleContainer>
      <S.Selection>
        <Link to={routes.LOGIN}>
          <img src={place} alt="place" />
          <S.RoleSelectTag>מקום התנדבות</S.RoleSelectTag>
        </Link>
      </S.Selection>
      <S.Selection>
        <Link to={routes.LOGIN}>
          <img src={volenteer} alt="volenteer" />
          <S.RoleSelectTag>מתנדב</S.RoleSelectTag>
        </Link>
      </S.Selection>
    </S.SelectRoleContainer>
  );
};

export default SelectRoleContainer;
