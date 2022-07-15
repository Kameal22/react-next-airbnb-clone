import styled from "styled-components";

export const FilterBarStyled = styled.div`
  padding: 4px;
  display: flex;
  justify-content: space-between;
  margin-top: 2vh;
`;

export const FilterBarItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: gray;
  min-width: 8%;

  i {
    font-size: 1.3em;
  }

  p {
    font-size: 0.75em;
  }

  &:hover {
    cursor: pointer;
    color: black;
  }
`;
