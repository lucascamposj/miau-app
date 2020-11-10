import { createStackNavigator } from '@react-navigation/stack';
import Filters from '../pages/Filters';
import ListAdopt from '../pages/ListAdopt';
import AdoptDetails from '../pages/AdoptDetails';

const Stack = createStackNavigator();

function Adopt() {
  <Stack.Navigator>
    <Stack.Screen name="Search Results" component={ListAdopt} />
    <Stack.Screen name="Filter Results" component={Filters} />
    <Stack.Screen name="Adopt Details" component={AdoptDetails} />
  </Stack.Navigator>
}

export default Adopt;