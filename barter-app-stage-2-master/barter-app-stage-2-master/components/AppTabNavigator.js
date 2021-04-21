import React from 'react';
import {Image} from 'react-native';
import{createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import ExchangeScreen from '../screens/ExchangeScreen';

export const AppTabNavigator= createBottomTabNavigator({
    Home:{
        screen:HomeScreen,
        navigationOption:{
            tabBarLabel:"Home",
        } 
       },
       Exchange:{
           screen:ExchangeScreen,
           navigationOptions:{
               tabBarLabel:"Exchange",
           }
       }
});