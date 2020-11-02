import React from 'react';
import { Container, Text, CheckBoxIcon } from './styles';

const CheckBox = ({ children, selected, size=24, ...rest }) => (
  <Container {...rest}>
    {selected ? <CheckBoxIcon name='check-square' size={size}/> : <CheckBoxIcon name='square' size={size}/> }
    <Text>
      {children}
    </Text>
  </Container>
);

export default CheckBox;
