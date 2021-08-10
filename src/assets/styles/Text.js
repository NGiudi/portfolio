import styled from "styled-components";

import { whiteDarkMode } from "../../constants/colors";

export const Text = styled.p`
  color: ${whiteDarkMode};
  font-size: calc(1rem + 1vw);
  padding-bottom: ${props => props.pb || "0"};
  padding-left: ${props => props.pl || "0"};
  padding-right: ${props => props.pr || "0"};
  padding-top: ${props => props.pt || "0"};
`;