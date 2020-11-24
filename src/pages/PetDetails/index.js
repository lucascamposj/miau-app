import React from 'react';
import {View} from 'react-native';
import {useAuth} from '../../hooks/auth'
import AnimalPage from '../../components/AnimalPage'
import { Button, ButtonContainer } from "./styles.js"
import { useRoute, useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const PetDetails = () => {
  // hooks context
  const {selectedAnimal} = useAuth()

  const navigation = useNavigation();

  const RemovePet = () => {
    firestore()
    .collection('animal')
    .doc(selectedAnimal.key)
    .delete()
    .then(() => {
      navigation.navigate('RemovePet', {
        animalName: selectedAnimal.name,
        animalSex: selectedAnimal.sex,
      })
    });
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