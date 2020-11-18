import React from 'react';
import { Container, ButtonText } from './styles';
import { ActivityIndicator} from 'react-native';

const Button = ({ children, textColor, loading = false, onPress, ...rest }) => (
  <Container onPress={!loading && onPress} {...rest}>
    <ButtonText textColor={textColor}>{loading ? <ActivityIndicator color={textColor} size="small"/> : children}</ButtonText>
  </Container>
);

export default Button;
