import styled from "styled-components";

import image from '../../../assets/img/backgroud-image-presentation.jpg';

import { blackDarkMode, greenDarkMode, whiteDarkMode } from "../../../constants/colors";

export const Background = styled.div`
  background-image: url(${image}); 
  background-size: cover;
  filter: brightness(0.8) sepia(60%);
  height: 100vh;
  left:0;
  opacity: 0.55;
  position: absolute;
  top:0;
  width: 100%;
  z-index: 1;
`;

export const ContentBox = styled.div`
  height: 100vh;
  left:0;
  padding: 15vh 0 0 10vw;
  width: 100%;
  z-index: 1000;
`;

export const Text = styled.p`
  color: ${whiteDarkMode};
  font-size: calc(1rem + 1vw);
  padding: ${props => props.p || ""};
`;

export const BoxButtons = styled.div`
  padding: 5vh 0 0 8vw;
`;

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