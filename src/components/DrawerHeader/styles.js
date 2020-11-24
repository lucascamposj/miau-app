import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #88c9bf;
  justify-content: center;
  align-items: flex-start;
  padding: 15px 15px;
  margin-bottom: 5px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: #757575;
  margin: 15px 0;
`;

export const Name = styled.Text`
  width: 100%;
  font-size: 14px;
  color: #434343;
  font-family: 'Roboto-Medium';
`;
