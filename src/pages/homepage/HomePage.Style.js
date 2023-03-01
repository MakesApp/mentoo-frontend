import styled from "styled-components/macro";
// Purple color: #7030a0

export const HeadLogo = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: ${(props) =>
    props.headerType === "main" ? "10rem auto 12rem" : "2rem auto"};
`;

export const MainHeaderMentoo = styled.h1`
  font-size: 5rem;
  letter-spacing: -0.425rem;
  font-weight: 700;
  font-family: "kopik", sans-serif;
  margin: 0;
  padding: 0;
`;

export const RoleSelectTag = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  background-color: #7030a0;
  padding: 0.3rem 1rem;
  border-radius: 4rem;
  min-width: 10rem;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  }`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  }`;

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

  form {
    width: 100%;
  }
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const signupInputTitle = styled.p`
  font-size: 1rem;
  font-weight: 700;
  text-align: right;
  width: 100%;
  padding-right: 0.5rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const UnstyledButton = styled.button`
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;
  border: 0;
  background: none;
  padding: 0.8rem 1.2rem;

  ${(props) => props.sideText && "align-self: flex-end; margin-top: -0.5rem;"};
  color: #7030a0;
  font-size: 1.2rem;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
   
  &:hover, &:focus, &:active {
    background: none;
    background-color: inherit;
    border-radius: 0;
`;

export const StyledButton = styled.button`
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  font-weight: 700;
  font-size: 1.25rem;
  color: #fff;
  background-color: #7030a0;
  padding: 0.6rem calc(50% - 3rem);
  border-radius: 1.35rem;
  border: none;
  box-shadow: 0 0.2rem 0.3rem rgba(0, 0, 0, 0.3);

  &:active {
    box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.2);
  }
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
export const Checkbox = styled.input`
  margin: 0 0.5rem;
  padding: 1rem 1rem;
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

export const CheckboxLabel = styled.label`
  text-align: right;
`;
export const A = styled.a`
  text-decoration: none;
  color: blue;
  display: block;
  &:hover {
    color: CornflowerBlue;
  }
`;
