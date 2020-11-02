import React from 'react';
import { RadioButtonContainer, Button, Container, Text } from './styles';

const RadioButton = ({ children, size = 24, selected, ...rest }) => (
  <Container {...rest}>
    <RadioButtonContainer size = {size}>
      <Button size = {size} selected = {selected}></Button>
    </RadioButtonContainer>
    <Text>
      {children}
    </Text>
  </Container>
);

export default RadioButton;
