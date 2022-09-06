import styled from "styled-components";

export const AnnouncementStyled = styled.div`
  width: 70%;
  margin: 2vh auto;

  h1 {
    font-size: 1.4rem;
  }

  h2 {
    font-size: 0.9rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  p {
    color: black;
    font-size: 0.85em;
  }
`;

export const AnnouncementHeading = styled.div`
  width: 60%;
  display: flex;
  align-items: baseline;

  p {
    margin-left: 0.5em;
  }

  h2 {
    margin-left: 2em;
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
  margin-top: 2vh;
  justify-content: space-between;
`;

export const AnnouncementAmenties = styled.div`
  width: 60%;

  h3 {
    font-size: 1.2rem;
  }

  p {
    color: black;
    font-size: 0.9rem;
    margin-top: 1vh;
  }
`;

export const AnnouncementReserve = styled.div`
  width: 40%;
  border: 1px solid lightgray;
  border-radius: 15px;
  -webkit-box-shadow: 1px 1px 13px -5px rgba(66, 68, 90, 1);
  -moz-box-shadow: 1px 1px 13px -5px rgba(66, 68, 90, 1);
  box-shadow: 1px 1px 13px -5px rgba(66, 68, 90, 1);
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
    span {
      font-weight: normal;
      font-size: 0.9em;
    }
  }
`;
