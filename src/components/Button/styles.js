import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: ${props => props.color ? props.color : '#88c9bf'};
  border-radius: 3px;
  margin-top: 8px;

  border-bottom-color: #e6e7e8;
  border-bottom-width: 2px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  color: ${props => (props.textColor) ? props.textColor : '#f7f7f7'};
  font-size: 12;
`;
