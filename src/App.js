import React, {useEffect} from 'react';
import { SafeAreaView, StatusBar, View, Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import AppProvider from './hooks';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';


const App = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return (
    <AppProvider>
      <NavigationContainer> 
        <StatusBar barStyle="dark-content" backgroundColor="#88c9bf" />
        <View style={{ flex: 1, backgroundColor: '#fafafa' }}>
          <Routes/>
        </View>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
