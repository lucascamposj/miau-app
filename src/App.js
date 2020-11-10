import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import AppProvider from './hooks';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

const App = () => {
  return (
    <NavigationContainer> 
      <AppProvider>
        <StatusBar barStyle="dark-content" backgroundColor="#88c9bf" />
        <View style={{ flex: 1, backgroundColor: '#fafafa' }}>
          <Routes/>
        </View>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
