// import from react.
import React from 'react';

// import components.
import SocialMediaBar from '../../components/SocialMediaBar/SocialMediaBar';
import AnimatedName from '../../components/AnimatedName/AnimatedName';
import Greet from '../../components/Greet/Greet';

// import styles.
import { BtnOutlined, BtnSolid } from '../../assets/styles/Buttons';
import { BoxButtons, Presentation, Section } from './styles';
import { Text, TextMd, Title } from '../../assets/styles/Text';

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
      <Section>
        <Title>Sobre Mi</Title>
        <Text>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
          making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more 
          obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, 
          discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes 
          of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. 
          The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum 
          used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by 
          Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</Text>
      </Section>

      {/* projects - third section */}
      <Section>
        <Title>Projectos</Title>
      </Section>
    </>
  );
}

export default Home;