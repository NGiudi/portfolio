import styled from "styled-components";

import { BOX_GREET_BG_COLOR } from "../../constants/colors";

export const MessageShape = styled.span`
  background-color: ${BOX_GREET_BG_COLOR};
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); 
  display: inline-block;
  font-size: 1rem;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  padding: 6px 12px;
  position: relative;

  &:after {
    background-color: ${BOX_GREET_BG_COLOR};
    bottom: -4px;
    content: "";
    height: 15px;
    left: 80%;
    position: absolute;
    width: 15px;
    transform: rotate(-40deg);
    z-index: 0;
  }
`; 