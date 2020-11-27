import React from 'react';
import { ActivityIndicator, Text} from 'react-native';
import ListInterestsItem from './ListInsterestsItem';
import {InterestsList} from './styles';
import { useNavigation } from '@react-navigation/native';

const ListInterests = ({loading, interests, color, interestScreen}) => {

  const navigation = useNavigation();

  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <InterestsList
      data={interests}
      numColumns={2}
      renderItem={({ item }) => (
        <ListInterestsItem 
          interest={item} 
          color={color} 
          onPress={() => 
            navigation.navigate('Meus pets', { screen: interestScreen, params: {userUID: item.uid }})
          }
        />
      )}
    />
  );
}

export default ListInterests;