import styled from "styled-components";

import { green, black } from "../../constants/colors";

export const MessageShape = styled.span`
  background-color: ${green};
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); 
  color: ${black};
  font-size: calc(.6rem + .5vw);
  font-weight: 600;
  letter-spacing: 2px;
  padding: 6px 12px;
`; 