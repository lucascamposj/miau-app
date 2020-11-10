import React from 'react';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import RegisterAnimal from '../pages/RegisterAnimal/index.js';
import MyPets from './mypets.routes';
import { useAuth } from '../hooks/auth';

const Drawer = createDrawerNavigator();


export default function Routes() {
  const { signOut } = useAuth();
  return (
    <Drawer.Navigator initialRouteName="Meus pets" drawerContent={props => {
      return (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem label="Sair" onPress={() => signOut()} />
        </DrawerContentScrollView>
      )
    }}>
      <Drawer.Screen name="Meus pets" component={MyPets} />
      <Drawer.Screen name="Cadastrar um pet" component={RegisterAnimal} />
      {/*<Drawer.Screen name="Adotar um pet" component={Animal} />*/}
    </Drawer.Navigator>
  );
}