import React from 'react';

// import styles.
import { ButtonsGrup, IconButton } from '../../assets/styles/IconButtons';

function SocialMedia() {
  return (
    <ButtonsGrup>
      <IconButton  target="_blank" href="https://www.linkedin.com/in/nicol%C3%A1s-giudice-5652a0181/">
        <i className="fab fa-linkedin-in"></i>
      </IconButton>

      <IconButton  target="_blank" href="https://github.com/NGiudi">
        <i className="fab fa-github"></i>
      </IconButton>
    </ButtonsGrup>
  )
}

export default SocialMedia;