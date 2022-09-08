import styled from "styled-components";

export const AnnouncementStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background.main};
`;

export const AnnouncementStyledMain = styled.div`
  width: 70%;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;

  i {
    color: ${({ theme }) => theme.textColor.main};
  }

  h1 {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.textColor.main};
    margin: 0;
    padding-top: 4vh;
  }

  h2 {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.textColor.main};
  }

  h3 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.textColor.main};
  }

  p {
    color: black;
    font-size: 0.85em;
    color: ${({ theme }) => theme.textColor.main};
  }
`;

export const AnnouncementHeading = styled.div`
  width: 60%;
  display: flex;
  align-items: baseline;

  p {
    margin-left: 0.5em;
    color: ${({ theme }) => theme.textColor.main};
  }

  h2 {
    margin-left: 2em;
    color: ${({ theme }) => theme.textColor.main};
  }
`;

export const AnnouncementHeadingRatings = styled.p`
  text-decoration: underline;
  font-weight: bold;
`;

export const AnnouncementImgs = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 150px;
  gap: 16px;

  img {
    border-radius: 18px;
    width: 100%;
    height: 100%;
    object-fit: cover;

    &:first-child {
      grid-column: span 2;
      grid-row: span 2;
    }
  }
`;

export const AnnouncementMoreInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AnnouncementAmenties = styled.div`
  width: 60%;

  h3 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.textColor.main};
  }

  p {
    color: black;
    font-size: 0.9rem;
    margin-top: 1vh;
    color: ${({ theme }) => theme.textColor.main};
  }
`;

export const AnnouncementReserve = styled.div`
  width: 40%;
  border: 1px solid lightgray;
  border-radius: 15px;
  -webkit-box-shadow: 1px 1px 13px -5px rgba(66, 68, 90, 1);
  -moz-box-shadow: 1px 1px 13px -5px rgba(66, 68, 90, 1);
  box-shadow: 1px 1px 13px -5px rgba(66, 68, 90, 1);
  margin-bottom: 2vh;
`;

export const AnnouncementReserveHeading = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 40%;
  }

  h4 {
    color: ${({ theme }) => theme.textColor.main};
    span {
      font-weight: normal;
      font-size: 0.9em;
    }
  }
`;

export const AnnouncementReserveGuests = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  padding-bottom: 2vh;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
`;

export const AnnouncementReserveButton = styled.button`
  padding: 20px;
  background-color: #ff5a5f;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  text-transform: uppercase;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  display: block;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

export const AnnouncementDislaimer = styled.p`
  font-weight: bold;
  font-size: 0.75em !important;
  text-align: center;
`;

export const AnnouncementAditionalInfo = styled.div`
  text-decoration: underline;
  text-decoration-color: white;

  display: flex;
  justify-content: space-between;
  width: 60%;
  margin-left: auto;
  margin-right: auto;

  border-bottom: 1px solid gray;
`;

export const AnnouncementSum = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2vh;
`;
