import styled from "styled-components";

export const UserMenuDiv = styled.div`
  background-color: ${({ theme }) => theme.background.main};
  z-index: 999;
  border: 2px solid lightgray;
  border-radius: 20px;
  width: 30%;
  position: absolute;
  top: 8%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
