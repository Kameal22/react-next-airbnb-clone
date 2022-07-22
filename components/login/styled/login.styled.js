import styled from "styled-components";

export const LoginDiv = styled.div`
  background-color: white;
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
  }

  h2 {
    font-size: 1.2rem;
    text-align: center;
  }

  i {
    position: absolute;
    top: 12px;
    left: 12px;

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
