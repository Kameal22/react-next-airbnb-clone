import styled from "styled-components";

export const HostPageStyledDiv = styled.div``;

export const HostPageInfoDiv = styled.div`
  background-color: black;
  height: 65vh;
  position: relative;

  h2 {
    margin: 0;
    color: white;
    padding-top: 2vh;
    margin-left: 1em;

    &:hover {
      cursor: pointer;
    }
  }

  h1 {
    display: inline-block;
    color: white;
    margin: 0;
    font-size: 3em;
    width: 30%;
    text-align: center;
    position: absolute;
    top: 45%;
    left: 30%;
    transform: translate(-50%, -50%);
  }
`;

export const HostPageStyledEarnings = styled.div`
  height: 40vh;
  margin-top: 14vh;

  h2 {
    margin: 0;
    text-align: center;
    font-size: 2.5em;
    width: 40%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const HostPageStyledEaringsInfo = styled.div`
  margin-top: 6vh;
  padding: 10px;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
`;

export const HostPageStyledEaringsInfoSmallDiv = styled.div`
  width: 30%;
  border-radius: 15px;
  background-color: #edede9;
  position: relative;
  padding: 12px;

  p {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    color: gray;
    font-size: 0.85em;
    margin: 0;
  }

  h4 {
    color: red;
    margin: 0;
    padding-top: 2vh;
    padding-left: 0.4em;
    font-size: 1.5em;
  }
`;
