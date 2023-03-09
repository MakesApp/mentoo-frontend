import React from "react";
import * as S from "./TitleAndDescription.style";

function TitleAndDescription({ title, description }) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Container>
  );
}

export default TitleAndDescription;
