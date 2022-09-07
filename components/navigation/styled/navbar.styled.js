import styled from "styled-components";

export const NavbarDiv = styled.div`
  position: relative;
  border-bottom: ${({ theme }) => theme.borders.border};
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.background.nav};
`;

export const NavbarLogo = styled.h2`
  color: #ff5a5f;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

export const NavForm = styled.form`
  width: 25%;
  position: relative;
  display: flex;
  align-items: center;

  i {
    position: absolute;
    right: 14px;
  }
`;

export const NavSearch = styled.input`
  width: 100%;
  border-radius: 20px;
  padding: 10px;
  border: 1px solid lightgray;

  &:hover {
    cursor: pointer;
    -webkit-box-shadow: -6px 5px 18px -12px rgba(66, 68, 90, 1);
    -moz-box-shadow: -6px 5px 18px -12px rgba(66, 68, 90, 1);
    box-shadow: -6px 5px 18px -12px rgba(66, 68, 90, 1);
  }
`;

export const NavRegisterDiv = styled.div`
  background-color: ${({ theme }) => theme.background.navMenu};
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
  z-index: 999;
  background-color: ${({ theme }) => theme.background.dropdown};
`;

export const DropdownList = styled.ul`
  margin: 0.5vh auto;
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  font-size: 0.85em;
  padding-top: 1vh;
  padding-bottom: 1vh;
  padding-left: 0.5em;
  width: 100%;
  color: ${({ theme }) => theme.textColor.dropdownLink};

  &:hover {
    cursor: pointer;
    background: rgba(233, 233, 233, 0.299);
    border-radius: 15px;
  }
  span {
    font-weight: bold;
  }
`;
