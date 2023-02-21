import { useState } from "react";
import place from "./images/Place.svg";
import volenteer from "./images/Volenteer.svg";
import useAuthContext from "./hooks/useAuthContext";
import * as S from "./HomePage.Style";
import * as Header from "./components/Headers";
import GlobalStyle from "./Global.Style";
function HomePage() {
  //! ---=== States ===---
  //? State for the name input field
  const [username, setUsername] = useState("");
  //? State for the password input field
  const [password, setPassword] = useState("");
  //? State for the sign up / log in mode
  const [signUp, setSignUp] = useState(false);
  //? State for the join mail-list checkbox
  const [mailSign, setMailSign] = useState(false);
  //? State for the valid email
  const [isValidMail, setIsValidMail] = useState(true);
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
  //? Two way binding for the name input field, (updating the state and assigning the value to the input field)
  const handleNameChange = (e) => {
    console.log("NAME e.target.value: ", e.target.value);
    setUsername(e.target.value);
  };
  //? Two way binding for the password input field, (updating the state and assigning the value to the input field)
  const handlePasswordChange = (e) => {
    console.log("PASSWORD e.target.value: ", e.target.value);
    setPassword(e.target.value);
  };
  //? Handle sign in / log in functionality (switching between sign up and log in)
  const handleSignMode = () => {
    console.log("signUp: ", signUp);
    setSignUp(!signUp);
  };
  //? Handle mail sign in checkbox (switching between true and false if user wants to join the mail list)
  const handleMailSign = () => {
    setMailSign(!mailSign);
    console.log("mailSign: ", mailSign);
  };
  //! ---=== Functions (Handleing events) ===---
  //? Handle sign in / log in Actions
  const handleSignIn = () => {
    console.log(
      "username: ",
      username,
      "password: ",
      password,
      "signUp: ",
      signUp,
      "mailSign: ",
      mailSign
    );
    //? Chaking if the username is a valid email
    if (!username.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)) {
      console.log("EMAIL username: NOT VALID EMAIL! ", username);
      setIsValidMail(false);
    } else if (username.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)) {
      console.log("EMAIL username: VALID! ", username);
      setIsValidMail(true);
    }
    //? Checking if the username (email) and the password matches
    if (username === dummyUser.email && password === dummyUser.password) {
      console.log(
        "username and paswword are matching, authentication is successful"
      );
    } else {
      console.log(
        "username and paswword are NOT matching, authentication FAILD"
      );
    }
  };
  return (
    <div>
      <GlobalStyle />
      {!role ? <Header.Main /> : <Header.Page />}
      {!isAuthenticated && !role && (
        <S.SelectRoleContainer>
          <S.Selection>
            <div
              onClick={() => {
                handleRoleSelection("place");
              }}
            >
              <img src={place} alt="place" />
              <S.H3Tag>מקום התנדבות</S.H3Tag>
            </div>
          </S.Selection>
          <S.Selection>
            <div
              onClick={() => {
                handleRoleSelection("volenteer");
              }}
            >
              <img src={volenteer} alt="volenteer" />
              <S.H3Tag>מתנדב</S.H3Tag>
            </div>
          </S.Selection>
        </S.SelectRoleContainer>
      )}
      {!isAuthenticated && role && (
        <S.UserDetails>
          <S.Selection>
            <div
              onClick={() => {
                handleRoleSelection("place");
              }}
            >
              <img
                src={role === "volenteer" ? volenteer : place}
                alt={role}
                style={{ width: "225px" }}
              />
            </div>
          </S.Selection>
          <form>
            <S.PTag>
              {!signUp ? "התחברות לחשבון המנטו שלך" : "הרשמה למנטו"}
            </S.PTag>
            <S.Input
              type="text"
              placeholder='כתובת דוא"ל'
              autoComplete="name"
              value={username}
              onChange={handleNameChange}
            />
            <br />
            <S.Input
              type="password"
              placeholder="סיסמא"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
            />
            <br />{" "}
            <div style={isValidMail ? { opacity: "0" } : { opacity: "1" }}>
              {!isValidMail && (
                <>
                  <p>המייל לא קיים במאגר המתנדבים</p>
                  <S.A href="#">הרשמה למאגר</S.A>
                </>
              )}
            </div>
            {signUp && (
              <>
                <label htmlFor="addToMailingList">
                  מאשר קבלת מיילים מהאפליקציה
                </label>
                <S.Input
                  type="checkbox"
                  id="addToMailingList"
                  name="addToMailingList"
                  value={mailSign}
                  onChange={handleMailSign}
                ></S.Input>
                <br />
                <S.A href="#" onClick={() => setShowWhyMail(!showWhyMail)}>
                  מדוע אנו מבקשים זאת?
                </S.A>
                {showWhyMail && (
                  <p>לשלוח הודעות עדכון כאשר ישנה פניה או הודעה חדשה</p>
                )}
              </>
            )}
          </form>

          <div>
            {!signUp && <button>שכחתי סיסמא</button>}
            <button onClick={handleSignIn}>{signUp ? "הרשמה" : "התחבר"}</button>
          </div>
          <div style={{ textAlign: "center" }}>
            {!signUp && <p>אין לך חשבון?</p>}
            <button onClick={handleSignMode}>
              {signUp ? "כבר יש לך חשבון מנטו" : "פתיחת חשבון מנטו"}
            </button>
          </div>
        </S.UserDetails>
      )}
    </div>
  );
}

export default HomePage;
