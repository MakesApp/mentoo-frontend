import * as S from "../HomePage.Style";
// This is for the "mentoo" and "by appleseeds" header
const AppleseedsHeader = ({ headerType }) => {
  return (
    <S.HeadLogo headerType={headerType}>
      <S.MainHeaderMentoo>
        ment<span style={{ color: "purple" }}>oo</span>
      </S.MainHeaderMentoo>
      <h4>BY APPLESEEDS</h4>
    </S.HeadLogo>
  );
};

export default AppleseedsHeader;
