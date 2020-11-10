import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListMyPets from '../pages/ListMyPets/index.js';
import PetDetails from '../pages/PetDetails/index.js';

const Stack = createStackNavigator();

function MyPets() {
  return (
  <Stack.Navigator>
    <Stack.Screen name="ListMyPets" component={ListMyPets} />
    <Stack.Screen name="PetDetails" component={PetDetails} />
  </Stack.Navigator>
  );
}

export default MyPets;