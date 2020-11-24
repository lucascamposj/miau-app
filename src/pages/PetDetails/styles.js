import styled from 'styled-components/native';
import ButtonStyle from '../../components/Button';

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