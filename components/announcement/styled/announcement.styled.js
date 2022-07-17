import styled from "styled-components";

export const AnnouncementStyled = styled.div`
  width: 75%;
  margin: 4vh auto;

  h1 {
    font-size: 1.4rem;
  }

  h2 {
    font-size: 0.9rem;
  }

  h3 {
    font-size: 1.1rem;
  }

  p {
    color: grey;
    font-size: 0.85em;
    margin-top: -2vh;
  }
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

export const AnnouncementAmenties = styled.div`
  width: 60%;
  margin-top: 4vh;

  h3 {
    font-size: 1.4rem;
  }

  p {
    font-weight: bold;
    color: black;
    font-size: 1rem;
    margin-top: 1vh;
  }
`;
