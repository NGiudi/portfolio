import styled from "styled-components";

import { SECTION_TITLE_COLOR } from "../../constants/colors";

export const Text = styled.p`
  font-size: calc(.8rem + .3vw);
  line-height: 2;
  padding-bottom: 1vw;
`;

export const Title = styled.h3`
  color: ${props => props.color || SECTION_TITLE_COLOR};
  font-family: monospace;
  font-size: calc(2.2rem + 0.2vw);
  padding-bottom: calc(2.5rem + 0.2vw);
  position: relative;
  text-align: center;
  text-transform: uppercase;
`;