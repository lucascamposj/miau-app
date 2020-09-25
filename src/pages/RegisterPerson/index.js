import React from 'react';
import { ScrollView, Container, InfoBox, InfoSection, InfoContent, SectionTitle, SectionSeparator, Button, Header, HeaderTitle, PictureBox, PictureText, PictureIcon} from "./styles.js"
import Input from './../../components/Input'

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
           
            <Input
                placeholder="Nome completo"
            />
            
            <Input
                placeholder="Idade"
            />
            
            <Input
                placeholder="E-mail"
            />
            
            <Input
                placeholder="Estado"
            />
            
            <Input
                placeholder="Cidade"
            />
            
            <Input
                placeholder="Endereço"
            />
            
            <Input
                placeholder="Telefone"
            />
        </SectionSeparator>

        <SectionSeparator>
            <SectionTitle>
                INFORMAÇÕES DE PERFIL
            </SectionTitle>
        
            <Input
                placeholder="Nome de usuário"
            />
           
            <Input
                placeholder="Senha"
            />
            
            <Input
                placeholder="Confirmação de senha"
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
            <Button color="#88c9bf" textColor="#434343">
                FAZER CADASTRO
            </Button>
        </SectionSeparator>

      </ScrollView>
    </Container>
  );
};

export default RegisterPerson;
