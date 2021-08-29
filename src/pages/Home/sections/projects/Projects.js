import React from 'react';
import { Link } from 'react-router-dom';

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
      <Title>Proyectos más recientes</Title>
        
      <Gallery>
        {
          data.slice(-3).map((cardData) => {
            return <Card key={cardData.id} data={cardData}/>
          })
        }
      </Gallery>
      
      <Center>
        <Link to="/portfolio/projects">
          <BtnOutlined>Ver Portafolio</BtnOutlined>
        </Link>
      </Center>
    </Box>
  );
}

export default Projects;