import React from 'react';
import {View} from 'react-native';
import {useAuth} from '../../hooks/auth'
import AnimalPage from '../../components/AnimalPage'
import { Button, ButtonContainer } from "./styles.js"
import { useRoute, useNavigation } from '@react-navigation/native';


const PetDetails = () => {
  // hooks context
  const {selectedAnimal} = useAuth()

  const navigation = useNavigation();

  const MyPetsButton = () => {
    return (
      <ButtonContainer>
        <Button
          color="#88c9bf"
          textColor="#757575"
        >
          VER INTERESSADOS
        </Button>

        <Button
          color="#88c9bf"
          textColor="#757575"
          onPress={() => {
            navigation.navigate('RemovePet', {
              animalName: selectedAnimal.name,
              animalSex: selectedAnimal.sex,
            })
          }}
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