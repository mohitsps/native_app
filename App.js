/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AppNavigator from './app/navigator';
import {Provider} from 'react-redux';
import store from './app/store';
function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: '#F4F4F4'}}>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
