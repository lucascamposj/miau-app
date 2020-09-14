import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Test</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
