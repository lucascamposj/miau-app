import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import ListAnimals from '../../components/ListAnimals';
import {useAuth} from '../../hooks/auth';
const ListSponsor = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const {user} = useAuth();

  useEffect(() => {
    let collection = firestore()
      .collection('animal').where('formType', '==', 'apadrinhar')
    
    const subscriber = collection
      .onSnapshot(querySnapshot => {
        let petsData = [];
  
        querySnapshot.forEach(documentSnapshot => {
          petsData.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        // Remove the owners animals
        if(user && user.uid){
          petsData = petsData.filter(item => item.owner != user.uid)
        }
  
        setPets(petsData);
        setLoading(false);
      });
  
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, [user]);

  return (
    <ListAnimals loading={loading} animals={pets} color="#fee29b" />
  )
}

export default ListSponsor;