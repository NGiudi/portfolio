import styled from "styled-components";

import { black } from "../../constants/colors";

export const Icon = styled.i`
  color: ${props => props.color || black};
  font-size: ${props => props.size || "1rem"};
  padding: ${props => props.py || "0"} ${props => props.px || 0};
`;