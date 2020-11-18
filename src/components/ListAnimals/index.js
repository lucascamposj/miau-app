import React from 'react';
import { ActivityIndicator} from 'react-native';
import ListAnimalsItem from './ListAnimalsItem';
import {AnimalsList} from './styles';

const ListAnimals = ({loading, animals, color}) => {

  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <AnimalsList
      data={animals}
      renderItem={({ item }) => (
        <ListAnimalsItem animal={item} color={color}/>
      )}
    />
  );
}

export default ListAnimals;