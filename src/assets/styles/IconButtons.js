import styled from "styled-components";

import { black, green } from "../../constants/colors";

export const ButtonsGrup = styled.div`
  display: flex;
  position: absolute;
  bottom: 4vh;
  left: 3vw;
`;

export const IconButton = styled.a`
  align-items: center;
  border: 1px solid ${black};
  color: ${black};
  display: flex;
  font-size: calc(.8rem + .2vw);
  height: calc(2rem + .5vw);
  justify-content: center;
  margin: 0 .5rem;
  text-decoration: none;
  width: calc(2rem + .6vw);

  &:hover{
    border: 1px solid ${green};
    color: ${green};
  }
`;

