import React,{useState, useCallback, useEffect} from 'react';
import {Alert, View} from 'react-native';
import {useAuth} from '../../hooks/auth';
import { Button } from "./styles.js";
import AnimalPage from '../../components/AnimalPage';
import {toogleRequestAnimalState, getRequestAnimalState } from '../../utils/firebase';

const AdoptDetails = () => {
  // hooks context
  const {selectedAnimal, user} = useAuth();
  const [loading, setLoading] = useState(true);
  const [requested, setRequested] = useState(false);

  useEffect(() => {
    async function fetch(){
      const state = await getRequestAnimalState(selectedAnimal.key, user.uid);
      setRequested(state);
      setLoading(false);
    }
    fetch()
  }, [setLoading, setRequested]);

  const handlePress = useCallback(async () => {
    setLoading(true);
    try{
      const newState = await toogleRequestAnimalState(selectedAnimal.key, user.uid);
      setRequested(newState);
    }catch(err){
      console.log(err);
      Alert.alert("Erro ao enviar solicitação.\nTente novamente");
    }finally{
      setLoading(false);
    }
  },[setLoading]);

  const AdoptButton = () => {
    return (
      <>
        {requested ?
          <Button
            color="#059142"
            textColor="#FFF"
          >
              SOLICITADO
          </Button>
          :
          <Button
            color="#fdcf58"
            textColor="#434343"
            onPress={() => handlePress()}
            loading={loading}
          >
              PRETENDO ADOTAR
          </Button>
        }
      </>
    )
  }

  return (
    <View>
      <AnimalPage animal={selectedAnimal} button={AdoptButton} />
    </View>
  )
}

export default AdoptDetails;