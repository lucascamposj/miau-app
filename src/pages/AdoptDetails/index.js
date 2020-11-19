import React from 'react';
import {View} from 'react-native';
import {useAuth} from '../../hooks/auth'
import AnimalPage from '../../components/AnimalPage'
import { Button } from "./styles.js"

const AdoptDetails = () => {
  // hooks context
  const {selectedAnimal} = useAuth()

  const AdoptButton = () => {
    return (
      <Button
          color="#fdcf58"
          textColor="#434343"
        >
          PRETENDO ADOTAR
      </Button>
    )
  }

  return (
    <View>
      <AnimalPage animal={selectedAnimal} button={AdoptButton} />
    </View>
  )
}

export default AdoptDetails;