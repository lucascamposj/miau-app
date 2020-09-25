import React from 'react';
import { Container, LoginSection, SocialSection, Button, SingInButton, Header, HeaderTitle} from "./styles.js"
import Input from './../../components/Input'

const Login = () => {
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
        />
        
        <Input
          placeholder="Senha"
        />

        <SingInButton color="#88c9bf" textColor="#434343">
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
