import { useState } from "react";
import styled from "styled-components";
import place from "./images/place.png";
import volenteer from "./images/voloenteer.png";
import useAuthContext from "./hooks/useAuthContext";
// Styled Components
const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
`;

const WelcomeContent = styled.div`
  display: flex;
  align-items: center;
`;

const Selection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 2rem auto;
  cursor: pointer;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin: 0.5rem auto;
  padding: 0.5rem;
`;
const A = styled.a`
  text-decoration: none;
  color: blue;
  display: block;
  &:hover {
    color: CornflowerBlue;
  }
`;
function HomePage() {
  //! ---=== States ===---
  // State for the name input field
  const [username, setUsername] = useState("");
  // State for the password input field
  const [password, setPassword] = useState("");
  // State for the sign up / log in mode
  const [signUp, setSignUp] = useState(false);
  // State for the join mail-list checkbox
  const [mailSign, setMailSign] = useState(false);
  // State for the valid email
  const [isValidMail, setIsValidMail] = useState(false);
  // Importing the context
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
      <Header>
        <h1>
          MENT<span style={{ color: "purple" }}>OO</span>
        </h1>
        <h4>BY APPLESEEDS</h4>
      </Header>
      {!isAuthenticated && !role && (
        <WelcomeContent>
          <Selection>
            <div
              onClick={() => {
                handleRoleSelection("place");
              }}
            >
              <img src={place} alt="place" />
              <h3>מקום התנדבות</h3>
            </div>
          </Selection>
          <Selection>
            <div
              onClick={() => {
                handleRoleSelection("volenteer");
              }}
            >
              <img src={volenteer} alt="volenteer" />
              <h3>מתנדב</h3>
            </div>
          </Selection>
        </WelcomeContent>
      )}
      {!isAuthenticated && role && (
        <UserDetails>
          <Selection>
            <div
              onClick={() => {
                handleRoleSelection("place");
              }}
            >
              <img src={role === "volenteer" ? volenteer : place} alt={role} />
              <h3>{role === "volenteer" ? "מתנדב" : "מקום התנדבות"}</h3>
            </div>
          </Selection>
          <p>{!signUp ? "התחברות לחשבון המנטו שלך" : "הרשמה למנטו"}</p>
          <form>
            <Input
              type="text"
              placeholder="כתובת דואר אלקטרוני"
              autoComplete="name"
              value={username}
              onChange={handleNameChange}
            />
            <br />
            <Input
              type="password"
              placeholder="סיסמא"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
            />
            <br />{" "}
            <div style={isValidMail ? { opacity: "0" } : { opacity: "1" }}>
              <p>המייל לא קיים במאגר המתנדבים</p>
              <A href="#">הרשמה למאגר</A>
            </div>
            {signUp && (
              <>
                <label htmlFor="addToMailingList">
                  מאשר קבלת מיילים מהאפליקציה
                </label>
                <Input
                  type="checkbox"
                  id="addToMailingList"
                  name="addToMailingList"
                  value={mailSign}
                  onChange={handleMailSign}
                ></Input>
              </>
            )}
          </form>

          <div>
            {!signUp && <button>שכחתי סיסמא</button>}
            <button onClick={handleSignIn}>{signUp ? "הרשמה" : "התחבר"}</button>
          </div>
          <div style={{ textAlign: "center" }}>
            <p>אין לך חשבון?</p>
            <button onClick={handleSignMode}>
              {signUp ? "כבר יש לך חשבון מנטו" : "פתיחת חשבון מנטו"}
            </button>
          </div>
        </UserDetails>
      )}
    </div>
  );
}

export default HomePage;
