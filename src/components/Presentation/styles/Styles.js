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
  box-sizing: border-box;
  height: 100vh;
  left:0;
  padding: 20vh 12vw;
  width: 70%;
  z-index: 1000;
`;

export const Text = styled.p`
  color: ${whiteDarkMode};
  font-size: 2.5rem;
  padding: ${props => props.p || ""};
`;

export const Name = styled.h2`
  font-family: 'Archivo Black', sans-serif;
  font-size: 5rem;
`;

export const BoxButtons = styled.div`
  padding-top: 6rem;
  padding-left: 6rem;
`;

export const BtnSolid = styled.a`
  background-color: ${greenDarkMode}; 
  border: 3px solid ${greenDarkMode}; 
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); 
  color: ${blackDarkMode};
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 2rem;
  padding: 0.7rem 2rem;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
  }
`;

export const BtnOutlined = styled.a`
  border: 3px solid ${greenDarkMode}; 
  color: ${greenDarkMode}; 
  font-size: 1.3rem;
  margin: 0 2rem;
  padding: 0.7rem 2rem;
  text-decoration: none;
`;