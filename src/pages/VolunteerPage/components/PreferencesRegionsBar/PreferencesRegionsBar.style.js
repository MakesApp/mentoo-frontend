import styled from "styled-components";

export const Button = styled.button`
  margin-top: 5%;
  background-color: transparent;
  color: #7030a0;
  padding: 6px 25px;
  font-size: 16px;
  border: 2px solid #7060a0;
  border-radius: 13px;
  cursor: pointer;
`;

export const downArrowImg = styled.img`
  padding-right: 10px;
`;
export const UlContent = styled.ul`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  li {
    color: black;
    padding: 16px 10px;
    text-decoration: none;
    display: block;
  }
`;
export const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${UlContent} {
    display: block;
  }
`;
