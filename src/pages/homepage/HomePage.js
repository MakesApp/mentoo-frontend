import styled from "styled-components";
import place from "./images/place.png";
import volenteer from "./images/voloenteer.png";
import { useState } from "react";
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
function HomePage() {
  const [role, setRole] = useState("volenteer");
  const [roleSelected, setRoleSelected] = useState(false);

  const selectionHandler = (role) => {
    setRole(role);
    setRoleSelected(true);
  };
  return (
    <div>
      <Header>
        <h1>
          MENT<span style={{ color: "purple" }}>OO</span>
        </h1>
        <h4>BY APPLESEEDS</h4>
      </Header>
      <WelcomeContent>
        <Selection>
          <div>
            <img src={place} alt="place" />
            <h3>מקום התנדבות</h3>
          </div>
        </Selection>
        <Selection>
          <div>
            <img src={volenteer} alt="volenteer" />
            <h3>מתנדב</h3>
          </div>
        </Selection>
      </WelcomeContent>
      <LogIn>
        <p>התחברות לחשבון המנטו שלך</p>
        <input type="text" placeholder="שם משתמש" />
        <input type="password" placeholder="סיסמא" />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "space-between",
          }}
        >
          <button>התחבר</button>
          <button>שכחתי סיסמא</button>
        </div>
      </LogIn>
    </div>
  );
}

export default HomePage;
