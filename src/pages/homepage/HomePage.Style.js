import styled from "styled-components";

// Purple color: #7030a0

// Styled Components
export const HeaderMain = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10rem auto 12rem;
`;
export const HeaderPage = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
`;

export const H1 = styled.h1`
  font-size: 5rem;
  letter-spacing: -0.425rem;
  font-weight: 700;
  font-family: "kopik", sans-serif;
  margin: 0;
  padding: 0;
`;

export const H3Tag = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  background-color: #7030a0;
  padding: 0.3rem 1rem;
  border-radius: 4rem;
  min-width: 10rem;
`;

export const SelectRoleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Selection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 2rem auto;
  cursor: pointer;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PTag = styled.p`
  font-size: 1rem;
  font-weight: 700;
  text-align: right;
  width: 100%;
  padding-right: 0.5rem;
`;
export const Input = styled.input`
  margin: 0.5rem auto;
  padding: 0.5rem 1rem;
  min-width: 320px;
  border: 1px solid #7030a099;
  outline: 1px solid #7030a0;
  border-radius: 40px;
  font-size: 1.2rem;
  font-weight: 500;
  &:placeholder-shown {
    text-align: right;
  }
  &:focus {
    outline: none;
  }
`;
export const A = styled.a`
  text-decoration: none;
  color: blue;
  display: block;
  &:hover {
    color: CornflowerBlue;
  }
`;
