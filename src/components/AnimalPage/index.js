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
  ClearSection,
  TextRowContainer,
  ScrollView
} from './styles';
import firestore from '@react-native-firebase/firestore';

const AnimalPage = ({animal, button, ...rest}) => {
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

  const parseSponsorDemands = (animal) => {
    let results = []
    const finalNames = ["Termo de apadrinhamento", "Auxílio financeiro", "Alimentação", "Saúde", "Objetos", "Visitas ao animal"]
    const itemList = [
      animal.sponsorship.terms,
      animal.sponsorship.financialSupport,
      animal.sponsorship.food,
      animal.sponsorship.health,
      animal.sponsorship.objects,
      animal.sponsorship.visits
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

  const parseDemands = (animal) => {
    let results = []
    const finalNames = ["Termo de adoção", "Fotos da casa", "Visita prévia ao animal", "acompanhamento durante um mês", "acompanhamento durante três meses", "acompanhamento durante seis meses"]
    const itemList = [
      animal.adoption.terms,
      animal.adoption.housePhotos,
      animal.adoption.previousVisit,
      animal.adoption.postAdoptionFollowup,
      animal.adoption.followupMonths
    ]

    for (let i=0; i < 3; i++) {
      if (itemList[i]){
        results.push(finalNames[i])
      }
    }

    if (itemList[3]){
      switch (itemList[4]) {
        case 1:
          results.push(finalNames[3])
          break;
        
        case 3:
          results.push(finalNames[4])
          break;

        case 6:
          results.push(finalNames[5])
          break;
  
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

  const parseHelp = (animal) => {
    let results = []
    const finalNames = ["Alimento", "Auxílio financeiro", "Medicamento", "Objetos"]
    const itemList = [
      animal.help.food,
      animal.help.financialSupport,
      animal.help.medication,
      animal.help.objects
    ]

    for (let i=0; i < 4; i++) {
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

  const parseHelpLabel = (animal) => {
    if (animal.sex === "macho"){
      return "O " + animal.name + " PRESISA DE"
    }  
    return "A " + animal.name + " PRESISA DE"
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

  { animal.formType === "adocao" ?
      <Section>
        <TextContainer>
          <LabelText>
            EXIGÊNCIAS DO DOADOR
          </LabelText>

          <ContentText>
            {parseDemands(animal)}
          </ContentText>
        </TextContainer>
      </Section>  
    :
      <></>
  }

  { animal.formType === "ajuda" ?
      <Section>
        <TextContainer>
          <LabelText>
            {parseHelpLabel(animal)}
          </LabelText>

          <ContentText>
            {parseHelp(animal)}
          </ContentText>
        </TextContainer>
      </Section>  
    :
      <></>
  }

  { animal.formType === "apadrinhar" ?
      <Section>
        <TextContainer>
          <LabelText>
            EXIGÊNCIAS DO DONO
          </LabelText>

          <ContentText>
            {parseSponsorDemands(animal)}
          </ContentText>
        </TextContainer>
      </Section>  
    :
      <></>
  }
        <ClearSection>
          <TextContainer>
            <LabelText>
              {"MAIS SOBRE " + animal.name}
            </LabelText>

            <ContentText>
              {animal.history}
            </ContentText>
          </TextContainer>
        </ClearSection>

        {button()}

      </Container>
    </ScrollView>    
  )
}

export default AnimalPage;