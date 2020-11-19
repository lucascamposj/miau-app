import React,  {useState, useEffect, useCallback} from 'react';
import {
  AnimalPhoto,
  Placeholder,
  AnimalName,
  LabelText,
  ContentText,
  TextContainer,
  Container,
  Section,
  TextRowContainer
} from './styles';
import {ScrollView} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const AnimalPage = ({animal, buttons, ...rest}) => {
  const [userData, setUserData] = useState([]);

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

  const parseTemper = (animal) => {
    let results = []
    const finalNames = ["Brincalhão", "Tímido", "Calmo", "Guarda", "Amoroso", "Preguiçoso"]
    const itemList = [
      animal.personality.brincalhao,
      animal.personality.timido,
      animal.personality.calmo,
      animal.temper.guarda,
      animal.temper.amoroso,
      animal.temper.preguiçoso
    ]

    for (let i=0; i < 6; i++) {
      if (itemList[i]){
        results.push(finalNames[i])
      }
    }

    const finalString = results.reduce((acc, curr, i, arr) => {
      if (i == 0) {
        return curr
      } else if ((arr.length -1) == i) {
        return acc + " e " + curr
      } else {
        return acc + ", " + curr
      }
    }, "")

    return finalString
  }

  useEffect(() => {
    const pet = async () => {
      const user = await firestore()
      .collection('usuario').doc(animal.owner)
      .get();
      setUserData(user._data)
    }    

    pet()
  }, [setUserData, animal]);

  return (
    <ScrollView>
      {animal.photo ?
        <AnimalPhoto source={{uri: animal.photo}} />
      : 
        <Placeholder/>}

      <Container>
      
      <AnimalName>
        {animal.name}
      </AnimalName>
      
      <Section>
        <TextRowContainer>
          <TextContainer>
            <LabelText>
              SEXO
            </LabelText>

            <ContentText>
              {getSex(animal.sex)}
            </ContentText>

          </TextContainer>

          <TextContainer>
            <LabelText>
              PORTE
            </LabelText>

            <ContentText>
              {getSize(animal.size)}
            </ContentText>
          </TextContainer>

          <TextContainer>
            <LabelText>
              IDADE
            </LabelText>

            <ContentText>
              {getAge(animal.age)}
            </ContentText>
          </TextContainer>
        </TextRowContainer>

        <TextContainer>
          <LabelText>
            Localização
          </LabelText>

          <ContentText>
            {userData.city} - {userData.state}
          </ContentText>
        </TextContainer>
      </Section>

      <Section>
        <TextRowContainer>
          <TextContainer>
            <LabelText>
              CASTRADO
            </LabelText>

            <ContentText>
              {animal.health.castrado ? "Sim" : "Não"}
            </ContentText>
          </TextContainer>

          <TextContainer>
            <LabelText>
              VERMIFUGADO
            </LabelText>

            <ContentText>
              {animal.health.vermifugado ? "Sim" : "Não"}
            </ContentText>
          </TextContainer>
        </TextRowContainer>

        <TextRowContainer>
          <TextContainer>
            <LabelText>
              VACINADO
            </LabelText>

            <ContentText>
              {animal.health.vacinado ? "Sim" : "Não"}
            </ContentText>
          </TextContainer>

          <TextContainer>
            <LabelText>
              DOENÇAS
            </LabelText>

            <ContentText>
              {animal.health.doente ? animal.health.diseases : "Nenhuma"}
            </ContentText>
          </TextContainer>
        </TextRowContainer>
      </Section>

      <Section>
        <TextContainer>
          <LabelText>
            TEMPERAMENTO
          </LabelText>

          <ContentText>
            {parseTemper(animal)}
          </ContentText>
        </TextContainer>
      </Section>

      </Container>
    </ScrollView>    
  )
}

export default AnimalPage;