import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Octicons';
import { Container } from "./styles.js"
import {useAuth} from '../../../hooks/auth'

const Hamburguer = () => {
    const navigation = useNavigation();
    // hooks context
    const {setSelectedAnimal} = useAuth()

    return (
        <Container>
            <Icon 
                name='three-bars' 
                size={25} 
                color='#434343' 
                onPress={() => {
                    setSelectedAnimal({});
                    navigation.toggleDrawer()
                }}
            />
        </Container>
    )}

export default Hamburguer;