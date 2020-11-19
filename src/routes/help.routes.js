import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Filters from '../pages/Filters';
import ListHelp from '../pages/ListHelp';
import HelpDetails from '../pages/HelpDetails';
import Hamburguer from '../components/Button/Hamburguer/index.js'
import {useAuth} from '../hooks/auth'

const Stack = createStackNavigator();

function Help() {
  // hooks context
  const {selectedAnimal} = useAuth()

  return (
    <Stack.Navigator
      initialRouteName="Ajudar"
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
      <Stack.Screen name="Ajudar" component={ListHelp} options={ {headerLeft: () =>  <Hamburguer />}} />
      <Stack.Screen name="Help Details" component={HelpDetails} options={{ title: selectedAnimal.name ? capitalizeFirstLetter(selectedAnimal.name) : ""}} />
      <Stack.Screen name="Filtrar pesquisa" component={Filters} />
    </Stack.Navigator>
  );
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default Help;