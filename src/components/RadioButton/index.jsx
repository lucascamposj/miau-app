import React from 'react';
import { RadioButtonContainer, Button, Container, Text } from './styles';

const RadioButton = ({ children, size = 24, ...rest }) => (
  <Container>
    <RadioButtonContainer size = {size}>
      <Button size = {size} {...rest}></Button>
    </RadioButtonContainer>
    <Text>
      {children}
    </Text>
  </Container>
);

export default RadioButton;
