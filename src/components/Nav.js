import React, { useState } from "react";
import { PrimaryNav, MenuLink, Menu } from "./NavElements";
import { constants } from "../routes/constants";
import chatIcon from "../assets/imgs/chat-icon.png";
function Nav() {
  const [userPicture, setUserPicture] = useState(
    "https://www.w3schools.com/howto/img_avatar.png"
  );
  return (
    <>
      <PrimaryNav>
        <Menu>
          <MenuLink notification="true" to={constants.CHAT}>
            <div>
              <img src={chatIcon} alt="chat icon" />
            </div>
          </MenuLink>
          <MenuLink to={constants.HOME} className={"logo"}>
            <p>
              ment<span>oo</span>
            </p>

            <p className={"subtitle"}>BY APPLESEEDS</p>
          </MenuLink>

          <MenuLink to={constants.VOLUNTEERS}>
            <div>
              <span>
                <img src={userPicture} alt="Avatar" />
              </span>
            </div>
          </MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  );
}

export default Nav;
