import React from 'react';

// import components.
import SocialMediaBar from '../../../../components/SocialMediaBar/SocialMediaBar';
import AnimatedName from '../../../../components/AnimatedName/AnimatedName';
import Greet from '../../../../components/Greet/Greet';

// import styles.
import { Box, Content } from './styles';

function Presentation() {
  return (
    <Box>
      <Content>
        <Greet/>
        <p>Mi nombre es</p>
        <AnimatedName name="Nicolás" lastName="Giudice"/>
        <p>me dedico al desarrollo web</p>
      </Content>

      {/*       
        <BoxButtons>
          <BtnOutlined target="_blank" href="https://drive.google.com/file/d/1AmcsGGDBZDAnXt34oqXS666FfcGZyGfm/view?usp=sharing">Curriculum Vitae</BtnOutlined>
          <BtnSolid href="#">Portafolio</BtnSolid>
        </BoxButtons>
      */}
      
      <SocialMediaBar/>
    </Box>
  );
}

export default Presentation;