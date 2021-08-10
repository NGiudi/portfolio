import styled from "styled-components";

import { greenDarkMode, whiteDarkMode } from "../../constants/colors";

export const ButtonsGrup = styled.div`
  display: flex;
  position: fixed;
  bottom: 4vh;
  left: 3vw;
`;

export const IconButton = styled.a`
  align-items: center;
  border: 1px solid ${whiteDarkMode};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); 
  color: ${whiteDarkMode};
  display: flex;
  font-size: calc(.8rem + .2vw);
  height: calc(2rem + .5vw);
  justify-content: center;
  margin: 0 .5rem;
  text-decoration: none;
  width: calc(2rem + .6vw);

  &:hover{
    border: 1px solid ${greenDarkMode};
    color: ${greenDarkMode};
  }
`;

