import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  margin-bottom: 8px;
  box-shadow: 20px 10px 10px #000;
  /* shadow-color: #000; */
  /* shadow-offset: {width: 0, height: 2}; */
  /* shadow-opacity: 0.8;
  shadow-radius: 2; */
`;
export const TitleContainer = styled.View`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color ? props.color : '#cfe9e5'};
  padding: 0 16px;
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
export const Title = styled.Text`
  align-self: flex-start;
  text-transform: capitalize;
  font-size: 16px;
  color: #434343;
  font-family: 'Roboto-Medium';
`;

export const DescriptionContainer = styled.View`
  width: 100%;
  background-color: #FFF;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`; 

export const Description = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DescriptionItem = styled.Text`
  text-transform: uppercase;
  font-size: 12px;
  color: #434343;
  font-family: 'Roboto-Regular';
  flex: 1;
  text-align: center;
`;

export const SelectAnimal = styled.TouchableOpacity`
`;