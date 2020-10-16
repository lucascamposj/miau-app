import React from 'react';
import { Container, ButtonText } from './styles';

const ToggleButton = ({ children, textColor,...rest }) => (
  <Container {...rest}>
    <ButtonText textColor={textColor}>{children}</ButtonText>
  </Container>
);

export default ToggleButton;
