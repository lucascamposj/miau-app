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
  const { signOut, targetScreen } = useAuth();
  
  return (
    <Drawer.Navigator initialRouteName={targetScreen === "" ? "Meus pets" : targetScreen}
      screenOptions={({navigation}) => ({
        headerLeft: () =>  <Hamburguer />,
        gestureEnabled: false //!(navigation.state.index > 0),
        //drawerLockMode: navigation.state.index > 0 ? 'locked-closed' : 'unlocked'
      })}
      drawerContent={props => {
      return (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem label="Sair" onPress={() => signOut()} />
        </DrawerContentScrollView>
      )
    }}>
      <Drawer.Screen name="Meus pets" component={MyPets} options={{}}/>
      <Drawer.Screen name="Cadastrar um pet" component={RegisterAnimalNav} />
      <Drawer.Screen name="Adotar um pet" component={Adopt} />
      <Drawer.Screen name="Ajudar um pet" component={Help} />
      <Drawer.Screen name="Apadrinhar um pet" component={Sponsor} />
    </Drawer.Navigator>
  );
}