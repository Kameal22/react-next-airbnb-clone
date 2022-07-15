import styled from "styled-components";

export const NavbarDiv = styled.div`
  position: relative;
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

  i {
    font-size: 1.2rem;
  }
`;

export const DropdownStyled = styled.div`
  width: 15%;
  padding: 8px;
  position: absolute;
  top: 90px;
  right: 5%;
  border-radius: 20px;
  border: 1px solid lightgray;
`;

export const DropdownList = styled.ul`
  width: 90%;
  margin: 0.5vh auto;
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  font-size: 0.9em;
  margin-top: 2vh;
  margin-bottom: 2vh;

  &:first-child {
    margin-top: 1vh;
  }

  &:hover {
    cursor: pointer;
  }
  span {
    font-weight: bold;
  }
`;
