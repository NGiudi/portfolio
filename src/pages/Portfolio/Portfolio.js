import React from 'react';

// import components.
import Card from '../../components/Card/Card';

// static information.
import data from '../../assets/information/projects.json';

//import styles.
import { Box, Gallery } from './styles';
import { Title } from '../../assets/styles/Text';

function Portfolio() {
  return (
    <Box>
      <Title>Portafolio</Title>
        
      <Gallery>
        {
          data.map((cardData) => {
            return <Card key={cardData.id} data={cardData}/>
          })
        }
      </Gallery>
    </Box> 
  );
}

export default Portfolio;
