import React from 'react';
import { ActivityIndicator} from 'react-native';
import ListAnimalsItem from './ListAnimalsItem';
import {AnimalsList} from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';
import {useAuth} from '../../hooks/auth'

const ListAnimals = ({loading, animals, color, animalScreen}) => {
  // hooks context
  const {setSelectedAnimal} = useAuth()

  const navigation = useNavigation();

  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <AnimalsList
      data={animals}
      renderItem={({ item }) => (
        <ListAnimalsItem animal={item} color={color} onPress={() => {setSelectedAnimal(item); navigation.navigate(animalScreen)}}/>
      )}
    />
  );
}

export default ListAnimals;