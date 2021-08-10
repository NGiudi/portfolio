import React from 'react';

// import from local files.
import SocialMedia from './components/SocialMedia/SocialMedia';
import Greet from './components/Greet/Greet';

// import styles.
import { /* Background, */ BoxButtons, BtnSolid, BtnOutlined, ContentBox, Text } from './styles/Styles';
import { Lastname, Name } from './styles/AnimationName';

function Presentation() {
  return (
    <>    
      <ContentBox>
        <Greet/>
        <Text p="1.2rem 0 0 0">Mi nombre es </Text>
        
        <div>
          <Name dataText="Nicolás">Nicolás</Name>
          <Lastname dataText="Giudice">Giudice</Lastname>
        </div>
        
        <Text p="0 0 0 1rem">y me dedico al desarrollo web</Text>
          
        <BoxButtons>
          <BtnOutlined href="#">Download CV</BtnOutlined>
          <BtnSolid href="#">Portafolio</BtnSolid>
        </BoxButtons>

        <SocialMedia/>
      </ContentBox>
    </>
  );
}

export default Presentation;