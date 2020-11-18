import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterPerson from '../pages/RegisterPerson/index.js';
import Login from '../pages/Login';
import LoggedOut from '../pages/LoggedOut';
import InitialScreen from '../pages/InitialScreen';

const Auth = createStackNavigator();

const AuthRoutes = () => (
  <Auth.Navigator
    screenOptions={{ 
      headerStyle: { 
        backgroundColor: '#cfe9e5'
      },
      headerTitleStyle: {
        fontFamily: 'Roboto-Medium',
        color: '#434343'
      },
    }}
  >
    <Auth.Screen name="InitialScreen" options={{ title: '', headerShown: false }} component={InitialScreen} />
    <Auth.Screen name="LoggedOut" options={{ title: 'Cadastro' }} component={LoggedOut} />
    <Auth.Screen name="SignIn" options={{ title: 'Login' }} component={Login} />
    <Auth.Screen name="SignUp" options={{ title: 'Cadastro Pessoal' }} component={RegisterPerson} />
  </Auth.Navigator>
);

export default AuthRoutes;
