import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListMyPets from '../pages/ListMyPets/index.js';
import PetDetails from '../pages/PetDetails/index.js';
import RemovePet from '../pages/RemovePet/index.js';
import Interests from '../pages/Interests/index.js';
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
    <Stack.Screen name="RemovePet" component={RemovePet} options={{ title: "Remover pet", headerLeft: () =>  <Hamburguer /> }} />
    <Stack.Screen name="Interests" component={Interests} options={{ title: "Interessados"}} />
  </Stack.Navigator>
  );
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default MyPets;