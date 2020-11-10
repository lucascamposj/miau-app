import React, {useState} from 'react';
import { Container, LoginSection, SocialSection, Button, SingInButton, Header, HeaderTitle} from "./styles.js"
import Input from '../../components/Input'
import auth from '@react-native-firebase/auth';
//import firestore from '@react-native-firebase/firestore';

const Login = () => {

  // Login data state
  const [login, setLogin] = useState({})

  // User data
  //const [person, setPerson] = useState({})

  const SignIn  = async (email, password) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      setLogin(prev => ({...prev, authenticated: true}))
      console.log("Logged in!")

      // RETRIEVE USER INFORMATION

     /* const userDocument = firestore()
      .collection('usuario')
      .doc('ABC');
      // doc will be the user UID
      */
    } catch (e) {
      console.error(e.message)
    }
  }

  const SignOut = () => {
    auth().signOut().then(() => console.log('User signed out!'));
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Login
        </HeaderTitle>
      </Header>
      <LoginSection>
        
        <Input
          placeholder="Nome de usuário"
          onChangeText={(text) => setLogin(prev => ({...prev, username: text}))}
        />
        
        <Input
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text) => setLogin(prev => ({...prev,password: text}))}
        />

        <SingInButton color="#88c9bf" textColor="#434343" onPress={() => SignIn(login.username, login.password)} >
          ENTRAR
        </SingInButton>
      </LoginSection>
      <SocialSection>
        <Button color="#194f7c" textColor="#f7f7f7">
          ENTRAR COM FACEBOOK
        </Button>

        <Button color="#f15f5c" textColor="#f7f7f7">
          ENTRAR COM GOOGLE
        </Button>
      </SocialSection>
    </Container>
  );
};

export default Login;
