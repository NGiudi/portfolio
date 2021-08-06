import styled from "styled-components";

import { greenDarkMode, blackDarkMode } from "../../../../constants/colors";

export const Box = styled.span`
  background-color: ${greenDarkMode};
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); 
  color: ${blackDarkMode};
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 2px;
  padding: 6px 12px;
`; 