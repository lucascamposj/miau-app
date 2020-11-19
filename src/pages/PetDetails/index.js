import React from 'react';
import {View} from 'react-native';
import {useAuth} from '../../hooks/auth'
import AnimalPage from '../../components/AnimalPage'

const PetDetails = () => {
    // hooks context
    const {selectedAnimal} = useAuth()

  return (
    <View>
      <AnimalPage animal={selectedAnimal} />
    </View>
  )
}

export default PetDetails;