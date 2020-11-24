import firestore from '@react-native-firebase/firestore';

export const requestAnimal = async (animalID, userID) => {
  const animalRef = firestore().collection("animal").doc(animalID);
  await animalRef.update({
    interestedUsers: firestore.FieldValue.arrayUnion(userID)
  });
}

export const cancelRequestAnimal = async (animalID, userID) => {
  const animalRef = firestore().collection("animal").doc(animalID);
  await animalRef.update({
    interestedUsers: firestore.FieldValue.arrayRemove(userID)
  });
}

export const getRequestAnimalState = async (animalID, userID) => {
  try{
    const animalRef = firestore().collection("animal").doc(animalID);
    let animal = await animalRef.get();
    animal = animal.data();

    if(animal.interestedUsers){
      return !!animal.interestedUsers.find((item) => (item === userID));
    }
    return false;

  } catch(err) {
    console.log('Erro catching animal request state: ', err);
    return err;
  }
}

export const toogleRequestAnimalState = async (animalID, userID) => {
  try{
    const animalRef = firestore().collection("animal").doc(animalID);
    let animal = await animalRef.get();
    animal = animal.data();

    let requestState;
    if(animal.interestedUsers){
      requestState = !!animal.interestedUsers.find((item) => (item === userID));
    }else{
      requestState = false;
    }

    if(requestState){
      await cancelRequestAnimal(animalID, userID);
    }else{
      await requestAnimal(animalID, userID);
    }

    return !requestState;

  } catch(err) {
    console.log('Erro catching animal request state: ', err);
    return err;
  }
}