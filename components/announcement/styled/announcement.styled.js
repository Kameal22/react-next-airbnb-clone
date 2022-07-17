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
