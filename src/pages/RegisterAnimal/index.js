import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView, PageText, Button, ToggleButtonContainer, HeaderTextField, Container, RadioButtonContainer, CheckBoxContainer, SectionTitle, Header, HeaderTitle, PictureBox, PictureText, PictureIcon } from "./styles.js";
import ToggleButton from './../../components/ToggleButton';
import Input from './../../components/Input';
import RadioButton from './../../components/RadioButton';
import CheckBox from './../../components/CheckBox';
import firestore from '@react-native-firebase/firestore';
import {View} from 'react-native';

const RegisterAnimal = () => {

  // Form type state
  const [formType, setFormType] = useState('adocao')

  // Animal data state
  const [animal, setAnimal] = useState({
      personality : {
        brincalhao : false,
        timido: false,
        calmo: false
      },
      temper : {
        guarda : false,
        amoroso: false,
        preguiçoso: false
      },
      health : {
        vacinado : false,
        vermifugado: false,
        castrado: false,
        doente: false
      }
})

  const getTitle = useCallback(
    () => {
    if (formType === "adocao"){
      return "Adoção"
    }

    if (formType === "apadrinhar"){
      return "Apadrinhar"
    }

    if (formType === "ajuda"){
      return "Ajudar"
    }
  }, [formType])

  const setAnimalInfo = useCallback(
    (key, value) => {
     setAnimal(animal => {
       animal[key] = value
       return {...animal}})
    }, [setAnimal]
  )

  const setAnimalCheckBox = useCallback(
    (field, value) => {
     setAnimal(animal => {
       animal[field][value] = !animal[field][value]
       return {...animal}})
    }, [setAnimal]
  )

  const submit = useCallback(
    () => {
      firestore()
      .collection('animal')
      .add({formType, ...animal})
      .then(() => {
        console.log('Animal added!');
      })
      .catch((error) => {
        console.log(error);
      })
    }, [formType, animal]
  )

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
          <ToggleButton textColor='#434343' selected={formType === 'adocao'} onPress={() => setFormType('adocao')}>
            ADOÇÃO
          </ToggleButton>

          <ToggleButton textColor='#434343' selected={formType === 'apadrinhar'} onPress={() => setFormType('apadrinhar')}>
            APADRINHAR
          </ToggleButton>

          <ToggleButton textColor='#434343' selected={formType === 'ajuda'} onPress={() => setFormType('ajuda')}>
            AJUDA
          </ToggleButton>
        </ToggleButtonContainer>

        <PageText>
          {getTitle()}
        </PageText>

        <SectionTitle>
          NOME DO ANIMAL
        </SectionTitle>

        <Input
          placeholder="Nome do animal"
          onChangeText={(value) => setAnimal(animal => ({
                                        ...animal, 
                                        name: value}))}
        />

        {console.log(animal)}

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
          <RadioButton selected={animal.type === "cachorro"} onPress={() => setAnimalInfo("type", "cachorro")}>Cachorro</RadioButton>
          <RadioButton selected={animal.type === "gato"} onPress={() => setAnimalInfo("type", "gato")}>Gato</RadioButton>
        </RadioButtonContainer>

        <SectionTitle>
          SEXO
        </SectionTitle>

        <RadioButtonContainer>
          <RadioButton selected={animal.sex === "macho"} onPress={() => setAnimalInfo("sex", "macho")}>Macho</RadioButton>
          <RadioButton selected={animal.sex === "femea"} onPress={() => setAnimalInfo("sex", "femea")}>Fêmea</RadioButton>
        </RadioButtonContainer>

        <SectionTitle>
          PORTE
        </SectionTitle>

        <RadioButtonContainer>
          <RadioButton selected={animal.size === "pequeno"} onPress={() => setAnimalInfo("size", "pequeno")}>Pequeno</RadioButton>
          <RadioButton selected={animal.size === "medio"} onPress={() => setAnimalInfo("size", "medio")}>Médio</RadioButton>
          <RadioButton selected={animal.size === "grande"} onPress={() => setAnimalInfo("size", "grande")}>Grande</RadioButton>
        </RadioButtonContainer>

        <SectionTitle>
          IDADE
        </SectionTitle>

        <RadioButtonContainer>
          <RadioButton selected={animal.age === "filhote"} onPress={() => setAnimalInfo("age", "filhote")}>Filhote</RadioButton>
          <RadioButton selected={animal.age === "adulto"} onPress={() => setAnimalInfo("age", "adulto")}>Adulto</RadioButton>
          <RadioButton selected={animal.age === "idoso"} onPress={() => setAnimalInfo("age", "idoso")}>Idoso</RadioButton>
        </RadioButtonContainer>

        <SectionTitle>
          TEMPERAMENTO
        </SectionTitle>

        <CheckBoxContainer>
          <CheckBox selected={animal.personality.brincalhao} onPress={() => setAnimalCheckBox("personality", "brincalhao")}>Brincalhão</CheckBox>
          <CheckBox selected={animal.personality.timido} onPress={() => setAnimalCheckBox("personality", "timido")}>Tímido</CheckBox>
          <CheckBox selected={animal.personality.calmo} onPress={() => setAnimalCheckBox("personality", "calmo")}>Calmo</CheckBox>
        </CheckBoxContainer>

        <CheckBoxContainer>
          <CheckBox selected={animal.temper.guarda} onPress={() => setAnimalCheckBox("temper", "guarda")}>Guarda</CheckBox>
          <CheckBox selected={animal.temper.amoroso} onPress={() => setAnimalCheckBox("temper", "amoroso")}>Amoroso</CheckBox>
          <CheckBox selected={animal.temper.preguiçoso} onPress={() => setAnimalCheckBox("temper", "preguiçoso")}>Preguiçoso</CheckBox>
        </CheckBoxContainer>

        <SectionTitle>
          SAÚDE
        </SectionTitle>

        <CheckBoxContainer>
          <CheckBox selected={animal.health.vacinado} onPress={() => setAnimalCheckBox("health", "vacinado")}>Vacinado</CheckBox>
          <CheckBox selected={animal.health.vermifugado} onPress={() => setAnimalCheckBox("health", "vermifugado")}>Vermifugado</CheckBox>
        </CheckBoxContainer>

        <CheckBoxContainer>
          <CheckBox selected={animal.health.castrado} onPress={() => setAnimalCheckBox("health", "castrado")}>Castrado</CheckBox>
          <CheckBox selected={animal.health.doente} onPress={() => setAnimalCheckBox("health", "doente")}>Doente</CheckBox>
        </CheckBoxContainer>

        <Input
          placeholder="Doenças do animal"
          onChangeText={(value) => setAnimal(animal => ({
            ...animal, 
            diseases: value}))}
        />

      {/* Sessão para Adoção apenas! */}
      { formType === "adocao" ?
      <View>
        <SectionTitle>
          EXIGÊNCIAS PARA ADOÇÃO
        </SectionTitle>

        <CheckBox selected={false}>Termo de adoção</CheckBox>
        <CheckBox selected={false}>Fotos da casa</CheckBox>
        <CheckBox selected={false}>Visita prévia ao animal</CheckBox>
        <CheckBox selected={false}>Acompanhamento pós adoção</CheckBox>

        <CheckBox selected={false}>1 mês</CheckBox>
        <CheckBox selected={false}>3 meses</CheckBox>
        <CheckBox selected={false}>6 meses</CheckBox>

        <SectionTitle>
          SOBRE O ANIMAL
        </SectionTitle>

        <Input
          placeholder="Compartilhe a história do animal"
        />

        <Button color="#ffd358" textColor="#f7f7f7" onPress={() => submit()}>
          COLOCAR PARA ADOÇÃO
        </Button>
       
        </View>
        : <View></View>}
        {/* Fim da Sessão para Adoção! */}

        {/* Sessão para Apadrinhamento apenas! */}
      { formType === "apadrinhar" ?
      <View>
        <SectionTitle>
          EXIGÊNCIAS PARA APADRINHAMENTO
        </SectionTitle>

        <CheckBox selected={false}>Termo de apadrinhamento</CheckBox>
        <CheckBox selected={false}>Auxílio financeiro</CheckBox>
        

        <CheckBox selected={false}>Alimentação</CheckBox>
        <CheckBox selected={false}>Saúde</CheckBox>
        <CheckBox selected={false}>Objetos</CheckBox>

        <CheckBox selected={false}>Visitas ao animal</CheckBox>

        <SectionTitle>
          SOBRE O ANIMAL
        </SectionTitle>

        <Input
          placeholder="Compartilhe a história do animal"
        />

        <Button color="#ffd358" textColor="#f7f7f7" onPress={() => submit()}>
          PROCURAR PADRINHO
        </Button>
       
        </View>
        : <View></View>}
        {/* Fim da Sessão para Apadrinhamento! */}

        {/* Sessão para Ajuda apenas! */}
      { formType === "ajuda" ?
      <View>
        <SectionTitle>
          NECESSIDADES DO ANIMAL
        </SectionTitle>

        <CheckBox selected={false}>Alimento</CheckBox>
        <CheckBox selected={false}>Auxílio financeiro</CheckBox>
        <CheckBox selected={false}>Medicamento</CheckBox>
        <Input
          placeholder="Nome do medicamento"
        />
        

        <CheckBox selected={false}>Objetos</CheckBox>
        <Input
          placeholder="Especifique o(s) objeto(s)"
        />
        
        <SectionTitle>
          SOBRE O ANIMAL
        </SectionTitle>

        <Input
          placeholder="Compartilhe a história do animal"
        />

        <Button color="#ffd358" textColor="#f7f7f7" onPress={() => submit()}>
          PROCURAR AJUDA
        </Button>
       
        </View>
        : <View></View>}
        {/* Fim da Sessão para Ajuda! */}

      </ScrollView>
    </Container >
  );
};

export default RegisterAnimal;
