import React from 'react';
import { Container, Button, TextField, HeaderField, ImageStyled, ImageContainer, TextContainer} from "./styles.js"
import { useRoute, useNavigation } from '@react-navigation/native';
import {TouchableOpacity, View} from 'react-native';
import {useAuth} from '../../hooks/auth'

const InitialScreen = () => {
  const navigation = useNavigation();

  // hooks context
  const {setTargetScreen} = useAuth()

  return (
    <Container>
      <HeaderField>
        Olá!
      </HeaderField>

      <TextField font="16px">
        Bem vindo ao Meau!{'\n'}Aqui você pode adotar, doar e ajudar cães e gatos com facilidade. Qual o seu interesse?
      </TextField>

      <View>
        <Button 
          color="#ffd358" 
          textColor="#434343" 
          onPress={() => {
            setTargetScreen("Adotar um pet");
            navigation.navigate('LoggedOut');
          }}
        >
          ADOTAR
        </Button>

        <Button 
          color="#ffd358" 
          textColor="#434343" 
          onPress={() => {
            setTargetScreen("Ajudar um pet");
            navigation.navigate('LoggedOut');
          }}
        >
          AJUDAR
        </Button>

        <Button 
          color="#ffd358" 
          textColor="#434343" 
          onPress={() => {
            setTargetScreen("Cadastrar um pet");
            navigation.navigate('LoggedOut');
          }}
        >
          CADASTRAR ANIMAL
        </Button>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <TextField color="#88c9bf">
          login
        </TextField>
      </TouchableOpacity>

      <ImageContainer>
        <ImageStyled source={require('../../../assets/images/Meau_marca_2.png')} />
      </ImageContainer>
      
    </Container>
  )
}

export default InitialScreen;