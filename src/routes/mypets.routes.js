import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListMyPets from '../pages/ListMyPets/index.js';
import PetDetails from '../pages/PetDetails/index.js';
import Hamburguer from '../components/Button/Hamburguer/index.js'
import {useAuth} from '../hooks/auth'

const Stack = createStackNavigator();

function MyPets() {
  // hooks context
  const {selectedAnimal} = useAuth()

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
        }        
    }}
  >
    <Stack.Screen name="ListMyPets" component={ListMyPets} options={{ title: 'Meus Pets', headerLeft: () =>  <Hamburguer /> }}  />
    <Stack.Screen name="PetDetails" component={PetDetails} options={{ title: selectedAnimal.name ? capitalizeFirstLetter(selectedAnimal.name) : ""}}  />
  </Stack.Navigator>
  );
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default MyPets;