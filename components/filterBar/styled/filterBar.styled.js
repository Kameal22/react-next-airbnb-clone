import styled from "styled-components";

export const FilterBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2vh;
`;

export const FilterBarItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  min-width: 8%;

  i {
    font-size: 1.3em;
    color: ${({ theme }) => theme.icons.iconColor} !important;
  }

  p {
    font-size: 0.75em;
    color: ${({ theme }) => theme.textColor.filterBar} !important;
  }

  &:hover {
    cursor: pointer;
    color: black !important;
  }
`;
