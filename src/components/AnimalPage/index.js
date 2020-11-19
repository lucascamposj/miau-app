import React from 'react';
import {
  AnimalPhoto,
  Placeholder,
  SectionText,
  TextContainer,
  Container
} from './styles';
import {ScrollView} from 'react-native';

const AnimalPage = ({animal, color, ...rest}) => {

  const getSex = (sex) => {
    if (sex === "macho"){
      return "Macho"
    }  
    return "Fêmea"
  }

  const getSize = (size) => {
    if (size === "pequeno"){
      return "Pequeno"
    }  

    if (size === "medio"){
      return "Médio"
    } 

    if (size === "grande"){
      return "Grande"
    } 
  }

  const getAge = (age) => {
    if (age === "filhote"){
      return "Filhote"
    }  

    if (age === "adulto"){
      return "Adulto"
    } 

    if (age === "idoso"){
      return "Idoso"
    } 
  }

  return (
    <ScrollView>
      {animal.photo ?
        <AnimalPhoto source={{uri: animal.photo}} />
      : 
        <Placeholder/>}

      <Container>
        <SectionText
          color="#434343"
          size="16px"
          font="Roboto-Medium"
        >
          {animal.name}
        </SectionText>

        <TextContainer>
          <SectionText
            color="#f7a800"
            size="12px"
          >
            SEXO
          </SectionText>

          <SectionText
          color="#f7a800"
          size="12px"
          >
            PORTE
          </SectionText>

          <SectionText
            color="#f7a800"
            size="12px"
          >
            IDADE
          </SectionText>
        </TextContainer>

        <TextContainer>
          <SectionText
            color="#757575"
            size="14px"
          >
            {getSex(animal.sex)}
          </SectionText>

          <SectionText
          color="#757575"
          size="14px"
          >
            {getSize(animal.size)}
          </SectionText>

          <SectionText
            color="#757575"
            size="14px"
          >
            {getAge(animal.age)}
          </SectionText>
        </TextContainer>
      </Container>
    </ScrollView>    
  )
}

export default AnimalPage;