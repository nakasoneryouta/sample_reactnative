import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import MainNavigator from './MainNavigator';

import  colors  from '../config/colors';
import BottomNavigator from './BottomNavigator';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.baseColor
  },
};

export default () => {


  return (
    <NavigationContainer theme={MyTheme}>
		  {/* <MainNavigator /> */}
      <BottomNavigator/>
	  </NavigationContainer>
  );
};