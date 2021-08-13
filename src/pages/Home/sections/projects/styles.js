import styled from "styled-components";

export const Box = styled.section`
  max-width: 1200px;
  margin: auto;
  padding: 10rem 0;
  width:90%;
`;

export const Gallery = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(min(20rem, 100%), 1fr));
  padding-bottom: 4rem;
  width: 100%;
`;

export const Center = styled.div`
  text-align: center;
`;