import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert, Modal,ScrollView,KeyboardAvoidingView } from 'react-native';

export default class ExchangeScreen extends Component{
    constructor(){
        super()
       this.state={
          itemName:"",
          description:"", 
       }
    }

    addItem=(itemName, description)=>{
        var userName=this.state.userName
        db.collection("exchange_request").add({
            "username": userName,
            "item_name": itemName,
            "description": description
        })
        this.setState({
            itemName:'',
            description:''
        })
        return Alert.alert(
            'Item ready to exchange',
            '',
            [
                {text:'OK', onPress:()=>{
                    this.props.navigation.navigate('Home')
                }}
            ]
        );
    }
    render(){
        return(
       <View>
            <TextInput
            style={styles.formTextInput}
            placeholder ={"Item Name"}
         
            onChangeText={(text)=>{
              this.setState({
            itemName: text
              })
            }}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder ={"Description"}
            
            
            onChangeText={(text)=>{
              this.setState({
               description: text
              })
            }}
          />
          <TouchableOpacity
          style={styles.button}
          onPress={()=>{this.addItem(this.state.itemName,this.state.description)}}
           >
               <Text style={{color:'#ffff',fontSize:18,fontWeight:'bold'}}>
                   Add Item
               </Text>
           </TouchableOpacity>
       </View>
        )
    }

}
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#ffe0b2'
    },
    profileContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    title :{
      fontSize:60,
      fontWeight:'300',
      // fontFamily:'AvenirNext-Heavy',
      color : '#ff9800'
    },
    loginBox:{
      width: 300,
      height: 35,
      borderBottomWidth: 1.5,
      borderColor:'#ffab91',
      fontSize: 20,
      marginBottom:20,
      marginTop:5
  
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
      backgroundColor:"#ffff",
      elevation:10
    },
    buttonContainer:{
      flex:1,
    },
    modalContainer:{
      flex:1,
      borderRadius:20,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#ffff",
      marginRight:30,
      marginLeft : 30,
      marginTop:80,
      marginBottom:80,
    },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10
    },
    registerButton:{
      width:200,
      height:40,
      alignItems:'center',
      justifyContent:'center',
      borderWidth:1,
      borderRadius:10,
      marginTop:30
    },
    registerButtonText:{
      color:'#ff5722',
      fontSize:15,
      fontWeight:'bold'
    },
    cancelButton:{
      width:200,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      marginTop:5,
    },
  })
  