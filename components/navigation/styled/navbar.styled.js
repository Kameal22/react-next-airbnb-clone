import styled from "styled-components";

export const NavbarDiv = styled.div`
  border-bottom: 0.5px solid lightgray;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarLogo = styled.h2`
  color: #ff5a5f;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

export const NavSearch = styled.input`
  width: 25%;
  border-radius: 20px;
  padding: 10px;
  border: 1px solid lightgray;
`;

export const NavRegisterDiv = styled.div`
  width: 6%;
  border-radius: 25px;
  border: 1px solid lightgrey;
  padding: 4px 8px;
  display: flex;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
    -webkit-box-shadow: -6px 5px 18px -12px rgba(66, 68, 90, 1);
    -moz-box-shadow: -6px 5px 18px -12px rgba(66, 68, 90, 1);
    box-shadow: -6px 5px 18px -12px rgba(66, 68, 90, 1);
  }
`;
