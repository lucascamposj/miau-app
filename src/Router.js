import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from './pages/Login/index.js';
import RegisterAnimal from './pages/RegisterAnimal/index.js';
import RegisterPerson from './pages/RegisterPerson/index.js';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Registrar Pessoa" component={RegisterPerson} />
        <Drawer.Screen name="Registrar Animal" component={RegisterAnimal} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}