import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border: 0;
    margin-right: 8px;
`;

export const Text = styled.Text`
    color: #757575;
    font-size: 14px;
    font-family: 'Roboto-Regular';
    margin-left: 5px; 
`;

export const CheckBoxIcon = styled(FeatherIcon)`
    color: #757575;
`;


