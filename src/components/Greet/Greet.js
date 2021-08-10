import React from 'react';

// import styles.
import { MessageShape } from '../../assets/styles/MessageShape';

function Greet() {

  const handleTextGreet = () => {
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
    <MessageShape>
      <span>{handleTextGreet()}</span>
    </MessageShape>
  );
}

export default Greet;
