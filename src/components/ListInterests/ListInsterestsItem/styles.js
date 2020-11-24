import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  margin-bottom: 8px;
  box-shadow: 20px 10px 10px #000;
  padding: 12px 0 24px 0;
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

export const InterestPhoto = styled.Image`
  height: 80px;
  width: 80px;
  resize-mode: cover;
  border-radius: 40px;
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
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`; 

export const Description = styled.Text`
  font-size: 14px;
  color: #434343;
  font-family: 'Roboto-Regular';
`;

export const SelectInterest = styled.TouchableOpacity`
  flex: 1; 
`;