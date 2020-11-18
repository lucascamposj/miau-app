import React, {useState, useCallback} from 'react';
import { Container, LoginSection, SocialSection, Button, SingInButton} from "./styles.js"
import Input from '../../components/Input'
import {useAuth} from '../../hooks/auth'
import {Alert} from 'react-native';

const Login = () => {
  // hooks context
  const {signIn} = useAuth()

  // Login data state
  const [login, setLogin] = useState({})

  // State de Loading
  const [loading, setLoading] = useState(false);

  const submit = useCallback( async () => {
    setLoading(true);
    try {
      await signIn(login.username, login.password);
    } catch(e){
      setLoading(false);
      Alert.alert("Erro ao logar!\nTente Novamente!")
      console.log(e)
    }
  }, [login, setLoading])

  return (
    <Container>
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

        <SingInButton color="#88c9bf" textColor="#434343" loading={loading} onPress={() => submit()} >
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
