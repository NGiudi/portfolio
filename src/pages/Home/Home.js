// import from react.
import React from 'react';

// import components.
import SocialMediaBar from '../../components/SocialMediaBar/SocialMediaBar';
import AnimatedName from '../../components/AnimatedName/AnimatedName';
import Greet from '../../components/Greet/Greet';

// import styles.
import { BtnOutlined, BtnSolid } from '../../assets/styles/Buttons';
import { BgSection, BoxButtons, Center, Presentation, Section } from './styles';
import { Text, TextMd, Title } from '../../assets/styles/Text';
import { Icon } from '../../assets/styles/Icons';
import Projects from './sections/projects/Projects';

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
      <Section py="10rem">
        <Title>Sobre Mi</Title>
        <Text>En el año 2019 empezaba mi trayectoria en el mundo IT. En ese año comence la carrera de ingeniería en sistemas de información en la universidad tecnológica 
          nacional y de forma autodidacta comenzaba mis estudios para convertirme en desarrollador web. A lo largo del tiempo, he realizado cursos tanto en plataformas 
          como en instituciones y he leído documentaciones para adquirir nuevos conocimientos.
        </Text>
        <Text>A mediados de 2021 he realizado una capacitación profesional de javascript fullstack en Alkemy, donde he participado en un proyecto para una ONG, junto a 9 
          compañeros y un mentor. A lo largo del proyecto hemos utilizado SCRUM como metodología de trabajo y React y Node.js como tecnologías principales.</Text>
      </Section>

      {/*Coding Language*/}
      <BgSection>
        <Section py="5rem">         
          <Center>  
            <Icon px="5rem" size="6rem" color="#F4D03F" className="fab fa-js"></Icon>
            <Icon px="5rem" size="6rem" color="#3498DB" className="fab fa-react"></Icon>
            <Icon px="5rem" size="6rem" color="#229954" className="fab fa-node"></Icon>
          </Center>
        </Section>
      </BgSection>
      
      {/* projects - third section */}
      <Projects/>
    </>
  );
}

export default Home;