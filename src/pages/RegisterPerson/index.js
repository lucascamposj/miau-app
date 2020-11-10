import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView, Container, InfoBox, InfoSection, InfoContent, SectionTitle, SectionSeparator, Button, PictureBox, PictureText, PictureIcon} from "./styles.js"
import Input from './../../components/Input'
import {useAuth} from '../../hooks/auth'

const RegisterPerson = () => {
  // hooks context
  const {signUp} = useAuth()

  // person state
  const [person, setPerson] = useState()

  return (
    <Container>
      <ScrollView>
        <InfoSection>
            <InfoBox>
                <InfoContent>
                    As informações preenchidas serão divulgadas apenas para a pessoa com a qual você realizar o processo de adoção e/ou apadrinhamento, após a formalização do processo.
                </InfoContent>
            </InfoBox>            
        </InfoSection>
        
        <SectionSeparator>
            <SectionTitle>
                INFORMAÇÕES PESSOAIS
            </SectionTitle>
           
            <Input
                placeholder="Nome completo"
                onChangeText={(value) => setPerson(person => ({
                    ...person, 
                    name: value}))}
            />
            
            <Input
                placeholder="Idade"
                onChangeText={(value) => setPerson(person => ({
                    ...person, 
                    age: value}))}
            />
            
            <Input
                placeholder="E-mail"
                onChangeText={(value) => setPerson(person => ({
                    ...person, 
                    email: value}))}
            />
            
            <Input
                placeholder="Estado"
                onChangeText={(value) => setPerson(person => ({
                    ...person, 
                    state: value}))}
            />
            
            <Input
                placeholder="Cidade"
                onChangeText={(value) => setPerson(person => ({
                    ...person, 
                    city: value}))}
            />
            
            <Input
                placeholder="Endereço"
                onChangeText={(value) => setPerson(person => ({
                    ...person, 
                    address: value}))}
            />
            
            <Input
                placeholder="Telefone"
                onChangeText={(value) => setPerson(person => ({
                    ...person, 
                    phone: value}))}
            />
        </SectionSeparator>

        <SectionSeparator>
            <SectionTitle>
                INFORMAÇÕES DE PERFIL
            </SectionTitle>
        
            <Input
                placeholder="Nome de usuário"
                onChangeText={(value) => setPerson(person => ({
                    ...person, 
                    username: value}))}
            />
           
            <Input
                placeholder="Senha"
                secureTextEntry={true}
                onChangeText={(value) => setPerson(person => ({
                    ...person, 
                    password: value}))}
            />
            
            <Input
                placeholder="Confirmação de senha"
                secureTextEntry={true}
            />
            
        </SectionSeparator>

        <SectionSeparator>
            <SectionTitle>
                FOTO DE PERFIL
            </SectionTitle>
            <PictureBox>
                <PictureIcon name={'plus-circle'} color={'#757575'} size={24} />
                <PictureText>
                    adicionar foto
                </PictureText>
            </PictureBox>
        </SectionSeparator>

        <SectionSeparator>
            <Button color="#88c9bf" textColor="#434343" onPress={() => signUp(person)}>
                FAZER CADASTRO
            </Button>
        </SectionSeparator>

      </ScrollView>
    </Container>
  );
};

export default RegisterPerson;
