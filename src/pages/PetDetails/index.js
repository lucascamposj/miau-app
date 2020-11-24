import React from 'react';
import {View} from 'react-native';
import {useAuth} from '../../hooks/auth'
import AnimalPage from '../../components/AnimalPage'
import { Button, ButtonContainer } from "./styles.js"
import { useRoute, useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const PetDetails = () => {
  // hooks context
  const {selectedAnimal} = useAuth()

  const navigation = useNavigation();

  const RemovePet = async () => {

  try {
    await storage()
    .ref(selectedAnimal.photo.path)
    .delete()

    await firestore()
    .collection('animal')
    .doc(selectedAnimal.key)
    .delete()
  } catch(e) {
    console.log(e)
  } finally {
    navigation.navigate('RemovePet', {
      animalName: selectedAnimal.name,
      animalSex: selectedAnimal.sex,
    })
  } 
  }

  const MyPetsButton = () => {
    return (
      <ButtonContainer>
        <Button
          color="#88c9bf"
          textColor="#757575"
          onPress={() => {
            navigation.navigate('Interests')
          }}
        >
          VER INTERESSADOS
        </Button>

        <Button
          color="#88c9bf"
          textColor="#757575"
          onPress={() => RemovePet()}
        >
          REMOVER PET
        </Button>
      </ButtonContainer>
    )
  }

  return (
    <View>
      <AnimalPage animal={selectedAnimal} button={MyPetsButton} />
    </View>
  )
}

export default PetDetails;