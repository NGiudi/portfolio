import styled from "styled-components";

import { black } from "../../constants/colors";

export const TextMd = styled.p`
  font-size: calc(1rem + 1vw);
  padding-bottom: ${props => props.pb || "0"};
  padding-left: ${props => props.pl || "0"};
  padding-right: ${props => props.pr || "0"};
  padding-top: ${props => props.pt || "0"};
`;

export const Text = styled.p`
  font-size: calc(1rem + .3vw);
  line-height: 2;
  padding-bottom: 1vw;
`;

export const Title = styled.h3`
  color: ${props => props.color || black};
  font-family: monospace;
  font-size: 4rem;
  padding-bottom: 6rem;
  position: relative;
  text-align: center;
`;