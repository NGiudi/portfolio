// import from react.
import React from 'react';

// import components.
import SocialMediaBar from '../../components/SocialMediaBar/SocialMediaBar';
import AnimatedName from '../../components/AnimatedName/AnimatedName';
import Greet from '../../components/Greet/Greet';

// import styles.
import { BtnOutlined, BtnSolid } from '../../assets/styles/Buttons';
import { BoxButtons, Presentation } from './styles';
import { Text } from '../../assets/styles/Text';

function Home() {
  return (
    <>
      {/* presentation - first section */}
      <Presentation>
        <Greet/>
        <Text pt="1.2rem">Mi nombre es</Text>
        <AnimatedName name="Nicolás" lastName="Giudice"/>
        <Text pl="1rem">y me dedico al desarrollo web</Text>
        
        <BoxButtons>
          <BtnOutlined target="_blank" href="https://drive.google.com/file/d/1AmcsGGDBZDAnXt34oqXS666FfcGZyGfm/view?usp=sharing">Curriculum Vitae</BtnOutlined>
          <BtnSolid href="#">Portafolio</BtnSolid>
        </BoxButtons>

        <SocialMediaBar/>
      </Presentation>

      {/* about me - second section */}
    </>
  );
}

export default Home;