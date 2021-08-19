import styled from "styled-components";

import { ABOUT_US_RECTANGULAR_COLOR } from "../../../../constants/colors";

export const Box = styled.section`
  margin: 1rem auto;
  width:100%;
`;

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Img = styled.img`
  width: 40%;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 45%;

  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const Rectangular = styled.div`
  background-color: ${ABOUT_US_RECTANGULAR_COLOR};
  border-radius: 20px;
  height: 6px;
  margin: 5rem auto;
  width: 10%;
`;