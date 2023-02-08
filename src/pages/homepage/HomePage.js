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

const LogIn = styled.div`
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //
  const { role, setRole, dummyUser, isAuthenticated } = useAuthContext();
  // console.log("useAuthContext: ", useAuthContext());
  // console.log("role: ", role);
  // console.log("dummyUser: ", dummyUser);
  // Setting the role of volenteer or place
  const handleRoleSelection = (role) => {
    setRole(role);
  };

  const handleNameChange = (e) => {
    console.log("NAME e.target.value: ", e.target.value);
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    console.log("PASSWORD e.target.value: ", e.target.value);
    setPassword(e.target.value);
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
        <LogIn>
          <Selection>
            <div
              onClick={() => {
                handleRoleSelection("place");
              }}
            >
              <img src={role === "volenteer" ? volenteer : place} alt={role} />
              <h3>מקום התנדבות</h3>
            </div>
          </Selection>
          <p>התחברות לחשבון המנטו שלך</p>
          <form>
            <Input
              type="text"
              placeholder="שם משתמש"
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
          </form>
          <div>
            <button>שכחתי סיסמא</button>
            <button>התחבר</button>
          </div>
          <div style={{ textAlign: "center" }}>
            <p>אין לך חשבון?</p>
            <A href="#">פתיחת חשבון מנטו</A>
          </div>
        </LogIn>
      )}
    </div>
  );
}

export default HomePage;
