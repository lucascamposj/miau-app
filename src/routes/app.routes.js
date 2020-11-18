import React from 'react';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import RegisterAnimalNav from './registeranimal.routes';
import Adopt from './adopt.routes';
import Help from './help.routes';
import Sponsor from './sponsor.routes';
import MyPets from './mypets.routes';
import { useAuth } from '../hooks/auth';
import Hamburguer from '../components/Button/Hamburguer/index.js'

const Drawer = createDrawerNavigator();


export default function Routes() {
  const { signOut } = useAuth();
  return (
    <Drawer.Navigator initialRouteName="Meus pets" 
      screenOptions={{ headerLeft: () =>  <Hamburguer />}}
      drawerContent={props => {
      return (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem label="Sair" onPress={() => signOut()} />
        </DrawerContentScrollView>
      )
    }}>
      <Drawer.Screen name="Meus pets" component={MyPets} />
      <Drawer.Screen name="Cadastrar um pet" component={RegisterAnimalNav} />
      <Drawer.Screen name="Adotar um pet" component={Adopt} />
      <Drawer.Screen name="Ajudar um pet" component={Help} />
      <Drawer.Screen name="Apadrinhar um pet" component={Sponsor} />
    </Drawer.Navigator>
  );
}