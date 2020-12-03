import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import ListAnimals from '../../components/ListAnimals';
import {useAuth} from '../../hooks/auth';
const ListMyPets = () => {
  const [myPets, setMyPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const {user} = useAuth();

  useEffect(() => {
    let collection = firestore()
      .collection('animal')
      
    if(user && user.uid){
      collection = collection.where('owner', '==', user.uid)
    }
    const subscriber = collection
      .onSnapshot(querySnapshot => {
        const pets = [];
  
        querySnapshot.forEach(documentSnapshot => {
          pets.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
  
        setMyPets(pets);
        setLoading(false);
      });
  
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, [user]);

  return (
    <ListAnimals loading={loading} animals={myPets}  animalScreen="PetDetails" myPets/>
  )
}

export default ListMyPets;