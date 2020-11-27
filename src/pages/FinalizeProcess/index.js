import React from 'react';
import {View, Text, Alert} from 'react-native';
import { Container, Button, TextField, HeaderField, ButtonContainer, BoldTextField, ScrollView } from "./styles.js"
import { useRoute, useNavigation } from '@react-navigation/native';
import {useAuth} from '../../hooks/auth'
import firestore from '@react-native-firebase/firestore';

const FinalizeProcess = () => {
  // hooks context
  const {selectedAnimal, setSelectedAnimal} = useAuth()
  const navigation = useNavigation();
  const route = useRoute();

  const submit = async () => {
    if (selectedAnimal != undefined  && route.params.userUID != undefined)
    {
      let animal = selectedAnimal    
      const key = selectedAnimal.key

      delete animal.key
      
      if (animal.formType === "adocao") {
        animal.interestedUsers = []
        animal.owner = route.params.userUID
        animal.formType = "adotado"
        try {
          await firestore()
          .collection('animal')
          .doc(key)
          .update(animal)
        } catch(e) {
          console.log(e)
          Alert.alert("Erro ao Finalizar\nTente novamente");
        } finally {
          setSelectedAnimal(animal);
          navigation.navigate('Meus pets', { screen: 'FinalizeSuccess' });
        }
      } 
      else {
        navigation.navigate('Meus pets', { screen: 'FinalizeSuccess' });
      }

    } else {
      Alert.alert("Erro ao Finalizar\nTente novamente");
    }
  }

  return (
    <ScrollView>
      <Container>
        <HeaderField>
          LEIA ATENTAMENTE ANTES DE PROSSEGUIR
        </HeaderField>

        <TextField>
          Antes de realizar este passo, certifique-se de
          que o adotante ou padrinho tenha cumprido
          todos os requisitos prévios à adoção. Além
          disso, esteja certo de que ele já está em
          posse do animal em questão.
        </TextField>

        <TextField>
          Após finalizar este processo, o seu animal
          será automaticamente removido da lista de
          pets para adoção/apadrinhamento.
        </TextField>

        <TextField>
          Além disso, é importante ressaltar que as
          suas informações de cadastro serão
          disponibilizadas para o usuário que está
          adotando ou apadrinhando o seu animal,
          assim como você também terá acesso à
          todas as informações fornecidas por ele(a).
        </TextField>

        <BoldTextField>
          Ao clicar em “li e concorco”, você declara ter
          lido, compreendido e concordado com os
          termos acima expostos.
        </BoldTextField>

        <ButtonContainer>
          <Button color="#88c9bf" textColor="#757575" onPress={() => {
            submit()
          }}>
            LI E CONCORDO
          </Button>

          <Button color="#88c9bf" textColor="#757575" onPress={() => {
            navigation.reset({index: 0, routes: [{name: "ListMyPets"}]});
            navigation.navigate('Meus pets', { screen: 'ListMyPets' });
          }}>
            CANCELAR
          </Button>
        </ButtonContainer>
        
      </Container>
    </ScrollView>
  )
}

export default FinalizeProcess;