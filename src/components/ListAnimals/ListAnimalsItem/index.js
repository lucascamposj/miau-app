import React, { useMemo } from 'react';
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
  
  const interestedUsersParsed = useMemo(() => {
    let quantity = 0;
    if(animal.interestedUsers){
      quantity = animal.interestedUsers.length;
    }

    if(quantity === 1){
      return `${quantity} interessado`;
    }
    return `${quantity} interessados`;
  }, [animal.interestedUsers]) 

  const formTypeParsed = useMemo(() => {
    if(animal.formType === 'adocao'){
      return "Adoção"
    }
    return animal.formType;
  }, [animal]) 


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
          <Description>{interestedUsersParsed}</Description>
          <Description>{formTypeParsed}</Description>
        </DescriptionContainer>
      </Container>
    </SelectAnimal>
  )
}

export default ListAnimalsItem;