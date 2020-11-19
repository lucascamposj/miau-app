import React from 'react';
import {View} from 'react-native';
import {useAuth} from '../../hooks/auth'
import AnimalPage from '../../components/AnimalPage'
import { Button } from "./styles.js"

const SponsorDetails = () => {
  // hooks context
  const {selectedAnimal} = useAuth()

  const SponsorButton = () => {
    return (
      <Button
          color="#fdcf58"
          textColor="#434343"
        >
          PRETENDO APADRINHAR
      </Button>
    )
  }

  return (
    <View>
      <AnimalPage animal={selectedAnimal} button={SponsorButton} />
    </View>
  )
}

export default SponsorDetails;