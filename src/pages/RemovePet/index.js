import React from 'react';
import { Container, Button, TextField, HeaderField} from "./styles.js"
import { useNavigation } from '@react-navigation/native';

const LoggedOut = ({route}) => {
  const navigation = useNavigation();
  const { animalName, animalSex } = route.params;

  return (
    <Container>
      <HeaderField>
        Pronto!
      </HeaderField>

      <TextField>
        {(animalSex === "macho" ? "O " : "A ") + animalName + " foi removid" + (animalSex === "macho" ? "o" : "a") + " da nossa lista com sucesso!"}
      </TextField>

      <TextField>
        {"Porém, as conversas relacionadas à " + (animalSex === "macho" ? "ele " : "ela ") + "serão mantidas para o caso de você desejar manter contato. Caso deseje apagá-las, você pode realizar esta ação nas configurações no chat dos usuários relacionados à este pet."}
      </TextField>

      <Button onPress={() => {
        navigation.navigate('ListMyPets')
      }}>
        VOLTAR À MEUS PETS
      </Button>
    </Container>
  )
}

export default LoggedOut;