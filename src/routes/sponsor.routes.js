import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Filters from '../pages/Filters';
import ListSponsor from '../pages/ListSponsor';
import SponsorDetails from '../pages/SponsorDetails';
import Hamburguer from '../components/Button/Hamburguer/index.js'

const Stack = createStackNavigator();

function Sponsor() {
  return (
    <Stack.Navigator
      initialRouteName="Apadrinhar"
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
      <Stack.Screen name="Apadrinhar" component={ListSponsor} />
      <Stack.Screen name="Adopt Details" component={SponsorDetails} />
      <Stack.Screen name="Filtrar pesquisa" component={Filters} />
    </Stack.Navigator>
  );
}

export default Sponsor;