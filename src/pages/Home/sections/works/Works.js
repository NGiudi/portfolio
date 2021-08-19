import React from 'react';

import { Title, Text } from '../../../../assets/styles/Text';
import { Box, Grid, Icon } from './styles';

import { WORKS_TITLE_COLOR } from '../../../../constants/colors';

function Skills() {
  return (
    <Box>
      <Title color={WORKS_TITLE_COLOR}>A que me dedico?</Title>

      <Grid>
        <div>
          <Icon className="fas fa-laptop-code"></Icon>
          <Text>Soy front-end developer, en otras palabras diseño la interfaz 
          de usuario de los sitios web.</Text>
        </div>

        <div>
          <Icon className="fas fa-cogs"></Icon>
          <Text>Creación de de diseños responsive, o sea que se adapta a los distintos dispositivos.</Text>
        </div>

        <div>
          <Icon className="far fa-lightbulb"></Icon>
          <Text>Implementación de diseños creativos y audaces hechos a medida.</Text>
        </div>
      </Grid>
    </Box>
  )
}

export default Skills;
