import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import ButtonStyle from '../../components/Button';

export const Container = styled.View`
    flex: 1;
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