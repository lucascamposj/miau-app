import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import { ScrollView, Container, SectionTitle, Header, HeaderTitle} from "./styles.js";
import firestore from '@react-native-firebase/firestore';

const Filters = () => {

  // Animal data state
  const [animal, setAnimal] = useState({})

  useEffect(() => { 
    async function fetch(){
      const animals = await firestore().collection('animal').get(); 
      setAnimal(animals)
    }
    fetch()
  }, [setAnimal])
  
  return (
    <Container>
      <Header>
        <HeaderTitle>
          Visualização Firebase
        </HeaderTitle>
      </Header>
      <ScrollView>        
        <View>
          <Text>
            nossos animalzinhos
            {animal}</Text>
        </View>

        <SectionTitle>
            Cachorros
        </SectionTitle>

        <SectionTitle>
            Machos
        </SectionTitle>


        <SectionTitle>
            Fêmeas
        </SectionTitle>
                       
        
        <SectionTitle>
            Gatos
        </SectionTitle>


        <SectionTitle>
            Machos
        </SectionTitle>


        <SectionTitle>
            Fêmeas
        </SectionTitle>

      </ScrollView>
    </Container>
  );
};

export default Filters;
