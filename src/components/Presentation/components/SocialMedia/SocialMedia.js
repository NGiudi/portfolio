import React from 'react';

import { SocialMediaGrup, SocialIcon } from './Styles';

function SocialMedia() {
  return (
    <SocialMediaGrup>
      <SocialIcon  target="_blank" href="https://www.linkedin.com/in/nicol%C3%A1s-giudice-5652a0181/">
        <i className="fab fa-linkedin-in"></i>
      </SocialIcon>

      <SocialIcon  target="_blank" href="https://github.com/NGiudi">
        <i className="fab fa-github"></i>
      </SocialIcon>
    </SocialMediaGrup>
  )
}

export default SocialMedia;