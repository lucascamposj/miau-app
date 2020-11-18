import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListMyPets from '../pages/ListMyPets/index.js';
import PetDetails from '../pages/PetDetails/index.js';
import Hamburguer from '../components/Button/Hamburguer/index.js'

const Stack = createStackNavigator();

function MyPets() {
  return (
  <Stack.Navigator
    initialRouteName="ListMyPets"
    screenOptions={{ 
        headerStyle: { 
        backgroundColor: '#cfe9e5'
        },
        headerTitleStyle: {
        fontFamily: 'Roboto-Medium',
        color: '#434343'
        },
        headerLeft: () =>  <Hamburguer />
    }}
  >
    <Stack.Screen name="ListMyPets" component={ListMyPets} options={{ title: 'Meus Pets' }}  />
    <Stack.Screen name="PetDetails" component={PetDetails} />
  </Stack.Navigator>
  );
}

export default MyPets;