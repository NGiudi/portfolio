import styled from "styled-components";

import { WORKS_BG_COLOR, WORKS_COLOR, WORKS_ICON } from '../../../../constants/colors';

export const Box = styled.section`
  background-color: ${WORKS_BG_COLOR};
  color: ${WORKS_COLOR};
  padding: 5rem 0;
  width: 100%;
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(min(15rem, 100%), 1fr));
  margin: auto;
  padding-top: 2rem;
  text-align: center;
  width: 60%;
`;

export const Icon = styled.i`
  color: ${WORKS_ICON};
  font-size: 5rem;
  padding-bottom: 2rem;
`;