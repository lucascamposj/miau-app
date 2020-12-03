import React, { useMemo } from 'react';
import {
  AnimalPhoto,
  Placeholder,
  Title,
  Description,
  DescriptionContainer,
  Container,
  TitleContainer,
  DescriptionItem,
  SelectAnimal
} from './styles';

const ListAnimalsItem = ({animal, color, myPets=false, ...rest}) => {
  
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
          {myPets ?
            <>
              <Description>
                <DescriptionItem>{interestedUsersParsed}</DescriptionItem>
              </Description>
              <Description>
                <DescriptionItem>{formTypeParsed}</DescriptionItem>
              </Description>
            </>
            :
            <>
              <Description>
                <DescriptionItem>
                  {animal.sex}
                </DescriptionItem>
                <DescriptionItem>
                  {animal.age}
                </DescriptionItem>
                <DescriptionItem>
                  {animal.size}
                </DescriptionItem>
              </Description>
            </>
          }
        </DescriptionContainer>
      </Container>
    </SelectAnimal>
  )
}

export default ListAnimalsItem;