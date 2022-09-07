import styled from "styled-components";

export const LandingPageStyledDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  background-color: ${({ theme }) => theme.background.main};
  padding-left: 5%;
  padding-right: 5%;
  min-height: 100vh;
`;

export const Places = styled.div`
  display: grid;
  grid-template-columns: 22% 22% 22% 22%;
  justify-content: space-between;
  gap: 6vh;
`;

export const Place = styled.div`
  margin-top: 2vh;
  color: ${({ theme }) => theme.textColor.main};

  &:hover {
    cursor: pointer;
  }

  img {
    border-radius: 15px;
  }

  h2 {
    font-size: 0.8em;
  }

  p {
    font-size: 0.8em;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    i {
      margin-right: 0.5em;
      font-size: 0.8em;
    }
  }

  span {
    font-weight: bold;
  }
`;
