import { useState } from "react";
import place from "./images/Place.svg";
import volenteer from "./images/Volenteer.svg";
import useAuthContext from "./hooks/useAuthContext";
import * as S from "./HomePage.Style";
import AppleseedsHeader from "./components/Headers";
import SelectRoleContainer from "./components/RoleSelect";
function HomePage() {
  //! ---=== States ===---
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  //? State for the sign up / log in mode
  const [joinMailList, setJoinMailList] = useState(false);
  //? State for the join mail-list checkbox
  const [mailSign, setMailSign] = useState(false);
  //? State for the valid email
  const [isEmailVaild, setIsEmailValid] = useState(true);
  //? Show / Hide why we ask for the email
  const [showWhyMail, setShowWhyMail] = useState(false);
  //? Importing the context
  const { role, setRole, dummyUser, isAuthenticated } = useAuthContext();
  // console.log("useAuthContext: ", useAuthContext());
  // console.log("role: ", role);
  // console.log("dummyUser: ", dummyUser);

  //! ---=== Functions (Updating states) ===---
  //? Setting the role of volenteer or place (role value is passsed by clicking on the selection div)
  const handleRoleSelection = (role) => {
    setRole(role);
  };
  const handleOnInputChange = (e) => {
    console.log(`${e.target.name} e.target.value: `, e.target.value);
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  //? Handle sign in / log in functionality (switching between sign up and log in)
  const handleSignMode = () => {
    console.log("signUp: ", joinMailList);
    setJoinMailList(!joinMailList);
  };
  //? Handle mail sign in checkbox (switching between true and false if user wants to join the mail list)
  const handleMailSign = () => {
    setMailSign(!mailSign);
    console.log("mailSign: ", mailSign);
  };

  //! ---=== Functions (Handleing events) ===---
  const handleSignIn = () => {
    console.log(
      "username: ",
      formValues.email,
      "password: ",
      formValues.password,
      "joinMailList: ",
      joinMailList,
      "mailSign: ",
      mailSign
    );
    //? Chaking if the username is a valid email pattern with regex
    if (!formValues.email.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)) {
      console.log("EMAIL username: NOT VALID EMAIL! ", formValues.email);
      setIsEmailValid(false);
    } else if (formValues.email.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)) {
      console.log("EMAIL username: VALID! ", formValues.email);
      setIsEmailValid(true);
    }
    //? Checking if the email and the password matches
    if (
      formValues.email === dummyUser.email &&
      formValues.password === dummyUser.password
    ) {
      console.log("mail and pass are matching, auth Successful");
    } else {
      console.log("mail and pass are NOT matching, auth FAILD");
    }
  };
  return (
    <div>
      <AppleseedsHeader headerType={!role ? "main" : "page"} />{" "}
      {!isAuthenticated && !role && (
        <SelectRoleContainer
          place={place}
          volenteer={volenteer}
          handleRoleSelection={handleRoleSelection}
        />
      )}
      {!isAuthenticated && role && (
        <S.UserDetails>
          <S.Selection>
            <img
              src={role === "volenteer" ? volenteer : place}
              alt={role}
              style={{ width: "225px" }}
            />
            <S.FormContainer>
              <S.signupInputTitle>
                {!joinMailList ? "?????????????? ???????????? ?????????? ??????" : "?????????? ??????????"}
              </S.signupInputTitle>
              <S.Input
                name="email"
                type="text"
                placeholder='?????????? ??????"??'
                autoComplete="name"
                value={formValues.email}
                onChange={handleOnInputChange}
              />
              <br />
              <S.Input
                name="password"
                type="password"
                placeholder="??????????"
                autoComplete="current-password"
                value={formValues.password}
                onChange={handleOnInputChange}
              />
              <br />
              <div style={isEmailVaild ? { opacity: "0" } : { opacity: "1" }}>
                {!isEmailVaild && (
                  <>
                    <p>?????????? ???? ???????? ?????????? ????????????????</p>
                    <S.Link href="#">?????????? ??????????</S.Link>
                  </>
                )}
              </div>
              {joinMailList && (
                <>
                  <S.FlexRow>
                    <label htmlFor="addToMailingList">
                      ???????? ???????? ???????????? ????????????????????
                    </label>
                    <S.Checkbox
                      type="checkbox"
                      id="addToMailingList"
                      name="addToMailingList"
                      value={mailSign}
                      onChange={handleMailSign}
                    ></S.Checkbox>
                  </S.FlexRow>

                  <br />
                  <S.Link href="#" onClick={() => setShowWhyMail(!showWhyMail)}>
                    ???????? ?????? ???????????? ???????
                  </S.Link>
                  {showWhyMail && (
                    <p>?????????? ???????????? ?????????? ???????? ???????? ???????? ???? ?????????? ????????</p>
                  )}
                </>
              )}
            </S.FormContainer>
            <S.FlexColumn>
              {!joinMailList && (
                <S.UnstyledButton sideText={true}>?????????? ??????????</S.UnstyledButton>
              )}
              <S.StyledButton onClick={handleSignIn}>
                {joinMailList ? "??????????" : "??????????"}
              </S.StyledButton>
            </S.FlexColumn>
          </S.Selection>

          <div style={{ textAlign: "center" }}>
            {!joinMailList && <p>?????? ???? ???????????</p>}
            <S.UnstyledButton onClick={handleSignMode}>
              {joinMailList ? "?????? ???? ???? ?????????? ????????" : "?????????? ?????????? ????????"}
            </S.UnstyledButton>
          </div>
        </S.UserDetails>
      )}
    </div>
  );
}

export default HomePage;
