import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native'
import {Component} from 'react';
import {TextComponent} from 'react-native';

export default class settingScreen extends Component{
    constructor(){
        super();
        this.State={
            emailId:'',
            firstName:'',
            lastName:'',
            address:'',
            contact:'',
            docId:''
        }
    }

    getUserDetails(){
        var user=firebase.auth().currentUser;
        var email=user.email

        db.collection('user').where('email_id','==',email).gat().then
        (snapshot=>{
            snapshot.forEach(doc=>{
                var data=doc.data()
                this.setState({
                    emailId:data.email_id,
                    lastName:data.last_name,
                    firstName:data.firstName,
                    address:data.address,
                    contact:data.contact,
                    docId:doc.id
                })
            })
        })
    }

    updateUserDetails=()=>{
        db.collection('users').doc(this.state.docId)
        .update({
            "first_name":this.state.firstName,
            "last_name": this.state.lastName,
            "address": this.state.address,
            "contact": this.state.contact
        })
        alert.alert("Profile Updated Successfully")
    }

    componentDidMount(){
        this.getUserDetails()
    }
    render(){
        return(
            <View style={StyleSheet.container}>
                <TextInput
                style={StyleSheet.formTextInput}
                placeholder={"First Name"}
                maxLength={8}
                onChangeText={(text)=>{
                    this.setState({
                        firstName:text
                    })
                }}
                value={this.state.firstName}
                />
                 <TextInput
                style={StyleSheet.formTextInput}
                placeholder={"Last Name"}
                maxLength={8}
                onChangeText={(text)=>{
                    this.setState({
                        lastName:text
                    })
                }}
                value={this.state.lastName}
                />
                 <TextInput
                style={StyleSheet.formTextInput}
                placeholder={"Address"}
               
                onChangeText={(text)=>{
                    this.setState({
                        address:text
                    })
                }}
                value={this.state.address}
                />
                 <TextInput
                style={StyleSheet.formTextInput}
                placeholder={"contact"}
                maxLength={10}
                keyboardType={numeric}
                onChangeText={(text)=>{
                    this.setState({
                        contact:text
                    })
                }}
                value={this.state.contact}
                />
                <TouchableOpacity style={StyleSheet.button}
                onPress={()=>{
                    this.updateUserDetails()
                }}>
                    <Text style={StyleSheet.buttonText}>SAVE</Text>
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
  