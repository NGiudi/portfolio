import styled from "styled-components";

import { bgBlack, bgPresentation, lightgrey } from "../../constants/colors";

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

export const Section = styled.section`
  max-width: 1200px;
  margin: auto;
  padding: ${props => props.py || "0"} ${props => props.px || "0"};
  width:90%;
`;

export const BgGrey = styled.div`
  background: ${lightgrey}; 
`;

export const BgBlack = styled.div`
  background: ${bgBlack};
`;

export const Center = styled.div`
  text-align:center;
`;