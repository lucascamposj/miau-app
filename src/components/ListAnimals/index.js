import React from 'react';
import { ActivityIndicator} from 'react-native';
import ListAnimalsItem from './ListAnimalsItem';
import {AnimalsList} from './styles';

const ListAnimals = ({loading, animals}) => {

  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <AnimalsList
      data={animals}
      renderItem={({ item }) => (
        <ListAnimalsItem animal={item}/>
      )}
    />
  );
}

export default ListAnimals;