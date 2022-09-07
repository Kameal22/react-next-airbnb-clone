import styled from "styled-components";

export const RegisterDiv = styled.div`
  background-color: ${({ theme }) => theme.background.main};
  z-index: 999;
  border: 2px solid lightgray;
  border-radius: 20px;
  width: 30%;
  position: absolute;
  top: 8%;
  left: 50%;
  transform: translate(-50%, -50%);

  p {
    color: red;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.textColor.main};
  }

  h2 {
    font-size: 1.2rem;
    text-align: center;
    color: ${({ theme }) => theme.textColor.main};
  }

  i {
    position: absolute;
    top: 12px;
    left: 12px;
    color: ${({ theme }) => theme.textColor.main};

    &:hover {
      cursor: pointer;
    }
  }

  form {
    width: 50%;
    margin: 4vh auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    input {
      padding: 8px;
      border-radius: 6px;
      border: 1px solid lightgray;
      &:last-child {
        margin-top: 1vh;
        margin-left: auto;
        margin-right: auto;
        display: block;
      }
    }

    button {
      padding: 6px;
      width: 60%;
      border: none;
      border-radius: 10px;
      background-color: #ff5a5f;
      color: white;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const Disclaimer = styled.p`
  text-decoration: underline;
  font-weight: bold;
  font-size: 0.6em !important;
  color: ${({ theme }) => theme.textColor.main} !important;

  &:hover {
    cursor: pointer;
  }
`;
