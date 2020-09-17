import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View
} from 'react-native';

import RegisterPerson from "./pages/RegisterPerson/index.js"

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#88c9bf"/>
        <View style={{ flex: 1, backgroundColor: '#fafafa' }}>

          <RegisterPerson/>
        </View>
    </>
  );
};

export default App;
