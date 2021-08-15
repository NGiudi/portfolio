import React from 'react';

// import styles.
import { Title, Text } from '../../../../assets/styles/Text';
import { Box, Content, Grid, Img, Rectangular } from './styles';

//import image
import photo from '../../../../assets/img/about-me.jpg'

function AboutMe() {
  return (
    <Box>    
      <Grid>
        <Img src={photo} alt="Nicolás Giudice"/>
        
        <Content>
          <Rectangular/>
          <Title>Sobre Mi</Title>
          <Text>En el año 2019 empezaba mi trayectoria en el mundo IT. En ese año comence la carrera de ingeniería en sistemas de información en la universidad tecnológica 
            nacional y de forma autodidacta comenzaba mis estudios para convertirme en desarrollador web. A lo largo del tiempo, he realizado cursos tanto en plataformas 
            como en instituciones y he leído documentaciones para adquirir nuevos conocimientos.
          </Text>
      
          <Text>A mediados de 2021 he realizado una capacitación profesional de javascript fullstack en Alkemy, donde he participado en un proyecto para una ONG, junto a 9 
            compañeros y un mentor. A lo largo del proyecto hemos utilizado SCRUM como metodología de trabajo y React y Node.js como tecnologías principales.
          </Text>
          <Rectangular/>
        </Content>
      </Grid>
    </Box>
  );
}

export default AboutMe;