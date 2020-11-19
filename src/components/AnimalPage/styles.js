import styled from 'styled-components/native';

export const AnimalPhoto = styled.Image`
  background-color: #CCC;
  height: 183px;
  width: 100%;
  resize-mode: cover;
`;
export const Placeholder = styled.View`
  width: 100%;
  height: 183px;
  background-color: #CCC;
`;

export const SectionText = styled.Text`
  color:  ${props => props.color ? props.color : '#757575'};
  font-size: ${props => props.size ? props.size : '14px'};
  font-family: ${props => props.font ? props.font : 'Roboto-Regular'};
  margin: 20px 0;
`;

export const TextContainer = styled.View`
  display: flex; 
  flex-direction: row;
  justify-content: space-between;
`;

export const Container = styled.View`
  flex: 1;
  padding: 10px;
`;