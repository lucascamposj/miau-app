import React from 'react';

import {Button, TextInput} from "./styles.js"

const Login = () => {
  return (
    <>
      <TextInput
        placeholder="Nome de usuário"
        underlineColorAndroid="#e6e7e8"
      />

      <TextInput
        placeholder="Senha"
        underlineColorAndroid="#e6e7e8"
      />

      <Button
          title="ENTRAR"
          color="#88c9bf"
      />

      <Button
          title="ENTRAR COM FACEBOOK"
          color="#194f7c"
      />

      <Button
          title="ENTRAR COM GOOGLE"
          color="#f15f5c"
      />
    </>
  );
};

export default Login;
