import React, { useEffect, useState } from 'react';
import {Text} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import ListInterests from '../../components/ListInterests';
import {useAuth} from '../../hooks/auth';


const ListInterest = () => {
  const [interestedUsers, setInterestedUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const {selectedAnimal} = useAuth();

  useEffect(() => {
    if(selectedAnimal.interestedUsers){
      let collection = firestore()
        .collection('usuario')
      
      if (selectedAnimal.interestedUsers != undefined && selectedAnimal.interestedUsers.length != 0) {
        collection = collection.where('uid', 'in', selectedAnimal.interestedUsers);
        const subscriber = collection
        .onSnapshot(querySnapshot => {
          const users = [];
    
          querySnapshot.forEach(documentSnapshot => {
            users.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.id,
            });
          });
    
          setInterestedUsers(users);

          // Unsubscribe from events when no longer in use
          return () => subscriber();
        });
      } else {
        setInterestedUsers([]);
      }
      
      setLoading(false);
    }
  }, [selectedAnimal, setInterestedUsers, setLoading]);

  return (
    <ListInterests loading={loading} interests={interestedUsers}  interestScreen='Finalize'/>
  )
}

export default ListInterest;