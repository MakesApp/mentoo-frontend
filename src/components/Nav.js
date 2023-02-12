import React from "react";
import { PrimaryNav, MenuLink, Menu } from "./NavElements";
import { constants } from "../routes/constants";

function Nav() {
  return (
    <>
      <PrimaryNav>
        <Menu>
          <MenuLink notification to={constants.CHAT} activeStyle>
            Chat
          </MenuLink>
          <MenuLink to={constants.HOME} activeStyle>
            Home
          </MenuLink>

          <MenuLink to={constants.VOLUNTEERS} activeStyle>
            Me
          </MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  );
}

export default Nav;
