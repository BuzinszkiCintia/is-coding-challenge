import styled from "styled-components";

export const ReceiptContainer = styled.div`
  width: 20%;
  height: 70%;
  border: solid 2px rgba(0, 0, 0, 0.2);
  box-shadow: 2px 2px rgba(0, 0, 0, 0.1);

  footer {
    padding: 1rem;
    text-align: right;
  }
  @media only screen and (max-width: 1100px) {
    width: 320px;
    height: 500px;
    margin: 1rem;
  }
`;
export const ReceiptTitle = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-top: 1rem;

  :nth-child(2) {
    padding: 1rem;
    font-weight: lighter;
    font-size: smaller;
    border-bottom: 1px dashed rgba(0, 0, 0, 0.2);
  }
`;
export const ReceiptBody = styled.div`
  padding: 1rem;
  div {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`;
export const Items = styled.h3`
  margin: 0.2rem;
  font-weight: lighter;
  :nth-child(2) {
    text-align: right;
  }

  @media only screen and (max-width: 1300px) {
    font-size: smaller;
  }
`;
