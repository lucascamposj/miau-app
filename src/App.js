import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View
} from 'react-native';

import Login from "./pages/Login/index.js"

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#88c9bf"/>
        <View style={{ flex: 1, backgroundColor: '#fafafa' }}>

          <Login/>
        </View>
    </>
  );
};

export default App;
