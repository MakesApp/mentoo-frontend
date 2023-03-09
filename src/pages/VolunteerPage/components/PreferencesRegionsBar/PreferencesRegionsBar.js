import React from "react";
import styled from "styled-components";
import downArrow from "../../../../assets/imgs/downArrow.png";
import CheckboxesTree from "../CheckboxesTree/CheckboxesTree";
import * as S from "./PreferencesRegionsBar.style";

function PreferencesRegionsBar() {
  return (
    <div>
      <S.Dropdown>
        <S.Button>
          <S.downArrowImg src={downArrow} alt="down arrow" />
          איזור
        </S.Button>

        <S.UlContent>
          <CheckboxesTree />
        </S.UlContent>
      </S.Dropdown>
    </div>
  );
}

export default PreferencesRegionsBar;
