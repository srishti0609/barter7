import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import {AppTabNavigator} from '../components/AppTabNavigator'

export default function App() {
  return (
    <WelcomeScreen/>
  );
}

const switchNavvigator=createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  BottomTab:{screen:AppTabNavigator}
})

const AppContainer= createAppContainer(switchNavigator);