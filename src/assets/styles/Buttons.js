import styled from "styled-components";

import { greenDarkMode, blackDarkMode } from "../../constants/colors";

export const BtnOutlined = styled.a`
  border: 2px solid ${greenDarkMode};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  color: ${greenDarkMode};
  display: inline-block;
  font-size: calc(.8rem + .5vw);
  margin-right: 4vw;
  padding: .8vw 2vw;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
  }
`;

export const BtnSolid = styled.a`
  background-color: ${greenDarkMode}; 
  border: 2px solid ${greenDarkMode}; 
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); 
  color: ${blackDarkMode};
  display: inline-block;
  font-size: calc(.8rem + .5vw);
  font-weight: 600;
  padding: .8vw 2vw;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
  }
`;