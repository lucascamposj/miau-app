import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import ButtonStyle from '../../components/Button';

export const Container = styled.View`
    flex: 1;
`;

export const Button = styled(ButtonStyle)`
    text-align: center;
    font-size: 12px;
    margin: 250px auto;
    width: 232px; 
    height: 40px;
    font-family: 'Roboto-Regular';
`;

export const TextField = styled.Text`
  color: #757575;
  font-size: 14px;
  font-family: 'Roboto-Regular';
  text-align: center;
  margin: 16px 0 16px 0;
`;

export const HeaderField = styled.Text`
  color: #ffd358;
  font-size: 64px;
  font-family: 'Courgette-Regular';
  text-align: center;
  margin: 16px 0 16px 0;
`;