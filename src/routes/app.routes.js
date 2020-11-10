import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RegisterAnimal from '../pages/RegisterAnimal/index.js';
import MyPets from './mypets.routes';

const Drawer = createDrawerNavigator();


export default function Routes() {
  return (
    <Drawer.Navigator initialRouteName="Meus pets">
      <Drawer.Screen name="Meus pets" component={MyPets} />
      <Drawer.Screen name="Cadastrar um pet" component={RegisterAnimal} />
      <Drawer.Screen name="Adotar um pet" component={Animal} />
    </Drawer.Navigator>
  );
}