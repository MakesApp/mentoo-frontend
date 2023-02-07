import styled from "styled-components";
import place from "./images/place.png";
import volenteer from "./images/voloenteer.png";
// import { useState } from "react";
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
function HomePage() {
  console.log(useAuthContext());
  const { role, setRole, dummyUser } = useAuthContext();
  setRole("place");
  console.log(role);
  console.log(dummyUser);

  // // State for the role selection - volenteer or place
  // const [role, setRole] = useState("");

  // const selectionHandler = (role) => {
  //   setRole(role);
  // };
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
      {/* THIS IS CURRENTLY DISPLAYING BOTH WELCOME AND LOGIN FOR DEV PURPUSES... THIS WILL BE HANDLED LATER*/}
      <LogIn>
        <p>התחברות לחשבון המנטו שלך</p>
        <input type="text" placeholder="שם משתמש" />
        <input type="password" placeholder="סיסמא" />
        <div>
          <button>התחבר</button>
          <button>שכחתי סיסמא</button>
        </div>
      </LogIn>
    </div>
  );
}

export default HomePage;
