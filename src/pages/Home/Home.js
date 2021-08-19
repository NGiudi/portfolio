// import from react.
import React from 'react';

// import components.
import Presentation from './sections/presentation/Presentation';
import Tecnologies from './sections/tecnologies/Tecnologies';
import Projects from './sections/projects/Projects';
import AboutMe from './sections/aboutMe/AboutMe';

function Home() {
  return (
    <>
      <Presentation/>
      <AboutMe/>      
      <Projects/>
      <Tecnologies/>
    </>
  );
}

export default Home;