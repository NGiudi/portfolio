import React from 'react';

import { SocialMediaGrup, SocialIcon } from './Styles';

function SocialMedia() {
  return (
    <SocialMediaGrup>
      <SocialIcon href="#">
        <i className="fab fa-linkedin-in"></i>
      </SocialIcon>

      <SocialIcon href="#">
        <i className="fab fa-github"></i>
      </SocialIcon>
    </SocialMediaGrup>
  )
}

export default SocialMedia;