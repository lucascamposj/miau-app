import React from 'react';
import {useAuth} from '../../hooks/auth';
import {
  Container,
  Avatar,
  Name
} from './styles';

const DrawerHeader = ({loading, animals, color, animalScreen}) => {
  // hooks context
  const {user} = useAuth();

  return (
    <>
    {user.name &&
      <Container>
        <Avatar source={user.photo && {uri: user.photo.url}}/>
        <Name>{user.name}</Name>
      </Container>
    }
    </>
  );
}

export default DrawerHeader;