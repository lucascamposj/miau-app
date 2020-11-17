import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterAnimal from '../pages/RegisterAnimal/index.js';
import Hamburguer from '../components/Button/Hamburguer/index.js'
import RegisterSuccess from '../pages/RegisterSuccess/index.js';

const Stack = createStackNavigator();

function RegisterAnimalNav() {
  return (
  <Stack.Navigator
    initialRouteName="register"
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
    <Stack.Screen name="register" component={RegisterAnimal} options={{ title: 'Cadastro do Animal' }} />
    <Stack.Screen name="registersuccess" component={RegisterSuccess} options={{ title: 'Cadastro do Animal'}} />
  </Stack.Navigator>
  );
}

export default RegisterAnimalNav;