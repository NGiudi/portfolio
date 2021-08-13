import React from 'react';

// import components.
import Card from '../../../../components/Card/Card';

// import styles.
import { BtnOutlined } from '../../../../assets/styles/Buttons';
import { Title } from '../../../../assets/styles/Text';
import { Box, Center, Gallery } from './styles';

// static information.
import data from '../../../../assets/information/projects.json';

function Projects() {
  return (
    <Box>
      <Title>Proyectos</Title>
        
      <Gallery>
        {
          data.map((cardData) => {
            return <Card key={cardData.id} data={cardData}/>
          })
        }
      </Gallery>
      
      <Center>
        <BtnOutlined>Ver Portafolio</BtnOutlined>
      </Center>
    </Box>
  );
}

export default Projects;