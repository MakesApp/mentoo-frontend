import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { useState } from "react";

// function NavElements() {
//   const [notification, setNotification] = useState(false);

//   const PrimaryNav = styled.nav`
//     z-index: 14;
//     height: 90px;
//     display: flex;
//     background: #8bc34a;
//     justify-content: space-between;
//     padding: 0.18rem calc((100vw - 1000px) / 2);
//   `;

//   const MenuLink = styled(Link)`
//     color: #fff;
//     background: ${(props) => (props.notification ? "red" : "palevioletred")};
//     display: flex;
//     cursor: pointer;
//     align-items: center;
//     text-decoration: none;
//     padding: 0 1.2rem;
//     height: 100%;
//     &.active {
//       color: #000000;
//     }
//   `;
//   const Menu = styled.div`
//     display: flex;
//     align-items: center;
//     margin-right: -25px;
//     @media screen and (max-width: 768px) {
//       display: none;
//     }
//   `;
// }
export const PrimaryNav = styled.nav`
  z-index: 14;
  height: 90px;
  display: flex;
  background: #e1e1e1;
  justify-content: center;
  padding: 0.18rem calc((100vw - 1000px) / 2);
`;
export const MenuLink = styled(Link)`
  color: #fff;
  border: ${(props) => (props.notification ? "1px solid red" : "none")};
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;

  &.before,
 {
    content: '${(props) => (props.notification ? "•" : "")}'
    color: #b83b3b;  
    text-shadow: #b83b3b 0 0 5px;
    margin: 0 10px;
  }
  
  &.active {
    color: #000000;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -25px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// export default NavElements;
