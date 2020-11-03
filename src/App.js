import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';

//import Display from './pages/RegisterAnimal/index.js';
import Display from './pages/RegisterPerson/index.js';
//import Display from './pages/Login/index.js';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#88c9bf" />
      <View style={{ flex: 1, backgroundColor: '#fafafa' }}>
        <Display />
      </View>
    </>
  );
};

export default App;
