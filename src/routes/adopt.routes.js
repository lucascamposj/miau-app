import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Filters from '../pages/Filters';
import ListAdopt from '../pages/ListAdopt';
import AdoptDetails from '../pages/AdoptDetails';
import Hamburguer from '../components/Button/Hamburguer/index.js'
import {useAuth} from '../hooks/auth'

const Stack = createStackNavigator();

function Adopt() {
  // hooks context
  const {selectedAnimal} = useAuth()

  return (
    <Stack.Navigator
      initialRouteName="Adotar"
      screenOptions={{ 
          headerStyle: { 
          backgroundColor: '#ffd358'
          },
          headerTitleStyle: {
          fontFamily: 'Roboto-Medium',
          color: '#434343'
          }
      }}
    >
      <Stack.Screen name="Adotar" component={ListAdopt} options={ {headerLeft: () =>  <Hamburguer />}} />
      <Stack.Screen name="Adopt Details" component={AdoptDetails}  options={{ title: selectedAnimal.name ? capitalizeFirstLetter(selectedAnimal.name) : ""}} />
      <Stack.Screen name="Filtrar pesquisa" component={Filters} />
    </Stack.Navigator>
  );
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default Adopt;