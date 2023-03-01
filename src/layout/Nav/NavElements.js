import styled from "styled-components";
import { Link } from "react-router-dom";

export const PrimaryNav = styled.nav`
  height: 90px;
  display: flex;
  justify-content: space-between;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
  }
`;
export const MenuLink = styled(Link)`
  position: relative;
  color: #313131;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  padding: 0 2.3rem;
  height: 100%;
  font-family: "kopik";
  font-weight: 900;
  font-size: 30px;
  letter-spacing: -1px;

  &::after {
    content: ${(props) => (props.notification === "true" ? `"•"` : "")};
    position: absolute;
    color: #de1e1e;
    top: 15%;
    right: 35%;
  }

  &.active {
    color: #000000;
  }
  & span {
    color: #7030a0;
  }
  & span img {
    width: 50%;
    border-radius: 50%;
    margin-bottom: -15%;
  }

  &.logo {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .subtitle {
    color: #313131;
    font-size: 6px;
    letter-spacing: normal;
  }
`;
