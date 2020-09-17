import React from 'react';
import { TextInput, ScrollView, Container, InfoBox, InfoSection, InfoContent, SectionTitle, SectionSeparator, Button, Header, HeaderTitle, InputContainer, PictureBox, PictureText, PictureIcon} from "./styles.js"

const RegisterPerson = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>
          Cadastro Pessoal
        </HeaderTitle>
      </Header>
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
            <InputContainer>
            <TextInput
                placeholder="Nome completo"
            />
            </InputContainer>
            <InputContainer>
            
            <TextInput
                placeholder="Idade"
            />
            </InputContainer>
            <InputContainer>
            
            <TextInput
                placeholder="E-mail"
            />
            </InputContainer>
            <InputContainer>
            
            <TextInput
                placeholder="Estado"
            />
            </InputContainer>
            <InputContainer>
            
            <TextInput
                placeholder="Cidade"
            />
            </InputContainer>
            <InputContainer>
            
            <TextInput
                placeholder="Endereço"
            />
            </InputContainer>
            <InputContainer>
            
            <TextInput
                placeholder="Telefone"
            />
            </InputContainer>
        </SectionSeparator>

        <SectionSeparator>
            <SectionTitle>
                INFORMAÇÕES DE PERFIL
            </SectionTitle>
            <InputContainer>
            <TextInput
                placeholder="Nome de usuário"
            />
            </InputContainer>
            <InputContainer>
            <TextInput
                placeholder="Senha"
            />
            </InputContainer>
            <InputContainer>
            <TextInput
                placeholder="Confirmação de senha"
            />
            </InputContainer>
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
            <Button color="#88c9bf" textColor="#434343">
                FAZER CADASTRO
            </Button>
        </SectionSeparator>

      </ScrollView>
    </Container>
  );
};

export default RegisterPerson;
