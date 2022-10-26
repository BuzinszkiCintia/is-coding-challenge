import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 1100px) {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: none;
  }
`;
