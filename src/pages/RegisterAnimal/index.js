import React from 'react';
import { ScrollView, PageText, ToggleButtonContainer, HeaderTextField, Container, SectionTitle, ToggleButton, Header, HeaderTitle, PictureBox, PictureText, PictureIcon} from "./styles.js"
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

        <RadioButton selected = {true}>Testando</RadioButton>

        <CheckBox selected = {true}>Testee</CheckBox>
            
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

      </ScrollView>
    </Container>
  );
};

export default RegisterAnimal;
