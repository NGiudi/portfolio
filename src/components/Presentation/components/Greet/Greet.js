import React from 'react';

import { Box } from './Styles';

function Greet() {

  const getGreet = () => {
    const date = new Date();
    const hours = date.getHours();

    if (hours > 5 && hours <= 12 )
      return "Buenos Dias";
    else if (hours > 12 && hours < 20)
      return "Buenas Tardes";
    else
      return "Buenas Noches";
  }

  return (
    <Box>
      <span>{getGreet()}</span>
    </Box>
  );
}

export default Greet;
