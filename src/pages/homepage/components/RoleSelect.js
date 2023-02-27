// just for test, to be modified or removed on next commit
import * as S from "../HomePage.Style";

const SelectRoleContainer = ({ handleRoleSelection, place, volenteer }) => {
  return (
    <S.SelectRoleContainer>
      <S.Selection>
        <div
          onClick={() => {
            handleRoleSelection("place");
          }}
        >
          <img src={place} alt="place" />
          <S.RoleSelectTag>מקום התנדבות</S.RoleSelectTag>
        </div>
      </S.Selection>
      <S.Selection>
        <div
          onClick={() => {
            handleRoleSelection("volenteer");
          }}
        >
          <img src={volenteer} alt="volenteer" />
          <S.RoleSelectTag>מתנדב</S.RoleSelectTag>
        </div>
      </S.Selection>
    </S.SelectRoleContainer>
  );
};

export default SelectRoleContainer;
