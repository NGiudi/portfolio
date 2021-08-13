import React from 'react';

// import components.
import Card from '../../../../components/Card/Card';

// import styles.
import { BtnOutlined } from '../../../../assets/styles/Buttons';
import { Title } from '../../../../assets/styles/Text';
import { Box, Center, Gallery } from './styles';

function Projects() {
  return (
    <Box>
      <Title>Proyectos</Title>
        
      <Gallery>
        <Card/>
        <Card/>
        <Card/>
      </Gallery>
      
      <Center>
        <BtnOutlined>Ver Portafolio</BtnOutlined>
      </Center>
    </Box>
  );
}

export default Projects;