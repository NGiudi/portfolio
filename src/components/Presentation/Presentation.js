import React from 'react';

// import from local files.
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
        
        <Text p="0 0 0 1rem">soy desarrollador web</Text>
          
        <BoxButtons>
          <BtnOutlined href="#">Download CV</BtnOutlined>
          <BtnSolid href="#">Portafolio</BtnSolid>
        </BoxButtons>
      </ContentBox>
    </>
  );
}

export default Presentation;