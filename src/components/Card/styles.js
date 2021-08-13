import styled from "styled-components";

import { green } from "../../constants/colors";

export const Box = styled.div`
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
  background-color: ${green};
  border-radius: 1rem;
  display: inline-block;
  margin: .5rem;
  padding: .2rem .6rem;
`;

export const Title = styled.h4`
  font-family: monospace; 
  font-size: calc(1.1rem + .2vw);
  margin: 0.5rem;
`;

export const Description = styled.p`
  margin: 0 1rem;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const FooterText = styled.span`
  padding-left: 1rem;
`;

export const Link = styled.a`
  color: black;
  padding: 1rem;
  text-decoration: none;
`;