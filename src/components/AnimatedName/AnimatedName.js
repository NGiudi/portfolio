import React from 'react';

// import styles.
import { Name, Lastname } from './styles';

function AnimatedName({name, lastName}) {
  return (
    <div>
      <Name dataText={name}>{name}</Name>
      <Lastname dataText={lastName}>{lastName}</Lastname>
    </div>
  );
}

export default AnimatedName;