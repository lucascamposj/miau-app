import styled from 'styled-components/native';
import { ScrollView as ScrowViewReact } from 'react-native';

export const ScrollView = styled(ScrowViewReact)`
  /* flex: 1; */
`;

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

export const AnimalName = styled.Text`
  color: #434343;
  font-size: 16px;
  font-family: 'Roboto-Medium';
  margin-top: 10px;
`;

export const LabelText = styled.Text`
  color:  #f7a800;
  font-size: 12px;
  font-family: 'Roboto-Regular';
  text-transform: uppercase;
`;

export const ContentText = styled.Text`
  color: #757575;
  font-size: 14px;
  font-family: 'Roboto-Regular';
`;

export const TextContainer = styled.View`
  display: flex; 
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
`;

export const TextRowContainer = styled.View`
  display: flex; 
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0;
  padding: 0px;
`;

export const Section = styled.View`
  flex: 1;

  padding: 10px 0px;
  border-style: solid; 
  border-bottom-color: #e0e0e0; 
  border-bottom-width: 1px;
`;

export const ClearSection = styled.View`
  padding: 10px 0px;
`;

export const Container = styled.View`

  padding: 0 10px;
`;