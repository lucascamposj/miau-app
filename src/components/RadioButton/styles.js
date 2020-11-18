import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border: 0;
    margin-right: 8px;
`;

export const RadioButtonContainer = styled.View`
    margin: 0;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: ${props => props.size/2}px;
    border-width: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    border-color: #757575;
`;

export const Button = styled.View`
    margin: 0;
    width: ${props => props.size/2}px;
    height: ${props => props.size/2}px;
    border-radius: ${props => props.size/4}px;
    border: 0;
    background-color: ${props => props.selected ? '#757575' : 'transparent'};
`;

export const Text = styled.Text`
    color: #757575;
    font-size: 14px;
    font-family: 'Roboto-Regular';
    margin-left: 5px; 
`;

