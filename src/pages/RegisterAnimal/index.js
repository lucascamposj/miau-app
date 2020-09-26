import React from 'react';
import { ScrollView, PageText, Button, ToggleButtonContainer, HeaderTextField, Container, RadioButtonContainer, CheckBoxContainer, SectionTitle, ToggleButton, Header, HeaderTitle, PictureBox, PictureText, PictureIcon} from "./styles.js"
import Input from './../../components/Input'
import RadioButton from './../../components/RadioButton'
import CheckBox from './../../components/CheckBox'

const RegisterAnimal = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>
          Cadastro do Animal
        </HeaderTitle>
      </Header>
      <ScrollView>        

        <HeaderTextField>
            Tenho interesse em cadastrar o animal para:
        </HeaderTextField>   

        <ToggleButtonContainer> 
            <ToggleButton textColor = '#434343'>
            ADOÇÃO
            </ToggleButton>

            <ToggleButton textColor = '#434343'>
            APADRINHAR
            </ToggleButton>

            <ToggleButton textColor = '#434343'>
            AJUDA
            </ToggleButton>
        </ToggleButtonContainer>  

        <PageText>
            Apadrinhar
        </PageText>

        <SectionTitle>
            NOME DO ANIMAL
        </SectionTitle>
                       
        <Input
            placeholder="Nome do animal"
        />
            
        <SectionTitle>
            FOTOS DO ANIMAL
        </SectionTitle>

        <PictureBox>
            <PictureIcon name={'plus-circle'} color={'#757575'} size={24} />
            <PictureText>
                adicionar fotos
            </PictureText>
        </PictureBox>

        <SectionTitle>
            ESPÉCIE
        </SectionTitle>

        <RadioButtonContainer>
          <RadioButton selected = {false}>Cachorro</RadioButton>
          <RadioButton selected = {true}>Gato</RadioButton>
        </RadioButtonContainer>

        <SectionTitle>
            SEXO
        </SectionTitle>

        <RadioButtonContainer>
          <RadioButton selected = {false}>Macho</RadioButton>
          <RadioButton selected = {true}>Fêmea</RadioButton>
        </RadioButtonContainer>

        <SectionTitle>
            PORTE
        </SectionTitle>

        <RadioButtonContainer>
          <RadioButton selected = {false}>Pequeno</RadioButton>
          <RadioButton selected = {true}>Médio</RadioButton>
          <RadioButton selected = {false}>Grande</RadioButton>
        </RadioButtonContainer>

        <SectionTitle>
            IDADE
        </SectionTitle>

        <RadioButtonContainer>
          <RadioButton selected = {false}>Filhote</RadioButton>
          <RadioButton selected = {true}>Adulto</RadioButton>
          <RadioButton selected = {false}>Idoso</RadioButton>
        </RadioButtonContainer>

        <SectionTitle>
            TEMPERAMENTO
        </SectionTitle>

        <CheckBoxContainer>
          <CheckBox selected = {true}>Brincalhão</CheckBox>
          <CheckBox selected = {false}>Tímido</CheckBox>
          <CheckBox selected = {false}>Calmo</CheckBox>
        </CheckBoxContainer>

        <CheckBoxContainer>
          <CheckBox selected = {false}>Guarda</CheckBox>
          <CheckBox selected = {true}>Amoroso</CheckBox>
          <CheckBox selected = {false}>Preguiçoso</CheckBox>
        </CheckBoxContainer>

        <SectionTitle>
            SAÚDE
        </SectionTitle>

        <CheckBoxContainer>
          <CheckBox selected = {true}>Vacinado</CheckBox>
          <CheckBox selected = {false}>Vermifugado</CheckBox>
        </CheckBoxContainer>

        <CheckBoxContainer>
          <CheckBox selected = {false}>Castrado</CheckBox>
          <CheckBox selected = {false}>Doente</CheckBox>
        </CheckBoxContainer>

        <Input
            placeholder="Doenças do animal"
        />

        <SectionTitle>
            EXIGÊNCIAS PARA ADOÇÃO
        </SectionTitle>

        <CheckBox selected = {false}>Termo de adoção</CheckBox>
        <CheckBox selected = {false}>Fotos da casa</CheckBox>
        <CheckBox selected = {false}>Visita prévia ao animal</CheckBox>
        <CheckBox selected = {false}>Acompanhamento pós adoção</CheckBox>

        <CheckBox selected = {false}>1 mês</CheckBox>
        <CheckBox selected = {false}>3 meses</CheckBox>
        <CheckBox selected = {false}>6 meses</CheckBox>

        <SectionTitle>
            SOBRE O ANIMAL
        </SectionTitle>

        <Input
            placeholder="Compartilhe a história do animal"
        />

        <Button color="#ffd358" textColor="#f7f7f7">
          COLOCAR PARA ADOÇÃO
        </Button>

      </ScrollView>
    </Container>
  );
};

export default RegisterAnimal;
