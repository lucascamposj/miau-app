import React from 'react';
import { Container, ButtonText } from './styles';

const Button = ({ children, textColor,...rest }) => (
  <Container {...rest}>
    <ButtonText textColor={textColor}>{children}</ButtonText>
  </Container>
);

export default Button;
