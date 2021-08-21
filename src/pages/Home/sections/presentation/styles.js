import styled from "styled-components";

import { PRESENTATION_BG_COLOR } from '../../../../constants/colors';

export const Box = styled.section`
  background-color: ${PRESENTATION_BG_COLOR};
  font-size: calc(1rem + 1vw);
  height: 100vh;
  min-width: 100%;
  position: relative;
`;

export const Content = styled.div`
  left: 10vw;
  position: absolute;
  top: 10vw;
`;