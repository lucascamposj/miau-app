import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Filters from '../pages/Filters';
import ListAdopt from '../pages/ListAdopt';
import AdoptDetails from '../pages/AdoptDetails';
import Hamburguer from '../components/Button/Hamburguer/index.js'

const Stack = createStackNavigator();

function Adopt() {
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
          },
          headerLeft: () =>  <Hamburguer />
      }}
    >
      <Stack.Screen name="Adotar" component={ListAdopt} />
      <Stack.Screen name="Adopt Details" component={AdoptDetails} />
      <Stack.Screen name="Filtrar pesquisa" component={Filters} />
    </Stack.Navigator>
  );
}

export default Adopt;