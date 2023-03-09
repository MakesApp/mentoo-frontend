import styled from "styled-components";

export const ImageContainer = styled.div`
  margin: 5% 5%;
  height: 40vh;
`;

export const MainImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10%;
`;
export const ButtonsImg = styled.img`
  height: 20px;
  width: 20px;
`;
export const ChatButtonImg = styled.img`
  padding: 13px 11px;

  background: #30a041;
  z-index: 1;
`;

export const BtnsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: -20%;
  margin-bottom: 10%;
  margin-right: 7%;
`;

export const PlaceInfo = styled.div`
  direction: rtl;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-family: "pauza", sans-serif;

  p:first-child {
    color: #7030a0;
    font-size: 16px;
    font-weight: bold;
  }

  p:last-child {
    color: #313131;
  }
`;
export const PlaceInfoAvatar = styled.img`
  width: 10%;
  border-radius: 50%;
`;
export const Btns = styled.button`
  border: none;
  background: #7030a0;
  height: 50px;
  width: 50px;
  margin-right: 5px;
  border-radius: 5%;
`;
