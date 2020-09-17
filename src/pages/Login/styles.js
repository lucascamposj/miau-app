import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import ButtonStyle from '../../components/Button';

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  background: #cfe9e5;
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
export const LoginSection = styled.View`
    margin-top: 64px;
`;
export const SocialSection = styled.View`
    margin-top: 64px;
`;


export const Button = styled(ButtonStyle)`
    text-align: center;
    font-size: 12px;
    margin: 8px auto;
    width: 232px; 
    height: 40px;
    font-family: 'Roboto-Regular';
`;

export const SingInButton = styled(ButtonStyle)`
    text-align: center;
    font-size: 12px;
    margin: 8px auto;
    margin-top: 52px;
    width: 232px; 
    height: 40px;
    font-family: 'Roboto-Regular';
`;

export const InputContainer = styled.View`
    margin: 0 auto;
    width: 312px;
    border-bottom-color: #e6e7e8;
    border-bottom-width: 2px;
`;

export const TextInput = styled.TextInput`
    padding: 15px;
    text-align: left;
    color: #bdbdbd;
    font-size: 14px;
    font-family: 'Roboto-Regular';
`;