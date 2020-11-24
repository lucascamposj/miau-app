import React from 'react';
import {
  InterestPhoto,
  Placeholder,
  Title,
  Description,
  DescriptionContainer,
  Container,
  TitleContainer,
  SelectInterest
} from './styles';

const ListInterestsItem = ({interest, color, ...rest}) => {
  return (
    <SelectInterest {...rest}>
      <Container>
        {interest.photo ?
          <InterestPhoto source={{uri: interest.photo.url}} />
          : 
          <Placeholder/>
        }
        <DescriptionContainer>
          <Description>{interest.name}</Description>
          <Description>{interest.age + " anos"}</Description>
        </DescriptionContainer>
      </Container>
    </SelectInterest>
  )
}

export default ListInterestsItem;