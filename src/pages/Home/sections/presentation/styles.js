import styled from "styled-components";

import { PRESENTATION_BG_COLOR } from '../../../../constants/colors';

export const Box = styled.section`
  background-color: ${PRESENTATION_BG_COLOR};
  font-size: calc(1rem + 1vw);
  height: 100vh;
  position: relative;
  width: 100%;
`;

export const Content = styled.div`
  left: 10vw;
  position: absolute;
  top: calc( 10rem + 2vw);
`;