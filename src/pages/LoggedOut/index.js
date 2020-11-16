import React from 'react';
import {View, Text} from 'react-native';
import { Container, Button, TextField, HeaderField} from "./styles.js"
import { useRoute, useNavigation } from '@react-navigation/native';

const LoggedOut = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <HeaderField>
        Ops!
      </HeaderField>

      <TextField>
        Você não pode realizar esta ação sem possuir um cadasto.
      </TextField>

      <Button onPress={() => {
        navigation.navigate('SignUp')
      }}>
        FAZER CADASTRO
      </Button>

      <TextField>
        Já possui cadastro?
      </TextField>

      <Button onPress={() => {
        navigation.navigate('SignIn')
      }}>
        FAZER LOGIN
      </Button>
    </Container>
  )
}

export default LoggedOut;