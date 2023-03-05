import styled from "styled-components";

export const Title = styled.h2`
  direction: rtl;
  color: #7030a0;
  font-size: 22px;
  font-weight: bold;
`;

export const DaysBar = styled.div`
  direction: rtl;
  margin: 15px;
  margin-right: -5px;
  display: flex;
  align-item: center;
  justify-content: space-between;

  & div:first-child {
    border-radius: 0px 15px 15px 0px;
  }
  & div:last-child {
    border-radius: 15px 0px 0px 15px;
  }
`;

export const AvailableDayItem = styled.div`
  font-size: 20px;
  font-weight: bold;
  background: #7030a0;
  color: #ffffff;
  width: 100%;
  text-align: center;
  border: 1px solid white;
`;
export const NotAvailableDayItem = styled.div`
  color: #ffffff;
  background: #cbcbcb;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  text-align: center;
  border: 1px solid white;
`;
