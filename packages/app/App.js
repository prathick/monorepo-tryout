/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';
import {getWelcomeString} from 'common/src/index';

const App = () => {
  return <View><Text>{getWelcomeString('Hello')}</Text></View>;
};

export default App;
