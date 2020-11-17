import React from 'react';
import {View, Text} from 'react-native';
import { Container, Button, TextField, HeaderField} from "./styles.js"
import { useRoute, useNavigation } from '@react-navigation/native';

const RegisterSuccess = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <HeaderField>
        Eba!
      </HeaderField>

      <TextField>
        O cadastro do seu pet foi realizado com sucesso!
      </TextField>

      <TextField>
        Certifique-se que permitiu o envio de notificações por push no campo privacidade do menu configurações do aplicativo. Assim, poderemos te avisar assim que alguém interessado entrar em contato!
      </TextField>

      <Button color="#ffd358" textColor="#434343" onPress={() => {
        navigation.reset({index: 0, routes: [{name: "register"}]});
        navigation.navigate('Meus pets', { screen: 'ListMyPets' });
      }}>
        MEUS PETS
      </Button>
    </Container>
  )
}

export default RegisterSuccess;