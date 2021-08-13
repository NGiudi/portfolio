import styled from "styled-components";

import { badge, cardTitle, cardBorder, cardBtnHover } from "../../constants/colors";

export const Box = styled.div`
  border-left: 2px solid ${cardBorder};
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 20%);
  overflow: hidden;
  width: 100%;
`;

export const Img = styled.img`
  height: 12rem;
  width: 100%;
`;

export const Badge = styled.span`
  background-color: ${badge};
  border-radius: 1rem;
  display: inline-block;
  font-size: .8rem;
  margin: .5rem;
  padding: .2rem .6rem;
`;

export const Title = styled.h4`
  color: ${cardTitle};
  font-family: monospace; 
  font-size: calc(1.1rem + .2vw);
  margin: 0.5rem;
`;

export const Description = styled.p`
  display: -webkit-box;
  margin: 0 1rem;
  overflow: hidden;
  -webkit-box-orient: vertical;  
  -webkit-line-clamp: 3;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const FooterText = styled.span`
  padding-left: 1rem;
`;

export const FooterBtn = styled.a`
  border-top: 1px solid ${cardBorder};
  color: black;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  padding: .8rem 0;
  text-decoration: none;
  width: 50%;
  
  &:hover{
    background-color: ${cardBtnHover};
    font-weight: bold;
  }
`;