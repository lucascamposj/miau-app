import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Filters from '../pages/Filters';
import ListHelp from '../pages/ListHelp';
import HelpDetails from '../pages/HelpDetails';
import Hamburguer from '../components/Button/Hamburguer/index.js'

const Stack = createStackNavigator();

function Help() {
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
          },
          headerLeft: () =>  <Hamburguer />
      }}
    >
      <Stack.Screen name="Ajudar" component={ListHelp} />
      <Stack.Screen name="Adopt Details" component={HelpDetails} />
      <Stack.Screen name="Filtrar pesquisa" component={Filters} />
    </Stack.Navigator>
  );
}

export default Help;