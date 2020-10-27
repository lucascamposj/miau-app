import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';

import RegisterAnimal from './pages/RegisterAnimal/index.js';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#88c9bf" />
      <View style={{ flex: 1, backgroundColor: '#fafafa' }}>
        <RegisterAnimal />
      </View>
    </>
  );
};

export default App;
