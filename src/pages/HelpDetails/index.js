import React from 'react';
import {View} from 'react-native';
import {useAuth} from '../../hooks/auth'
import AnimalPage from '../../components/AnimalPage'
import { Button } from "./styles.js"

const HelpDetails = () => {
  // hooks context
  const {selectedAnimal} = useAuth()

  const HelpButton = () => {
    return (
      <Button
          color="#fdcf58"
          textColor="#434343"
        >
          PRETENDO AJUDAR
      </Button>
    )
  }

  return (
    <View>
      <AnimalPage animal={selectedAnimal} button={HelpButton} />
    </View>
  )
}

export default HelpDetails;