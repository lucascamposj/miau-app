import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import ButtonStyle from '../../components/Button';

export const Container = styled.View`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px 48px;
`;

export const Button = styled(ButtonStyle)`
    text-align: center;
    font-size: 12px;
    margin: 8px auto;
    width: 232px; 
    height: 40px;
    font-family: 'Roboto-Regular';
`;

export const TextField = styled.Text`
  color: ${props => props.color ? props.color : '#757575'};
  font-size: ${props => props.font ? props.font : '14px'}; 
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

export const ImageStyled = styled.Image`
  height: 100%;
  width: 100%;
  resize-mode: cover;
`;

export const ImageContainer = styled.View`
  height: 44px;
  width: 122px;
  margin: 32px 0;
`;