import styled from "styled-components";

export const Gallery = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(min(20rem, 100%), 1fr));
  padding-bottom: ${props => props.pb || "0"};
  width: 100%;
`;