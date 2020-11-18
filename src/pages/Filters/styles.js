import styled from 'styled-components/native';
import { ScrollView as ScrowViewReact } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import FeatherIcon from 'react-native-vector-icons/Feather';
import ButtonStyle from '../../components/Button';

export const ScrollView = styled(ScrowViewReact)`
    padding: 10px;
`;

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  background: #ffd358;
  height:  ${getStatusBarHeight() + 24 + 56}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: #434343;
  font-size: 20px;
  font-family: 'Roboto-Medium';
  line-height: 28px;
`;

export const HeaderTextField = styled.Text`
  color: #757575;
  font-size: 14px;
  font-family: 'Roboto-Regular';
  margin: 16px 0 16px 0;
`;

export const PageText = styled.Text`
  color: #434343;
  font-size: 16px;
  font-family: 'Roboto-Medium';
`;

export const SectionTitle = styled.Text`
  color: #f7a800;
  font-size: 12px;
  font-family: 'Roboto-Regular';
  margin: 20px 0;
`;

export const ToggleButtonContainer = styled.View`
  display: flex; 
  flex-direction: row;
  justify-content: space-between;
`;

export const RadioButtonContainer = styled.View`
  display: flex; 
  flex-direction: row;
  margin: 16px 0 32px 0;
`;

export const CheckBoxContainer = styled.View`
  display: flex; 
  flex-direction: row;
  margin: 16px 0 32px 0;
`;

export const Button = styled(ButtonStyle)`
    text-align: center;
    font-size: 12px;
    margin: 8px auto;
    width: 232px; 
    height: 40px;
    font-family: 'Roboto-Regular';
`;

export const PictureBox = styled.View`
  background: #e6e7e7;
  width: 128px;
  height: 128px;
  display:flex; 
  margin: 32px auto 8px auto;
  justify-content: center;
  align-items: center;
`;

export const PictureText = styled.Text`
    color: #757575;
    font-size: 14px;
    font-family: 'Roboto-Regular';
`;

export const PictureIcon = styled(FeatherIcon)`
`;
