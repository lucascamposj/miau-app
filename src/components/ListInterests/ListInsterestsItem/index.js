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
        {interest.data.photo ?
          <InterestPhoto source={{uri: interest.data.photo}} />
          : 
          <Placeholder/>
        }
        <DescriptionContainer>
          <Description>{interest.data.name}</Description>
          <Description>{interest.data.age + " anos"}</Description>
        </DescriptionContainer>
      </Container>
    </SelectInterest>
  )
}

export default ListInterestsItem;