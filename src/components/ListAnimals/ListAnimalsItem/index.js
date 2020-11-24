import React from 'react';
import {
  AnimalPhoto,
  Placeholder,
  Title,
  Description,
  DescriptionContainer,
  Container,
  TitleContainer,
  SelectAnimal
} from './styles';

const ListAnimalsItem = ({animal, color, ...rest}) => {
  return (
    <SelectAnimal {...rest}>
      <Container>
        <TitleContainer color={color}>
          <Title>{animal.name}</Title>
        </TitleContainer>

        {animal.photo ?
          <AnimalPhoto source={{uri: animal.photo.url}} />
          : 
          <Placeholder/>
        }
        <DescriptionContainer>
          <Description>{animal.formType}</Description>
        </DescriptionContainer>
      </Container>
    </SelectAnimal>
  )
}

export default ListAnimalsItem;