import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import{AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import settingScreen from '../screens/settingScreen'
import MyBartersScreen from '../screens/MyBarters';

export const AppDrawerNavigator=createDrawerNavigator({
    Home:{
        screen: AppTabNavigator
    },
    Setting:{
        screen: settingScreen
    },
    Barters:{
        screen :MyBartersScreen
    },
},

    {
        contentcomponent : CustomSideBarMenu
    },


    {
        initialRouteName:'Home'
    
})