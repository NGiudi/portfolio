import React from 'react';

import { Box, Icon, Slide } from './styles';

function Tecnologies() {
  return (
    <Box>        
      <Slide>
        <Icon color="#F4D03F" className="fab fa-js"></Icon>
        <Icon color="#3498DB" className="fab fa-react"></Icon>
        <Icon color="#229954" className="fab fa-node"></Icon>
      </Slide>
    </Box>
  );
}

export default  Tecnologies;