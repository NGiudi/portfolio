import styled from "styled-components";

import { bgTegnologies } from '../../../../constants/colors';

export const Box = styled.section`
  background-color: ${bgTegnologies};
  padding: 5rem 0;
  width:100%;
`;

export const Slide = styled.div`
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(min(5rem, 100%), 1fr));
  margin: auto;
  width: 60%;
`;

export const Icon = styled.i`
  color: ${props => props.color || "black"};
  font-size: 6rem;
  text-align: center;
`;