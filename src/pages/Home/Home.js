// import from react.
import React from 'react';

// import components.
import SocialMediaBar from '../../components/SocialMediaBar/SocialMediaBar';
import AnimatedName from '../../components/AnimatedName/AnimatedName';
import Greet from '../../components/Greet/Greet';

// import styles.
import { BtnOutlined, BtnSolid } from '../../assets/styles/Buttons';
import { BoxButtons, Presentation } from './styles';
import { TextMd } from '../../assets/styles/Text';
import Projects from './sections/projects/Projects';
import Tecnologies from './sections/tecnologies/Tecnologies';
import AboutMe from './sections/aboutMe/AboutMe';

function Home() {
  return (
    <>
      {/* presentation - first section */}
      <Presentation>
        <Greet/>
        <TextMd pt="1.2rem">Mi nombre es</TextMd>
        <AnimatedName name="Nicolás" lastName="Giudice"/>
        <TextMd pl="1rem">y me dedico al desarrollo web</TextMd>
        
        <BoxButtons>
          <BtnOutlined target="_blank" href="https://drive.google.com/file/d/1AmcsGGDBZDAnXt34oqXS666FfcGZyGfm/view?usp=sharing">Curriculum Vitae</BtnOutlined>
          <BtnSolid href="#">Portafolio</BtnSolid>
        </BoxButtons>

        <SocialMediaBar/>
      </Presentation>

      {/* about me - second section */}
      <AboutMe/>      

      {/* projects - third section */}
      <Projects/>

      {/*Coding Language*/}
      <Tecnologies/>
    </>
  );
}

export default Home;