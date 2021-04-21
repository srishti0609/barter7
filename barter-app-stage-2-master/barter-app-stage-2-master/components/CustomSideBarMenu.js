import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {DrawerItems} from 'react-navigationn-drawer';
import firebase from 'firebase';

export default class CustomSideBarMenu extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <DrawerItems{...this.props}/>
                <View style={{flex:1,justifyContent:'flex-end',paddingBottom:30}}>
                <TouchableOpacity style={{justifyContent:'center',padding:10,height:30,width:20}}
                onPress={()=>{
                    this.props.navigation.navigate('WelcomeScreen')
                     firebase.auth().signOut();
                }}
              >
                  <Text>Logout</Text>
                  </TouchableOpacity>
              </View>
            </View>
        )
    }
}