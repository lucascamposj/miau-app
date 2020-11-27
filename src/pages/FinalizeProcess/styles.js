import styled from 'styled-components/native';
import { ScrollView as ScrowViewReact } from 'react-native';
import ButtonStyle from '../../components/Button';

export const Container = styled.View`
    flex: 1;
    padding: 20px;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 5px 0;
`;

export const Button = styled(ButtonStyle)`
  text-align: center;
  font-size: 12px;
  margin: 8px auto;
  width: 148px; 
  height: 40px;
  font-family: 'Roboto-Regular';
`;

export const TextField = styled.Text`
  color: #757575;
  font-size: 14px;
  font-family: 'Roboto-Regular';
  text-align: left;
  margin: 16px 0 16px 0;
`;

export const BoldTextField = styled.Text`
  color: #757575;
  font-size: 14px;
  font-family: 'Roboto-Regular';
  text-align: left;
  margin: 16px 0 16px 0;
  font-weight: bold;
`;

export const HeaderField = styled.Text`
  color: #589b9b;
  font-size: 14px;
  font-family: 'Roboto-Regular';
  text-align: center;
  margin: 32px 0 16px 0;
`;

export const ScrollView = styled(ScrowViewReact)`
`;