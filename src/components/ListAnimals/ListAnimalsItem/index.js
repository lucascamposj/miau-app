import React from 'react';
import {
  AnimalPhoto,
  Placeholder,
  Title,
  Description,
  DescriptionContainer,
  Container,
  TitleContainer
} from './styles';

const ListAnimalsItem = ({animal}) => {
  return (
    <Container>
      <TitleContainer>
        <Title>{animal.name}</Title>
      </TitleContainer>

      {animal.photo ?
        <AnimalPhoto source={{uri: animal.photo}} />
        : 
        <Placeholder/>
      }
      <DescriptionContainer>
        <Description>{animal.formType}</Description>
      </DescriptionContainer>
    </Container>
  )
}

export default ListAnimalsItem;