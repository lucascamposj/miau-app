import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyPets() {
  <Stack.Navigator>
    <Stack.Screen name="ListMyPets" component={ListMyPets} />
    <Stack.Screen name="PetDetails" component={PetDetails} />
  </Stack.Navigator>
}

export default MyPets;