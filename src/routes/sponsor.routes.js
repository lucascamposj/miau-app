import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Filters from '../pages/Filters';
import ListSponsor from '../pages/ListSponsor';
import SponsorDetails from '../pages/SponsorDetails';
import Hamburguer from '../components/Button/Hamburguer/index.js'
import {useAuth} from '../hooks/auth'

const Stack = createStackNavigator();

function Sponsor() {
  // hooks context
  const {selectedAnimal} = useAuth()
  
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
          }
      }}

    >
      <Stack.Screen name="Apadrinhar" component={ListSponsor} options={ {headerLeft: () =>  <Hamburguer />}} />
      <Stack.Screen name="Sponsor Details" component={SponsorDetails} options={{ gestureEnabled: false, title: selectedAnimal.name ? capitalizeFirstLetter(selectedAnimal.name) : ""}} />
      <Stack.Screen name="Filtrar pesquisa" component={Filters} />
    </Stack.Navigator>
  );
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default Sponsor;