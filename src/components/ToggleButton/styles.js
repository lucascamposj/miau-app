import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  border-radius: 3px;
  margin-top: 8px;

  border-bottom-color: #e6e7e8;
  border-bottom-width: 2px;

  justify-content: center;
  align-items: center;

  text-align: center;
  font-size: 12px;
  margin: 24px 0;
  width: 96px; 
  height: 40px;
  font-family: 'Roboto-Regular';
  background-color: ${props => props.selected ? "#ffd358" : "#f1f2f2"};
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  color: ${props => (props.textColor) ? props.textColor : '#f7f7f7'};
  font-size: 12px;
`;
