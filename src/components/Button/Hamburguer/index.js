import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Octicons';
import { Container } from "./styles.js"

const Hamburguer = () => {
    const navigation = useNavigation();
    return (
        <Container>
            <Icon 
                name='three-bars' 
                size={25} 
                color='#434343' 
                onPress={() => navigation.toggleDrawer()}
            />
        </Container>
    )}

export default Hamburguer;