import React from 'react';
import { Container, TextInput } from './styles';

const Input = ({ children,...rest }) => (
  <Container>
    <TextInput {...rest}>{children}</TextInput>
  </Container>
);

export default Input;
