import styled from "styled-components";

import { SECTION_BG_COLOR, bgPresentation, lightgrey } from "../../constants/colors";

export const Presentation = styled.section`
  background-color: ${bgPresentation};
  height: 100vh;
  left:0;
  padding: 15vh 0 0 10vw;
  width: 100%;
  z-index: 1000;
`;

export const BoxButtons = styled.div`
  padding: 5vh 0 0 8vw;
`;

export const BgGrey = styled.div`
  background: ${lightgrey}; 
`;

export const BgSection = styled.div`
  background: ${SECTION_BG_COLOR};
`;

export const Center = styled.div`
  text-align:center;
`;