import React from 'react';
import {View, Text} from 'react-native';
import Button from '../../components/Button';
import { useRoute, useNavigation } from '@react-navigation/native';

const LoggedOut = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>
        Você não pode realizar esta ação sem possuir um cadasto. 
      </Text>
      <Button onPress={() => {
        navigation.navigate('SignUp')
      }}>
        FAZER CADASTRO
      </Button>
      <Button onPress={() => {
        navigation.navigate('SignIn')
      }}>
        FAZER LOGIN
      </Button>
    </View>
  )
}

export default LoggedOut;