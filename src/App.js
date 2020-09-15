import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Login from "./pages/Login/index.js"

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Login/>
      </SafeAreaView>
    </>
  );
};

export default App;
