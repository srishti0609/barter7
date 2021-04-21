import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import UserDetailsScreen from '../screens/UserDetailsScreen';

export const AppStackNavigator= createStackNavigator({
   Home:{
        screen: HomeScreen,
        navigationoptions:{
            headerShown:false
        }

    },
    UserDetails:{
        screen:UserDetailsScreen,
        navigationOptions:{
            headerShown:false
        }
    }
},
{
 initialRouteName:'Home'
}
);