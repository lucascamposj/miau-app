import React from 'react';
import { TextInput, Container, LoginSection, SocialSection, Button, SingInButton, Header, HeaderTitle, InputContainer} from "./styles.js"

const Login = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>
          Login
        </HeaderTitle>
      </Header>
      <LoginSection>
        <InputContainer>
          <TextInput
            placeholder="Nome de usuário"
            underlineColorAndroid="#e6e7e8"
          />
        </InputContainer>
        <InputContainer>
        
          <TextInput
            placeholder="Senha"
            underlineColorAndroid="#e6e7e8"
          />
        </InputContainer>

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
