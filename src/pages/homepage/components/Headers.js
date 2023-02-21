import * as S from "../HomePage.Style";
// This is for the "mentoo" and "by appleseeds" header
const Main = () => {
  return (
    <S.HeaderMain>
      <S.H1>
        ment<span style={{ color: "purple" }}>oo</span>
      </S.H1>
      <h4>BY APPLESEEDS</h4>
    </S.HeaderMain>
  );
};

const Page = () => {
  return (
    <S.HeaderPage>
      <S.H1>
        ment<span style={{ color: "purple" }}>oo</span>
      </S.H1>
      <h4>BY APPLESEEDS</h4>
    </S.HeaderPage>
  );
};

export { Main, Page };
