import React from 'react';
import {View, Text} from 'react-native';
import { Container, Button, TextField, HeaderField} from "./styles.js"
import { useRoute, useNavigation } from '@react-navigation/native';

const FinalizeProcessSuccess = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <HeaderField>
        Oba!
      </HeaderField>

      <TextField>
        Ficamos muito felizes com o sucesso
        do seu processo! Esperamos que o
        bichinho esteja curtindo muito essa
        nova experiência!
      </TextField>

      <Button color="#88c9bf" textColor="#757575" onPress={() => {
        navigation.reset({index: 0, routes: [{name: "ListMyPets"}]});
        navigation.navigate('Meus pets', { screen: 'ListMyPets' });
      }}>
        MEUS PETS
      </Button>
    </Container>
  )
}

export default FinalizeProcessSuccess;