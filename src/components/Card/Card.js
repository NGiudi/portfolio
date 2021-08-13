import React from 'react';

// import styles.
import { Badge, Box, Description, Img, Status, Title } from './styles';
import { Footer, FooterBtn, FooterText } from './styles';

function Card({ data }) {
  console.log(data);

  return (
    <Box>
      <Img src={data.imgUrl} alt={data.Alt}/>
      <Badge>{data.category}</Badge>
      <Title>{data.title}</Title>
      <Description>{data.description}</Description>
      <Status>Estado: {data.status}</Status>

      <Footer>
        <FooterBtn target="_blank" href={data.githubLink}>
          <i className="fab fa-github"></i>
          <FooterText>Código</FooterText>
        </FooterBtn>

        <FooterBtn target="_blank" href={data.appLink}>
          <i className="fas fa-link"></i>
          <FooterText>Página Web</FooterText>
        </FooterBtn>
      </Footer>
    </Box>
  );
}

export default Card;