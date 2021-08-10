import styled, { keyframes } from "styled-components";

import { greenDarkMode, bgDarkMode, greyDarkMode } from "../../constants/colors";

const nameAnimate = keyframes`
  0%, 100% { width: 0; }
  30%, 80% { width: 100% }
`;

const lastNameAnimate = keyframes`
  0%, 30%, 80% { width: 0; }
  60% { width: 100% }
`;

export const Name = styled.h2`
  color: ${bgDarkMode};
  display: inline-block;
  font-family: monospace;
  font-size: calc(3rem + 3vw);
  padding-right: 1.5rem;
  position: relative;
  text-transform: uppercase;
  -webkit-text-stroke: .1rem ${greyDarkMode};
  
  &:before {
    animation: ${nameAnimate} 6s linear infinite;
    color: ${greenDarkMode};
    content:  ${props => `"${props.dataText}"` || ""};
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 0;    
    -webkit-text-stroke: 0vw ${greyDarkMode};
  }
`;

export const Lastname = styled.h2`
  color: ${bgDarkMode};
  display: inline-block;
  font-family: monospace;
  font-size: calc(3rem + 3vw);
  position: relative;
  text-transform: uppercase;
  -webkit-text-stroke: .1rem ${greyDarkMode};
  
  &:before {
    animation: ${lastNameAnimate} 6s linear infinite;
    color: ${greenDarkMode};
    content:  ${props => `"${props.dataText}"` || ""};
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 0; 
    -webkit-text-stroke: 0vw ${greyDarkMode};   
  }
`;