import styled from "styled-components";

import { green, black } from "../../constants/colors";

export const BtnOutlined = styled.a`
  border: 2px solid ${green};
  color: ${green};
  display: inline-block;
  font-size: calc(.8rem + .4vw);
  margin-right: 4vw;
  padding: .5rem 1rem;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
  }
`;

export const BtnSolid = styled.a`
  background-color: ${green}; 
  border: 2px solid ${green}; 
  color: ${black};
  display: inline-block;
  font-size: calc(.8rem + .5vw);
  font-weight: 600;
  padding: .8vw 2vw;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
  }
`;