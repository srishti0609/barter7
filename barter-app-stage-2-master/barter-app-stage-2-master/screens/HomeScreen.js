import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert, Modal,ScrollView,KeyboardAvoidingView } from 'react-native';

export default class HomeScreen extends Component{
   
        constructor(){
          super()
          this.state = {
            userId  : firebase.auth().currentUser.email,
           exchangeRequest : []
          }
        this.requestRef= null
        }
      
        getRequest =()=>{
          this.requestRef = db.collection("exchange_request")
          .onSnapshot((snapshot)=>{
            var exchangeRequest = snapshot.docs.map((doc) => doc.data())
            this.setState({
             exchangeRequest:exchangeRequest
            });
          })
        }
      
        componentDidMount(){
          this.getRequest()
        }
      
        componentWillUnmount(){
          this.requestRef();
        }
      
        keyExtractor = (item, index) => index.toString()
      
        renderItem = ( {item, i} ) =>{
          return (
            <ListItem
              key={i}
              title={item.item_name}
              subtitle={item.description}
              titleStyle={{ color: 'black', fontWeight: 'bold' }}
              rightElement={
             <TouchableOpacity style={StyleSheet.button}
             onPress={()=>{
                 this.props.navigation.navigate("UserDetails",{"details":item})
             }}
             >
                 <Text style={{color:'#ffff'}}>
                     View
                     </Text>
             </TouchableOpacity>
        }
              bottomDivider
            />
          )
        }
      
    render(){
        return(
            <View>
                <FlatList
                keyExtractor={this.keyExtractor}
                date={this.state.allRequests}
                renderItem={this.renderItem}
                />
            </View>
        )
    }
}